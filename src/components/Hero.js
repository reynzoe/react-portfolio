import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReactTyped } from "react-typed";
import "./Hero.css";

export default function Hero() {
    return (
        <section id="hero" className="hero-section text-center d-flex align-items-center">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={6} className="mb-4">
                        <img
                            src="/me.jpeg" // Ensure it's in public folder
                            alt="Renzo"
                            className="profile-pic"
                        />
                    </Col>
                    <Col md={6}>
                        <h1 className="display-4 fw-bold hero-title">Hi, I’m Renzo 👋</h1>
                        <ReactTyped
                            strings={[
                                " Artist",
                                " Creative Designer",
                                " Aspiring Developer",

                            ]}
                            typeSpeed={60}
                            backSpeed={40}
                            loop
                            className="typed-text"
                        />
                        <p className="mt-3 hero-subtext">
                            I create artsy, interactive, and user-friendly web experiences.
                        </p>
                        <a href="#projects" className="custom-btn mt-3">
                            View My Work ✨
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
