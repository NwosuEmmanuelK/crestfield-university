import { ArrowUpRight, Code2, BriefcaseBusiness, Cog, BookOpen, HeartPulse, Scale } from 'lucide-react';

const icons = { Code2, BriefcaseBusiness, Cog, BookOpen, HeartPulse, Scale };

export default function FacultyCard({ faculty, onExplore }) {
  const Icon = icons[faculty.icon] || Code2;
  return (
    <article className="faculty-card">
      <div className="faculty-icon"><Icon size={24} strokeWidth={1.7} /></div>
      <span className="faculty-code">{faculty.short}</span>
      <h3>{faculty.name}</h3>
      <p>{faculty.description}</p>
      <div className="course-tags">
        {faculty.courses.slice(0, 3).map(course => <span key={course}>{course}</span>)}
      </div>
      <button className="card-link" onClick={() => onExplore(faculty.name)}>Explore faculty <ArrowUpRight size={16} /></button>
    </article>
  );
}
