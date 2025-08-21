import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./Navbar.css";

export default function Navbar(): JSX.Element {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <img
            src={logo}
            alt="Blackoak Ventures Logo"
            style={{
              width: 180,
              height: 54,
              objectFit: "contain",
            }}
          />
        </Link>
        <div className="navbar-nav">
          <NavLink
            to="/thesis"
            className={({ isActive }) =>
              `navbar-link ${isActive ? "active" : ""}`
            }
          >
            Thesis
          </NavLink>
          <NavLink
            to="/sectors"
            className={({ isActive }) =>
              `navbar-link ${isActive ? "active" : ""}`
            }
          >
            Sectors
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `navbar-link ${isActive ? "active" : ""}`
            }
          >
            Portfolio
          </NavLink>

          <NavLink to="/contact" className="btn btn-primary">
            Pitch Ideas
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
