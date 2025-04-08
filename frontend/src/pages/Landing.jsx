import React from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import "../Landing.css"
import jobSearchimg from "../assets/job-search.svg"


function Landing(){
    const navigate = useNavigate();
    return(
        <>
        <Navbar />
        <div className="container">
            <div className="hero-txt-container">
                <p className="hero-txt">Use <span className="job-finder-txt">JobFinder</span>, For<br /> Making Finding a Job<br /> Simple. </p>
                <p className="subheadline">JobFinder is here to simplify your job search and point you to your dream job.</p> 
            </div>
            <div className="img-container">
                <img src={jobSearchimg}></img>
            </div> 
        </div>
        <div className="btn-container">
            <button className="login" onClick={()=>navigate("/login")}>Login</button>
            <button className="signup" onClick={()=>navigate("/register")}>Signup</button>
        </div>
        </>
    )
}

export default Landing;