import React, { useState, useEffect } from "react";
import { getAssetUrl } from "../lib/images";
import Carousel from "./Carousel";
import Navbar from "./Navbar";

export default function Hero(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Add auto-scroll styles immediately
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes autoScroll {
        0%, 20% { transform: translateY(0); }
        40%, 60% { transform: translateY(-200px); }
        80%, 100% { transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Select three beautiful images for the carousel
  const carouselImages = [
    "adeolu-eletu-E7RLgUjjazc-unsplash.jpg", // African landscape
    "markus-winkler-44QtHj3fZDY-unsplash.jpg", // Modern business
    "jason-briscoe-amLfrL8LGls-unsplash.jpg", // Tech/innovation
  ];

  const sectors = [
    {
      name: "Fintech",
      description: "Payments, wallets, credit",
      color: "var(--accent)",
      image: "fintech.jpg",
    },
    {
      name: "Banking",
      description: "Core, rails, compliance",
      color: "var(--accent-2)",
      image: "banking.jpg",
    },
    {
      name: "Education",
      description: "Talent, tools, access",
      color: "var(--accent)",
      image: "education.jpg",
    },
    {
      name: "Energy",
      description: "Generation, storage, grids",
      color: "var(--accent-2)",
      image: "energy.jpg",
    },
  ];

  return (
    <header
      className="hero-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
      }}
    >
      {/* Full Background Carousel */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        <Carousel
          height={800}
          autoPlayMs={5000}
          showArrows={true}
          showIndicators={false}
        >
          {carouselImages.map((imageName, index) => (
            <div key={index} style={{ position: "relative", height: "100%" }}>
              <img
                src={getAssetUrl(imageName)}
                alt={`Hero background ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(13, 15, 18, 0.6)",
                }}
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Transparent Navbar */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <Navbar />
      </div>

      {/* Content Overlay */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: "140px",
          paddingBottom: "100px",
        }}
      >
        <div className="grid-2" style={{ gap: "80px", alignItems: "center" }}>
          <div>
            <div
              className="pill"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.1s",
                marginBottom: "24px",
              }}
            >
              Early-stage VC • Africa
            </div>
            <h1
              style={{
                margin: "0 0 32px 0",
                fontSize: 56,
                lineHeight: 1.1,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.2s",
                fontWeight: "700",
              }}
            >
              Powering Africa’s future: finance, education & energy founders.
            </h1>
            <p
              className="muted"
              style={{
                fontSize: 20,
                maxWidth: 640,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.3s",
                marginBottom: "40px",
                lineHeight: 1.6,
              }}
            >
              We invest pre-seed to Series A in category-defining companies
              across fintech, banking, education and energy — the rails of
              Africa's digital economy.
            </p>
            <div
              style={{
                display: "flex",
                gap: 16,
                marginBottom: "32px",
                flexWrap: "wrap",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.4s",
              }}
            >
              <a
                href="/contact"
                className="btn btn-primary"
                style={{ fontSize: "16px", padding: "16px 24px" }}
              >
                Pitch Your Company
              </a>
              <a
                href="#thesis"
                className="btn"
                style={{ fontSize: "16px", padding: "16px 24px" }}
              >
                Read Our Thesis
              </a>
            </div>
            <div
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.5s",
              }}
            >
              <div
                className="pill"
                style={{ fontSize: "14px", padding: "8px 16px" }}
              >
                Ticket: $100k–$1.5m
              </div>
              <div
                className="pill"
                style={{ fontSize: "14px", padding: "8px 16px" }}
              >
                Lead or follow
              </div>
              <div
                className="pill"
                style={{ fontSize: "14px", padding: "8px 16px" }}
              >
                Operator support
              </div>
            </div>
          </div>
          <div style={{ position: "relative", height: "100%" }}>
            <div
              style={{
                borderRadius: "24px",
                padding: "24px",
                height: "400px",
                width: "320px",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scale(1)" : "scale(0.8)",
                transition: "all 0.6s ease 0.6s",
                cursor: "pointer",
                animation: isVisible ? "float 3s ease-in-out infinite" : "none",
                position: "absolute",
                bottom: "0",
                right: "0",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "scale(1.02) translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.5)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1) translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              }}
            >
              {/* Header Section */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "32px",
                  paddingBottom: "24px",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "white",
                      margin: "0 0 8px 0",
                    }}
                  >
                    Our Focus Areas
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.7)",
                      margin: "0",
                    }}
                  >
                    Building Africa's digital economy
                  </p>
                </div>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, var(--accent), var(--accent-2))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "white",
                  }}
                >
                  4
                </div>
              </div>

              {/* Sectors Grid */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  height: "calc(100% - 100px)",
                  padding: "0 4px",
                  animation: "autoScroll 10s ease-in-out infinite",
                }}
              >
                {/* Fintech Row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "20px",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(8px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, var(--accent), #ff6b6b)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "white",
                    }}
                  >
                    💳
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "white",
                        margin: "0 0 6px 0",
                      }}
                    >
                      {sectors[0].name}
                    </h4>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.7)",
                        margin: "0",
                      }}
                    >
                      {sectors[0].description}
                    </p>
                  </div>
                </div>

                {/* Banking Row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "20px",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(8px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, var(--accent-2), #4ecdc4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "white",
                    }}
                  >
                    🏦
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "white",
                        margin: "0 0 6px 0",
                      }}
                    >
                      {sectors[1].name}
                    </h4>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.7)",
                        margin: "0",
                      }}
                    >
                      {sectors[1].description}
                    </p>
                  </div>
                </div>

                {/* Education Row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "20px",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(8px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #4ecdc4, #44a08d)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "white",
                    }}
                  >
                    🎓
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "white",
                        margin: "0 0 6px 0",
                      }}
                    >
                      {sectors[2].name}
                    </h4>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.7)",
                        margin: "0",
                      }}
                    >
                      {sectors[2].description}
                    </p>
                  </div>
                </div>

                {/* Energy Row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "20px",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(8px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #ff6b6b, #ffa726)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "white",
                    }}
                  >
                    ⚡
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "white",
                        margin: "0 0 6px 0",
                      }}
                    >
                      {sectors[3].name}
                    </h4>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.7)",
                        margin: "0",
                      }}
                    >
                      {sectors[3].description}
                    </p>
                  </div>
                </div>

                {/* Stats Row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    padding: "20px",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        color: "white",
                        marginBottom: "4px",
                      }}
                    >
                      4
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      Focus Areas
                    </div>
                  </div>
                  <div
                    style={{
                      width: "1px",
                      height: "40px",
                      background: "rgba(255,255,255,0.1)",
                    }}
                  />
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        color: "white",
                        marginBottom: "4px",
                      }}
                    >
                      24+
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      Portfolio
                    </div>
                  </div>
                  <div
                    style={{
                      width: "1px",
                      height: "40px",
                      background: "rgba(255,255,255,0.1)",
                    }}
                  />
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        color: "white",
                        marginBottom: "4px",
                      }}
                    >
                      $15M+
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      Invested
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
