import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, BookOpen, Users, Lightbulb, GraduationCap, Play } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import FacultyCard from '../components/FacultyCard.jsx';
import { faculties, stats } from '../data.js';

export default function Home() {
  const featured = faculties.slice(0, 3);
  const handleExplore = () => document.getElementById('faculties')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <section className="home-hero">
        <div className="hero-image" />
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow eyebrow-gold"><span className="eyebrow-line" /> THE FUTURE STARTS HERE</span>
            <h1>Think boldly.<br /><em>Become more.</em></h1>
            <p>At Crestfield, education goes beyond the classroom. Discover your strengths, challenge possibilities and prepare to make a meaningful difference.</p>
            <div className="hero-actions">
              <Link to="/admissions" className="button button-gold">Explore admissions <ArrowUpRight size={17} /></Link>
              <Link to="/about" className="hero-secondary"><span className="play-circle"><Play size={13} fill="currentColor" /></span> Discover Crestfield</Link>
            </div>
            <div className="hero-note"><span className="hero-note-line" /> A place to learn. A place to lead.</div>
          </div>
          <div className="hero-side-note"><span>01 / 05</span><span className="vertical-rule" /> EXCELLENCE IN ACTION</div>
        </div>
        <div className="hero-bottom container">
          <span>ABUJA, NIGERIA</span><span>KNOWLEDGE · EXCELLENCE · INNOVATION</span><span>EST. 2026</span>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-grid">
          {stats.map((item, index) => <div className="stat-item" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
        </div>
      </section>

      <section className="section intro-section">
        <div className="container intro-grid">
          <div className="intro-image-wrap">
            <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=85" alt="University campus building" />
            <div className="image-caption"><span>01</span><span>LEARNING WITHOUT LIMITS</span></div>
          </div>
          <div className="intro-copy">
            <SectionHeading eyebrow="WELCOME TO CRESTFIELD" title={<>More than a university.<br /><em>A launchpad.</em></>} />
            <p className="lead">We bring ambitious people together to ask better questions, explore new ideas and build the confidence to shape their own future.</p>
            <p>Our learning community combines academic rigour with practical experience, helping students connect what they learn with the world around them.</p>
            <Link to="/about" className="text-link">Discover our story <ArrowUpRight size={17} /></Link>
            <div className="values-mini">
              <div><BookOpen size={20} /><span>Curiosity<br /><small>Keep asking.</small></span></div>
              <div><Users size={20} /><span>Community<br /><small>Grow together.</small></span></div>
              <div><Lightbulb size={20} /><span>Innovation<br /><small>Think forward.</small></span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section faculties-section" id="faculties">
        <div className="container">
          <div className="section-topline">
            <SectionHeading eyebrow="FIND YOUR DIRECTION" title={<>A world of ideas.<br /><em>Room to explore.</em></>} text="Choose a path that inspires you. Our faculties bring together dedicated educators, practical learning and opportunities to grow." />
            <Link to="/faculties" className="text-link">View all faculties <ArrowUpRight size={17} /></Link>
          </div>
          <div className="faculty-grid">
            {featured.map(faculty => <FacultyCard key={faculty.short} faculty={faculty} onExplore={handleExplore} />)}
          </div>
        </div>
      </section>

      <section className="feature-banner">
        <div className="feature-banner-image" />
        <div className="container feature-banner-content">
          <span className="eyebrow eyebrow-gold">YOUR NEXT CHAPTER</span>
          <h2>Big ambitions need<br /><em>the right beginning.</em></h2>
          <p>Take the first step towards a university experience designed around your potential.</p>
          <Link to="/admissions" className="button button-gold">Start your journey <ArrowRight size={17} /></Link>
        </div>
      </section>

      <section className="section quick-contact">
        <div className="container quick-contact-inner">
          <div><span className="eyebrow">HAVE A QUESTION?</span><h2>We’re here to help you find your way.</h2></div>
          <Link to="/contact" className="button button-dark">Talk to our team <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
