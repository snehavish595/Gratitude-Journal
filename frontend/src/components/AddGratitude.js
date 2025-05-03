import React, { useState } from "react";
import axios from "axios";
import { PlusCircle } from "lucide-react"; // icon library

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
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 mt-8 transition-all duration-300">
      <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-4">
        What are you grateful for today?
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={gratitude1}
          onChange={(e) => setGratitude1(e.target.value)}
          placeholder="🌞 I’m grateful for..."
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#A7EDE7] transition"
          required
        />
        <input
          type="text"
          value={gratitude2}
          onChange={(e) => setGratitude2(e.target.value)}
          placeholder="❤️ I’m grateful for..."
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#A7EDE7] transition"
          required
        />
        <input
          type="text"
          value={gratitude3}
          onChange={(e) => setGratitude3(e.target.value)}
          placeholder="🌿 I’m grateful for..."
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#A7EDE7] transition"
          required
        />
        <button
          type="submit"
          className="w-full bg-[#FFB703] text-white font-semibold flex items-center justify-center gap-2 py-3 px-4 rounded-lg hover:bg-[#ffa500] transition duration-300"
        >
          <PlusCircle className="w-5 h-5" />
          Add Gratitude Entry
        </button>
      </form>
    </div>
  );
};

export default AddGratitude;
