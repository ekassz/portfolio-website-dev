import React from "react";
import { Link } from "react-router-dom";

export default function Resume(){
     return(
     <section id="resume" className="hero--section">
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
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <h1 className="hero--section--title">
                        
                    </h1>
                </div>
            </div>
        </div>
     </section>
    )
}