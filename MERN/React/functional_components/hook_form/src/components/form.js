import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div>
            <form>
                <div>
                    <label>
                        First Name:
                        <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Last Name:
                        <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="text" value={email} onChange={ (e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={ (e) => setPassword(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Confirm Password:
                        <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value)} />
                    </label>
                </div>
            </form>
            <div>
            <h2>Your Form Data</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    )
}

export default Form;