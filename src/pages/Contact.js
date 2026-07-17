import { useState } from 'react';
import './contact-blog.css';

const infoCards = [
  { icon: '📞', label: 'Phone', value: '+91 98765 43210' },
  { icon: '✉️', label: 'Email', value: 'contact@arise20.org' },
  { icon: '📍', label: 'Address', value: 'Salem, Tamil Nadu' },
  { icon: '🕐', label: 'Hours', value: 'Mon–Sat, 9 AM – 6 PM' },
];

const detailRows = [
  { icon: '📞', label: 'Phone', value: '+91 98765 43210' },
  { icon: '✉️', label: 'Email', value: 'contact@arise20.org' },
  { icon: '📍', label: 'Location', value: 'Salem, Tamil Nadu, India' },
  { icon: '🕐', label: 'Office Hours', value: 'Mon – Sat, 9:00 AM – 6:00 PM' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* ── Hero ───────────────────────────────────── */}
      <section className="contact-hero">
        <div className="container">
          <span className="eyebrow">Get in touch</span>
          <h1>We'd Love to Hear From You</h1>
          <p>
            Reach out for volunteering, partnerships, donations, or any event
            inquiries. We respond within 2 working days.
          </p>
        </div>
      </section>

      <div className="contact-page">
        <div className="container">

          {/* ── Info strip ────────────────────────────── */}
          <div className="contact-info-strip">
            {infoCards.map(({ icon, label, value }) => (
              <div className="contact-info-card" key={label}>
                <div className="ci-icon">{icon}</div>
                <h4>{label}</h4>
                <p>{value}</p>
              </div>
            ))}
          </div>

          {/* ── Main layout ───────────────────────────── */}
          <div className="contact-main">

            {/* Left: details panel */}
            <div className="contact-left">
              <div>
                <span className="eyebrow-white">Arise '20 Foundation</span>
                <h2>Let's build something meaningful together.</h2>
                <p>
                  Whether you want to volunteer, donate, partner, or just learn
                  more — our team is here to help you take the next step.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {detailRows.map(({ icon, label, value }) => (
                  <div className="contact-detail-row" key={label}>
                    <div className="cdr-icon">{icon}</div>
                    <div className="cdr-text">
                      <strong>{label}</strong>
                      <span>{value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p style={{ margin: '0 0 14px', fontSize: '0.85rem', opacity: 0.8 }}>
                  Follow us on social media
                </p>
                <div className="contact-social-row">
                  <a href="#fb" aria-label="Facebook">📘</a>
                  <a href="#ig" aria-label="Instagram">📸</a>
                  <a href="#tw" aria-label="Twitter">🐦</a>
                  <a href="#yt" aria-label="YouTube">▶️</a>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="contact-form-card">
              <h2>Send a Message</h2>
              <p>Fill in the form below and we'll get back to you shortly.</p>

              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="contact-form-row">
                  <label>
                    Full Name
                    <input required placeholder="Your full name" />
                  </label>
                  <label>
                    Email Address
                    <input required type="email" placeholder="you@example.com" />
                  </label>
                </div>

                <div className="contact-form-row">
                  <label>
                    Phone Number
                    <input placeholder="+91 00000 00000" />
                  </label>
                  <label>
                    Subject
                    <select defaultValue="">
                      <option value="" disabled>Select a topic</option>
                      <option>Volunteer Inquiry</option>
                      <option>Donation / Sponsorship</option>
                      <option>Event Participation</option>
                      <option>Media / Press</option>
                      <option>Other</option>
                    </select>
                  </label>
                </div>

                <label>
                  Message
                  <textarea
                    required
                    rows="5"
                    placeholder="How can we help you?"
                  />
                </label>

                <button type="submit" className="btn-submit">
                  Send Message →
                </button>

                {submitted && (
                  <p className="contact-success" role="status">
                    ✓ Message sent! We'll be in touch within 2 working days.
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
