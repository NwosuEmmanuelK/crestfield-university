import { MapPin, Mail, Phone, Clock3 } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import ContactForm from '../components/ContactForm.jsx';

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="LET'S CONNECT" title={<>A conversation can<br /><em>start something.</em></>} text="Questions about Crestfield? We would be glad to help you find the information you need." image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85" />
      <section className="section contact-section">
        <div className="container contact-layout">
          <div className="contact-info">
            <span className="eyebrow">GET IN TOUCH</span><h2>We’d love to<br /><em>hear from you.</em></h2>
            <p className="lead">Reach out to our team with your questions, feedback or enquiries.</p>
            <div className="contact-details">
              <div><span className="contact-icon"><MapPin /></span><p><strong>Visit us</strong><br />Crestfield Way, Abuja, Nigeria</p></div>
              <div><span className="contact-icon"><Mail /></span><p><strong>Email</strong><br />hello@crestfield.edu.ng</p></div>
              <div><span className="contact-icon"><Phone /></span><p><strong>Call</strong><br />+234 800 000 2026</p></div>
              <div><span className="contact-icon"><Clock3 /></span><p><strong>Office hours</strong><br />Monday – Friday, 9:00am – 4:00pm</p></div>
            </div>
            <div className="map-placeholder"><MapPin size={28} /><strong>Crestfield University</strong><span>Abuja, Nigeria · Sample location</span></div>
            <p className="form-note">All contact information shown is fictional sample content.</p>
          </div>
          <div><span className="eyebrow">SEND A MESSAGE</span><h2 className="contact-form-title">How can we help?</h2><ContactForm /></div>
        </div>
      </section>
    </>
  );
}
