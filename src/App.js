import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Initiatives from './pages/Initiatives';
import Events from './pages/Events';
import Volunteer from './pages/Volunteer';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';

function App() {
  const [donateOpen, setDonateOpen] = useState(false);

  /* Any page/component can fire:
     window.dispatchEvent(new Event('openDonationModal'))
     to open the modal without prop drilling. */
  useEffect(() => {
    const handler = () => setDonateOpen(true);
    window.addEventListener('openDonationModal', handler);
    return () => window.removeEventListener('openDonationModal', handler);
  }, []);

  return (
    <Router>
      <Navbar onDonate={() => setDonateOpen(true)} />
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/about"     element={<About />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/events"    element={<Events />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donate"    element={<Donate />} />
        <Route path="/contact"   element={<Contact />} />
        <Route path="/blog"      element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
      <Footer />

      {/* Global Donation Modal */}
      <DonationModal
        isOpen={donateOpen}
        onClose={() => setDonateOpen(false)}
      />
    </Router>
  );
}

export default App;
