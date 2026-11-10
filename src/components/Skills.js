import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Skills.css';

const groups = [
    { title: 'Languages', items: ['Python', 'C#', 'JavaScript', 'SQL', 'R'] },
    { title: 'AI / ML', items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'OpenAI API', 'Claude API'] },
    { title: 'Data & tools', items: ['pandas', 'Unity', 'Node.js', 'Expo / React Native', 'React', 'Git'] },
];

const certs = [
    { name: 'PyTorch Bootcamp', org: 'OpenCV University · Certificate of Excellence (100%)', date: 'Oct 2026' },
    { name: 'Practical Applications of Machine Learning in MATLAB', org: 'Universiti Teknologi PETRONAS, Malaysia', date: 'Apr 2026' },
    { name: 'Automated Vision in Industry', org: 'Universiti Teknologi PETRONAS, Malaysia', date: 'Apr 2026' },
    { name: 'An Intro to Design Thinking', org: 'Universiti Teknologi PETRONAS, Malaysia', date: 'Apr 2026' },
    { name: 'Introduction to R', org: 'DataCamp', date: 'Apr 2026' },
    { name: 'Elements of AI', org: 'University of Helsinki & MinnaLearn · 2 ECTS', date: 'Oct 2025' },
];

const courses = ['Artificial Intelligence', 'Data Science 1 & 2', 'Data Structures & Algorithms', 'Algorithms & Complexity', 'Object-Oriented Programming', 'Software Engineering', 'Information Management', 'Operating Systems'];

export default function Skills() {
    return (
        <section id="skills" className="section">
            <Container>
                <p className="section-kicker" data-aos="fade-up">04 · Skills</p>
                <h2 className="section-title" data-aos="fade-up">What I work with</h2>

                <Row className="g-4">
                    {groups.map((g, i) => (
                        <Col md={4} key={g.title} data-aos="fade-up" data-aos-delay={i * 80}>
                            <div className="skill-card">
                                <h3>{g.title}</h3>
                                <div className="chips">
                                    {g.items.map((s) => <span className="chip" key={s}>{s}</span>)}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                <Row className="gy-5 mt-4">
                    <Col lg={7} data-aos="fade-up">
                        <h3 className="sub-head">Certifications & short courses</h3>
                        <ul className="cert-list">
                            {certs.map((c) => (
                                <li key={c.name}>
                                    <div>
                                        <strong>{c.name}</strong>
                                        <span>{c.org}</span>
                                    </div>
                                    <time>{c.date}</time>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col lg={{ span: 4, offset: 1 }} data-aos="fade-up" data-aos-delay="100">
                        <h3 className="sub-head">Relevant coursework</h3>
                        <ul className="course-list">
                            {courses.map((c) => <li key={c}>{c}</li>)}
                        </ul>
                        <h3 className="sub-head mt-5">Leadership</h3>
                        <p className="lead-small">
                            <strong>Chief Relations Officer, AWS DLSL</strong> (2025–2026). Organised technical
                            events and coordinated partnerships with companies and student organisations.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
