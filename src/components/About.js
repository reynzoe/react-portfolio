// src/components/About.js
import React from 'react';
import './About.css';

export default function About() {
    return (
        <section id="about" className="about-section py-5">
            <div className="container">
                <h2 className="about-title fw-bold mb-4 text-center">About Me</h2>
                <div className="about-content mx-auto">
                    <p className="about-text">
                        Hi, I’m <span className="highlight">Renzo Cabral</span>, a <strong>3rd-year Computer Science student</strong> at
                        <strong> De La Salle Lipa</strong>. I have a deep passion for
                        <strong> art, sketching, painting, designing,</strong> and all things creative.
                    </p>
                    <p className="about-text">
                        I love blending my artistic skills with the world of
                        <strong> software development</strong>, aiming to create designs and applications that are
                        both visually stunning and user-friendly.
                    </p>
                    <p className="about-text">
                        My dream is to become a <strong>UI/UX Designer</strong> and eventually a
                        <strong> Software Engineer</strong>, crafting experiences that inspire and engage people
                        around the world.
                    </p>
                </div>
            </div>
        </section>
    );
}
