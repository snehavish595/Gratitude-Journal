import React from "react";
import AddGratitude from "./AddGratitude";
import GratitudeTimeline from "./GratitudeTimeline";

const GratitudeSection = ({ gratitudes, setGratitudes }) => {
  return (
    <section className="px-4 md:px-10 py-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 p-4 max-w-7xl mx-auto">
  {/* Left Side */}
  <div className="md:w-1/2 w-full bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md flex flex-col h-[580px]">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
      📝 Add New Entry
    </h2>
    <AddGratitude gratitudes={gratitudes} setGratitudes={setGratitudes} />
  </div>

  {/* Right Side */}
  <div className="md:w-1/2 w-full bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md flex flex-col h-[580px]">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
      📜 Your Gratitude Timeline
    </h2>
    <GratitudeTimeline gratitudes={gratitudes} setGratitudes={setGratitudes} />
  </div>
</div>
    </section>
  );
};

export default GratitudeSection;
