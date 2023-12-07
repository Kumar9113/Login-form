import React, { useState } from "react";
import axios from 'axios'

export const Register = (props) => {
    const [rdata,setRdata]=useState(
        {
            email:'',
            pass:'',
            name:''
        }
    )
    const{email,pass,name}=rdata;
    const changehandler=e=>
    {
        setRdata({...rdata,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://log--in-2dbf0-default-rtdb.firebaseio.com/register.json",rdata).then(()=> alert("post succesfully"))
       
        console.log(rdata);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={changehandler} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={changehandler}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={changehandler} type="password" placeholder="********" id="password" name="pass" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}
