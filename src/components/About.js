import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/About.css';

const facts = [
    { k: 'Studying', v: 'BS Computer Science, De La Salle Lipa (expected June 2027)' },
    { k: 'Focus', v: 'Game & simulation development, AI / ML, applied software engineering' },
    { k: 'Leadership', v: 'Chief Relations Officer, AWS DLSL (2025–2026)' },
    { k: 'Based in', v: 'Batangas, Philippines' },
];

export default function About() {
    return (
        <section id="about" className="section">
            <Container>
                <Row className="gy-5">
                    <Col lg={6} data-aos="fade-up">
                        <p className="section-kicker">01 · About</p>
                        <h2 className="section-title">Engineer first, with an eye for how things feel to use.</h2>
                        <p className="lead-text">
                            I’m a 4th-year Computer Science student who likes problems that mix systems, data and
                            people. I enjoy designing the rules behind a system, proving they work with tests, and
                            then polishing the interface until someone who has never seen it can pick it up.
                        </p>
                        <p className="lead-text">
                            I’ve shipped a full Unity game for my thesis, built mobile and web apps with React Native
                            and Node.js, and I’m deepening my AI / ML skills through PyTorch, TensorFlow and
                            scikit-learn. I learn fast and I like feedback.
                        </p>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }} data-aos="fade-up" data-aos-delay="100">
                        <dl className="facts">
                            {facts.map((f) => (
                                <div className="fact" key={f.k}>
                                    <dt>{f.k}</dt>
                                    <dd>{f.v}</dd>
                                </div>
                            ))}
                        </dl>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
