import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import AddGratitude from "../components/AddGratitude";
import GratitudeTimeline from "../components/GratitudeTimeline"; // Import the timeline component
import Footer from "../components/Footer";

const HomePage = ({ setGratitudes, gratitudes }) => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <section id="add-entry" className="py-16 mx-10 bg-blue-100">
        <div className="container mx-auto px-10">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Add Your Gratitude
          </h3>
          <AddGratitude setGratitudes={setGratitudes} gratitudes={gratitudes} />
        </div>
      </section>
      <section id="timeline" className="py-16 mx-10 bg-gray-50">
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
