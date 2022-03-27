import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Form from "./Form"; 

const NewAuthor = (props) => {
    const [newAuthor, setNewAuthor] = useState({
        name: ""
    })

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const newSubmitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/authors", 
            newAuthor
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

    const newOnChangeHandler = (e) => {
        const newStateObject = {...newAuthor};

        newStateObject[e.target.name] = e.target.value;
        console.log("e.target.name = ", e.target.name);
        console.log("e.target.value = ", e.target.value);
        console.log(newAuthor);
        setNewAuthor(newStateObject)
    }

    return (
        <div>
            <Header 
                link={"/"}
                linkText={"Home"}
                titleText={"Add a new author:"}
            />
            <Form
                submitHandler={newSubmitHandler}
                onChangeHandler={newOnChangeHandler}
                author={newAuthor}
                errors={errors}
            />
        </div>
    )

}

export default NewAuthor;