import React from 'react';
import { Card } from 'react-bootstrap';
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';
import './Projects.css';

// Images for the Art section
import art1 from '../assets/art1.JPG';
import art2 from '../assets/art2.jpg';
import art3 from '../assets/art3.jpeg';
import art4 from '../assets/art4.jpg';
import art5 from '../assets/art5.JPG';
import art6 from '../assets/art6.jpeg';
import art7 from '../assets/art7.JPG';
import art8 from '../assets/art8.jpeg';
import art9 from '../assets/art9.jpeg';
import art10 from '../assets/art10.jpeg';


export default function Projects() {
    const appProjects = [
        {
            icon: <FaCode />,
            title: 'Portfolio Website',
            desc: 'A personal portfolio built with React and Bootstrap.',
            link: '#'
        },
        {
            icon: <FaPaintBrush />,
            title: 'Creative Design Tool',
            desc: 'An online app for creating artsy graphics.',
            link: '#'
        },
        {
            icon: <FaMobileAlt />,
            title: 'Mobile App UI',
            desc: 'A sleek mobile app prototype for productivity.',
            link: '#'
        }
    ];

    const artProjects = [art1, art2, art3, art4, art5, art6, art7, art8, art9, art10 ]; // Just add more imports & push here

    return (
        <section id="projects" className="p-5 bg-light text-center">
            {/* Art Gallery Section */}
            <h2 className="mb-5 fw-bold" data-aos="fade-up">Art Gallery</h2>
            <div className="art-gallery" data-aos="fade-up">
                {artProjects.map((img, i) => (
                    <div key={i} className="art-item">
                        <img src={img} alt={`Art ${i + 1}`} />
                    </div>
                ))}
            </div>

            {/* Apps & Software Section */}
            <h2 className="mt-5 mb-5 fw-bold" data-aos="fade-up">Apps & Software</h2>
            <div className="container">
                <div className="row justify-content-center">
                    {appProjects.map((p, i) => (
                        <div
                            className="col-md-4 mb-4"
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={i * 150}
                        >
                            <Card
                                className="project-card h-100"
                                onClick={() => window.open(p.link, '_blank')}
                            >
                                <div className="project-icon">{p.icon}</div>
                                <Card.Body>
                                    <Card.Title>{p.title}</Card.Title>
                                    <Card.Text>{p.desc}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
