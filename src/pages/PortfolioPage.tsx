import React from "react";
import Reveal from "../components/Reveal";
import Navbar from "../components/Navbar";
import "./PortfolioPage.css";

export default function PortfolioPage(): JSX.Element {
  return (
    <main className="portfolio-page">
      <Navbar />

      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <Reveal>
            <h1>Our Investment Portfolio</h1>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="subtitle">
              Discover the innovative companies we're backing to build Africa's
              digital future. Our portfolio represents the best of African
              entrepreneurship and innovation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Portfolio Companies */}
      <section className="portfolio-companies">
        <div className="container">
          <Reveal>
            <h2
              style={{
                textAlign: "center",
                fontSize: "2.5rem",
                marginBottom: "24px",
              }}
            >
              Featured Portfolio Companies
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
              Meet the innovative companies that are transforming Africa's
              digital landscape and creating lasting value for millions of
              people.
            </p>
          </Reveal>

          <div className="companies-grid">
            <div className="companies-left">
              {/* Card 1 - Fintech & Banking (Bottom Layer) */}
              <Reveal delayMs={240}>
                <div className="company-card-1">
                  <div className="company-header">
                    <div className="company-logo">FB</div>
                    <div className="company-info">
                      <h3>FinFlow & BankCore</h3>
                      <div className="sector">
                        Fintech & Banking Infrastructure
                      </div>
                    </div>
                  </div>
                  <p className="company-description">
                    Revolutionizing Africa's financial services through
                    blockchain payments, core banking systems, and regulatory
                    compliance solutions. Serving 50+ financial institutions
                    with $5.7M+ combined revenue.
                  </p>
                </div>
              </Reveal>

              {/* Card 2 - Education (Middle Layer) */}
              <Reveal delayMs={360}>
                <div className="company-card-2">
                  <div className="company-header">
                    <div className="company-logo">E</div>
                    <div className="company-info">
                      <h3>EduTech Pro</h3>
                      <div className="sector">Education & Learning</div>
                    </div>
                  </div>
                  <p className="company-description">
                    Building Africa's largest online learning platform,
                    providing access to quality education for over 2 million
                    students across the continent.
                  </p>
                </div>
              </Reveal>

              {/* Card 3 - Energy (Top Layer) */}
              <Reveal delayMs={480}>
                <div className="company-card-3">
                  <div className="company-header">
                    <div className="company-logo">P</div>
                    <div className="company-info">
                      <h3>PowerGrid</h3>
                      <div className="sector">Energy & Infrastructure</div>
                    </div>
                  </div>
                  <p className="company-description">
                    Developing smart grid solutions for renewable energy
                    distribution, helping African cities transition to
                    sustainable energy sources.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column - Marketing Message */}
            <div className="companies-right ml-16">
              {/* Floating Elements */}
              <div className="floating-element"></div>
              <div className="floating-element"></div>
              <div className="floating-element"></div>

              <Reveal delayMs={600}>
                <div className="marketing-content">
                  <h3>Targeted engagement at scale</h3>
                  <p>
                    With the help of our portfolio companies, now you can access
                    financial services, education, and energy solutions from
                    every corner of Africa. Simply connect with our companies
                    and enjoy the widest variety of functions and features.
                  </p>
                  <a href="/contact" className="btn">
                    Learn more
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Stages */}
      <section className="investment-stages">
        <div className="container">
          <Reveal>
            <h2
              style={{
                textAlign: "center",
                fontSize: "2.5rem",
                marginBottom: "24px",
              }}
            >
              Investment Stages
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
              We invest across different stages of company development,
              providing the right level of support and capital for each growth
              phase.
            </p>
          </Reveal>

          <div className="stages-grid">
            <Reveal delayMs={240}>
              <div className="stage-card">
                <div className="stage-icon">
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
                <div className="stage-content">
                  <h4>Seed Stage</h4>
                  <p>
                    Early-stage companies with innovative ideas and strong
                    founding teams. We provide initial capital and strategic
                    guidance to help validate concepts.
                  </p>
                  <div className="stage-details">
                    {/* <div className="stage-metric">
                      <span className="metric-label">Investment Range</span>
                      <span className="metric-value">$100K - $1M</span>
                    </div> */}
                    <div className="stage-focus">
                      <span className="focus-icon">🎯</span>
                      <span>Product Validation</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={360}>
              <div className="stage-card">
                <div className="stage-icon">
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
                <div className="stage-content">
                  <h4>Series A</h4>
                  <p>
                    Companies with proven product-market fit and early traction.
                    We help scale operations and expand into new markets.
                  </p>
                  <div className="stage-details">
                    {/* <div className="stage-metric">
                      <span className="metric-label">Investment Range</span>
                      <span className="metric-value">$1M - $5M</span>
                    </div> */}
                    <div className="stage-focus">
                      <span className="focus-icon">🚀</span>
                      <span>Market Expansion</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={480}>
              <div className="stage-card">
                <div className="stage-icon">
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
                <div className="stage-content">
                  <h4>Series B+</h4>
                  <p>
                    Established companies with strong growth and market
                    leadership. We support expansion and help prepare for
                    potential exits.
                  </p>
                  <div className="stage-details">
                    {/* <div className="stage-metric">
                      <span className="metric-label">Investment Range</span>
                      <span className="metric-value">$5M - $20M</span>
                    </div> */}
                    <div className="stage-focus">
                      <span className="focus-icon">📈</span>
                      <span>Scale & Exit</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta">
        <div className="container">
          <div className="cta-content">
            <Reveal>
              <h2>Join Our Portfolio</h2>
            </Reveal>
            <Reveal delayMs={120}>
              <p>
                Are you building the next great African company? We're always
                looking for innovative founders and teams to partner with.
              </p>
            </Reveal>
            <Reveal delayMs={240}>
              <div className="cta-buttons">
                <a href="/contact" className="btn btn-primary">
                  Pitch Your Company 🚀
                </a>
                <a href="/thesis" className="btn">
                  Learn Our Thesis 📚
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
