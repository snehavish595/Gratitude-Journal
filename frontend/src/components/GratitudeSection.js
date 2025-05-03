import React from "react";
import AddGratitude from "./AddGratitude";
import GratitudeTimeline from "./GratitudeTimeline";

const GratitudeSection = ({ gratitudes, setGratitudes }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-4 max-w-7xl mx-auto">
      {/* Left: Form */}
      <div className="md:w-1/2 w-full bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          Add New Entry
        </h2>
        <AddGratitude gratitudes={gratitudes} setGratitudes={setGratitudes} />
      </div>

      {/* Right: Timeline */}
      <div className="md:w-1/2 w-full">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          Your Gratitude Timeline
        </h2>
        <GratitudeTimeline gratitudes={gratitudes} />
      </div>
    </div>
  );
};

export default GratitudeSection;
