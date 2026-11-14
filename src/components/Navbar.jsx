import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Brand from './Brand.jsx';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Faculties & Courses', '/faculties'],
  ['Admissions', '/admissions'],
  ['Contact', '/contact']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>Abuja, Nigeria <span className="top-dot">•</span> A community built for possibility</span>
          <span className="top-note">2026/2027 Admissions information now available</span>
        </div>
      </div>
      <div className="container nav-wrap">
        <Brand />
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X /> : <Menu />}
        </button>
        <nav className={`main-nav ${open ? 'nav-open' : ''}`}>
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} end={path === '/'} onClick={closeMenu}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              {label}
            </NavLink>
          ))}
          <Link to="/admissions" className="nav-apply" onClick={closeMenu}>Apply now <ArrowUpRight size={16} /></Link>
        </nav>
      </div>
    </header>
  );
}
