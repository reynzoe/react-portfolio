import React, { useState, useRef } from 'react';
import { Card, Modal } from 'react-bootstrap';
import { FaPortrait, FaGraduationCap, FaLaptop, FaPlayCircle  } from 'react-icons/fa';
import './Projects.css';

// Art section images
import art1 from '../assets/art1.jpg';
import art2 from '../assets/art2.jpg';
import art3 from '../assets/art3.jpeg';
import art4 from '../assets/art4.jpg';
import art5 from '../assets/art5.JPG';
import art6 from '../assets/art6.jpeg';
import art7 from '../assets/art7.JPG';
import art8 from '../assets/art8.jpeg';
import art9 from '../assets/art9.jpeg';
import art10 from '../assets/art10.jpeg';
import art11 from '../assets/art11.JPG';
import art12 from '../assets/art12.JPG';

// Video
import proj1 from '../assets/proj1.mp4';
import proj2 from '../assets/proj2.mp4';
import proj3 from '../assets/proj3.mp4';

// Thumbnails
import proj1Thumb from '../assets/proj1_thumb.jpeg';
import proj2Thumb from '../assets/proj2_thumb.jpeg';
import proj3Thumb from '../assets/proj3_thumb.jpeg';

export default function Projects() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [hoveredVideo, setHoveredVideo] = useState(null);
    const videoRefs = useRef({});

    const artProjects = [
        art1, art2, art3, art4, art5, art6,
        art7, art8, art9, art10, art11, art12
    ];

    const appProjects = [
        {
            icon: <FaPortrait />,
            title: 'Previous Portfolio',
            desc: 'A personal portfolio built with HTML and JavaScript.',
            video: proj2,
            thumbnail: proj1Thumb,
            type: 'video'
        },
        {
            icon: <FaGraduationCap />,
            title: 'AnimoMatch UI',
            desc: 'Figma prototype for AnimoMatch, matchmaking app for a studybuddy.',
            video: proj3,
            thumbnail: proj2Thumb,
            type: 'video'
        },
        {
            icon: <FaLaptop />,
            title: 'RecipeNest Prototype',
            desc: 'A sleek web app prototype for managing recipes.',
            video: proj1,
            thumbnail: proj3Thumb,
            type: 'video'
        }
    ];

    const openImage = (img) => {
        setSelectedImg(img);
        setSelectedVideo(null);
        setShowModal(true);
    };

    const openVideo = (video) => {
        setSelectedVideo(video);
        setSelectedImg(null);
        setShowModal(true);
    };

    const handleMouseEnter = (index, video) => {
        setHoveredVideo(index);

        // Start playing the video after a short delay (like YouTube)
        setTimeout(() => {
            if (videoRefs.current[index] && hoveredVideo === index) {
                videoRefs.current[index].currentTime = 0; // Start from beginning
                videoRefs.current[index].play().catch(e => {
                    // Handle autoplay restrictions
                    console.log('Autoplay prevented:', e);
                });
            }
        }, 500); // 500ms delay before starting preview
    };

    const handleMouseLeave = (index) => {
        setHoveredVideo(null);

        // Pause and reset the video
        if (videoRefs.current[index]) {
            videoRefs.current[index].pause();
            videoRefs.current[index].currentTime = 0;
        }
    };

    return (
        <section id="projects" className="p-5 bg-light text-center">
            {/* Art Gallery */}
            <h2 className="mb-5 fw-bold" data-aos="fade-up">My Gallery</h2>
            <div className="art-gallery" data-aos="fade-up">
                {artProjects.map((img, i) => (
                    <div
                        key={i}
                        className="art-item"
                        onClick={() => openImage(img)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img
                            src={img}
                            alt={`Art ${i + 1}`}
                            className="img-fluid"
                        />
                    </div>
                ))}
            </div>

            {/* Modal for both images & video */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
                <Modal.Body className="p-0 text-center">
                    {selectedImg && (
                        <img
                            src={selectedImg}
                            alt="Full artwork"
                            className="img-fluid"
                            style={{ maxHeight: '90vh', objectFit: 'contain' }}
                        />
                    )}
                    {selectedVideo && (
                        <video
                            src={selectedVideo}
                            className="w-100"
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls
                            style={{ outline: 'none' }}
                        />
                    )}
                </Modal.Body>
            </Modal>

            {/* Apps & Software */}
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
                                className="project-card h-100 position-relative overflow-hidden"
                                onClick={() =>
                                    p.type === 'video'
                                        ? openVideo(p.video)
                                        : window.open(p.link, '_blank')
                                }
                                style={{ cursor: 'pointer' }}
                                onMouseEnter={() => p.type === 'video' && handleMouseEnter(i, p.video)}
                                onMouseLeave={() => p.type === 'video' && handleMouseLeave(i)}
                            >
                                <div className="project-thumbnail-wrapper position-relative">
                                    {/* Static thumbnail */}
                                    <img
                                        src={p.thumbnail}
                                        alt={p.title}
                                        className={`project-thumbnail ${hoveredVideo === i ? 'fade-out' : ''}`}
                                    />

                                    {/* Video preview (hidden by default) */}
                                    {p.type === 'video' && (
                                        <video
                                            ref={el => videoRefs.current[i] = el}
                                            src={p.video}
                                            className={`project-video-preview ${hoveredVideo === i ? 'fade-in' : ''}`}
                                            muted
                                            playsInline
                                            preload="metadata"
                                        />
                                    )}

                                    {/* Play button overlay */}
                                    {p.type === 'video' && (
                                        <div className={`video-overlay d-flex justify-content-center align-items-center ${hoveredVideo === i ? 'playing' : ''}`}>
                                            <FaPlayCircle size={50} color="white" />
                                        </div>
                                    )}
                                </div>

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