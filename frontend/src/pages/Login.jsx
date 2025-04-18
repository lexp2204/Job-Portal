import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { login } from "../services/api";
import teamimg from "../assets/team.png"
import "../Login.css" 





function Login(){

    const [user, setUser]= useState({email: '', password: '',});
    const[error, setError]=useState('');
    const navigate= useNavigate();

    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value})
    }

    //Function to handle the submit
    async function handleSubmit(e) {
        e.preventDefault()

        try{
            const response= await login(user);
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token); // Save token
                window.location.href = '/dashboard'; // redirect
              }
        }catch(error){
            console.error(error.response.data); // Show backend error
            alert(error.response?.data?.message || "Login failed.");
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
                        <li className="signup-btn"><Link to="../register">Signup</Link></li>
                    </ul>
                </div>
            </div>

            <div className="login-card">
                <p className="logo1">Welcome Back!</p>
                <div className="img-div">
                    <img className="team-img" src={teamimg} />
                </div>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Email" name="email" onChange={handleChange} required/>
                    <input placeholder="Password" type="password" onChange={handleChange} name="password" />
                    <button className="signup1" type="submit">Sign In</button>
                </form>
            </div>


        </>
    )
}

export default Login;