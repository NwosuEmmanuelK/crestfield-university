import { Target, Eye, Compass, Users, Award, Sprout } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

const values = [
  { icon: Compass, title: 'Purpose', text: 'We learn with intention and use our knowledge to contribute positively.' },
  { icon: Award, title: 'Excellence', text: 'We pursue high standards, thoughtful work and continuous improvement.' },
  { icon: Users, title: 'Community', text: 'We respect different perspectives and achieve more by working together.' },
  { icon: Sprout, title: 'Growth', text: 'We stay curious, welcome challenges and keep developing our abilities.' }
];

export default function About() {
  return (
    <>
      <PageHero eyebrow="WHO WE ARE" title={<>A university with<br /><em>possibility at its heart.</em></>} text="Discover the people, purpose and principles shaping the Crestfield experience." image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=85" />
      <section className="section">
        <div className="container about-story-grid">
          <div><SectionHeading eyebrow="OUR STORY" title={<>Built for the<br /><em>next generation.</em></>} /></div>
          <div className="story-copy">
            <p className="lead">Crestfield University is a fictional private university based in Abuja, Nigeria, created around one simple belief: every student deserves the opportunity to discover what they can become.</p>
            <p>Our imagined institution brings together a diverse academic community, supportive learning spaces and programmes that connect knowledge with practical challenges. We believe education should develop not only what students know, but also how they think, collaborate and contribute.</p>
            <p>From the first lecture to the first big idea, the Crestfield experience is designed to help students move forward with confidence.</p>
          </div>
        </div>
      </section>
      <section className="mission-section">
        <div className="container mission-grid">
          <article className="mission-card"><div className="mission-icon"><Target /></div><span className="eyebrow eyebrow-gold">OUR MISSION</span><h2>To empower minds through meaningful education.</h2><p>We aim to provide an inclusive and challenging learning environment that nurtures knowledge, integrity, creativity and service.</p></article>
          <article className="mission-card mission-card-light"><div className="mission-icon"><Eye /></div><span className="eyebrow">OUR VISION</span><h2>To inspire a generation of thoughtful leaders.</h2><p>We aspire to be a recognised centre of learning where ideas become solutions and potential becomes positive impact.</p></article>
        </div>
      </section>
      <section className="section values-section">
        <div className="container">
          <SectionHeading eyebrow="WHAT GUIDES US" title={<>Our values, in <em>action.</em></>} text="The principles that shape how we learn, work and build community." centered />
          <div className="values-grid">
            {values.map(({ icon: Icon, title, text }, index) => <article className="value-card" key={title}><span className="value-number">0{index + 1}</span><Icon size={25} /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>
    </>
  );
}
