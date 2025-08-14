import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

export default function PortfolioNavbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Navbar
            expand="lg"
            fixed="top"
            className={scrolled ? 'navbar-colored' : 'navbar-transparent'}
        >
            <Navbar.Brand href="#hero" className="text-light fw-bold">
                Renzo
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
                    <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
                    <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
