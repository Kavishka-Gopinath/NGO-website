import { Link, useParams } from 'react-router-dom';
import { blogs } from '../data/blogs';

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find((item) => item.slug === slug) || blogs[0];
  const related = blogs.filter((item) => item.slug !== blog.slug).slice(0, 3);
  return <main className="article-page">
    <header className="article-header container"><Link className="back-link" to="/blog">← Back to all stories</Link><span className="blog-badge">{blog.category}</span><h1>{blog.title}</h1><p className="article-meta">By {blog.author} <i /> {blog.date} <i /> {blog.readTime}</p></header>
    <img className="article-lead" src={blog.image} alt="Community volunteers working together" />
    <article className="article-content">
      <p className="article-intro">{blog.excerpt} This is what compassion in action looked like when our community chose to show up for one another.</p>
      <h2>A morning built on many small acts of care</h2><p>Before sunrise, volunteers arrived with open hands and a shared plan. Some sorted supplies, some greeted families, and others made sure every person had time to be heard. The work was practical, but its meaning reached far beyond the day.</p><p>Our team believes lasting change begins with listening. That is why every drive starts with conversations with the people we serve and continues with trusted local partners.</p>
      <blockquote>“When we work together, help feels less like a handout and more like belonging.”</blockquote>
      <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1100&q=85" alt="Volunteers joining hands" />
      <h2>What your support made possible</h2><p>Donations funded essential supplies while volunteers gave their time, skills, and encouragement. Families left with more than a kit or a meal: they left knowing their community was standing beside them.</p><p>We are carrying this energy forward through monthly outreach events, youth-led initiatives, and partnerships that make each contribution go further.</p>
      <h2>Come be part of the next chapter</h2><p>Every story here has a place for you. Share it, volunteer at an upcoming event, or give what you can. Together, we can keep creating moments of relief, confidence, and hope.</p>
    </article>
    <section className="related-section container"><div className="section-title"><span className="eyebrow">Continue reading</span><h2>Related stories</h2></div><div className="related-grid">{related.map((item) => <article className="blog-card" key={item.slug}><img src={item.image} alt="" /><div className="blog-card-body"><span className="blog-badge">{item.category}</span><h3>{item.title}</h3><Link className="text-link" to={`/blog/${item.slug}`}>Read More <span>→</span></Link></div></article>)}</div></section>
    <section className="article-cta"><div className="container"><div><span className="eyebrow">Your next step</span><h2>Inspired by this story?</h2><p>Join a community of people who turn empathy into meaningful action.</p></div><div className="cta-buttons"><Link to="/volunteer" className="btn btn-secondary">Become a Volunteer</Link><Link to="/donate" className="btn btn-primary">Donate Now</Link></div></div></section>
  </main>;
}
