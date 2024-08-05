import ReactRoundedImage from "react-rounded-image";
import profile from '../Images/profile.jpg';
import React, {Component} from "react";
import {Link} from "react-router-dom";
import ContactMe from "./ContactMe";
import { useNavigate } from "react-router-dom";
import ContactBox from "../../Components/ContactBox";

export default function HeroSection() {
    const navigate = useNavigate();

    const handleContactMe = () =>{
        navigate("/contactme");
    };

    return(
        <section id="heroSection" className="hero--section">
            
            <div className="hero--section--content">
                <div className="hero--section--content--box">
                            <h1 className="hero--section--title">
                        <span className="hero--section--title-color">
                           <span className="hello-highlight-text">Hello! Hola!</span>
                            <br/>
                            I'm Emili,
                        </span>
                        <br/>
                        an aspiring <span className="highlighted-SWE-text">Software Engineer!</span>
                    </h1>
                    <p className="hero--section--description">
                        I am a rising senior at the University of Wisconsin-Madison studying Computer Science & Data Science, with minors in Digital Studies and Leadership. 
                    </p>
                
                <button className="btn btn-primary" onClick={handleContactMe}>Get in Touch</button>
            </div>
            <div className="hero--section--img">
                <ReactRoundedImage 
                image= {profile} 
                roundedSize ="17"
                roundedColor = "#F9E8C8"
                hoverColor = "#DAAF5B"
                imageHeight="800"
                imageWidth="800"
                
                />
            </div>
            </div>
            <div className="contact-box-container">
                <ContactBox/>
            </div>
        </section>
    )
}
