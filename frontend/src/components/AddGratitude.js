import React, { useState } from "react";
import axios from "axios";

const AddGratitude = ({ setGratitudes, gratitudes }) => {
  const [gratitude1, setGratitude1] = useState("");
  const [gratitude2, setGratitude2] = useState("");
  const [gratitude3, setGratitude3] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/entries", {
        gratitude1,
        gratitude2,
        gratitude3,
      });
      setGratitudes([...gratitudes, response.data]);
      setGratitude1("");
      setGratitude2("");
      setGratitude3("");
    } catch (error) {
      console.error("Error adding entry:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Gratitude Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      >
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          What are you grateful for today?
        </h2>
        <input
          type="text"
          value={gratitude1}
          onChange={(e) => setGratitude1(e.target.value)}
          placeholder="I am grateful for..."
          className="block w-full p-2 border rounded bg-white text-black dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          required
        />
        <input
          type="text"
          value={gratitude2}
          onChange={(e) => setGratitude2(e.target.value)}
          placeholder="I am grateful for..."
          className="block w-full p-2 border rounded bg-white text-black dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          required
        />
        <input
          type="text"
          value={gratitude3}
          onChange={(e) => setGratitude3(e.target.value)}
          placeholder="I am grateful for..."
          className="block w-full p-2 border rounded bg-white text-black dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          required
        />
        <button
          type="submit"
          className="bg-[#FFB703] text-white py-2 px-4 rounded hover:bg-[#e0a202] transition"
        >
          Add Entry
        </button>
      </form>

      {/* ✨ Divider or Message After Form */}
      <div className="text-center mt-8 mb-4">
        <div className="h-1 w-32 bg-[#A7EDE7] mx-auto rounded"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm italic">
          Reflect back on what you've written. Here's your gratitude timeline.
        </p>
      </div>
    </div>
  );
};

export default AddGratitude;
