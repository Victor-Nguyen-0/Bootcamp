import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Form from "./Form";

const EditAuthor = (props) => {
    const [editAuthor, setEditAuthor] = useState({
        name: ""
    })

    const [errors, setErrors] = useState({});
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log("==+++==")
                console.log(res);
                console.log(res.data);
                setEditAuthor(res.data);

            })
            .catch((err) => {
                console.log("====")
                console.log(err);
                navigate("/error");
            })
    }, [id]);

    const editSubmitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/authors/${id}`, 
            editAuthor
        )
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err)
                console.log("err.response:", err.response);
                console.log("err.response.data", err.response.data);
                console.log("err.response.data.errors:", err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    const editOnChangeHandler = (e) => {
        const newStateObject = {...editAuthor};

        newStateObject[e.target.name] = e.target.value;
        console.log("e.target.name = ", e.target.name);
        console.log("e.target.value = ", e.target.value);
        console.log(editAuthor);
        setEditAuthor(newStateObject)
    }

    return (
        <div>
            <Header 
                link={"/"}
                linkText={"Home"}
                titleText={"Edit this author:"}
            />

                <Form
                submitHandler={editSubmitHandler}
                onChangeHandler={editOnChangeHandler}
                author={editAuthor}
                errors={errors}
                />

        </div>
    )

}

export default EditAuthor;