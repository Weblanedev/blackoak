import Reveal from "../components/Reveal";
import Navbar from "../components/Navbar";
import "./ThesisPage.css";

export default function ThesisPage(): JSX.Element {
  return (
    <main className="thesis-page">
      <Navbar />

      {/* Hero Section with Thesis */}
      <section className="thesis-hero">
        <div className="container">
          <Reveal>
            <h1>Building Africa's Digital Future</h1>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="subtitle">
              Our approach centers on backing foundational software and
              infrastructure that will power Africa's digital economy for
              decades to come.
            </p>
          </Reveal>

          <Reveal delayMs={240}>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">1.4B</span>
                <span className="stat-label">People</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">80%+</span>
                <span className="stat-label">Mobile Penetration</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">1.4B</span>
                <span className="stat-label">Population</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="investment-philosophy">
        <div className="container">
          <Reveal>
            <h2
              style={{
                textAlign: "center",
                fontSize: "2.5rem",
                marginBottom: "24px",
              }}
            >
              Investment Philosophy
            </h2>
          </Reveal>
          <Reveal delayMs={120}>
            <p
              style={{
                textAlign: "center",
                color: "var(--muted)",
                fontSize: "1.2rem",
                maxWidth: "800px",
                margin: "0 auto 60px auto",
              }}
            >
              We believe Africa's digital transformation requires more than just
              apps - it needs the foundational infrastructure that enables
              innovation across all sectors.
            </p>
          </Reveal>

          <div className="thesis-cards">
            <Reveal delayMs={240}>
              <div className="thesis-card">
                <div className="card-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="card-content">
                  <h3>Market Opportunity</h3>
                  <p>
                    Africa's 1.4 billion people represent the world's largest
                    untapped market for digital services, with mobile
                    penetration exceeding 80% and growing rapidly.
                  </p>
                  <div className="card-stats">
                    <span className="stat">1.4B+</span>
                    <span className="stat">80%+</span>
                    <span className="stat">25%</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={360}>
              <div className="thesis-card">
                <div className="card-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="card-content">
                  <h3>Infrastructure First</h3>
                  <p>
                    We invest in the foundational layers - payments, banking,
                    education, and energy - that enable thousands of other
                    businesses to thrive.
                  </p>
                  <div className="card-tags">
                    <span className="tag">Payments</span>
                    <span className="tag">Banking</span>
                    <span className="tag">Education</span>
                    <span className="tag">Energy</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={480}>
              <div className="thesis-card">
                <div className="card-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-1.7 2.55A1 1 0 0 0 14 12v8h-2v-8c0-.55.45-1 1-1s1 .45 1 1v6h2v-6c0-.55.45-1 1-1s1 .45 1 1v6h2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="card-content">
                  <h3>Operator Support</h3>
                  <p>
                    Beyond capital, we provide hands-on support with
                    distribution, talent acquisition, regulatory navigation, and
                    strategic partnerships.
                  </p>
                  <div className="card-features">
                    <div className="feature">
                      <span className="feature-icon">🎯</span>
                      <span>Distribution</span>
                    </div>
                    <div className="feature">
                      <span className="feature-icon">👥</span>
                      <span>Talent</span>
                    </div>
                    <div className="feature">
                      <span className="feature-icon">📋</span>
                      <span>Regulatory</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Investment Strategy */}
      <section className="investment-strategy">
        <div className="container">
          <Reveal>
            <h2
              style={{
                textAlign: "center",
                fontSize: "2.5rem",
                marginBottom: "24px",
              }}
            >
              Investment Strategy
            </h2>
          </Reveal>
          <Reveal delayMs={120}>
            <p
              style={{
                textAlign: "center",
                color: "var(--muted)",
                fontSize: "1.2rem",
                maxWidth: "800px",
                margin: "0 auto 60px auto",
              }}
            >
              We take a systematic approach to identifying and supporting the
              companies that will define Africa's digital future.
            </p>
          </Reveal>

          <div className="strategy-grid">
            <Reveal delayMs={240}>
              <div className="strategy-item">
                <div className="strategy-icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="strategy-content">
                  <h4>Early Stage Focus</h4>
                  <p>
                    We invest at the seed and Series A stages, when companies
                    are defining their market position and building their core
                    team.
                  </p>
                  <div className="strategy-stage">
                    <span className="stage-badge">Seed</span>
                    <span className="stage-badge">Series A</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={480}>
              <div className="strategy-item">
                <div className="strategy-icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="strategy-content">
                  <h4>Long-term Partnership</h4>
                  <p>
                    We build lasting relationships with founders, supporting
                    them through multiple funding rounds and growth stages.
                  </p>
                  <div className="strategy-metric">
                    <span className="metric-value">Strategic</span>
                    <span className="metric-label">Partnership</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={600}>
              <div className="strategy-item">
                <div className="strategy-icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="strategy-content">
                  <h4>Ecosystem Building</h4>
                  <p>
                    We actively connect our portfolio companies with each other,
                    creating a network effect that benefits all participants.
                  </p>
                  <div className="strategy-network">
                    <span className="network-icon">🔗</span>
                    <span className="network-text">Portfolio Network</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="market-opportunity">
        <div className="map-background"></div>
        <div className="container">
          <Reveal>
            <h2
              style={{
                textAlign: "center",
                fontSize: "2.5rem",
                marginBottom: "24px",
              }}
            >
              The Market Opportunity
            </h2>
          </Reveal>
          <Reveal delayMs={120}>
            <p
              style={{
                textAlign: "center",
                color: "var(--muted)",
                fontSize: "1.2rem",
                maxWidth: "800px",
                margin: "0 auto 60px auto",
              }}
            >
              Africa's digital transformation is creating unprecedented
              opportunities for innovative companies to build lasting value.
            </p>
          </Reveal>

          <div className="opportunity-content">
            <Reveal delayMs={240}>
              <div className="opportunity-text">
                <h3>Why Africa Now?</h3>
                <p>
                  Over 60% of Africa's population is under 25, with mobile
                  penetration exceeding 80%. This demographic dividend, combined
                  with rapid urbanization and increasing internet connectivity,
                  creates a perfect storm for digital innovation.
                </p>
                <p>
                  Traditional infrastructure gaps in banking, education, and
                  energy present massive opportunities for leapfrog solutions
                  that can serve hundreds of millions of people who are coming
                  online for the first time.
                </p>

                <div className="opportunity-stats">
                  <div className="opportunity-stat">
                    <span className="number">1.4B</span>
                    <span className="label">Population</span>
                  </div>
                  <div className="opportunity-stat">
                    <span className="number">80%+</span>
                    <span className="label">Mobile Penetration</span>
                  </div>
                  <div className="opportunity-stat">
                    <span className="number">60%</span>
                    <span className="label">Under 25</span>
                  </div>
                  <div className="opportunity-stat">
                    <span className="number">1.4B</span>
                    <span className="label">Population</span>
                  </div>
                </div>

                <div className="map-highlights">
                  <div className="highlight-stat">
                    <span className="highlight-number">54</span>
                    <span className="highlight-label">Countries</span>
                  </div>
                  <div className="highlight-stat">
                    <span className="highlight-number">1.4B</span>
                    <span className="highlight-label">People</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={360}>
              <div className="opportunity-visual">
                <div className="visual-placeholder">
                  <div className="placeholder-icon">🌍</div>
                  <p>Africa's Digital Future</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="how-we-help">
        <div className="container">
          <Reveal>
            <h2
              style={{
                textAlign: "center",
                fontSize: "2.5rem",
                marginBottom: "24px",
              }}
            >
              How We Help Founders Succeed
            </h2>
          </Reveal>
          <Reveal delayMs={120}>
            <p
              style={{
                textAlign: "center",
                color: "var(--muted)",
                fontSize: "1.2rem",
                maxWidth: "800px",
                margin: "0 auto 60px auto",
              }}
            >
              We provide more than just capital - we're active partners in
              building the future of Africa's digital economy.
            </p>
          </Reveal>

          <div className="help-grid">
            <Reveal delayMs={240}>
              <div className="help-item">
                <div className="help-icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="help-content">
                  <h3>Strategic Capital</h3>
                  <p>
                    Adequate funding to ensure companies can execute their
                    vision and reach key milestones.
                  </p>
                  <div className="help-metric">
                    <span className="metric-icon">💎</span>
                    <span>Lead/Follow</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={360}>
              <div className="help-item">
                <div className="help-icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-1.7 2.55A1 1 0 0 0 14 12v8h-2v-8c0-.55.45-1 1-1s1 .45 1 1v6h2v-6c0-.55.45-1 1-1s1 .45 1 1v6h2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="help-content">
                  <h3>Talent Acquisition</h3>
                  <p>
                    Access to our network of exceptional engineers, operators,
                    and leaders across Africa and globally.
                  </p>
                  <div className="help-metric">
                    <span className="metric-icon">🌍</span>
                    <span>Global Network</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={480}>
              <div className="help-item">
                <div className="help-icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="help-content">
                  <h3>Strategic Partnerships</h3>
                  <p>
                    Connect with potential customers, distribution partners, and
                    strategic allies across our ecosystem.
                  </p>
                  <div className="help-metric">
                    <span className="metric-icon">🤝</span>
                    <span>Ecosystem</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={600}>
              <div className="help-item">
                <div className="help-icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="help-content">
                  <h3>Regulatory Navigation</h3>
                  <p>
                    Navigate complex regulatory environments with insights from
                    our network of legal experts.
                  </p>
                  <div className="help-metric">
                    <span className="metric-icon">📋</span>
                    <span>Expert Network</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={720}>
              <div className="help-item">
                <div className="help-icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="help-content">
                  <h3>Follow-on Funding</h3>
                  <p>
                    Maintain meaningful ownership and support through subsequent
                    funding rounds and growth stages.
                  </p>
                  <div className="help-metric">
                    <span className="metric-icon">🚀</span>
                    <span>Long-term</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={840}>
              <div className="help-item">
                <div className="help-icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="help-content">
                  <h3>Market Expansion</h3>
                  <p>
                    Scale beyond initial markets with insights into new
                    geographies and customer segments.
                  </p>
                  <div className="help-metric">
                    <span className="metric-icon">📈</span>
                    <span>Scale Ready</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="thesis-cta">
        <div className="container">
          <div className="cta-content">
            <Reveal>
              <h2>Ready to Build Africa's Future?</h2>
            </Reveal>
            <Reveal delayMs={120}>
              <p>
                If you're building foundational software or infrastructure for
                Africa's digital economy, we'd love to hear from you. Let's
                discuss how we can help you scale and succeed.
              </p>
            </Reveal>
            <Reveal delayMs={240}>
              <div className="cta-buttons">
                <a href="/contact" className="btn btn-primary">
                  Get in Touch 🚀
                </a>
                <a href="/portfolio" className="btn">
                  View Portfolio 📊
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
