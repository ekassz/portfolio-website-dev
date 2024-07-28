import ReactRoundedImage from "react-rounded-image";
import profile from '../Images/profile.jpg';
import React, {Component} from "react";
import {Link} from "react-router-dom";
import ContactMe from "./ContactMe";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
    const navigate = useNavigate();

    const handleContactMe = () =>{
        navigate("/contactme");
    };

    return(
        <section id="heroSection" className="hero--section">
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/home">HOME</Link></li>
                    <li className="nav-item"><Link to="/aboutme">ABOUT ME</Link></li>
                    <li className="nav-item"><Link to="/resume">RESUME</Link></li>
                    <li className="nav-item"><Link to="/projects">PROJECTS</Link></li>
                    <li className="nav-item"><Link to="/contactme">CONTACT</Link></li>
                </ul>
            </nav>
            <div className="hero--section--header">
                <h2 className="section--title">Hello! Hola!</h2>
                </div>
                    <div className="hero--section--content--box">
                        <div className="hero--section--content">
                            <h1 className="hero--section--title">
                        <span className="hero--section--title-color">
                            I'm Emili,
                        </span>
                        <br/>
                        an aspiring <span className="highlighted-SWE-text">Software Engineer!</span>
                    </h1>
                    <p className="hero--section--description">
                        I am a rising senior at the University of Wisconsin-Madison studying Computer Science & Data Science, with minors in Digital Studies and Leadership. 
                    </p>
                </div>
                <button className="btn btn-primary" onClick={handleContactMe}>Get in Touch</button>
            </div>
            <div className="hero--section--img">
                <ReactRoundedImage 
                image= {profile} 
                roundedSize ="17"
                roundedColor = "#F9E8C8"
                hoverColor = "#DAAF5B"
                imageHeight="500"
                imageWidth="500"
                />
                
                

            </div>
        </section>
    )
}
