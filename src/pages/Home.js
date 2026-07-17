
const events = [
  { title: 'Community Food Drive', date: '12 Aug 2026', venue: 'Town Hall, Salem', seats: '45 seats left', image: 'https://images.unsplash.com/photo-1484712401471-05c7215830eb?auto=format&fit=crop&w=900&q=80' },
  { title: 'Back to School Kit Camp', date: '24 Aug 2026', venue: 'Nehru School', seats: '20 seats left', image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80' },
  { title: 'Health Awareness Rally', date: '04 Sep 2026', venue: 'Fort Grounds', seats: '60 seats left', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80' }
];

const testimonials = [
  { name: 'Ravi K.', role: 'Volunteer', quote: 'The sense of purpose here is incredible. I saw real change in just a few events.' },
  { name: 'Meera S.', role: 'Donor', quote: 'Transparent communication and visible impact made me feel confident donating.' },
  { name: 'Anand P.', role: 'Beneficiary', quote: 'The support we received helped my family through a very difficult season.' }
];

const latestStories = [
  { category: 'Charity', title: 'Plates of Hope: A Community Food Drive', date: '08 July 2026', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80', slug: 'plates-of-hope-community-food-drive' },
  { category: 'Volunteers', title: 'Young Hands, Big Hearts', date: '02 July 2026', image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80', slug: 'young-hands-big-hearts' },
  { category: 'Awareness', title: 'A Health Camp That Put Prevention First', date: '25 June 2026', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80', slug: 'health-camp-neighbourhood' }
];

import React, { useEffect, useState } from 'react';

export function onImgError(e) {
  const el = e.currentTarget;
  if (el.dataset.fallback) return;
  el.dataset.fallback = '1';
  el.src =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="800" height="600" fill="#0f766e"/><g fill="#ffffff" opacity="0.92"><circle cx="400" cy="250" r="60"/><path d="M400 150 a250 250 0 0 1 0 500 a250 250 0 0 1 0 -500" fill="none" stroke="#ffffff" stroke-width="10" opacity="0.25"/><rect x="250" y="340" width="300" height="40" rx="20"/><rect x="290" y="400" width="220" height="28" rx="14" opacity="0.6"/></g><text x="400" y="500" font-family="Poppins, sans-serif" font-size="34" font-weight="700" fill="#ffffff" text-anchor="middle">The Arise '20 Foundation</text></svg>`
    );
}

const initiatives = [
  { title: 'Food Distribution', desc: 'Nutritious meals and ration support for families in need.', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80' },
  { title: 'Blanket Donation', desc: 'Warmth and relief during harsh weather for vulnerable communities.', image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80' },
  { title: 'Education Support', desc: 'Books, school kits, and mentoring for deserving students.', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80' },
  { title: 'Medical Camps', desc: 'Health screenings and essential care for underserved areas.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80' },
  { title: 'Women Empowerment', desc: 'Skill-building programs and livelihood support for women.', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80' },
  { title: 'Tree Plantation', desc: 'Community drives that grow greener, healthier neighborhoods.', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80' }
];

export default function Home() {

  const [lightbox, setLightbox] = useState({ open: false, src: '', index: 0, group: '' });
  const [activeAward, setActiveAward] = useState('certificates');

  useEffect(() => {
    if (!lightbox.open) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightbox({ open: false, src: '', index: 0, group: '' });
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightbox.open]);

  return (

    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Together We Rise. Together We Serve.</h1>
          <p>Empowering lives through compassion, community service, and meaningful action across Salem.</p>
          <div className="hero-actions">
            <a href="/volunteer" className="btn btn-primary">Become a Volunteer</a>
            <a href="/initiatives" className="btn btn-secondary">Explore Our Work</a>
          </div>
          <div className="stat-bar">
            <div className="stat-card"><strong>1500+</strong><span>Families Supported</span></div>
            <div className="stat-card"><strong>500+</strong><span>Volunteers</span></div>
            <div className="stat-card"><strong>120+</strong><span>Events</span></div>
            <div className="stat-card"><strong>₹15L+</strong><span>Donations</span></div>
          </div>
          <a className="scroll-cue" href="#our-story" aria-label="Discover our impact"><span />Discover our impact</a>
        </div>
      </section>

      <section className="container about" id="our-story">
        <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80" alt="Foundation team" onError={onImgError} />
        <div className="about-card">
          <h2>Who We Are</h2>
          <p>The Arise '20 Foundation is a non-profit organization dedicated to uplifting communities through charitable initiatives, youth engagement, humanitarian programs, and impactful events.</p>
          <a href="/about" className="btn btn-dark">Learn More →</a>
        </div>
      </section>

      <section className="home-stories section">
        <div className="container">
          <div className="home-stories-head"><div><span className="eyebrow">From our community</span><h2>Latest News &amp; Stories</h2><p>Stories of compassion, collective action, and the people behind every moment of change.</p></div><a href="/blog" className="btn btn-secondary">View All Blogs →</a></div>
          <div className="home-story-layout"><a href={`/blog/${latestStories[0].slug}`} className="home-feature-story"><img src={latestStories[0].image} alt="Community food drive" /><div><span className="blog-badge">Featured · {latestStories[0].category}</span><h3>{latestStories[0].title}</h3><p>One warm meal became a moment of comfort for hundreds of families.</p><span className="text-link">Read the story →</span></div></a><div className="home-story-list">{latestStories.slice(1).map((story) => <a href={`/blog/${story.slug}`} className="home-story-row" key={story.slug}><img src={story.image} alt="" /><div><span className="blog-badge">{story.category}</span><p>{story.date}</p><h3>{story.title}</h3><span className="text-link">Read More →</span></div></a>)}</div></div>
        </div>
      </section>



      <section className="impact">
        <div className="container">
          <div className="section-title">
            <h2>Our Impact</h2>
            <p>Every donation and volunteer hour brings measurable relief and hope.</p>
          </div>
          <div className="impact-grid">
            <div className="impact-card"><strong>1500+</strong><span>Families Helped</span></div>
            <div className="impact-card"><strong>3000+</strong><span>Meals Served</span></div>
            <div className="impact-card"><strong>700+</strong><span>Blankets Distributed</span></div>
            <div className="impact-card"><strong>500+</strong><span>Volunteers</span></div>
            <div className="impact-card"><strong>40+</strong><span>Community Drives</span></div>
            <div className="impact-card"><strong>100+</strong><span>Partner Organizations</span></div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-title">
          <h2>Our Initiatives</h2>
          <p>Focused programs that respond to immediate needs and long-term growth.</p>
        </div>
        <div className="program-grid">
          {initiatives.map((item) => (
            <div className="program-card" key={item.title}>
              <img src={item.image} alt={item.title} onError={onImgError} />
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href="/initiatives" className="btn btn-dark">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-title">
            <h2>Upcoming Events</h2>
            <p>Join us at the next community activity and be part of meaningful change.</p>
          </div>
          <div className="event-grid">
            {events.map((event) => (
              <div className="event-card" key={event.title}>
                <img src={event.image} alt={event.title} onError={onImgError} />
                <div className="content">
                  <h3>{event.title}</h3>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Venue:</strong> {event.venue}</p>
                  <p><strong>Seats:</strong> {event.seats}</p>
                  <a href="/events" className="btn btn-primary">Register</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-title">
          <h2>Stories of Hope</h2>
          <p>Real voices from volunteers, donors, and beneficiaries.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.name}>
              <div className="content">
                <h3>{item.name}</h3>
                <p style={{ color: 'var(--orange)', fontWeight: 700 }}>{item.role}</p>
                <p>“{item.quote}”</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="awards section">
        <div className="container">
          <div className="section-title">
            <h2>Awards & Recognition</h2>
            <p>
              <strong>
                Every recognition reflects the trust of our community and the dedication of our volunteers, partners, and supporters who work tirelessly to create positive social impact.
              </strong>
            </p>
          </div>

          <div className="awards-tabs">
            {[
              { id: 'certificates', icon: '🏆', label: 'Certificates' },
              { id: 'awards', icon: '🥇', label: 'Awards' },
              { id: 'media', icon: '📰', label: 'Media' },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                className={`award-tab ${activeAward === t.id ? 'is-active' : ''}`}
                onClick={() => setActiveAward(t.id)}
                aria-pressed={activeAward === t.id}
              >
                <span className="award-tab-icon">{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>

          <div className="award-panel">
            {activeAward === 'certificates' && (
              <div className="award-card">
                <div className="award-card-head">
                  <div className="award-icon">🏆</div>
                  <div>
                    <h3>Certificates &amp; Accreditations</h3>
                    <span className="award-tag">Official recognition</span>
                  </div>
                </div>
                <div className="award-media">
                  <div className="thumb-grid">
                    {[
                      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
                      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
                      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
                      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80'
                    ].map((src, idx) => (
                      <button
                        key={src}
                        type="button"
                        className="thumb"
                        onClick={() => setLightbox({ open: true, src, index: idx, group: 'certificates' })}
                        aria-label={`View certificate ${idx + 1}`}
                      >
                        <img src={src} alt="Certificate thumbnail" onError={onImgError} />
                        <span className="thumb-overlay">View</span>
                      </button>
                    ))}
                  </div>
                </div>
                <p className="award-desc">
                  Community Service, Social Welfare, Volunteer Excellence, NGO Participation &amp; Educational Programs.
                </p>
                <div className="award-actions">
                  <button className="btn btn-secondary" type="button" onClick={() => setLightbox({ open: true, src: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80', index: 0, group: 'certificates' })}>
                    View Details
                  </button>
                </div>
              </div>
            )}

            {activeAward === 'awards' && (
              <div className="award-card">
                <div className="award-card-head">
                  <div className="award-icon">🥇</div>
                  <div>
                    <h3>Awards &amp; Achievements</h3>
                    <span className="award-tag">Milestones</span>
                  </div>
                </div>
                <div className="award-media">
                  <div className="award-photo">
                    <img
                      src="https://images.unsplash.com/photo-1518544882979-91f85b59c4c5?auto=format&fit=crop&w=1200&q=80"
                      alt="Awards"
                      onError={onImgError}
                    />
                    <div className="award-photo-badge">
                      <strong>2026</strong>
                      <span>Achievements</span>
                    </div>
                  </div>
                </div>
                <p className="award-desc">
                  Community Leadership, Social Impact, Event Management, Volunteer &amp; Youth Empowerment recognition.
                </p>
                <div className="award-actions">
                  <a className="btn btn-secondary" href="/about#awards">View Details</a>
                </div>
              </div>
            )}

            {activeAward === 'media' && (
              <div className="award-card">
                <div className="award-card-head">
                  <div className="award-icon">📰</div>
                  <div>
                    <h3>Featured in Media</h3>
                    <span className="award-tag">Press coverage</span>
                  </div>
                </div>
                <div className="award-media">
                  <div className="media-list">
                    {[
                      {
                        outlet: 'The Daily Herald',
                        date: '14 Aug 2026',
                        headline: 'Foundation-led drive brings hope to local families',
                        excerpt: 'A month of community service culminated in visible impact across multiple wards.',
                      },
                      {
                        outlet: 'City Times',
                        date: '28 Jul 2026',
                        headline: 'Volunteers recognized for excellence in outreach',
                        excerpt: 'Certificates and appreciation letters highlight the dedication of every participant.',
                      },
                      {
                        outlet: 'Community Now',
                        date: '09 Jul 2026',
                        headline: 'Young volunteers make a difference through youth programs',
                        excerpt: 'Training and mentorship initiatives supported educational and empowerment outcomes.',
                      },
                    ].map((m) => (
                      <div className="media-card" key={m.headline}>
                        <div className="media-logo">{m.outlet.split(' ')[0]}</div>
                        <div className="media-body">
                          <div className="media-date">{m.date}</div>
                          <h4>{m.headline}</h4>
                          <p>{m.excerpt}</p>
                          <a className="text-link" href="/blog">Read More →</a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="award-desc">
                  Newspapers, magazines, online articles, interviews &amp; television features.
                </p>
                <div className="award-actions">
                  <a className="btn btn-secondary" href="/blog">Read More</a>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      <section className="process section" id="process">
        <div className="container">
          <div className="section-title">
            <h2>How We Create Impact</h2>
            <p>
              Every initiative follows a thoughtful and transparent journey—from identifying community needs to delivering meaningful and sustainable change.
            </p>
          </div>

          <div className="timeline timeline-horizontal" role="list">
            {[
              {
                icon: '📢',
                title: 'Awareness',
                desc: 'We identify community needs through surveys, local partnerships, and public awareness campaigns to understand where help is needed most.',
              },
              {
                icon: '💝',
                title: 'Donations',
                desc: 'Individuals, businesses, and organizations contribute funds, essential supplies, and resources that enable us to support our initiatives.',
              },
              {
                icon: '🤝',
                title: 'Volunteer Support',
                desc: 'Dedicated volunteers register, receive guidance, and collaborate with our team to plan and execute community service activities.',
              },
              {
                icon: '🌍',
                title: 'Community Service',
                desc: 'Our teams organize charity drives, educational programs, medical camps, environmental campaigns, food distribution, and other outreach activities.',
              },
              {
                icon: '📈',
                title: 'Impact',
                desc: 'We monitor results, collect feedback, and measure the positive changes created through every project and initiative.',
              },
              {
                icon: '🌱',
                title: 'Growth',
                desc: 'By learning from each experience, we strengthen future initiatives, expand partnerships, and reach more communities in need.',
              },
            ].map((s, idx) => (
              <div className="timeline-step" role="listitem" key={s.title}>
                <div className="step-node">{s.icon}</div>
                <div className="step-card">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                {idx !== 5 && <div className="step-connector" aria-hidden="true" />}
              </div>
            ))}
          </div>

          <div className="timeline timeline-vertical" role="list">
            {[
              {
                icon: '📢',
                title: 'Awareness',
                desc: 'We identify community needs through surveys, local partnerships, and public awareness campaigns to understand where help is needed most.',
              },
              {
                icon: '💝',
                title: 'Donations',
                desc: 'Individuals, businesses, and organizations contribute funds, essential supplies, and resources that enable us to support our initiatives.',
              },
              {
                icon: '🤝',
                title: 'Volunteer Support',
                desc: 'Dedicated volunteers register, receive guidance, and collaborate with our team to plan and execute community service activities.',
              },
              {
                icon: '🌍',
                title: 'Community Service',
                desc: 'Our teams organize charity drives, educational programs, medical camps, environmental campaigns, food distribution, and other outreach activities.',
              },
              {
                icon: '📈',
                title: 'Impact',
                desc: 'We monitor results, collect feedback, and measure the positive changes created through every project and initiative.',
              },
              {
                icon: '🌱',
                title: 'Growth',
                desc: 'By learning from each experience, we strengthen future initiatives, expand partnerships, and reach more communities in need.',
              },
            ].map((s) => (
              <div className="timeline-v-step" role="listitem" key={s.title}>
                <div className="v-node">{s.icon}</div>
                <div className="v-card">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="process-quote">
            <p>
              <strong>Small acts of kindness, when multiplied by thousands of people, create extraordinary change.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="before-after section">
        <div className="container">
          <div className="section-title">
            <h2>Transforming Lives, One Story at a Time</h2>
            <p>
              Every initiative creates a meaningful difference. These stories showcase how compassion and collective action have helped individuals and communities move toward a brighter future.
            </p>
          </div>

          <div className="transform-grid">
            {[
              {
                title: 'Family Support',
                feature: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
                beforeImg: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&w=1000&q=80',
                afterImg: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80',
                beforeLabel: 'Challenges',
                beforeBullets: ['Limited access to food', 'Financial hardship', 'Lack of essential resources'],
                afterLabel: 'Positive Changes',
                afterBullets: ['Regular food assistance', 'Community support', 'Renewed hope and stability'],
                stats: '150 families benefited',
                slug: '/blog',
              },
              {
                title: 'Education Empowerment',
                feature: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
                beforeImg: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
                afterImg: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=80',
                beforeLabel: 'Challenges',
                beforeBullets: ['Inadequate educational materials', 'Limited learning resources', 'Lack of guidance'],
                afterLabel: 'Positive Changes',
                afterBullets: ['School kits provided', 'Educational support programs', 'Mentorship and encouragement'],
                stats: '120 students supported',
                slug: '/blog',
              },
              {
                title: 'Community Clean-Up',
                feature: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
                beforeImg: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80',
                afterImg: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80',
                beforeLabel: 'Challenges',
                beforeBullets: ['Neglected public spaces', 'Low community participation', 'Environmental concerns'],
                afterLabel: 'Positive Changes',
                afterBullets: ['Clean & green areas', 'Plantation drives', 'More community engagement'],
                stats: '3 communities transformed',
                slug: '/blog',
              },
            ].map((c) => (
              <div className="transform-card" key={c.title}>
                <div className="transform-feature">
                  <img src={c.feature} alt={c.title} onError={onImgError} />
                  <span className="transform-feature-title">{c.title}</span>
                </div>
                <div className="transform-split">
                  <div className="split-col">
                    <div className="split-label">Before</div>
                    <div className="split-img-wrap">
                      <img src={c.beforeImg} alt={`${c.title} before`} onError={onImgError} />
                    </div>
                    <h4>{c.beforeLabel}</h4>
                    <ul>
                      {c.beforeBullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="split-arrow" aria-hidden="true">→</div>
                  <div className="split-col">
                    <div className="split-label split-after">After</div>
                    <div className="split-img-wrap">
                      <img src={c.afterImg} alt={`${c.title} after`} onError={onImgError} />
                    </div>
                    <h4>{c.afterLabel}</h4>
                    <ul>
                      {c.afterBullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="transform-body">
                  <p className="transform-stats">📊 {c.stats}</p>
                  <a className="btn btn-secondary" href={c.slug}>Read Full Story</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="volunteer-journey section" id="volunteer-journey">
        <div className="container">
          <div className="section-title">
            <h2>Your Volunteer Journey Starts Here</h2>
            <p>
              Joining our mission is simple. Every volunteer plays a vital role in creating positive change, regardless of experience.
            </p>
          </div>

          <div className="journey-wrap">
            <div className="journey-line" aria-hidden="true" />
            {[1, 2, 3, 4, 5].map((n) => {
              const steps = [
                { icon: '📝', title: 'Register', desc: 'Complete the volunteer registration form with your basic information, interests, and availability.' },
                { icon: '🎓', title: 'Training & Orientation', desc: 'Attend a short orientation to learn about our mission, safety guidelines, event planning, and volunteer responsibilities.' },
                { icon: '🎯', title: 'Participate', desc: 'Join charity drives, awareness campaigns, educational initiatives, fundraising events, and community outreach programs.' },
                { icon: '❤️', title: 'Serve the Community', desc: 'Work alongside fellow volunteers to deliver meaningful support and create positive experiences for beneficiaries.' },
                { icon: '🏅', title: 'Receive Recognition', desc: 'Celebrate your contribution through certificates, appreciation events, volunteer spotlights, and opportunities to grow into leadership roles.' },
              ];
              const s = steps[n - 1];
              return (
                <div className="journey-step" key={n}>
                  <div className="journey-badge">
                    <span className="journey-num">{n}</span>
                    <span className="journey-icon">{s.icon}</span>
                  </div>
                  <div className="journey-card">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="journey-cta">
            <h3>Ready to make a difference?</h3>
            <p>
              Whether you can contribute a few hours or become a long-term volunteer, your time and compassion can change lives.
            </p>
            <div className="journey-actions">
              <a className="btn btn-primary" href="/volunteer">Become a Volunteer</a>
              <a className="btn btn-secondary" href="/events">Explore Upcoming Events</a>
            </div>
          </div>
        </div>
      </section>

      <section className="container newsletter">
        <div className="newsletter-box">
          <div>
            <h2>Stay Connected</h2>
            <p>Get updates on events, volunteering drives, and community impact.</p>
          </div>
          <input placeholder="Email address" />
          <button className="btn btn-dark">Subscribe</button>
        </div>
      </section>

      {lightbox.open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Certificate preview">
          <button className="lightbox-close" type="button" onClick={() => setLightbox({ open: false, src: '', index: 0, group: '' })} aria-label="Close preview">
            ✕
          </button>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt="Certificate preview" onError={onImgError} />
          </div>
        </div>
      )}
    </>
  );
}

