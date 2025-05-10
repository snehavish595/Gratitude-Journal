import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const GratitudeTimeline = ({ gratitudes, setGratitudes }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [editingId, setEditingId] = useState(null);
  const [editedEntry, setEditedEntry] = useState({
    gratitude1: "",
    gratitude2: "",
    gratitude3: "",
  });

  const handleEditClick = (entry) => {
    setEditingId(entry._id);
    setEditedEntry({
      gratitude1: entry.gratitude1,
      gratitude2: entry.gratitude2,
      gratitude3: entry.gratitude3,
    });
  };

  const handleSave = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/entries/${id}`,
        editedEntry
      );
      const updated = gratitudes.map((entry) =>
        entry._id === id ? response.data : entry
      );
      setGratitudes(updated);
      setEditingId(null);
    } catch (error) {
      console.error("Error updating entry:", error);
    }
  };

  // This logs the current gratitudes data to see if there is more than 3 entries
  console.log(gratitudes);

  return (
    <div className="flex-1 pr-2">
      <div
        className="overflow-y-auto pb-4"
        style={{ maxHeight: "500px" }} // Ensuring max height and scrolling
      >
        {gratitudes.length > 0 ? (
          gratitudes.reverse().map((entry) => ( // Removing [ ] to directly map the array.
            <div
              key={entry._id}
              className="bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-2"
              data-aos="fade-up"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                📅 {new Date(entry.date).toLocaleDateString()} &nbsp; 🕒{" "}
                {new Date(entry.date).toLocaleTimeString()}
              </p>

              {editingId === entry._id ? (
                <>
                  <input
                    type="text"
                    value={editedEntry.gratitude1}
                    onChange={(e) =>
                      setEditedEntry({ ...editedEntry, gratitude1: e.target.value })
                    }
                    className="w-full p-2 mb-2 border rounded"
                  />
                  <input
                    type="text"
                    value={editedEntry.gratitude2}
                    onChange={(e) =>
                      setEditedEntry({ ...editedEntry, gratitude2: e.target.value })
                    }
                    className="w-full p-2 mb-2 border rounded"
                  />
                  <input
                    type="text"
                    value={editedEntry.gratitude3}
                    onChange={(e) =>
                      setEditedEntry({ ...editedEntry, gratitude3: e.target.value })
                    }
                    className="w-full p-2 mb-4 border rounded"
                  />
                  <button
                    onClick={() => handleSave(entry._id)}
                    className="bg-[#FFB703] text-white py-1 px-4 rounded mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="text-gray-600 dark:text-gray-300 underline"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <p className="text-gray-800 dark:text-white">
                    <strong className="text-[#FFB703]">Gratitude 1:</strong>{" "}
                    {entry.gratitude1}
                  </p>
                  <p className="text-gray-800 dark:text-white">
                    <strong className="text-[#FFB703]">Gratitude 2:</strong>{" "}
                    {entry.gratitude2}
                  </p>
                  <p className="text-gray-800 dark:text-white mb-4">
                    <strong className="text-[#FFB703]">Gratitude 3:</strong>{" "}
                    {entry.gratitude3}
                  </p>
                  <button
                    onClick={() => handleEditClick(entry)}
                    className="text-blue-500 hover:underline"
                  >
                    ✏️ Edit
                  </button>
                </>
              )}
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-300 py-10 rounded-md border dark:border-gray-600 bg-white dark:bg-gray-800">
            No entries yet. Start your gratitude journey today! 🌱
          </div>
        )}
      </div>
    </div>
  );
};

export default GratitudeTimeline;
