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
                  the future together. We provide strategic guidance, industry
                  connections, and operational support to help founders scale
                  their vision into reality.
                </p>
                <div className="insight-stats">
                  <div className="stat-item">
                    <span className="stat-number">Strategic Support</span>
                    <span className="stat-label">Beyond Capital</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">Industry Network</span>
                    <span className="stat-label">Connections & Access</span>
                  </div>
                </div>
              </div>

              <div className="insight-card">
                <div className="insight-icon">🌍</div>
                <h3>Access to Opportunities</h3>
                <p>
                  Venture capital opens doors to markets, talent, and resources
                  that would otherwise be out of reach. We help founders access
                  the African ecosystem and connect with the right partners to
                  accelerate growth.
                </p>
                <div className="growth-metrics">
                  <div className="metric">
                    <span className="metric-value">Market Access</span>
                    <span className="metric-label">
                      Regional & Global Reach
                    </span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">Talent Network</span>
                    <span className="metric-label">Expert Connections</span>
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

                <div className="floating-card card-3 mb-8">
                  <div className="card-icon">📊</div>
                  <div className="card-content">
                    <h4>Growth</h4>
                    <p>Scalable solutions</p>
                  </div>
                </div>
              </div>

              <div className="analytics-showcase">
                <h3>Our Investment Focus</h3>
                <div className="pie-chart-container">
                  <div className="pie-chart">
                    <div
                      className="pie-segment fintech"
                      style={{ transform: "rotate(0deg)" }}
                    >
                      <div className="segment-label">Fintech & Banking</div>
                    </div>
                    <div
                      className="pie-segment education"
                      style={{ transform: "rotate(120deg)" }}
                    >
                      <div className="segment-label">Education</div>
                    </div>
                    <div
                      className="pie-segment energy"
                      style={{ transform: "rotate(240deg)" }}
                    >
                      <div className="segment-label">Energy</div>
                    </div>
                  </div>
                  <div className="pie-legend">
                    <div className="legend-item">
                      <div className="legend-color fintech"></div>
                      <span>Fintech & Banking</span>
                    </div>
                    <div className="legend-item">
                      <div className="legend-color education"></div>
                      <span>Education</span>
                    </div>
                    <div className="legend-item">
                      <div className="legend-color energy"></div>
                      <span>Energy</span>
                    </div>
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
                  <span>Quick Response</span>
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
