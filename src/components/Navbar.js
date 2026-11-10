import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/Navbar.css';

const links = [
    { href: '#about', label: 'About' },
    { href: '#ecoquest', label: 'EcoQuest' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
];

export default function PortfolioNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Navbar
            expand="lg"
            fixed="top"
            variant="dark"
            expanded={expanded}
            onToggle={setExpanded}
            className={`site-nav ${scrolled || expanded ? 'is-solid' : ''}`}
        >
            <Container>
                <Navbar.Brand href="#hero" className="brand">
                    renzo<span>.</span>cabral
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav" className="justify-content-end">
                    <Nav className="align-items-lg-center">
                        {links.map((l) => (
                            <Nav.Link key={l.href} href={l.href} className="nav-item-link" onClick={() => setExpanded(false)}>
                                {l.label}
                            </Nav.Link>
                        ))}
                        <a href="/Renzo_Cabral_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost nav-cv">
                            Résumé
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
