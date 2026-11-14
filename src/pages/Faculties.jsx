import { useMemo, useState } from 'react';
import { Search, ArrowUpRight, GraduationCap } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import FacultyCard from '../components/FacultyCard.jsx';
import { faculties } from '../data.js';

export default function Faculties() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const filtered = useMemo(() => faculties.filter(f => `${f.name} ${f.courses.join(' ')}`.toLowerCase().includes(search.toLowerCase())), [search]);

  return (
    <>
      <PageHero eyebrow="ACADEMIC EXPLORATION" title={<>Find the subject<br /><em>that moves you.</em></>} text="Explore our faculties and discover programmes designed to turn curiosity into capability." image="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=2000&q=85" />
      <section className="section faculties-page">
        <div className="container">
          <div className="faculty-page-heading">
            <div><span className="eyebrow">OUR ACADEMIC COMMUNITY</span><h2>Explore our faculties</h2><p>Search by faculty or programme to find an area that interests you.</p></div>
            <div className="search-box"><Search size={19} /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search faculties or courses..." aria-label="Search faculties or courses" />{search && <button onClick={() => setSearch('')} aria-label="Clear search">×</button>}</div>
          </div>
          <div className="faculty-grid full-faculty-grid">
            {filtered.map(faculty => <FacultyCard key={faculty.short} faculty={faculty} onExplore={setSelected} />)}
          </div>
          {filtered.length === 0 && <div className="empty-state"><GraduationCap size={32} /><h3>No matching programmes found</h3><p>Try another course name or faculty keyword.</p></div>}
          <div className="course-note"><strong>Programme information:</strong> This is a demonstration website. Course lists are sample content and do not represent an accredited institution's current admissions catalogue.</div>
        </div>
      </section>
      {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><div className="faculty-modal" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Close">×</button><span className="eyebrow">FACULTY DETAILS</span><h2>{selected}</h2><p>Explore the sample programmes listed under this faculty:</p><ul>{(faculties.find(f => f.name === selected)?.courses || []).map(c => <li key={c}>{c}</li>)}</ul><p className="modal-footnote">For this academic project, these details are illustrative.</p></div></div>}
    </>
  );
}
