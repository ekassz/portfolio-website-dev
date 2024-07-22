import ReactRoundedImage from "react-rounded-image";
//import myPhoto from "./Portfolio/portfolio-website/public/profile.jpg"
import React, {Component} from "react";

export default function HeroSection() {
    return(
        <section id="heroSection" className="hero--section">
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item"><a href="/home">HOME</a></li>
                    <li className="nav-item"><a href="/aboutme">ABOUT ME</a></li>
                    <li className="nav-item"><a href="/resume">RESUME</a></li>
                    <li className="nav-item"><a href="/projects">PROJECTS</a></li>
                    <li className="nav-item"><a href="/contact">CONTACT</a></li>
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
                <button className="btn btn-primary">Get in Touch</button>
            </div>
            <div className="hero--section--img">
                <ReactRoundedImage image="./profile.jpg" 
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
