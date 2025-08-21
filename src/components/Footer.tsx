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
                <li>
                  <span className="focus-icon">💳</span>
                  <div>
                    <strong>Fintech</strong>
                    <span>Payments & Banking</span>
                  </div>
                </li>
                <li>
                  <span className="focus-icon">🎓</span>
                  <div>
                    <strong>Education</strong>
                    <span>Learning & Talent</span>
                  </div>
                </li>
                <li>
                  <span className="focus-icon">⚡</span>
                  <div>
                    <strong>Energy</strong>
                    <span>Clean Tech</span>
                  </div>
                </li>
                <li>
                  <span className="focus-icon">🌍</span>
                  <div>
                    <strong>Infrastructure</strong>
                    <span>Digital Foundation</span>
                  </div>
                </li>
              </ul>
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
                      href="mailto:contact@blackoak.capital?subject=Ready%20to%20Pitch%20Ideas%20-%20Seeking%20Investment%20Support"
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
          <div className="footer-bottom-content text-center">
            <div className="footer-legal">
              <p>&copy; 2024 Blackoak Capital. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
