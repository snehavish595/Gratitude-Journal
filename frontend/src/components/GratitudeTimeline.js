import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GratitudeTimeline = ({ gratitudes }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10">
      {gratitudes.length > 0 ? (
        <div className="relative border-l-4 border-[#FFB703] pl-4 space-y-6">
          {gratitudes.map((entry) => (
            <div
              key={entry._id}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 relative hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
            >
              <span className="absolute -left-[11px] top-6 w-5 h-5 bg-[#FFB703] rounded-full border-2 border-white dark:border-gray-800"></span>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                📅 {new Date(entry.date).toLocaleDateString()} &nbsp; 🕒{" "}
                {new Date(entry.date).toLocaleTimeString()}
              </p>
              <p className="text-gray-800 dark:text-white">
                <strong className="text-[#FFB703]">Gratitude 1:</strong>{" "}
                {entry.gratitude1}
              </p>
              <p className="text-gray-800 dark:text-white">
                <strong className="text-[#FFB703]">Gratitude 2:</strong>{" "}
                {entry.gratitude2}
              </p>
              <p className="text-gray-800 dark:text-white">
                <strong className="text-[#FFB703]">Gratitude 3:</strong>{" "}
                {entry.gratitude3}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-300 mt-8">
          No entries found
        </p>
      )}
    </div>
  );
};

export default GratitudeTimeline;
