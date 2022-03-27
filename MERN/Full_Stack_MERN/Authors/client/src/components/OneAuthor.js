import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from 'react-router-dom';
import axios from "axios";
import DeleteButton from "./DeleteButton";
import Header from "./Header";

const OneAuthor = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [oneAuthor, setOneAuthor] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setOneAuthor(res.data);
            })
            .catch((err) => {
                console.log(err);
                navigate("/error");
            });
    }, [id]);

    const removeFromDom = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <Header 
                link={"/"}
                linkText={"Home"}
                titleText={"This is the current author:"}
            />
            <h2>{oneAuthor.name}</h2>
            <p>This should be a quote probably.</p>
            <button onClick={ () => navigate(`/author/${id}/edit`)}
            style={{backgroundImage: "linear-gradient(blue, green)", padding: "7px 13px", color:"white",
            fontWeight:"bold", margin:"5px", border:"none", borderRadius:"5px"}}>
                Edit
            </button>
            <DeleteButton
                deleteCallBack={() => removeFromDom(id)}
            />
        </div>
    );
};

export default OneAuthor;