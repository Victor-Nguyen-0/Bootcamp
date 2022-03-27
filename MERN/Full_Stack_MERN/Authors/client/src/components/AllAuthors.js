import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const DisplayAllAuthors = (props) => {
    const {authorList, setAuthorList} = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const removeFromDom = (authorId) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                const newList = authorList.filter((author, index) => author._id !== authorId)
                setAuthorList(newList);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <table style={{margin:"auto", border:"1px solid black"}}>
                <thead style={{backgroundColor:"lightgray", color:"white"}}>
                    <tr>
                        <th style={{padding:"20px 100px"}}>Author</th>
                        <th style={{padding:"20px 100px"}}>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authorList?

                        authorList.map((author, index) => (
                            <tr key={author._id}>
                                <td>
                                    <Link to={`/author/${author._id}`}>
                                        {author.name} 
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={ () => navigate(`/author/${author._id}/edit`)}
                                    style={{backgroundImage: "linear-gradient(blue, green)", padding: "7px 13px", color:"white",
                                    fontWeight:"bold", margin:"5px", border:"none", borderRadius:"5px"}}>
                                        Edit
                                    </button>
                                    <DeleteButton 
                                        deleteCallBack={() => removeFromDom(author._id)}
                                    />
                                </td>
                            </tr>
                        ))

                        :null 
                    }
                </tbody>
            </table>
        </div>
    )

}

export default DisplayAllAuthors;