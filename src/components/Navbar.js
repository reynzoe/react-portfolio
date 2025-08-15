import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

export default function PortfolioNavbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Force navbar to be solid when clicking a link
    const handleNavClick = () => {
        setScrolled(true);
    };

    return (
        <Navbar
            expand="lg"
            fixed="top"
            className={`${scrolled ? 'navbar-colored' : 'navbar-transparent'}`}
        >
            <Container>
                <Navbar.Brand href="#hero" className="fw-bold brand-custom">
                    Renzo
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link
                            href="#about"
                            className={`nav-link-custom ${scrolled ? 'nav-link-white' : 'nav-link-dark'}`}
                            onClick={handleNavClick}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={`nav-link-custom ${scrolled ? 'nav-link-white' : 'nav-link-dark'}`}
                            onClick={handleNavClick}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            href="#contact"
                            className={`nav-link-custom ${scrolled ? 'nav-link-white' : 'nav-link-dark'}`}
                            onClick={handleNavClick}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}