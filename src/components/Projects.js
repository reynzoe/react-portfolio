import React, { useState, useRef } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { FaPlay, FaTimes, FaGithub } from 'react-icons/fa';
import '../styles/Projects.css';

import lib1 from '../assets/library/lib1.jpg';
import lib2 from '../assets/library/lib2.jpg';
import lib3 from '../assets/library/lib3.jpg';
import lib4 from '../assets/library/lib4.jpg';
import lib5 from '../assets/library/lib5.jpg';
import libVideo from '../assets/library/lib_walkthrough.mp4';

import wd1 from '../assets/wanderly/wd1.jpg';
import wd2 from '../assets/wanderly/wd2.jpg';
import wd3 from '../assets/wanderly/wd3.jpg';
import wd4 from '../assets/wanderly/wd4.jpg';
import wd5 from '../assets/wanderly/wd5.jpg';
import wdVideo from '../assets/wanderly/wd_walkthrough.mp4';

import animoVideo from '../assets/proj3.mp4';
import animoThumb from '../assets/proj2_thumb.jpeg';
import recipeVideo from '../assets/proj1.mp4';
import recipeThumb from '../assets/proj3_thumb.jpeg';

const mobileApps = [
    {
        title: 'Shelby’s: Library Management System',
        tag: 'Mobile · Full-stack',
        points: [
            'Role-based app: librarians manage books, users, circulation and overdue tracking; students register, search, borrow, return and view their history.',
            'Built a Node.js REST API with server-side validation, 14-day due dates and automatic late-fee calculation, with an optional Supabase-backed catalogue.',
        ],
        stack: ['Expo (React Native)', 'TypeScript', 'Node.js', 'REST API', 'Supabase'],
        shots: [
            { src: lib1, label: 'Welcome' },
            { src: lib2, label: 'Student dashboard' },
            { src: lib3, label: 'Catalogue' },
            { src: lib4, label: 'Librarian circulation desk' },
            { src: lib5, label: 'My loans' },
        ],
        video: libVideo,
        code: 'https://github.com/reynzoe/final_project_group6_mobapp',
    },
    {
        title: 'Wanderly: Travel Diary',
        tag: 'Mobile · Device features',
        points: [
            'A photo journal that uses the phone’s hardware: in-app camera with pinch-to-zoom, GPS location turned into a street address, and a local notification when a memory is saved.',
            'Entries are stamped with place, date and time automatically, can be rotated, searched and edited, and persist offline with AsyncStorage. Includes light and dark themes.',
        ],
        stack: ['Expo (React Native)', 'TypeScript', 'Expo Router', 'expo-camera', 'expo-location', 'expo-notifications'],
        shots: [
            { src: wd1, label: 'In-app camera' },
            { src: wd2, label: 'Auto location & time' },
            { src: wd3, label: 'Journal' },
            { src: wd4, label: 'Entry details' },
            { src: wd5, label: 'Dark mode' },
        ],
        video: wdVideo,
        code: 'https://github.com/reynzoe/device-features-react-native',
    },
];

const earlier = [
    {
        title: 'RecipeNest',
        tag: 'AI web app prototype',
        desc: 'An AI-powered kitchen companion for smart meal planning and inventory management.',
        video: recipeVideo,
        thumb: recipeThumb,
    },
    {
        title: 'AnimoMatch',
        tag: 'UI / UX · Figma',
        desc: 'A clickable prototype for a study-buddy matching app for De La Salle Lipa students.',
        video: animoVideo,
        thumb: animoThumb,
    },
];

function PhoneShowcase({ app, onImage, onVideo }) {
    return (
        <article className="app-show" data-aos="fade-up">
            <div className="app-show-text">
                <p className="proj-tag">{app.tag}</p>
                <h3>{app.title}</h3>
                <ul>
                    {app.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <div className="chips mb-4">
                    {app.stack.map((s) => <span className="chip" key={s}>{s}</span>)}
                </div>
                <div className="app-actions">
                    {app.video && (
                        <button type="button" className="btn-solid" onClick={() => onVideo(app.video)}>
                            <FaPlay size={12} /> Watch walkthrough
                        </button>
                    )}
                    {app.code && (
                        <a href={app.code} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                            <FaGithub /> View code
                        </a>
                    )}
                </div>
            </div>
            <div className="phones" role="list">
                {app.shots.map((s) => (
                    <button type="button" key={s.label} className="phone" role="listitem" onClick={() => onImage(s)} aria-label={`Open screenshot: ${s.label}`}>
                        <img src={s.src} alt={s.label} loading="lazy" />
                        <span className="phone-label">{s.label}</span>
                    </button>
                ))}
            </div>
        </article>
    );
}

export default function Projects() {
    const [video, setVideo] = useState(null);
    const [image, setImage] = useState(null);
    const refs = useRef({});

    const preview = (i, play) => {
        const v = refs.current[i];
        if (!v) return;
        if (play) {
            v.currentTime = 0;
            v.play().catch(() => {});
        } else {
            v.pause();
        }
    };

    return (
        <section id="projects" className="section">
            <Container>
                <p className="section-kicker" data-aos="fade-up">03 · More projects</p>
                <h2 className="section-title" data-aos="fade-up">Other things I’ve built</h2>

                {mobileApps.map((app) => (
                    <PhoneShowcase key={app.title} app={app} onImage={setImage} onVideo={setVideo} />
                ))}

                <Row className="g-4 mt-1">
                    {earlier.map((p, i) => (
                        <Col md={6} key={p.title} data-aos="fade-up" data-aos-delay={i * 100}>
                            <button
                                type="button"
                                className="proj-card"
                                onClick={() => setVideo(p.video)}
                                onMouseEnter={() => preview(i, true)}
                                onMouseLeave={() => preview(i, false)}
                            >
                                <div className="proj-media">
                                    <img src={p.thumb} alt="" />
                                    <video ref={(el) => { refs.current[i] = el; }} src={p.video} muted playsInline preload="none" />
                                    <span className="proj-play"><FaPlay /></span>
                                </div>
                                <div className="proj-body">
                                    <p className="proj-tag">{p.tag}</p>
                                    <h3>{p.title}</h3>
                                    <p>{p.desc}</p>
                                </div>
                            </button>
                        </Col>
                    ))}
                </Row>

                <p className="more-link" data-aos="fade-up">
                    More code on <a href="https://github.com/reynzoe" target="_blank" rel="noopener noreferrer">github.com/reynzoe</a>
                </p>
            </Container>

            <Modal show={!!video} onHide={() => setVideo(null)} centered size="lg" contentClassName="lightbox">
                <button type="button" className="lb-close" onClick={() => setVideo(null)} aria-label="Close"><FaTimes /></button>
                {video && <video src={video} className="lb-img" autoPlay controls playsInline />}
            </Modal>

            <Modal show={!!image} onHide={() => setImage(null)} centered contentClassName="lightbox lightbox-phone">
                <button type="button" className="lb-close" onClick={() => setImage(null)} aria-label="Close"><FaTimes /></button>
                {image && (
                    <>
                        <img src={image.src} alt={image.label} className="lb-img" />
                        <p className="lb-caption">{image.label}</p>
                    </>
                )}
            </Modal>
        </section>
    );
}
