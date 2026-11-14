import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const initial = { name: '', email: '', subject: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (!form.subject.trim()) next.subject = 'Please enter a subject.';
    if (form.message.trim().length < 10) next.message = 'Your message must be at least 10 characters.';
    return next;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm(current => ({ ...current, [name]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm(initial);
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      {submitted && <div className="success-message"><CheckCircle2 size={19} /> Thank you! Your message has been received in this demo.</div>}
      <div className="form-row">
        <label>Full name<input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />{errors.name && <small className="error">{errors.name}</small>}</label>
        <label>Email address<input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />{errors.email && <small className="error">{errors.email}</small>}</label>
      </div>
      <label>Subject<input name="subject" value={form.subject} onChange={handleChange} placeholder="What is this about?" />{errors.subject && <small className="error">{errors.subject}</small>}</label>
      <label>Message<textarea name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Tell us how we can help..." />{errors.message && <small className="error">{errors.message}</small>}</label>
      <button className="button button-primary form-submit" type="submit">Send message <Send size={16} /></button>
      <p className="form-note">Demo form: your information is not sent to a live university server.</p>
    </form>
  );
}
