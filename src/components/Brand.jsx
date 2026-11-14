import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

export default function Brand({ light = false }) {
  return (
    <Link to="/" className={`brand ${light ? 'brand-light' : ''}`} aria-label="Crestfield University home">
      <span className="brand-mark"><GraduationCap size={25} strokeWidth={1.8} /></span>
      <span className="brand-copy">
        <strong>CRESTFIELD</strong>
        <small>UNIVERSITY</small>
      </span>
    </Link>
  );
}
