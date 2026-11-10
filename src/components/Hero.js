import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactTyped } from 'react-typed';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import me from '../images/me.jpeg';
import '../styles/Hero.css';

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <Container>
                <Row className="align-items-center gy-5">
                    <Col lg={7} className="order-2 order-lg-1">
                        <p className="eyebrow">BS Computer Science · De La Salle Lipa · 2027</p>
                        <h1 className="hero-title">
                            Hi, I’m Renzo. I build <span className="accent">simulations, games</span> and software
                            that people actually learn from.
                        </h1>
                        <div className="hero-typed">
                            <span className="prompt">&gt;</span>
                            <ReactTyped
                                strings={['Unity & C# developer', 'AI / ML enthusiast', 'Full-stack app builder']}
                                typeSpeed={50}
                                backSpeed={30}
                                backDelay={1800}
                                loop
                            />
                        </div>
                        <p className="hero-sub">
                            My thesis, <strong>EcoQuest</strong>, is a 3D city-building simulation with a rule-based AI
                            event director, a seeded procedural event system and an automated test suite. Tested with
                            30 students, it raised their urban-planning test scores by 5.2 points out of 16.
                        </p>
                        <div className="hero-cta">
                            <a href="#ecoquest" className="btn-solid">See EcoQuest</a>
                            <a href="/Renzo_Cabral_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                                Download CV
                            </a>
                        </div>
                        <div className="hero-social">
                            <a href="https://github.com/reynzoe" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/renzo-cabral-958604380" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="mailto:rnzcbrl@gmail.com" aria-label="Email"><FaEnvelope /></a>
                        </div>
                    </Col>
                    <Col lg={5} className="order-1 order-lg-2 text-center">
                        <div className="hero-photo">
                            <img src={me} alt="Renzo Cabral" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
