// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = ["About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-[999] ${
        scrolled ? "backdrop-blur-md bg-black/20 shadow-lg border-b border-white/10" : "bg-transparent"
      } transition-all duration-300`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 🌀 Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.1 }}
          className="text-2xl md:text-3xl font-extrabold text-green-400 tracking-wide neon-text"
        >
          <span className="text-white">HARI</span>.dev
        </motion.a>

        {/* ☰ Mobile Toggle */}
        <div className="md:hidden text-white text-xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* 🧭 Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-white font-semibold">
          {navLinks.map((link, index) => (
            <motion.li
              key={link}
              whileHover={{ scale: 1.1, color: "#22c55e" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href={`#${link.toLowerCase()}`} className="hover:text-green-400 transition-all">
                {link}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* 📱 Mobile Nav Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              className="fixed top-16 right-6 bg-black/80 backdrop-blur-lg p-6 rounded-xl text-white text-center flex flex-col gap-4 font-medium z-50 border border-white/10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-green-400 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
