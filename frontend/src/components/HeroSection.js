import { motion } from "framer-motion";
import React from "react";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-blue-100 py-16 dark:bg-gray-900"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4 text-black dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Start Your Gratitude Journey
        </motion.h2>
        <motion.p
          className="text-lg mb-8 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Capture the little moments that bring joy to your life every day.
        </motion.p>
        <motion.a
          href="#add-entry"
          className="bg-blue-500 text-white dark:bg-gray-700 dark:text-gray-200 py-2 px-4 rounded"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Add Your First Entry
        </motion.a>
      </div>
    </motion.section>
  );
};

export default HeroSection;
