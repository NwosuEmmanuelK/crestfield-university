export default function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(9,31,52,.92), rgba(9,31,52,.62)), url(${image})` }}>
      <div className="container page-hero-content">
        <span className="eyebrow eyebrow-gold">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
