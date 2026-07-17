import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/initiatives', label: 'Initiatives' },
  { to: '/events', label: 'Events' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

function openDonationModal() {
  window.dispatchEvent(new Event('openDonationModal'));
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 28);
    update();
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header className={`navbar ${scrolled || location.pathname !== '/' ? 'navbar-solid' : 'navbar-overlay'}`}>
      <NavLink to="/" className="brand">
        <img className="brand-mark" src="/logo.jpg" alt="The Arise '20 Foundation" />
        <span>ARISE <b>'20</b><small>FOUNDATION</small></span>
      </NavLink>

      <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Navbar Donate button → opens modal */}
      <button className="donate-btn" onClick={openDonationModal}>
        Donate Now <span>→</span>
      </button>

      <button
        className="mobile-menu"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? '×' : '☰'}
      </button>
    </header>
  );
}
