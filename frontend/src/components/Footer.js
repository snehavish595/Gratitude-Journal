import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        {/* Quick Links */}
        <nav className="mb-6 md:mb-0">
          <ul className="flex flex-wrap justify-center md:justify-start gap-8 font-semibold text-lg">
            <li>
              <a
                href="/"
                className="hover:text-yellow-400 transition-colors duration-300"
                aria-label="Home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#add-entry"
                className="hover:text-yellow-400 transition-colors duration-300"
                aria-label="Add Entry"
              >
                Add Entry
              </a>
            </li>
            <li>
              <a
                href="#timeline"
                className="hover:text-yellow-400 transition-colors duration-300"
                aria-label="Timeline"
              >
                Timeline
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-8 text-xl text-gray-400">
          {[
            { icon: <FaFacebookF />, url: "https://facebook.com", label: "Facebook" },
            { icon: <FaTwitter />, url: "https://twitter.com", label: "Twitter" },
            { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
            { icon: <FaLinkedinIn />, url: "https://linkedin.com", label: "LinkedIn" },
          ].map(({ icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Gratitude Journal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
