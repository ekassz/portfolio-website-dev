import React, {Component} from "react";
import {Link} from "react-router-dom";
import uwImg from "../Images/uwpic.JPG"

export default function AboutMe(){
    return(
     <section id="aboutme" className="hero--section">
         <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item"><Link to="/home">HOME</Link></li>
                <li className="nav-item"><Link to="/aboutme">ABOUT ME</Link></li>
                <li className="nav-item"><Link to="/resume">RESUME</Link></li>
                <li className="nav-item"><Link to="/projects">PROJECTS</Link></li>
                <li className="nav-item"><Link to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
        <div className="hero--section--header">
            <div className="containerRight">
                <div className="leftBoxContent">
                    <img src={uwImg} alt="uwImage"/>
                </div>
                <div className="rightBoxContent">
                    <p className="text-lg">
                       <span className="hero--section--title--color">
                        Hello! </span> 
                        I'm Emili Robles, currently a rising senior at UW-Madison. Originally from Chicago, I moved to Madison on a full scholarship, thanks to the support of Chicago Scholars and ATLAS.
                    <br/>
                    My journey into technology deviates from the conventional path. Initially, I pursued Finance, driven by my love for math and a desire to make a meaningful impact. However, after completing my first internship as a Machine Learning intern, I discovered that computer science offered a unique avenue to blend my creative inclinations with technical problem-solving. This revelation led me to embrace computer science as my true calling.
                    <br/>
                    I am particularly passionate about UX design, engineering, and UI development. My research in human-computer interaction has exposed me to the biases embedded in algorithms from the past, inspiring me to pursue opportunities where I can address these issues and contribute to reshaping the narrative.
                    </p>
                </div>
            </div>
        </div>
     </section>
    )
}
