import { motion } from "framer-motion";
import React from "react";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500 py-24 dark:bg-gray-900"
    >
      <div className="container mx-auto text-center px-6">
        <motion.h2
          className="text-5xl font-extrabold text-white mb-4 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Start Your Gratitude Journey
        </motion.h2>
        <motion.p
          className="text-xl text-white mb-8 leading-relaxed dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Capture the little moments that bring joy to your life every day.
        </motion.p>
        <motion.a
          href="#add-entry"
          className="bg-white text-blue-500 hover:text-white hover:bg-blue-600 py-3 px-6 rounded-full shadow-xl transform transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Add Your First Entry
        </motion.a>
      </div>
    </motion.section>
  );
};

export default HeroSection;
