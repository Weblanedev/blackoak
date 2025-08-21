import React from "react";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";
import Navbar from "../components/Navbar";

export default function ContactPage(): JSX.Element {
  return (
    <main>
      <Navbar />
      <section
        className="section contact-hero-section"
        style={{ paddingTop: 96 }}
      >
        <div className="container">
          {/* <Reveal>
            <h1 style={{ margin: 0, fontSize: "3.5rem", textAlign: "center" }}>
              🚀 Get in Touch
            </h1>
          </Reveal> */}
          <Reveal delayMs={120}>
            <p
              className="muted"
              style={{
                maxWidth: 820,
                margin: "0 auto 40px auto",
                textAlign: "center",
                fontSize: "1.2rem",
              }}
            >
              Ready to build something amazing? Let's make it happen together!
              🌟
            </p>
          </Reveal>

          {/* Interactive Contact Options */}
          {/* <Reveal delayMs={240}>
            <div className="contact-options">
              <div className="contact-option founders">
                <div className="option-header">
                  <div className="option-icon">👨‍💻</div>
                  <h3>Founders & Entrepreneurs</h3>
                  <p>Got a game-changing idea? Let's make it happen!</p>
                </div>
                <div className="option-features">
                  <div className="feature">
                    <span className="feature-icon">📊</span>
                    <span>Send your pitch deck or executive summary</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🎯</span>
                    <span>Get feedback within 48 hours</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🚀</span>
                    <span>Access to our founder community</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">💡</span>
                    <span>Strategic guidance & mentorship</span>
                  </div>
                </div>
                <div className="option-cta">
                  <a href="#contact-form" className="btn btn-primary">
                    Pitch Your Vision 🚀
                  </a>
                  <span className="response-time">Response in 48h ⚡</span>
                </div>
              </div>

              <div className="contact-option partners">
                <div className="option-header">
                  <div className="option-icon">🤝</div>
                  <h3>LPs & Strategic Partners</h3>
                  <p>Let's explore synergies and build together!</p>
                </div>
                <div className="option-features">
                  <div className="feature">
                    <span className="feature-icon">💼</span>
                    <span>Co-investment opportunities</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🌍</span>
                    <span>Access to African tech ecosystem</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">📈</span>
                    <span>Portfolio company introductions</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🔗</span>
                    <span>Network & partnership building</span>
                  </div>
                </div>
                <div className="option-cta">
                  <a href="#contact-form" className="btn btn-primary">
                    Let's Connect 🤝
                  </a>
                  <span className="response-time">Response in 24h ⚡</span>
                </div>
              </div>
            </div>
          </Reveal> */}

          {/* Fun Stats & Social Proof */}
          <Reveal delayMs={360}>
            <div className="fun-stats">
              <div className="stat-item">
                <div className="stat-number">48h</div>
                <div className="stat-label">Average Response Time</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Founder Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years of Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">$50M+</div>
                <div className="stat-label">Capital Deployed</div>
              </div>
            </div>
          </Reveal>

          {/* Interactive Elements */}
          <Reveal delayMs={480}>
            <div className="interactive-elements">
              <div className="trust-badges">
                <div className="badge">
                  <span className="badge-icon">🔒</span>
                  <span>100% Confidential</span>
                </div>
                <div className="badge">
                  <span className="badge-icon">⚡</span>
                  <span>Lightning Fast</span>
                </div>
                <div className="badge">
                  <span className="badge-icon">🎯</span>
                  <span>Strategic Focus</span>
                </div>
                <div className="badge">
                  <span className="badge-icon">🌍</span>
                  <span>Africa-First</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Fun Call to Action */}
          <Reveal delayMs={600}>
            <div className="fun-cta">
              <h2 style={{ textAlign: "center", marginBottom: "16px" }}>
                🎉 Ready to Start Your Journey?
              </h2>
              <p
                style={{
                  textAlign: "center",
                  color: "var(--muted)",
                  marginBottom: "32px",
                }}
              >
                Scroll down to fill out the form and let's build Africa's future
                together!
              </p>
              <div className="scroll-indicator">
                <span className="scroll-text">Scroll Down</span>
                <div className="scroll-arrow">↓</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div id="contact-form">
        <Contact />
      </div>
    </main>
  );
}
