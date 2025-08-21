import React from "react";
import "./Footer.css";

export default function Footer(): JSX.Element {
  return (
    <footer id="footer" className="footer">
      <div className="footer-main">
        <div className="container">
          {/* Main Footer Content */}
          <div className="footer-content">
            {/* Company Info Section */}
            <div className="footer-section company-info">
              <div className="footer-logo">
                <div className="logo-icon">🌳</div>
                <h3>Blackoak</h3>
              </div>
              <p className="company-description">
                We invest in exceptional founders building the future of
                finance, technology, and sustainable innovation. Our mission is
                to support visionary entrepreneurs who are reshaping industries.
              </p>
              {/* <div className="social-links">
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <span className="social-icon">💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <span className="social-icon">🐦</span>
                  <span>Twitter</span>
                </a>
                <a href="#" className="social-link" aria-label="Medium">
                  <span className="social-icon">📝</span>
                  <span>Medium</span>
                </a>
              </div> */}
            </div>

            {/* Investment Focus Section */}
            <div className="footer-section investment-focus">
              <h4>🎯 Investment Focus</h4>
              <ul className="focus-list">
                {/* <li>
                  <span className="focus-icon">🚀</span>
                  <div>
                    <strong>Early Stage</strong>
                    <span>Seed to Series A</span>
                  </div>
                </li> */}
                <li>
                  <span className="focus-icon">💰</span>
                  <div>
                    <strong>Fintech</strong>
                    <span>Banking & Payments</span>
                  </div>
                </li>
                <li>
                  <span className="focus-icon">🌱</span>
                  <div>
                    <strong>Sustainability</strong>
                    <span>Clean Energy & Tech</span>
                  </div>
                </li>
                {/* <li>
                  <span className="focus-icon">🎓</span>
                  <div>
                    <strong>EdTech</strong>
                    <span>Future of Learning</span>
                  </div>
                </li> */}
              </ul>
            </div>

            {/* Portfolio Highlights Section */}
            <div className="footer-section portfolio-highlights">
              <h4>🏆 Portfolio Highlights</h4>
              <div className="portfolio-stats">
                <div className="stat-item">
                  <div className="stat-number">$2.5B+</div>
                  <div className="stat-label">Portfolio Value</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">45+</div>
                  <div className="stat-label">Companies</div>
                </div>
                {/* <div className="stat-item">
                  <div className="stat-number">12</div>
                  <div className="stat-label">Exits</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">8</div>
                  <div className="stat-label">Unicorns</div>
                </div> */}
              </div>
              {/* <div className="featured-companies">
                <span className="featured-label">Featured:</span>
                <div className="company-tags">
                  <span className="company-tag">PayFlow</span>
                  <span className="company-tag">EduTech</span>
                  <span className="company-tag">GreenBank</span>
                  <span className="company-tag">AI Finance</span>
                </div>
              </div> */}
            </div>
          </div>

          {/* Interactive Elements Section */}
          <div className="footer-interactive">
            <div className="unified-cta-section">
              <div className="cta-content">
                <h4>🚀 Ready to Pitch Ideas?</h4>
                <p>
                  Let's discuss how we can support your vision and accelerate
                  your growth. Start a conversation and let's explore the
                  possibilities together.
                </p>

                <div className="cta-actions">
                  <div className="contact-section">
                    <h5>🤝 Start a Conversation</h5>
                    <a
                      href="mailto:hello@blackoakcapital.com?subject=Partnership%20Discussion"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn primary"
                    >
                      <span>Start Conversation</span>
                      <span className="btn-icon">✉️</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-links">
              <a className="footer-link">
                Privacy Policy
              </a>
              <a className="footer-link">
                Terms of Service
              </a>
              <a className="footer-link">
                Cookie Policy
              </a>
              <a className="footer-link">
                Accessibility
              </a>
            </div>
            <div className="footer-legal">
              <p>&copy; 2024 Blackoak Capital. All rights reserved.</p>
              <p className="legal-note">
                Blackoak Capital is a registered investment advisor
              </p>
            </div>
            <div className="footer-badges">
              <div className="badge">
                <span className="badge-icon">✅</span>
                <span>SEC Registered</span>
              </div>
              <div className="badge">
                <span className="badge-icon">🌱</span>
                <span>ESG Focused</span>
              </div>
              {/* <div className="badge">
                <span className="badge-icon">🏆</span>
                <span>Top 100 VC</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="footer-decoration">
        <div className="decoration-line"></div>
        <div className="decoration-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </footer>
  );
}
