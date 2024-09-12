import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="realtive bg-blue-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Start Your Gratitude Journey
        </h2>
        <p className="text-lg mb-8">
          Capture the little moments that bring joy to your life every day.
          Reflect on what makes your heart full.
        </p>
        <a
          href="#add-entry"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Your First Entry
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
