import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './about-volunteer.css';

const values = [
  ['01', 'Compassion first', 'We listen carefully, respond with dignity, and make every person feel seen.'],
  ['02', 'Community powered', 'Local voices lead the way from the first conversation to lasting change.'],
  ['03', 'Transparent action', 'We share progress openly so every contribution has a clear purpose.'],
];

const highlights = [
  ['🤝', 'Community Service', 'Numerous charitable initiatives'],
  ['🌱', 'Youth Empowerment', 'Leadership & volunteer engagement'],
  ['📣', 'Community Events', 'Networking & awareness programs'],
  ['💡', 'Social Impact', 'Serving Salem and surrounding regions'],
];

const galleryImages = [
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
];

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Hero ───────────────────────────────────── */}
      <section className="about-hero">
        <div className="container">
          <span className="eyebrow">Our purpose</span>
          <h1>
            Small acts of care.
            <br />
            Lasting change.
          </h1>
          <p>
            The Arise '20 Foundation brings people together to create practical,
            hopeful change across Salem.
          </p>
        </div>
      </section>

      <main>
        {/* ── Intro ─────────────────────────────────── */}
        <section className="about-intro container">
          <div className="about-image-stack">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85"
              alt="Foundation volunteers together"
            />
            <div className="years-card">
              <strong>06</strong>
              <span>
                years of
                <br />
                community care
              </span>
            </div>
          </div>

          <div>
            <span className="eyebrow">How it began</span>
            <h2>A belief that kindness becomes stronger when shared.</h2>
            <p>
              What started as a handful of friends responding to a local need has
              grown into a community of volunteers, donors, and partners who show
              up with consistency and heart.
            </p>
            <p>
              We connect immediate support with opportunity—serving meals today
              while building confidence, health, and hope for tomorrow.
            </p>
            <Link to="/volunteer" className="btn btn-dark">
              Join our movement →
            </Link>
          </div>
        </section>

        {/* ── Meet Our Founder ─────────────────────── */}
        <section className="founder-section">
          <div className="container founder-grid">
            {/* Left column — portrait + signature */}
            <div className="founder-media reveal reveal-left">
              <div className="founder-portrait-wrap">
                <span className="founder-shape founder-shape--teal" aria-hidden="true" />
                <span className="founder-shape founder-shape--orange" aria-hidden="true" />
                <img
                  className="founder-portrait"
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85"
                  alt="Mr. Isravel M., Founder & Director of The Arise '20 Foundation"
                />
              </div>

              <div className="founder-signature">
                <div>
                  <strong>Mr. Isravel M.</strong>
                  <span>Founder &amp; Director</span>
                  <span className="founder-signature-org">The Arise '20 Foundation</span>
                </div>
                <div className="founder-social">
                  <a href="#" aria-label="LinkedIn" title="LinkedIn">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 17V10.3H6.06V17h2.28zM7.2 9.27a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64zM18 17v-3.67c0-2-1.07-2.93-2.5-2.93-1.15 0-1.66.63-1.95 1.08V10.3h-2.28V17h2.28v-3.6c0-.95.18-1.87 1.36-1.87 1.16 0 1.18 1.09 1.18 1.94V17H18z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Instagram" title="Instagram">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.8c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.18.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.41-.35 1.03-.4 2.18-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.4 2.18.22.55.47.94.88 1.35.41.41.8.66 1.35.88.41.16 1.03.35 2.18.4 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.18-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.41.35-1.03.4-2.18.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.4-2.18a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.18-.4-1.24-.06-1.61-.07-4.76-.07zm0 3.06a4.98 4.98 0 1 1 0 9.96 4.98 4.98 0 0 1 0-9.96zm0 1.8a3.18 3.18 0 1 0 0 6.36 3.18 3.18 0 0 0 0-6.36zm5.16-.4a1.16 1.16 0 1 1-2.32 0 1.16 1.16 0 0 1 2.32 0z" />
                    </svg>
                  </a>
                  <a href="mailto:hello@arise20.org" aria-label="Email" title="Email">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 7L4.5 6.5h15L12 11zm0 2.2 8-5.2v9.5H4V8l8 5.2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right column — bio + highlights */}
            <div className="founder-content reveal reveal-right">
              <span className="eyebrow">Our Founder</span>
              <h2 className="founder-title">Meet Our Founder</h2>
              <div className="founder-sub">
                <h3>Mr. Isravel M.</h3>
                <p>Founder &amp; Director, The Arise '20 Foundation</p>
              </div>
              <span className="founder-divider" aria-hidden="true" />

              <div className="founder-bio">
                <p>
                  Mr. Isravel M. founded The Arise '20 Foundation with a vision of
                  creating meaningful social impact through compassion, innovation,
                  and community-driven initiatives. Guided by the belief that every
                  individual has the power to transform society, he has dedicated his
                  efforts to empowering people through education, youth development,
                  environmental awareness, social welfare programs, and community
                  engagement.
                </p>
                <p>
                  Under his leadership, the foundation has organized numerous
                  charitable initiatives, awareness campaigns, volunteer activities,
                  educational support programs, and community events that have
                  positively influenced lives across Salem and surrounding regions.
                  His commitment to service inspires a growing network of volunteers,
                  donors, and supporters who work together to build a stronger and
                  more inclusive society.
                </p>
                <p>
                 His mission is to encourage people from all walks of life to
                  contribute their time, skills, and resources toward creating
                  opportunities for those in need. Through The Arise '20 Foundation, he
                  continues to promote kindness, leadership, and social responsibility
                  while striving to make every initiative a step toward a brighter
                  future.
                </p>
              </div>

            </div>
          </div>


        </section>

        {/* ── Purpose ───────────────────────────────── */}
        <section className="about-purpose">
          <div className="container purpose-grid">
            <div>
              <span className="eyebrow">What guides us</span>
              <h2>Every person deserves the chance to rise.</h2>
            </div>
            <div className="purpose-cards">
              <article>
                <span>⌁</span>
                <h3>Our vision</h3>
                <p>
                  A compassionate, empowered community where no one is left
                  behind.
                </p>
              </article>
              <article>
                <span>↗</span>
                <h3>Our mission</h3>
                <p>
                  Deliver practical support and community-led programs that
                  restore dignity and hope.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── Values ────────────────────────────────── */}
        <section className="values-section container">
          <div className="section-title">
            <span className="eyebrow">Our values</span>
            <h2>Care is how we work.</h2>
          </div>
          <div className="value-list">
            {values.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Impact ────────────────────────────────── */}
        <section className="about-impact">
          <div className="container">
            <div>
              <span className="eyebrow">Impact in action</span>
              <h2>Purpose you can see in every neighbourhood.</h2>
            </div>
            <div className="about-metrics">
              <div>
                <strong>1,500+</strong>
                <span>families supported</span>
              </div>
              <div>
                <strong>3,000+</strong>
                <span>meals served</span>
              </div>
              <div>
                <strong>500+</strong>
                <span>volunteers united</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery ──────────────────────────────── */}
        <section className="about-gallery container">
          <div className="section-title">
            <span className="eyebrow">In pictures</span>
            <h2>Moments of impact</h2>
            <p>Glimpses of service, care, and community action across Salem.</p>
          </div>
          <div className="about-gallery-grid">
            {galleryImages.map((image, index) => (
              <div className="about-gallery-item reveal" key={index}>
                <img src={image} alt={`Gallery moment ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────── */}

      </main>
    </>
  );
}
