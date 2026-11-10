import React from 'react';
import PortfolioNavbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EcoQuest from './components/EcoQuest';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <PortfolioNavbar />
            <main>
                <Hero />
                <About />
                <EcoQuest />
                <Projects />
                <Skills />
                <Contact />
            </main>
        </>
    );
}

export default App;
