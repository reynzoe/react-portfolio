import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { FaBrain, FaDiceD20, FaVial, FaCity, FaHandPointer, FaChartLine, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import '../styles/EcoQuest.css';

import eq01 from '../assets/ecoquest/eq01.jpg';
import eq02 from '../assets/ecoquest/eq02.jpg';
import eq03 from '../assets/ecoquest/eq03.jpg';
import eq04 from '../assets/ecoquest/eq04.jpg';
import eq05 from '../assets/ecoquest/eq05.jpg';
import eq06 from '../assets/ecoquest/eq06.jpg';
import eq08 from '../assets/ecoquest/eq08.jpg';
import eq09 from '../assets/ecoquest/eq09.jpg';
import eq10 from '../assets/ecoquest/eq10.jpg';

const shots = [
    { src: eq01, caption: 'Title screen. Progress carries across seven barangays.' },
    { src: eq02, caption: 'Scenario select: seven planning problems drawn from real Philippine places.' },
    { src: eq04, caption: 'Gameplay: four live indicators, objectives, and the hazard outlook set by the AI event director.' },
    { src: eq05, caption: 'Build menu: every option shows its cost and its effect on pollution, energy and satisfaction.' },
    { src: eq06, caption: 'A typhoon makes landfall. The damage depends on where the player let people build.' },
    { src: eq08, caption: 'End-of-plan debrief: grade, missed targets, and a plain-language explanation of why.' },
    { src: eq09, caption: 'How the plan moved: month-by-month history of each indicator against its target.' },
    { src: eq03, caption: 'Scenario briefing with Ate Lina, the in-game planning mentor.' },
    { src: eq10, caption: 'Onboarding: a guided walk-through, or replay any single lesson.' },
];

const highlights = [
    {
        icon: <FaBrain />,
        title: 'Rule-based AI event director',
        body: 'Sets each month’s risk of typhoons, heat waves, fires, earthquakes and volcanic eruptions from the season and the player’s city layout. Every roll is logged with its reasons, so any disaster can be explained after the fact.',
    },
    {
        icon: <FaDiceD20 />,
        title: 'Seeded procedural events',
        body: 'Events are generated from a seeded random number generator. The same seed and the same player actions replay the exact same run, which makes outcomes reproducible for testing and research.',
    },
    {
        icon: <FaVial />,
        title: 'Automated testing & a solver',
        body: 'Wrote a dev solver that plays every scenario using only legal moves, plus a Unity Test Framework suite of 170+ tests for the formulas, integration and winnability. The tests caught real gameplay bugs before players did.',
    },
    {
        icon: <FaCity />,
        title: 'Simulation systems',
        body: 'Grid-based zoning with budgets, permits, rising flood levels, farmland conversion quotas and mixed-use lots. Each scenario introduces one new planning mechanic.',
    },
    {
        icon: <FaHandPointer />,
        title: 'UX for first-time players',
        body: 'Placement spotlight that lights only valid lots, a glossary of 39 sourced planning terms, a guided tutorial, and end-of-run debriefs, all designed so a non-gamer can learn by playing.',
    },
    {
        icon: <FaChartLine />,
        title: 'Research tooling',
        body: 'Study mode with participant codes and per-run telemetry exported to JSON and CSV, used to analyse how 30 testers actually played.',
    },
];

const stats = [
    { n: '+5.2', l: 'point gain on a 16-item planning test (8.67 → 13.87, p < .001)' },
    { n: '4.88/5', l: 'user acceptance rating across 20 items' },
    { n: '30', l: 'undergraduate testers from architecture and engineering' },
    { n: '7', l: 'scenarios based on real Philippine barangays' },
];

const stack = ['Unity 6', 'C#', 'URP', 'Procedural Content Generation', 'Rule-Based AI', 'Unity Test Framework', 'Python (tooling)', 'Git'];

export default function EcoQuest() {
    const [active, setActive] = useState(0);
    const [open, setOpen] = useState(false);

    const step = useCallback((d) => setActive((i) => (i + d + shots.length) % shots.length), []);

    useEffect(() => {
        if (!open) return undefined;
        const onKey = (e) => {
            if (e.key === 'ArrowRight') step(1);
            if (e.key === 'ArrowLeft') step(-1);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open, step]);

    return (
        <section id="ecoquest" className="section eq">
            <Container>
                <div className="eq-head" data-aos="fade-up">
                    <p className="section-kicker">02 · Featured project</p>
                    <h2 className="eq-title">EcoQuest</h2>
                    <p className="eq-tagline">
                        An educational 3D city-building simulation where players fix real Philippine urban-planning
                        problems. Undergraduate thesis, built in Unity and C#.
                    </p>
                    <p className="eq-role"><span>My role</span> Lead developer</p>
                    <div className="chips">
                        {stack.map((s) => <span className="chip" key={s}>{s}</span>)}
                    </div>
                </div>

                {/* Gallery */}
                <div className="eq-gallery" data-aos="fade-up">
                    <button type="button" className="eq-main" onClick={() => setOpen(true)} aria-label="Open screenshot full size">
                        <img src={shots[active].src} alt={shots[active].caption} />
                        <span className="eq-zoom">Click to enlarge</span>
                    </button>
                    <p className="eq-caption">{shots[active].caption}</p>
                    <div className="eq-thumbs" role="tablist">
                        {shots.map((s, i) => (
                            <button
                                type="button"
                                key={i}
                                className={`eq-thumb ${i === active ? 'is-active' : ''}`}
                                onClick={() => setActive(i)}
                                aria-label={`Screenshot ${i + 1}`}
                            >
                                <img src={s.src} alt="" loading="lazy" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Problem / approach */}
                <Row className="eq-story gy-4" data-aos="fade-up">
                    <Col md={6}>
                        <h3>The problem</h3>
                        <p>
                            Students in architecture and engineering learn zoning law and land-use planning from
                            textbooks, but rarely get to see how one decision ripples through a city: pollution,
                            energy, budgets, and who gets hurt when a typhoon hits.
                        </p>
                    </Col>
                    <Col md={6}>
                        <h3>What I built</h3>
                        <p>
                            A simulation where each level is a real barangay that is already failing. Players zone
                            lots, manage a budget and permits, and survive a 12–16 year plan while an AI event
                            director throws season-appropriate hazards at them based on how they built.
                        </p>
                    </Col>
                </Row>

                {/* Highlights */}
                <h3 className="eq-sub" data-aos="fade-up">Engineering highlights</h3>
                <Row className="g-4">
                    {highlights.map((h, i) => (
                        <Col md={6} lg={4} key={h.title} data-aos="fade-up" data-aos-delay={(i % 3) * 80}>
                            <article className="hl-card">
                                <div className="hl-icon">{h.icon}</div>
                                <h4>{h.title}</h4>
                                <p>{h.body}</p>
                            </article>
                        </Col>
                    ))}
                </Row>

                {/* Results */}
                <h3 className="eq-sub" data-aos="fade-up">Results from user testing</h3>
                <div className="stats" data-aos="fade-up">
                    {stats.map((s) => (
                        <div className="stat" key={s.n}>
                            <div className="stat-n">{s.n}</div>
                            <div className="stat-l">{s.l}</div>
                        </div>
                    ))}
                </div>
                <p className="eq-note" data-aos="fade-up">
                    27 of 30 participants improved between the pre-test and post-test (paired t-test, large effect size d = 1.71).
                </p>
            </Container>

            <Modal show={open} onHide={() => setOpen(false)} centered size="xl" contentClassName="lightbox">
                <button type="button" className="lb-close" onClick={() => setOpen(false)} aria-label="Close"><FaTimes /></button>
                <button type="button" className="lb-nav lb-prev" onClick={() => step(-1)} aria-label="Previous"><FaChevronLeft /></button>
                <button type="button" className="lb-nav lb-next" onClick={() => step(1)} aria-label="Next"><FaChevronRight /></button>
                <img src={shots[active].src} alt={shots[active].caption} className="lb-img" />
                <p className="lb-caption">{active + 1} / {shots.length} · {shots[active].caption}</p>
            </Modal>
        </section>
    );
}
