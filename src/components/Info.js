import React from "react"
import { FaEnvelope, FaLinkedin } from "react-icons/fa"

import About from "./About"
import ProfilePic from "../images/profilePic.jpeg"
import Footer from "./Footer";

export default function Info() {
    const desc = "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.";
    const intDesc = "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.";
    return (
        <div className="info">
            <img className="image-profile" src={ProfilePic} alt="ProfilePic" />
            <p className="info-title">Manikanta528</p>
            <p className="info-sub-title">Frontend Developer</p>

            <a className="info-link" href="https://linktr.ee/manikanta528" target="_blank" rel="noreferrer noopener">linktr.ee/manikanta528</a>
            <div className="btns">
                <a className="btn" href="mailto: chmanikanta528@gmail.com">
                    <button className="btn-email"><FaEnvelope /><span>Email</span></button>
                </a>
                <a className="btn" href="https://www.linkedin.com/in/manikanta528/" target="_blank" rel="noreferrer noopener">
                    <button className="btn-lin"><FaLinkedin /><span>LinkedIn</span></button>
                </a>

            </div>
            <About title="About" desc={desc} />
            <About title="Interests" desc={intDesc} />
            <Footer/>
        </div>
    )
}