
import './App.css';

function App() {
  const features = [
    {
      icon: '✓',
      title: 'Verified Opportunities',
      description:
        'Explore quality internship opportunities and find the right fit for your skills.',
    },
    {
      icon: '⚡',
      title: 'Instant Applications',
      description:
        'Discover opportunities and take the next step in your career with ease.',
    },
    {
      icon: '↗',
      title: 'Career Insights',
      description:
        'Make informed career decisions and move closer to your professional goals.',
    },
  ];

  const handleSearch = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const jobTitle = formData.get('jobTitle')?.trim();
    const location = formData.get('location')?.trim();

    if (!jobTitle && !location) {
      alert('Please enter a job title or location.');
      return;
    }

    alert(
      `Search details:\nJob title: ${jobTitle || 'Any'}\nLocation: ${
        location || 'Any'
      }\n\nThis is a frontend demo. Job search API is not connected yet.`
    );
  };

  return (
    <div className="app" id="home">
      {/* Navbar */}
      <header className="navbar">
        <a href="#home" className="logo" aria-label="Quickks home">
          Quickks<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#internships">Find Internships</a>
          <a href="#jobs">Jobs</a>
          <a href="#companies">Companies</a>
        </nav>

        <a className="nav-cta" href="#get-started">
          Get Started <span aria-hidden="true">→</span>
        </a>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              YOUR CAREER STARTS HERE
            </div>

            <h1>
              Find Your Dream
              <br />
              Internship <span>in 24 Hours</span>
            </h1>

            <p className="hero-description">
              Discover exciting internship opportunities, connect with
              great companies, and take the first step towards your dream
              career.
            </p>

            <form className="search-form" onSubmit={handleSearch}>
              <label className="search-field">
                <span className="field-icon" aria-hidden="true">
                  ⌕
                </span>

                <span className="field-content">
                  <span className="field-label">Job title or skill</span>
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="e.g. React Developer"
                    aria-label="Job title or skill"
                  />
                </span>
              </label>

              <span className="search-divider"></span>

              <label className="search-field location-field">
                <span className="field-icon" aria-hidden="true">
                  ◎
                </span>

                <span className="field-content">
                  <span className="field-label">Location</span>
                  <input
                    type="text"
                    name="location"
                    placeholder="e.g. Pune or Remote"
                    aria-label="Job location"
                  />
                </span>
              </label>

              <button className="search-button" type="submit">
                Find Internships <span aria-hidden="true">→</span>
              </button>
            </form>

            <p className="hero-note">
              <span aria-hidden="true">✓</span> Explore opportunities
              <span aria-hidden="true">✓</span> Start your career
            </p>
          </div>

          <div className="hero-decoration decoration-one"></div>
          <div className="hero-decoration decoration-two"></div>
        </section>

        {/* Trusted Companies */}
        <section className="trusted" id="companies">
          <p className="trusted-label">
            OPPORTUNITIES TO BUILD YOUR FUTURE
          </p>

          <div className="company-list" aria-label="Example company names">
            <span className="company-google">
              Google<span className="company-dot">.</span>
            </span>
            <span className="company-microsoft">
              <span className="ms-symbol" aria-hidden="true">
                <i></i><i></i><i></i><i></i>
              </span>
              Microsoft
            </span>
            <span className="company-amazon">amazon<span>.</span></span>
            <span className="company-meta">Meta</span>
            <span className="company-ibm">IBM</span>
          </div>
        </section>

        {/* Features */}
        <section className="features-section" id="internships">
          <div className="section-heading">
            <span className="section-eyebrow">WHY QUICKKS</span>

            <h2>
              Your next opportunity,
              <br />
              <span>made simpler.</span>
            </h2>

            <p>
              Everything you need to take the first step towards
              your professional journey.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <div className={`feature-icon icon-${index + 1}`}>
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <a href="#get-started" className="feature-link">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Jobs anchor */}
        <div id="jobs" className="jobs-anchor"></div>

        {/* Footer CTA */}
        <section className="footer-cta" id="get-started">
          <div className="cta-decoration cta-decoration-one"></div>
          <div className="cta-decoration cta-decoration-two"></div>

          <div className="cta-content">
            <span className="cta-eyebrow">YOUR FUTURE IS WAITING</span>

            <h2>Ready to land your internship?</h2>

            <p>
              Take the first step today. Your dream career starts
              with one opportunity.
            </p>

            <a href="#home" className="cta-button">
              Get Started <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <a href="#home" className="logo footer-logo">
          Quickks<span>.</span>
        </a>

        <p>Helping students take the first step towards their careers.</p>

        <span className="copyright">
          © 2026 Quickks. All rights reserved.
        </span>
      </footer>
    </div>
  );
}

export default App;
