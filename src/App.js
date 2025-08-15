import React from 'react';
import PortfolioNavbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';


function App() {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Navbar/>
        </>
    );
}

export default App;
