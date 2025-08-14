import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
                <path fill="#343a40" d="M0,0L60,10C120,20,240,40,360,53.3C480,67,600,73,720,58.7C840,44,960,10,1080,10.7C1200,11,1320,45,1380,61.3L1440,78V0H0Z"></path>
            </svg>
            <div className="footer-content">
                <h5>Connect with me</h5>
                <div className="social-icons">
                    <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a href="mailto:you@example.com"><FaEnvelope /></a>
                </div>
                <p className="mt-3">© {new Date().getFullYear()} Renzo Cabral. All rights reserved.</p>
            </div>
        </footer>
    );
}
