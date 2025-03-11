import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaBars, FaRocket, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ShimmerButton from "./ui/ShimmerButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeLink, setActiveLink] = useState("/");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "FAQ", path: "/faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarStyle = {
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    boxShadow: scrollPosition > 100 ? `0 4px 30px rgba(0, 0, 0, 0.1)` : "none",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <header className="sticky w-full top-0 z-50">
      <nav
        className="px-4 py-3 md:px-8 md:py-4 flex items-center justify-between"
        style={navbarStyle}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center"
        >
          <Image
            src="/logo.jpg"
            width={50}
            height={50}
            alt="Shillix Logo"
            className="rounded-full"
          />

          <span className="ml-3 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-cyan-500">
            SHILLIX
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  className={`text-sm font-medium transition-colors relative ${
                    activeLink === link.path
                      ? "text-sky-500"
                      : "text-gray-900 hover:text-gray-700"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink(link.path);
                  }}
                >
                  {link.name}
                  {activeLink === link.path && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-800 to-sky-500"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.2 }}
                    ></motion.span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Join Waitlist Button */}
          <ShimmerButton
            title="Join Waitlist"
            icon={<FaRocket />}
            position="right"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative p-2 rounded-full group"
          aria-label="Toggle menu"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {isMenuOpen ? (
            <FaTimes size={18} className="text-blue-400" />
          ) : (
            <FaBars size={18} className="text-blue-400" />
          )}
        </button>
      </nav>

      {/* Mobile Menu - Minimalized with Glassmorphism */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute right-4 mt-2 rounded-xl overflow-hidden"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="py-2">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <a
                      href={link.path}
                      className={`block py-2 px-4 text-sm font-medium transition-all duration-200 ${
                        activeLink === link.path
                          ? "text-sky-800 bg-white/30"
                          : "text-neutral-700 hover:bg-white/5 hover:text-white"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveLink(link.path);
                        setIsMenuOpen(false);
                      }}
                    >
                      {link.name}
                      {activeLink === link.path && (
                        <span className="absolute left-0 w-1 h-8 bg-gradient-to-b from-blue-400 to-sky-500 rounded-r"></span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="px-4 pt-2 pb-3 mt-1 border-t border-white/10">
                <ShimmerButton
                  title="Join Waitlist"
                  icon={<FaRocket />}
                  position="right"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
