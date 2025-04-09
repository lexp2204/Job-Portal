import React, {useState} from "react";
import { Link } from "react-router-dom";
import {signup} from "../services/api.js"
import workimg from "../assets/work-icon.svg"
import "../Register.css"

function Register(){

    const [user, setUser]= useState({name: '',email: '', password: '',});

    const[message, setMessage]=useState('');

    //Function to handle changes in the form
    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value})
    }

    //Function to handle the submit
    async function handleSubmit(e){
        e.preventDefault()
        
        try {
            const response = await signup(user);
      
            if (response.status === 201) {
              setMessage("User account created successfully!");
            } else {
              setMessage("Failed to create user account. Please try again.");
            }
          } catch (error) {
            // Display the error message from the server response
            setMessage(error.response?.data?.error || "An error occurred, please try again.");
          }
    }
    



    return(
        <>
        <div className="nav-container">
            <div className="logo-container">
                <p className="logo"><Link to="/">JobFinder</Link></p>
            </div>
            <div className="nav-btn-container">
            <ul>
                <li className="login-btn"><Link to="/login">Login</Link></li>
            </ul>
            </div>
        </div>

        <div className="register-card">
            <div className="logo-img-container">
                <p className="logo1">JobFinder</p>
                <img src={workimg} className="img"/>
            </div>
            <p className="subheadline1">Sign Up here to find your new Job</p>
                <form onSubmit={handleSubmit}>
                    <input placeholder={"Name"} onChange={handleChange} name="name" required maxLength={20}/>
                    <input placeholder={"Email"} onChange={handleChange} name="email" required maxLength={40}/>
                    <input placeholder={"Password"} type="password" onChange={handleChange} name="password" required maxLength={20}/>
                    <button className="signup1" type="submit">Create Account</button>
                </form>
        </div>
        </>
    )
}

export default Register;