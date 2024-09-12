import React, { useState } from "react";
import axios from "axios";

const AddGratitude = ({ setGratitudes, gratitudes }) => {
  // Local state for the input fields
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

      // Update state with the new entry
      setGratitudes([...gratitudes, response.data]);
      setGratitude1("");
      setGratitude2("");
      setGratitude3("");
    } catch (error) {
      console.error("Error adding entry:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={gratitude1}
        onChange={(e) => setGratitude1(e.target.value)}
        placeholder="I am grateful for..."
        className="block w-3/4 p-2 border rounded"
        required
      />
      <input
        type="text"
        value={gratitude2}
        onChange={(e) => setGratitude2(e.target.value)}
        placeholder="I am grateful for..."
        className="block w-3/4 p-2 border rounded"
        required
      />
      <input
        type="text"
        value={gratitude3}
        onChange={(e) => setGratitude3(e.target.value)}
        placeholder="I am grateful for..."
        className="block w-3/4 p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Entry
      </button>
    </form>
  );
};

export default AddGratitude;
