import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.svg";

export default function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Blackoak Ventures Logo"
            className="w-32 h-10 md:w-44 md:h-12 lg:w-48 lg:h-14 object-contain"
          />
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/thesis"
            className={({ isActive }) =>
              `text-white/80 hover:text-emerald-400 hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive ? "text-emerald-400 bg-white/10" : ""
              }`
            }
          >
            Thesis
          </NavLink>
          <NavLink
            to="/sectors"
            className={({ isActive }) =>
              `text-white/80 hover:text-emerald-400 hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive ? "text-emerald-400 bg-white/10" : ""
              }`
            }
          >
            Sectors
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `text-white/80 hover:text-emerald-400 hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive ? "text-emerald-400 bg-white/10" : ""
              }`
            }
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/contact"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg transition-all duration-300 font-medium"
          >
            Pitch Ideas
          </NavLink>
        </div>

        {/* Mobile Menu Button - Only visible on mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 bg-white/10 hover:bg-white/20 rounded-lg p-2 transition-all duration-300"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-md border-t border-white/10 px-4 py-6">
          <div className="flex flex-col space-y-4">
            <NavLink
              to="/thesis"
              className={({ isActive }) =>
                `text-white/80 hover:text-emerald-400 hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-300 text-lg font-medium ${
                  isActive ? "text-emerald-400 bg-white/10" : ""
                }`
              }
              onClick={closeMenu}
            >
              Thesis
            </NavLink>
            <NavLink
              to="/sectors"
              className={({ isActive }) =>
                `text-white/80 hover:text-emerald-400 hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-300 text-lg font-medium ${
                  isActive ? "text-emerald-400 bg-white/10" : ""
                }`
              }
              onClick={closeMenu}
            >
              Sectors
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `text-white/80 hover:text-emerald-400 hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-300 text-lg font-medium ${
                  isActive ? "text-emerald-400 bg-white/10" : ""
                }`
              }
              onClick={closeMenu}
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium text-lg text-center"
              onClick={closeMenu}
            >
              Pitch Ideas
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
