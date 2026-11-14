import { useState } from 'react';
import { CheckCircle2, FileText, CalendarDays, ClipboardCheck, Send } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';

const initial = { fullName: '', email: '', phone: '', programme: '', level: 'Undergraduate', message: '' };

export default function Admissions() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const update = e => { setForm({ ...form, [e.target.name]: e.target.value }); setSuccess(false); };

  function submit(e) {
    e.preventDefault();
    const next = {};
    if (!form.fullName.trim()) next.fullName = 'Full name is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (!form.phone.trim()) next.phone = 'Phone number is required.';
    if (!form.programme) next.programme = 'Please choose a programme.';
    setErrors(next);
    if (!Object.keys(next).length) { setSuccess(true); setForm(initial); }
  }

  return (
    <>
      <PageHero eyebrow="TAKE THE FIRST STEP" title={<>Your future is calling.<br /><em>Answer it.</em></>} text="Start exploring the admissions process and take the first step towards your Crestfield story." image="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=2000&q=85" />
      <section className="section admissions-section">
        <div className="container admissions-layout">
          <div className="admissions-info">
            <span className="eyebrow">ADMISSIONS OVERVIEW</span><h2>Start with a question.<br /><em>Leave with a direction.</em></h2>
            <p className="lead">Whether you know exactly what you want to study or are still exploring, this is where your journey begins.</p>
            <div className="admission-steps">
              <div><span><FileText /></span><div><h3>01. Explore programmes</h3><p>Review the sample faculties and choose an area that fits your interests.</p></div></div>
              <div><span><ClipboardCheck /></span><div><h3>02. Prepare your details</h3><p>Have your contact details and relevant academic information ready.</p></div></div>
              <div><span><CalendarDays /></span><div><h3>03. Follow up</h3><p>In a real admissions process, the admissions office would share next steps.</p></div></div>
            </div>
            <div className="admission-callout"><strong>Project demonstration</strong><p>This application form demonstrates controlled React inputs and client-side validation. It does not submit to a real admissions database.</p></div>
          </div>
          <form className="form-card admission-form" onSubmit={submit} noValidate>
            <span className="eyebrow">INTEREST FORM</span><h2>Tell us about yourself.</h2><p className="form-intro">Complete the form below to register your interest.</p>
            {success && <div className="success-message"><CheckCircle2 size={19} /> Thank you! Your demo application has been recorded on this page.</div>}
            <label>Full name<input name="fullName" value={form.fullName} onChange={update} placeholder="Enter your full name" />{errors.fullName && <small className="error">{errors.fullName}</small>}</label>
            <label>Email address<input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" />{errors.email && <small className="error">{errors.email}</small>}</label>
            <label>Phone number<input name="phone" value={form.phone} onChange={update} placeholder="+234 ..." />{errors.phone && <small className="error">{errors.phone}</small>}</label>
            <div className="form-row">
              <label>Study level<select name="level" value={form.level} onChange={update}><option>Undergraduate</option><option>Postgraduate</option></select></label>
              <label>Programme<select name="programme" value={form.programme} onChange={update}><option value="">Choose programme</option>{['Computer Science','Business Administration','Law','Nursing Science','Civil Engineering','Mass Communication','Economics'].map(c => <option key={c}>{c}</option>)}</select>{errors.programme && <small className="error">{errors.programme}</small>}</label>
            </div>
            <label>Anything else? <textarea name="message" value={form.message} onChange={update} rows="3" placeholder="Optional message..." /></label>
            <button className="button button-primary form-submit" type="submit">Submit interest form <Send size={16} /></button>
            <p className="form-note">By submitting, you are testing a sample form only.</p>
          </form>
        </div>
      </section>
    </>
  );
}
