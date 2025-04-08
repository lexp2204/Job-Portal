import React from "react";
import "../Nav.css"
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="nav-container">
            <div className="logo-container">
                <p className="logo">JobFinder</p>
            </div>
            <div className="nav-btn-container">
            <ul>
                <li className="login-btn"><Link to="/login">Login</Link></li>
                <li className="signup-btn"><Link to="./register">Signup</Link></li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar;