import Reveal from "../components/Reveal";
import Navbar from "../components/Navbar";
import "./SectorsPage.css";

export default function SectorsPage(): JSX.Element {
  return (
    <main className="sectors-page">
      <Navbar />

      {/* Hero Section */}
      <section className="sectors-hero">
        <div className="container">
          <Reveal>
            <h1>Strategic Investment Sectors</h1>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="subtitle">
              We focus on foundational sectors that are transforming Africa's
              digital economy. Each sector represents unique opportunities for
              innovation and sustainable growth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sectors Overview */}
      <section className="sectors-overview">
        <div className="container">
          <Reveal>
            <h2
              style={{
                textAlign: "center",
                fontSize: "2.5rem",
                marginBottom: "24px",
              }}
            >
              Our Core Investment Focus
            </h2>
          </Reveal>
          <Reveal delayMs={120}>
            <p
              style={{
                textAlign: "center",
                color: "var(--muted)",
                fontSize: "1.2rem",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              We invest in sectors that form the backbone of Africa's digital
              infrastructure, enabling thousands of other businesses to thrive
              and innovate.
            </p>
          </Reveal>

          <div className="sectors-grid">
            <Reveal delayMs={240}>
              <div className="sector-card">
                <div className="sector-header">
                  <div className="sector-icon">💳</div>
                  <h3 className="sector-title">Fintech & Payments</h3>
                </div>
                <p className="sector-description">
                  Revolutionizing financial services through innovative payment
                  solutions, digital lending platforms, and seamless B2B
                  infrastructure.
                </p>
                <div className="sector-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span className="feature-text">
                      Digital Payments & Wallets
                    </span>
                  </div>
                  {/* <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span className="feature-text">
                      Lending & Credit Solutions
                    </span>
                  </div> */}
                  {/* <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span className="feature-text">
                      B2B Financial Infrastructure
                    </span>
                  </div> */}
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span className="feature-text">
                      Cross-border Transactions
                    </span>
                  </div>
                </div>
                <div className="sector-stats">
                  <div className="sector-stat">
                    <span className="number">$115B</span>
                    <span className="label">Market Size</span>
                  </div>
                  <div className="sector-stat">
                    <span className="number">60%</span>
                    <span className="label">Growth Rate</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={360}>
              <div className="sector-card">
                <div className="sector-header">
                  <div className="sector-icon">🏦</div>
                  <h3 className="sector-title">Banking & Infrastructure</h3>
                </div>
                <p className="sector-description">
                  Building the foundation of modern banking with core systems,
                  regulatory compliance, and identity verification solutions.
                </p>
                <div className="sector-features">
                  {/* <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span className="feature-text">Core Banking Systems</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span className="feature-text">Regulatory Compliance</span>
                  </div> */}
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span className="feature-text">KYC/AML Solutions</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span className="feature-text">Banking Infrastructure</span>
                  </div>
                </div>
                <div className="sector-stats">
                  <div className="sector-stat">
                    <span className="number">$85B</span>
                    <span className="label">Market Size</span>
                  </div>
                  <div className="sector-stat">
                    <span className="number">45%</span>
                    <span className="label">Growth Rate</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={480}>
              <div className="sector-card">
                <div className="sector-header">
                  <div className="sector-icon">🎓</div>
                  <h3 className="sector-title">Education & Talent</h3>
                </div>
                <p className="sector-description">
                  Empowering the next generation through innovative learning
                  platforms, talent development tools, and educational financing
                  solutions.
                </p>
                <div className="sector-features">
                  {/* <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span className="feature-text">Learning Platforms</span>
                  </div> */}
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span className="feature-text">Talent Development</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span className="feature-text">Educational Finance</span>
                  </div>
                  {/* <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span className="feature-text">Skills Assessment</span>
                  </div> */}
                </div>
                <div className="sector-stats">
                  <div className="sector-stat">
                    <span className="number">$65B</span>
                    <span className="label">Market Size</span>
                  </div>
                  <div className="sector-stat">
                    <span className="number">55%</span>
                    <span className="label">Growth Rate</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={600}>
              <div className="sector-card">
                <div className="sector-header">
                  <div className="sector-icon">⚡</div>
                  <h3 className="sector-title">Energy & Infrastructure</h3>
                </div>
                <p className="sector-description">
                  Transforming energy infrastructure with distributed
                  generation, advanced storage solutions, and intelligent grid
                  management.
                </p>
                <div className="sector-features">
                  {/* <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span className="feature-text">Distributed Generation</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span className="feature-text">Energy Storage</span>
                  </div> */}
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span className="feature-text">Grid Software</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span className="feature-text">Smart Infrastructure</span>
                  </div>
                </div>
                <div className="sector-stats">
                  <div className="sector-stat">
                    <span className="number">$95B</span>
                    <span className="label">Market Size</span>
                  </div>
                  <div className="sector-stat">
                    <span className="number">70%</span>
                    <span className="label">Growth Rate</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Investment Focus */}
      <section className="investment-focus">
        <div className="container">
          <Reveal>
            <h2
              style={{
                textAlign: "center",
                fontSize: "2.5rem",
                marginBottom: "24px",
              }}
            >
              Investment Approach by Sector
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
              Each sector requires a tailored investment strategy based on
              market dynamics, regulatory environment, and growth potential.
            </p>
          </Reveal>

          <div className="focus-grid">
            <Reveal delayMs={240}>
              <div className="focus-item">
                <div className="focus-icon">
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
                <div className="focus-content">
                  <h4>Early Stage Focus</h4>
                  <p>
                    We invest at seed and Series A stages when companies are
                    defining their market position and building core teams.
                  </p>
                  <div className="focus-details">
                    {/* <div className="focus-metric">
                      <span className="metric-label">Investment Range</span>
                      <span className="metric-value">$100K - $5M</span>
                    </div> */}
                    <div className="focus-tags">
                      <span className="tag">Seed</span>
                      <span className="tag">Series A</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={480}>
              <div className="focus-item">
                <div className="focus-icon">
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
                <div className="focus-content">
                  <h4>Long-term Partnership</h4>
                  <p>
                    We build lasting relationships with founders, supporting
                    them through multiple funding rounds and growth stages.
                  </p>
                  <div className="focus-details">
                    {/* <div className="focus-metric">
                      <span className="metric-label">Partnership Duration</span>
                      <span className="metric-value">5+ Years</span>
                    </div> */}
                    <div className="focus-tags">
                      <span className="tag">Multi-Round</span>
                      <span className="tag">Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={600}>
              <div className="focus-item">
                <div className="focus-icon">
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
                <div className="focus-content">
                  <h4>Ecosystem Building</h4>
                  <p>
                    We actively connect our portfolio companies with each other,
                    creating network effects that benefit all participants.
                  </p>
                  <div className="focus-details">
                    {/* <div className="focus-metric">
                      <span className="metric-label">Network Size</span>
                      <span className="metric-value">50+ Companies</span>
                    </div> */}
                    <div className="focus-tags">
                      <span className="tag">Network</span>
                      <span className="tag">Collaboration</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="market-analysis">
        <div className="container">
          <Reveal>
            <h2
              style={{
                textAlign: "center",
                fontSize: "2.5rem",
                marginBottom: "24px",
              }}
            >
              Sector Market Analysis
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
              Understanding market dynamics and growth potential across key
              sectors helps us identify the most promising investment
              opportunities.
            </p>
          </Reveal>

          <div className="analysis-content">
            <Reveal delayMs={240}>
              <div className="analysis-text">
                <h3>Market Growth Trends</h3>
                <p>
                  Africa's digital transformation is creating unprecedented
                  opportunities across all sectors. Fintech leads with 60%
                  annual growth, followed by energy infrastructure at 70%,
                  education at 55%, and banking at 45%.
                </p>
                <p>
                  The combination of rapid urbanization, increasing internet
                  penetration, and a young, tech-savvy population creates
                  perfect conditions for sector-specific innovations and market
                  disruption.
                </p>

                <div style={{ marginTop: "32px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "16px" }}>
                    Key Growth Drivers:
                  </h4>
                  <ul style={{ color: "var(--muted)", lineHeight: "1.8" }}>
                    <li>
                      Mobile penetration exceeding 80% across major markets
                    </li>
                    <li>Regulatory reforms opening new opportunities</li>
                    <li>Growing demand for digital-first solutions</li>
                    <li>Infrastructure gaps creating leapfrog opportunities</li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={360}>
              <div className="analysis-chart">
                <div className="chart-container">
                  <div className="chart-bar fintech">
                    <div className="chart-label">Fintech</div>
                  </div>
                  <div className="chart-bar banking">
                    <div className="chart-label">Banking</div>
                  </div>
                  <div className="chart-bar education">
                    <div className="chart-label">Education</div>
                  </div>
                  <div className="chart-bar energy">
                    <div className="chart-label">Energy</div>
                  </div>
                  <div className="chart-bar health">
                    <div className="chart-label">Health</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sectors-cta">
        <div className="container">
          <div className="cta-content">
            <Reveal>
              <h2>Ready to Explore Investment Opportunities?</h2>
            </Reveal>
            <Reveal delayMs={120}>
              <p>
                Discover how we're building Africa's digital infrastructure, one
                sector at a time. Let's discuss how we can help you succeed.
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
