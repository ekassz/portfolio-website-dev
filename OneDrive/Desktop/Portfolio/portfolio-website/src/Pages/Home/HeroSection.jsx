import ReactRoundedImage from "react-rounded-image";
//import myPhoto from "./Portfolio/portfolio-website/public/profile.jpg"
import React, {Component} from "react";

export default function HeroSection() {
    return(
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <h2 className="section--title">
                        Hello! Hola!
                    </h2>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title-color">
                            I'm Emili,
                        </span>
                        <br/>
                        an aspiring Software Engineer!
                    </h1>
                    <p className="hero--section--description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa perspiciatis aliquid est laboriosam repellat nesciunt. Facere atque sapiente magni sint molestias ad similique fugiat, natus, doloribus enim perferendis eius quia.
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