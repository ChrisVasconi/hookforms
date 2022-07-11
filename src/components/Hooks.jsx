import React, { useState } from 'react'
import Display from './Display'



const Hooks = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [passWord, setPassWord] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handlePassword = (e) => {
        setPassWord(e.target.value)
    }
    const setHandlePassWord = (e) => {
        setConfirmPassword(e.target.value)
    }


    return (

        <div>
            <p>
                <label> First Name:</label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                {firstName.length < 2 ? <span style={{ color: "red" }}> First name must be at least 2 characters long </span> : ""}
            </p>
            <p>
                <label> Lat Name:</label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
            </p>
            <p>
                <label> Email:</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                {email.length < 5 ? <span style={{ color: "red" }}> Field Must be 5 characters </span> : ""}
            </p>
            <p>
                <label> Password:</label>
                <input type="password" onChange={handlePassword} name="password" value={passWord} />
                {passWord.length < 8 ? <span style={{ color: "red" }}> Password must be at least 8 charecters long </span> : ""}
            </p>
            <p>
                <label> Confirm Password:</label>
                <input type="password" onChange={setHandlePassWord} name="password" value={confirmPassword} />
            </p>
            <Display
                firstName={firstName}
                lastName={lastName}
                email={email}
                passWord={passWord}
                confirmPassword={confirmPassword} />
        </div>
    );
};



export default Hooks;