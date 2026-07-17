import { Link } from 'react-router-dom';
import './initiatives.css';

const initiatives = [
  {
    title: 'Food Distribution',
    desc: 'Weekly meal support and grocery kits for families facing hardship.',
    impact: '300+ families served',
    tag: 'Nutrition',
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Blanket Donation',
    desc: 'Warmth and relief during cold months for the economically vulnerable.',
    impact: '700+ blankets distributed',
    tag: 'Relief',
    image:
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Education Support',
    desc: 'Books, kits, and mentorship for students from underserved backgrounds.',
    impact: '250+ students supported',
    tag: 'Education',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Medical Camps',
    desc: 'Free health checks and care for residents in remote communities.',
    impact: '1,000+ checkups',
    tag: 'Healthcare',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Women Empowerment',
    desc: 'Skill training and livelihood support that create economic stability.',
    impact: '180+ women enrolled',
    tag: 'Empowerment',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Tree Plantation',
    desc: 'Greener neighbourhoods through community-driven planting campaigns.',
    impact: '5,000+ saplings planted',
    tag: 'Environment',
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
  },
];

const stats = [
  { icon: '🍱', value: '3,000+', label: 'Meals Served' },
  { icon: '📚', value: '250+',   label: 'Students Helped' },
  { icon: '🏥', value: '1,000+', label: 'Medical Checkups' },
  { icon: '🌱', value: '5,000+', label: 'Saplings Planted' },
];

const missionPoints = [
  { icon: '🤝', text: 'Community-first approach — local voices lead every initiative.' },
  { icon: '📊', text: 'Transparent impact reporting so every contribution is accountable.' },
  { icon: '🔄', text: 'Long-term programs that build resilience, not just relief.' },
];

export default function Initiatives() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────── */}
      <section className="init-hero">
        <div className="container">
          <span className="eyebrow">What we do</span>
          <h1>
            Programs Built on
            <br />
            Purpose & Care
          </h1>
          <p>
            Six community-led initiatives tackling hunger, education, health,
            and empowerment across Salem.
          </p>
          <div className="hero-actions">
            <Link to="/donate" className="btn btn-primary">
              Support an initiative
            </Link>
            <Link to="/volunteer" className="btn btn-secondary">
              Volunteer with us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Impact stats ───────────────────────────── */}
      <section className="init-stats">
        <div className="container">
          <div className="init-stats-grid">
            {stats.map(({ icon, value, label }) => (
              <div className="init-stat-card" key={label}>
                <span className="stat-icon">{icon}</span>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Initiative cards ───────────────────────── */}
      <div className="init-body">
        <div className="container">
          <div className="init-section-header">
            <span className="eyebrow">Our programmes</span>
            <h2>Six Ways We Create Change</h2>
            <p>
              Each initiative is designed to address a specific community need
              with sustained focus and measurable outcomes.
            </p>
          </div>

          <div className="init-grid">
            {initiatives.map((item) => (
              <div className="init-card" key={item.title}>
                <div className="init-card-img">
                  <img src={item.image} alt={item.title} />
                  <span className="impact-badge">{item.impact}</span>
                </div>
                <div className="init-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="init-card-footer">
                    <Link to="/volunteer" className="vol-link">
                      Volunteer
                    </Link>
                    <span className="tag">{item.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mission strip ──────────────────────────── */}
      <section className="init-mission">
        <div className="container init-mission-inner">
          <div className="init-mission-copy">
            <span className="eyebrow">How we work</span>
            <h2>Guided by community, sustained by care.</h2>
            <p>
              Every programme we run is co-designed with the people it serves.
              We believe lasting change comes from within communities, not from
              the outside in.
            </p>
            <div className="init-mission-points">
              {missionPoints.map(({ icon, text }) => (
                <div className="init-mission-point" key={text}>
                  <div className="mp-icon">{icon}</div>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="init-mission-img">
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=85"
              alt="Community volunteers working together"
            />
            <div className="float-badge">
              <strong>06</strong>
              active<br />programmes
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────── */}
      <section className="init-cta">
        <div className="container">
          <span className="eyebrow">Be the change</span>
          <h2>Your support powers every initiative.</h2>
          <p>
            Whether you give your time, skills, or resources — there is a
            meaningful role for you in each of our programmes.
          </p>
          <div className="init-cta-actions">
            <Link to="/donate" className="btn-white">
              Donate now
            </Link>
            <Link to="/volunteer" className="btn-outline-white">
              Become a volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
