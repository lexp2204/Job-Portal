import React, { useState } from "react";
import "../Nav.css";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="nav-container">
            <div className="logo-container">
                <p className="logo"><Link to="/">JobFinder</Link></p>
            </div>

            <div className={`nav-btn-container ${isOpen ? "show" : ""}`}>
                <ul>
                    <li className="login-btn"><Link to="/login">Login</Link></li>
                    <li className="signup-btn"><Link to="/register">Signup</Link></li>
                </ul>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Navbar;
