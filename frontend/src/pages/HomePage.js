import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import AddGratitude from "../components/AddGratitude";
import GratitudeTimeline from "../components/GratitudeTimeline";
import Footer from "../components/Footer";

const HomePage = ({ setGratitudes, gratitudes }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = (isDark) => {
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark); // Toggle dark mode class
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Navbar toggleTheme={toggleTheme} />
      <HeroSection />
      <Features />
      <section
        id="add-entry"
        className={`py-16 mx-10 ${isDarkMode ? "bg-gray-800" : "bg-blue-100"}`}
      >
        <div className="container mx-auto px-10">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Add Your Gratitude
          </h3>
          <AddGratitude setGratitudes={setGratitudes} gratitudes={gratitudes} />
        </div>
      </section>
      <section
        id="timeline"
        className={`py-16 mx-10 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-10">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Your Gratitude Timeline
          </h3>
          <GratitudeTimeline gratitudes={gratitudes} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
