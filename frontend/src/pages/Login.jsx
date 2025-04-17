import React from "react";
import { Link } from "react-router-dom";

function Login(){
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
                <p>Welcome Back!</p>
                <div className="img-container">

                </div>
            </div>


        </>
    )
}

export default Login;