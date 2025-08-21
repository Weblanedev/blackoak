import React from "react";
import "./PitchIntro.css";

export default function PitchIntro(): JSX.Element {
  return (
    <section className="pitch-intro-section">
      <div className="container">
        {/* Engaging Content Section */}
        <div className="engaging-content-section">
          <div className="content-grid">
            {/* Left Column - VC Insights */}
            <div className="vc-insights">
              <div className="insight-card">
                <div className="insight-icon">🚀</div>
                <h3>Why Venture Capital?</h3>
                <p>
                  Venture capital isn't just about funding—it's about building
                  the future together. We provide more than capital; we offer
                  strategic guidance, operational support, and access to a
                  network of founders, investors, and industry experts.
                </p>
                <div className="insight-stats">
                  <div className="stat-item">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">$50M+</span>
                    <span className="stat-label">Capital Deployed</span>
                  </div>
                </div>
              </div>

              <div className="insight-card">
                <div className="insight-icon">🌍</div>
                <h3>Africa's Digital Revolution</h3>
                <p>
                  Africa is experiencing unprecedented digital transformation.
                  With 1.4 billion people and rapidly growing internet adoption,
                  the continent presents unique opportunities for innovative
                  solutions in fintech, education, and energy.
                </p>
                <div className="growth-metrics">
                  <div className="metric">
                    <span className="metric-value">100%</span>
                    <span className="metric-label">
                      Internet Penetration Growth
                    </span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">$115B</span>
                    <span className="metric-label">Digital Economy Value</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="visual-elements">
              <div className="illustration-container">
                <div className="floating-card card-1">
                  <div className="card-icon">💡</div>
                  <div className="card-content">
                    <h4>Innovation</h4>
                    <p>Breakthrough ideas</p>
                  </div>
                </div>

                <div className="floating-card card-2">
                  <div className="card-icon">🤝</div>
                  <div className="card-content">
                    <h4>Partnership</h4>
                    <p>Long-term collaboration</p>
                  </div>
                </div>

                <div className="floating-card card-3">
                  <div className="card-icon">📊</div>
                  <div className="card-content">
                    <h4>Growth</h4>
                    <p>Scalable solutions</p>
                  </div>
                </div>
              </div>

              <div className="analytics-showcase">
                <h3>Our Investment Focus</h3>
                <div className="analytics-grid">
                  <div className="analytics-item">
                    <div className="analytics-chart">
                      <div className="chart-bar" style={{ height: "80%" }}>
                        <span className="chart-value">80%</span>
                      </div>
                    </div>
                    <span className="analytics-label">Fintech & Banking</span>
                  </div>

                  <div className="analytics-item">
                    <div className="analytics-chart">
                      <div className="chart-bar" style={{ height: "65%" }}>
                        <span className="chart-value">65%</span>
                      </div>
                    </div>
                    <span className="analytics-label">Education</span>
                  </div>

                  <div className="analytics-item">
                    <div className="analytics-chart">
                      <div className="chart-bar" style={{ height: "55%" }}>
                        <span className="chart-value">55%</span>
                      </div>
                    </div>
                    <span className="analytics-label">Energy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="cta-section">
            <div className="cta-content">
              <h2>Ready to Build Something Amazing?</h2>
              <p>
                Whether you're a founder with a vision or a partner looking to
                collaborate, we're here to help you succeed. Our team of
                experienced investors and operators is ready to support your
                journey.
              </p>
              <div className="cta-features">
                <div className="cta-feature">
                  <span className="feature-icon">⚡</span>
                  <span>Quick Response (Within 1 Week)</span>
                </div>
                <div className="cta-feature">
                  <span className="feature-icon">🔒</span>
                  <span>100% Confidential</span>
                </div>
                <div className="cta-feature">
                  <span className="feature-icon">🎯</span>
                  <span>Strategic Guidance</span>
                </div>
              </div>
              <div className="cta-button">
                <a href="/contact" className="btn btn-primary">
                  Pitch Your Company
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
