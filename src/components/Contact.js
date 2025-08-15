import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { FaInstagram, FaGithub, FaFacebookMessenger } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true);
            setFadeOut(false); // Reset fade state
            setFormData({ name: '', email: '', message: '' });
        }
    };

    // Auto-hide the alert after 3 seconds with fade-out animation
    useEffect(() => {
        if (submitted) {
            const fadeTimer = setTimeout(() => setFadeOut(true), 2500); // Start fade after 2.5s
            const hideTimer = setTimeout(() => setSubmitted(false), 3000); // Fully remove after 3s
            return () => {
                clearTimeout(fadeTimer);
                clearTimeout(hideTimer);
            };
        }
    }, [submitted]);

    return (
        <section id="contact" className="contact-section py-5">
            <div className="container" data-aos="fade-up">
                <h2 className="contact-title text-center mb-4 fw-bold">Contact Me</h2>
                <div className="contact-card mx-auto p-4">
                    {submitted && (
                        <Alert
                            variant="success"
                            className={`fade-alert ${fadeOut ? 'fade-out' : ''}`}
                        >
                            Message sent successfully! 🎉
                        </Alert>
                    )}
                    <Form onSubmit={handleSubmit} noValidate>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                isInvalid={!!errors.name}
                            />
                            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Your message..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                isInvalid={!!errors.message}
                            />
                            <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                        </Form.Group>

                        <Button type="submit" className="custom-btn w-100">Send Message </Button>
                    </Form>

                    {/* Social Links */}
                    <div className="contact-social mt-4">
                        <h4>Or connect with me</h4>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/rnzcbrl/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://github.com/reynzoe" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href="https://www.facebook.com/renzolouiscabral" target="_blank" rel="noopener noreferrer"><FaFacebookMessenger /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
