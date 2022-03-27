import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Form = (props) => {
    const {submitHandler, onChangeHandler, author, errors} = props;
    const navigate = useNavigate();



    console.log(errors);
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div style={{margin:"auto", width: "500px", height:"100px", padding:"20px 30px 100px", border:"1px solid black"}}>
                    <label> Name: </label>
                    <br style={{margin:"25px 0px"}}></br>
                    {
                        errors.name ?
                            <span>{errors.name.message}</span>
                            : null
                    }
                    <input
                        type="text"
                        name="name"
                        value={author.name}
                        onChange={(e) => onChangeHandler(e)}
                    />
                    <br style={{margin:"25px 0px"}}></br>
                    <button onClick={(e) => navigate("/")}>
                        Cancel
                    </button>
                    <button style={{}}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )


}

export default Form;