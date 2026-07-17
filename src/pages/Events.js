import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './events.css';

function openModal() {
  window.dispatchEvent(new Event('openDonationModal'));
}

const events = [
  {
    title: 'Community Food Drive',
    date: '12 Aug 2026',
    day: '12',
    mon: 'Aug',
    venue: 'Town Hall, Salem',
    seats: '45 seats left',
    raised: 38000,
    goal: 50000,
    image:
      'https://images.unsplash.com/photo-1484712401471-05c7215830eb?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Back to School Kit Camp',
    date: '24 Aug 2026',
    day: '24',
    mon: 'Aug',
    venue: 'Nehru School, Salem',
    seats: '20 seats left',
    raised: 14500,
    goal: 25000,
    image:
      'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Health Awareness Rally',
    date: '04 Sep 2026',
    day: '04',
    mon: 'Sep',
    venue: 'Fort Grounds, Salem',
    seats: '60 seats left',
    raised: 27000,
    goal: 40000,
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80',
  },
];

function formatINR(n) {
  return '₹' + n.toLocaleString('en-IN');
}

/* Animates 0 → target% on mount */
function ProgressBar({ raised, goal }) {
  const pct = Math.min(Math.round((raised / goal) * 100), 100);
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const id = setTimeout(() => setWidth(pct), 150);
    return () => clearTimeout(id);
  }, [pct]);

  return (
    <div className="event-progress-wrap">
      <div className="donation-meta">
        <span className="raised">{formatINR(raised)} raised</span>
        <span className="pct">{pct}%</span>
        <span className="goal">of {formatINR(goal)}</span>
      </div>
      <div className="event-progress-track" ref={ref}>
        <div
          className="event-progress-fill"
          style={{ width: `${width}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────── */}
      <section className="events-hero">
        <div className="container">
          <span className="eyebrow">Community events</span>
          <h1>Upcoming Events</h1>
          <p>
            Join our community drives and help us create real, lasting impact
            across Salem.
          </p>
        </div>
      </section>

      {/* ── Event cards ──────────────────────────── */}
      <section className="events-body">
        <div className="container">
          <div className="events-section-header">
            <span className="eyebrow">On the calendar</span>
            <h2>Events You Can Be Part Of</h2>
            <p>
              Every contribution — big or small — moves the progress bar and
              changes lives.
            </p>
          </div>

          <div className="event-grid">
            {events.map((event) => (
              <div className="event-card" key={event.title}>

                {/* ── Image with badges ─────────────── */}
                <div className="event-card-img">
                  <img src={event.image} alt={event.title} />
                  <div className="event-date-badge">
                    <span className="day">{event.day}</span>
                    <span className="mon">{event.mon}</span>
                  </div>
                  <span className="event-seats-badge">🪑 {event.seats}</span>
                </div>

                {/* ── Card body ─────────────────────── */}
                <div className="event-card-body">
                  <h3>{event.title}</h3>
                  <div className="event-detail-row">
                    <span className="ev-icon">📅</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="event-detail-row">
                    <span className="ev-icon">📍</span>
                    <span>{event.venue}</span>
                  </div>

                  {/* ── Donation progress bar (above button) ── */}
                  <ProgressBar raised={event.raised} goal={event.goal} />

                  <button onClick={openModal} className="btn-donate">
                    ❤️ Donate Now
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ────────────────────────────── */}
      <section className="events-cta">
        <div className="container">
          <span className="eyebrow">Get involved</span>
          <h2>Want to do more than donate?</h2>
          <p>
            Volunteer your time at our next event or support us with a recurring
            contribution.
          </p>
          <div className="events-cta-btns">
            <Link to="/volunteer" className="btn-white">
              Volunteer with us
            </Link>
            <Link to="/contact" className="btn-ghost-white">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
