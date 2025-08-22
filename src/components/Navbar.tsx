import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.svg";

export default function Navbar(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-white" onClick={closeMobileMenu}>
          <img src={logo} alt="Blackoak Ventures Logo" className="w-32 h-10" />
        </Link>

        {/* Desktop Navigation - Hidden on mobile, visible on md+ */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/thesis"
            className="text-white hover:text-blue-300 transition-colors"
          >
            Thesis
          </NavLink>
          <NavLink
            to="/sectors"
            className="text-white hover:text-blue-300 transition-colors"
          >
            Sectors
          </NavLink>
          <NavLink
            to="/portfolio"
            className="text-white hover:text-blue-300 transition-colors"
          >
            Portfolio
          </NavLink>

          <NavLink to="/contact" className="btn btn-primary">
            Pitch Ideas
          </NavLink>
        </div>

        {/* Mobile Menu Button - Only visible on mobile */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Navigation Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 z-50 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <NavLink
            to="/thesis"
            className="text-white/80 hover:text-white text-2xl font-medium px-6 py-4 rounded-xl min-w-[200px] text-center hover:bg-white/10 transition-all"
            onClick={closeMobileMenu}
          >
            Thesis
          </NavLink>
          <NavLink
            to="/sectors"
            className="text-white/80 hover:text-white text-2xl font-medium px-6 py-4 rounded-xl min-w-[200px] text-center hover:bg-white/10 transition-all"
            onClick={closeMobileMenu}
          >
            Sectors
          </NavLink>
          <NavLink
            to="/portfolio"
            className="text-white/80 hover:text-white text-2xl font-medium px-6 py-4 rounded-xl min-w-[200px] text-center hover:bg-white/10 transition-all"
            onClick={closeMobileMenu}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className="text-white/80 hover:text-white text-2xl font-medium px-6 py-4 rounded-xl min-w-[200px] text-center hover:bg-white/10 transition-all"
            onClick={closeMobileMenu}
          >
            Pitch Ideas
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
