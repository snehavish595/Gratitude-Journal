import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GratitudeTimeline = ({ gratitudes }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {gratitudes.length > 0 ? (
        gratitudes.map((entry) => (
          <div
            key={entry._id}
            className="p-4 w-1/2 mb-2 border rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 mx-auto"
            data-aos="fade-up"
          >
            <p className="mb-2 text-black dark:text-white">
              <strong>Date:</strong> {new Date(entry.date).toLocaleDateString()}{" "}
              <br />
              <strong>Time:</strong> {new Date(entry.date).toLocaleTimeString()}
            </p>
            <p className="text-black dark:text-white">
              <strong>Gratitude 1:</strong> {entry.gratitude1}
            </p>
            <p className="text-black dark:text-white">
              <strong>Gratitude 2:</strong> {entry.gratitude2}
            </p>
            <p className="text-black dark:text-white">
              <strong>Gratitude 3:</strong> {entry.gratitude3}
            </p>
          </div>
        ))
      ) : (
        <p>No entries found</p>
      )}
    </div>
  );
};

export default GratitudeTimeline;
