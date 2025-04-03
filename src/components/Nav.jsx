"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { CiLight } from "react-icons/ci";
import { IoMoonSharp } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-md ${
        isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Animated Logo */}
        <motion.h1
          className="text-2xl font-mono text-amber-400 cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: [1, 1.1, 1], // Subtle scaling effect
            rotate: [0, 3, -3, 0], // Gentle rotation effect
            textShadow: [
              "0px 0px 5px rgba(255, 215, 0, 0.8)", // Glow effect
              "0px 0px 15px rgba(255, 215, 0, 1)",
              "0px 0px 5px rgba(255, 215, 0, 0.8)",
            ],
          }}
          transition={{
            duration: 2.4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          👨🏻‍💻 Adekola's Portfolio
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-amber-400 font-mono ">
          {[
            { name: "Home", id: "header" },
            { name: "Experience", id: "about" },
            { name: "Projects", id: "project" },
            { name: "Skills", id: "banner" },
            { name: "Contact", id: "contact" },
          ].map(({ name, id }, index, arr) => (
            <li key={id} className="flex items-center">
              <ScrollLink
                to={id}
                smooth={true}
                duration={1600}
                spy={true}
                offset={-50}
                className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
              >
                {name}
              </ScrollLink>
              {/* Add "|" separator except for the last item */}
              {index < arr.length - 1 && <span className="mx-2">|</span>}
            </li>
          ))}
        </ul>

        {/* Right Section (Dark Mode Toggle & Mobile Menu) */}
        <div className="flex items-center gap-6">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {isDarkMode ? <IoMoonSharp /> : <CiLight />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-900 py-6 absolute top-16 left-0 w-full shadow-lg transition-opacity duration-300">
          <ul className="flex flex-col items-center gap-6 text-lg">
            {[
              { name: "Home", id: "header" },
              { name: "Experience", id: "about" },
              { name: "Projects", id: "project" },
              { name: "Skills", id: "banner" },
              { name: "Contact", id: "contact" },
            ].map(({ name, id }) => (
              <li key={id}>
                <ScrollLink
                  to={id}
                  smooth={true}
                  duration={600}
                  className="cursor-pointer hover:text-yellow-400 transition duration-300"
                  onClick={() => setIsOpen(false)} // Auto-close menu on click
                >
                  {name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
