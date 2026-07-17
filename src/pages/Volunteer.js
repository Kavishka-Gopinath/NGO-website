import { useState } from 'react';
import './about-volunteer.css';

const steps = [
  ['1', 'Register',    'Tell us a little about yourself.'],
  ['2', 'Connect',     'We find a role that fits your interests.'],
  ['3', 'Orient',      'Meet the team and learn the essentials.'],
  ['4', 'Make impact', 'Show up, serve, and see the difference.'],
];

export default function Volunteer() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* ── Hero ───────────────────────────────────── */}
      <section className="volunteer-hero">
        <div className="container">
          <div>
            <span className="eyebrow">Be part of the change</span>
            <h1>Your time can become someone's turning point.</h1>
            <p>
              Join a warm, purpose-led community creating meaningful change
              across Salem.
            </p>
            <a href="#volunteer-form" className="btn btn-primary">
              Become a volunteer →
            </a>
          </div>

          <div className="volunteer-hero-note">
            <strong>500+</strong>
            <span>
              people already
              <br />
              serving with us
            </span>
          </div>
        </div>
      </section>

      <main>
        {/* ── Why Volunteer ─────────────────────────── */}
        <section className="volunteer-reasons container">
          <div className="reason-copy">
            <span className="eyebrow">Why volunteer</span>
            <h2>Bring what you have. Leave with more.</h2>
            <p>
              Whether you can give a few hours or lead a project, your
              contribution matters. We make it easy to find a meaningful way to
              help.
            </p>
            <div className="benefit-tags">
              <span>Community impact</span>
              <span>New connections</span>
              <span>Leadership skills</span>
              <span>Certificate of service</span>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=85"
            alt="Volunteers working together"
          />
        </section>

        {/* ── Journey Steps ─────────────────────────── */}
        <section className="journey-section">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">Your journey</span>
              <h2>From hello to hands-on impact.</h2>
            </div>
            <div className="journey-steps">
              {steps.map(([number, title, text]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Form ──────────────────────────────────── */}
        <section
          className="volunteer-form-section container"
          id="volunteer-form"
        >
          <div className="form-copy">
            <span className="eyebrow">Start here</span>
            <h2>Let's find your way to help.</h2>
            <p>
              Complete this short form and our volunteer coordinator will be in
              touch within 2–3 working days.
            </p>
            <div className="contact-mini">
              <span>✦</span>
              <p>
                <strong>Have a question?</strong>
                <br />
                contact@arise20.org
              </p>
            </div>
          </div>

          <form
            className="volunteer-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="form-row">
              <label>
                Full name
                <input required name="name" placeholder="Your full name" />
              </label>
              <label>
                Email address
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Phone number
                <input
                  required
                  name="phone"
                  placeholder="+91 00000 00000"
                />
              </label>
              <label>
                Area of interest
                <select name="interest" defaultValue="">
                  <option value="" disabled>
                    Select an area
                  </option>
                  <option>Community outreach</option>
                  <option>Education</option>
                  <option>Events and logistics</option>
                  <option>Photography and media</option>
                </select>
              </label>
            </div>

            <label>
              How would you like to contribute?
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your skills, interests, or availability."
              />
            </label>

            <label className="consent">
              <input required type="checkbox" />
              <span>
                I'm happy to be contacted about volunteer opportunities.
              </span>
            </label>

            <button className="btn btn-dark" type="submit">
              Submit application →
            </button>

            {submitted && (
              <p className="form-success" role="status">
                Thank you—your interest has been received! We'll be in touch
                shortly.
              </p>
            )}
          </form>
        </section>
      </main>
    </>
  );
}
