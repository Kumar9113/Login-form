import React, { useState } from "react";
import axios from 'axios';


export const Login = (props) => {
   const[data,setData]=useState(
    {
        email:'',
        pass:''
    }
   )
   const{email,pass}=data;
   const changehandler=e=>
    {
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        if(pass.length<5)
        {
            alert("Set long password");
            return;
        }
        e.preventDefault();
        axios.post("https://log--in-2dbf0-default-rtdb.firebaseio.com/log-in.json",data).then(()=> alert("post succesfully"))
       
        console.log(data);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={changehandler}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={changehandler} type="password" placeholder="********" id="password" name="pass" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}