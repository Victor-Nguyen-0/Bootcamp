import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const formDataDivStyle = {
        textAlign: "left",
        width: "450px",
        margin: "auto",
    }

    const inputDataDivStyle = {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        border: "1px solid darkgrey",
        padding: "0px 10px",
        margin: "5px",
    }

    return (
        <div style={ formDataDivStyle }>
            <form style={{ marginTop: "20px" }}>
                <div style={inputDataDivStyle}>
                    <label>
                        First Name:
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </label>
                </div>
                {firstName.length < 2 && firstName.length > 0 ? (
                    <p>First Name must be at least 2 characters</p>
                ) : null}
                <div style={inputDataDivStyle}>
                    <label>
                        Last Name:
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </label>
                </div>
                {lastName.length < 2 && lastName.length > 0 ? (
                    <p>Last Name must be at least 2 characters</p>
                ) : null}
                <div style={inputDataDivStyle}>
                    <label>
                        Email:
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                {email.length < 8 && email.length > 0 ? (
                    <p>Email must be at least 8 characters</p>
                ) : null}
                <div style={inputDataDivStyle}>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                </div>
                {password.length < 8 && password.length > 0 ? (
                    <p>Password must be at least 8 characters</p>
                ) : null}
                <div style={inputDataDivStyle}>
                    <label>
                        Confirm Password:
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </label>
                </div>
                {confirmPassword.length < 8 && confirmPassword.length > 0 ? (
                    <p>Password must be at least 8 characters</p>
                ) : null}
                {confirmPassword !== password ? <p>Passwords must match</p> : null}
            </form>
        </div>
    )
}

export default Form;