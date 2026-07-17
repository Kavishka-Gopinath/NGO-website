import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import '../blog.css';
import './contact-blog.css';

const categories = [
  'All',
  'Charity',
  'Events',
  'Community',
  'Volunteers',
  'Awareness',
  'Success Stories',
];

export default function Blog() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const featured = blogs.find((blog) => blog.featured);

  const filtered = useMemo(
    () =>
      blogs.filter(
        (blog) =>
          (activeCategory === 'All' || blog.category === activeCategory) &&
          `${blog.title} ${blog.excerpt} ${blog.category}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [activeCategory, query]
  );

  return (
    <>
      {/* ── Hero ───────────────────────────────────── */}
      <section className="blog-hero">
        <div className="container">
          <span className="eyebrow">The Arise Journal</span>
          <h1>Stories That Inspire Change</h1>
          <p>
            Read inspiring stories, event highlights, community updates, and
            the impact created by The Arise '20 Foundation.
          </p>
        </div>
      </section>

      {/* ── Main content ───────────────────────────── */}
      <main className="blog-page container">

        {/* Featured story */}
        <section className="featured-story">
          <img src={featured.image} alt={featured.title} />
          <div className="featured-copy">
            <span className="blog-badge">{featured.category}</span>
            <p className="blog-meta">
              {featured.date} · {featured.readTime}
            </p>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <p className="byline">By {featured.author}</p>
            <Link className="text-link" to={`/blog/${featured.slug}`}>
              Read the story <span>→</span>
            </Link>
          </div>
        </section>

        {/* Toolbar */}
        <section className="blog-toolbar" aria-label="Search and filter stories">
          <label className="search-field">
            <span>⌕</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search stories, events, and impact"
            />
          </label>
          <div className="filter-chips">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? 'selected' : ''}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Grid + Sidebar */}
        <div className="blog-layout">

          {/* Blog cards */}
          <section className="blog-grid" aria-label="Blog posts">
            {filtered.map((blog) => (
              <article className="blog-card" key={blog.slug}>
                <img src={blog.image} alt={blog.title} />
                <div className="blog-card-body">
                  <div className="card-topline">
                    <span className="blog-badge">{blog.category}</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <p className="blog-meta">{blog.date}</p>
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                  <Link className="text-link" to={`/blog/${blog.slug}`}>
                    Read More <span>→</span>
                  </Link>
                </div>
              </article>
            ))}

            {!filtered.length && (
              <p className="empty-stories">
                No stories match your search. Try another keyword or category.
              </p>
            )}
          </section>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            {/* Popular posts */}
            <div>
              <h3>Popular Posts</h3>
              {blogs.slice(0, 3).map((blog, index) => (
                <Link
                  className="sidebar-post"
                  to={`/blog/${blog.slug}`}
                  key={blog.slug}
                >
                  <span>0{index + 1}</span>
                  <div>
                    <strong>{blog.title}</strong>
                    <small>{blog.readTime}</small>
                  </div>
                </Link>
              ))}
            </div>

            {/* Categories */}
            <div>
              <h3>Browse Categories</h3>
              <ul className="category-list">
                {categories.slice(1).map((item) => (
                  <li key={item}>
                    <button onClick={() => setActiveCategory(item)}>
                      {item}
                      <span>›</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Archives */}
            <div>
              <h3>Monthly Archives</h3>
              <p className="archive-link">July 2026</p>
              <p className="archive-link">June 2026</p>
              <p className="archive-link">May 2026</p>
            </div>
          </aside>
        </div>
      </main>

      {/* ── Newsletter ─────────────────────────────── */}
      <section className="mission-newsletter">
        <div className="container">
          <div>
            <span className="eyebrow">Keep in touch</span>
            <h2>Stay Updated with Our Mission</h2>
            <p>
              Monthly stories of impact, upcoming events, and simple ways to
              make a difference.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              aria-label="Email address"
              placeholder="Your email address"
            />
            <button className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
