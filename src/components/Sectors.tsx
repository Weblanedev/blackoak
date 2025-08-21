import "./Sectors.css";

export default function Sectors(): JSX.Element {
  const sectors = [
    {
      name: "Fintech",
      desc: "Payments, lending, wallets, B2B rails.",
      longDesc:
        "Revolutionizing financial services through innovative payment solutions, digital lending platforms, and seamless B2B infrastructure.",
      color: "var(--accent)",
      icon: "💳",
      features: [
        "Digital Payments",
        "Lending Solutions",
        "B2B Infrastructure",
        "Wallet Technology",
      ],
      investment: "Early-stage to growth",
      market: "High growth potential",
      gradient: "linear-gradient(135deg, #2bd4a7, #22c55e)",
      bgGradient:
        "linear-gradient(135deg, rgba(43, 212, 167, 0.1), rgba(34, 197, 94, 0.05))",
    },
    {
      name: "Banking",
      desc: "Core banking, compliance, KYC, infrastructure.",
      longDesc:
        "Building the foundation of modern banking with core systems, regulatory compliance, and identity verification solutions.",
      color: "#86efac",
      icon: "🏦",
      features: [
        "Core Banking",
        "Regulatory Compliance",
        "KYC/AML",
        "Banking Infrastructure",
      ],
      investment: "Series A to Series C",
      market: "Stable, regulated market",
      gradient: "linear-gradient(135deg, #86efac, #4ade80)",
      bgGradient:
        "linear-gradient(135deg, rgba(134, 239, 172, 0.1), rgba(74, 222, 128, 0.05))",
    },
    {
      name: "Education",
      desc: "Talent platforms, learning tools, financing.",
      longDesc:
        "Empowering the next generation through innovative learning platforms, talent development tools, and educational financing solutions.",
      color: "#f59e0b",
      icon: "🎓",
      features: [
        "Learning Platforms",
        "Talent Development",
        "Educational Finance",
        "Skills Assessment",
      ],
      investment: "Seed to Series B",
      market: "Growing demand for skills",
      gradient: "linear-gradient(135deg, #f59e0b, #eab308)",
      bgGradient:
        "linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(234, 179, 8, 0.05))",
    },
    {
      name: "Energy",
      desc: "Distributed generation, storage, grid software.",
      longDesc:
        "Transforming energy infrastructure with distributed generation, advanced storage solutions, and intelligent grid management software.",
      color: "var(--accent-2)",
      icon: "⚡",
      features: [
        "Distributed Generation",
        "Energy Storage",
        "Grid Software",
        "Smart Infrastructure",
      ],
      investment: "Series A to Series D",
      market: "Critical infrastructure need",
      gradient: "linear-gradient(135deg, #6aa6ff, #3b82f6)",
      bgGradient:
        "linear-gradient(135deg, rgba(106, 166, 255, 0.1), rgba(59, 130, 246, 0.05))",
    },
  ];

  return (
    <section id="sectors" className="section sectors-section">
      <div className="container">
        {/* Header Section */}
        <div className="sectors-header">
          <div className="header-content">
            <div className="sectors-label">Investment Focus</div>
            <h2 className="sectors-title">
              Strategic Sectors Driving Africa's Digital Future
            </h2>
            <p className="sectors-description">
              We invest in foundational software and infrastructure across key
              sectors that are transforming Africa's digital economy. Each
              sector represents unique opportunities for innovation and growth.
            </p>
          </div>
          <div className="header-icon">🎯</div>
        </div>

        {/* Flowing Wave Layout */}
        <div className="wave-container">
          {/* Top Wave */}
          <div className="wave-top">
            <div className="wave-card wave-left">
              <div
                className="wave-content"
                style={
                  {
                    "--sector-gradient": sectors[0].gradient,
                    "--sector-bg": sectors[0].bgGradient,
                  } as React.CSSProperties
                }
              >
                <div className="wave-icon">{sectors[0].icon}</div>
                <h3 className="wave-title">{sectors[0].name}</h3>
                <p className="wave-desc">{sectors[0].longDesc}</p>
                <div className="wave-features">
                  {sectors[0].features.map((feature, idx) => (
                    <span key={idx} className="wave-feature">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="wave-info">
                  <div className="info-badge">
                    <span className="info-label">Stage:</span>
                    <span className="info-value">{sectors[0].investment}</span>
                  </div>
                  <div className="info-badge">
                    <span className="info-label">Market:</span>
                    <span className="info-value">{sectors[0].market}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="wave-card wave-right">
              <div
                className="wave-content"
                style={
                  {
                    "--sector-gradient": sectors[1].gradient,
                    "--sector-bg": sectors[1].bgGradient,
                  } as React.CSSProperties
                }
              >
                <div className="wave-icon">{sectors[1].icon}</div>
                <h3 className="wave-title">{sectors[1].name}</h3>
                <p className="wave-desc">{sectors[1].longDesc}</p>
                <div className="wave-features">
                  {sectors[1].features.map((feature, idx) => (
                    <span key={idx} className="wave-feature">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="wave-info">
                  <div className="info-badge">
                    <span className="info-label">Stage:</span>
                    <span className="info-value">{sectors[1].investment}</span>
                  </div>
                  <div className="info-badge">
                    <span className="info-label">Market:</span>
                    <span className="info-value">{sectors[1].market}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Connection */}
          <div className="wave-center">
            <div className="center-connector">
              <div className="connector-line"></div>
              <div className="connector-dot"></div>
              <div className="connector-line"></div>
            </div>
          </div>

          {/* Bottom Wave */}
          <div className="wave-bottom">
            <div className="wave-card wave-left">
              <div
                className="wave-content"
                style={
                  {
                    "--sector-gradient": sectors[2].gradient,
                    "--sector-bg": sectors[2].bgGradient,
                  } as React.CSSProperties
                }
              >
                <div className="wave-icon">{sectors[2].icon}</div>
                <h3 className="wave-title">{sectors[2].name}</h3>
                <p className="wave-desc">{sectors[2].longDesc}</p>
                <div className="wave-features">
                  {sectors[2].features.map((feature, idx) => (
                    <span key={idx} className="wave-feature">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="wave-info">
                  <div className="info-badge">
                    <span className="info-label">Stage:</span>
                    <span className="info-value">{sectors[2].investment}</span>
                  </div>
                  <div className="info-badge">
                    <span className="info-label">Market:</span>
                    <span className="info-value">{sectors[2].market}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="wave-card wave-right">
              <div
                className="wave-content"
                style={
                  {
                    "--sector-gradient": sectors[3].gradient,
                    "--sector-bg": sectors[3].bgGradient,
                  } as React.CSSProperties
                }
              >
                <div className="wave-icon">{sectors[3].icon}</div>
                <h3 className="wave-title">{sectors[3].name}</h3>
                <p className="wave-desc">{sectors[3].longDesc}</p>
                <div className="wave-features">
                  {sectors[3].features.map((feature, idx) => (
                    <span key={idx} className="wave-feature">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="wave-info">
                  <div className="info-badge">
                    <span className="info-label">Stage:</span>
                    <span className="info-value">{sectors[3].investment}</span>
                  </div>
                  <div className="info-badge">
                    <span className="info-label">Market:</span>
                    <span className="info-value">{sectors[3].market}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1200px) {
          .wave-container {
            max-width: 900px !important;
          }
          
          .wave-card {
            width: 45% !important;
          }
        }

        @media (max-width: 768px) {
          .sectors-header {
            flex-direction: column !important;
            text-align: center !important;
            gap: 24px !important;
          }
          
          .header-icon {
            font-size: 2.5rem !important;
          }
          
          .wave-container {
            flex-direction: column !important;
            gap: 40px !important;
          }
          
          .wave-top,
          .wave-bottom {
            flex-direction: column !important;
            gap: 30px !important;
          }
          
          .wave-card {
            width: 100% !important;
            max-width: 500px !important;
            margin: 0 auto !important;
          }
          
          .wave-center {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .wave-content {
            padding: 24px !important;
          }
          
          .wave-features {
            flex-direction: column !important;
            gap: 8px !important;
          }
          
          .wave-info {
            flex-direction: column !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
