import React from 'react';
import { Container } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import '../styles/Contact.css';

const channels = [
    { icon: <FaEnvelope />, label: 'Email', value: 'rnzcbrl@gmail.com', href: 'mailto:rnzcbrl@gmail.com' },
    { icon: <FaLinkedin />, label: 'LinkedIn', value: 'in/renzo-cabral', href: 'https://www.linkedin.com/in/renzo-cabral-958604380' },
    { icon: <FaGithub />, label: 'GitHub', value: 'reynzoe', href: 'https://github.com/reynzoe' },
    { icon: <FaFileAlt />, label: 'Résumé', value: 'Download PDF', href: '/Renzo_Cabral_CV.pdf' },
];

export default function Contact() {
    return (
        <section id="contact" className="section contact">
            <Container>
                <div className="contact-box" data-aos="fade-up">
                    <p className="section-kicker">05 · Contact</p>
                    <h2 className="section-title">Let’s talk.</h2>
                    <p className="lead-text">
                        I’m looking for internship and junior roles in software, game or AI / ML development.
                        The fastest way to reach me is email.
                    </p>
                    <div className="contact-grid">
                        {channels.map((c) => (
                            <a
                                key={c.label}
                                href={c.href}
                                className="contact-link"
                                target={c.href.startsWith('http') || c.href.endsWith('.pdf') ? '_blank' : undefined}
                                rel="noopener noreferrer"
                            >
                                <span className="contact-icon">{c.icon}</span>
                                <span>
                                    <small>{c.label}</small>
                                    {c.value}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
                <footer className="footer">© {new Date().getFullYear()} Renzo Louis C. Cabral · Built with React</footer>
            </Container>
        </section>
    );
}
