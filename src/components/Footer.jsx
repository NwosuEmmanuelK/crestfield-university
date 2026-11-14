import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Mail, Phone } from 'lucide-react';
import Brand from './Brand.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-intro">
          <Brand light />
          <p>We are a community of curious minds, bold thinkers and future builders. Find your place at Crestfield.</p>
          <span className="footer-motto">KNOWLEDGE. EXCELLENCE. INNOVATION.</span>
        </div>
        <div className="footer-column">
          <h4>Explore</h4>
          <Link to="/about">About us</Link>
          <Link to="/faculties">Faculties & courses</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-column footer-contact">
          <h4>Get in touch</h4>
          <span><MapPin size={16} /> Crestfield Way, Abuja, Nigeria</span>
          <span><Mail size={16} /> hello@crestfield.edu.ng</span>
          <span><Phone size={16} /> +234 800 000 2026</span>
        </div>
        <div className="footer-cta">
          <span className="eyebrow eyebrow-gold">YOUR NEXT CHAPTER</span>
          <h3>Make room for what’s possible.</h3>
          <Link to="/admissions" className="text-link light-link">Start your application <ArrowUpRight size={17} /></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Crestfield University. All rights reserved.</span>
        <span>Fictional university website created for an academic project.</span>
      </div>
    </footer>
  );
}
