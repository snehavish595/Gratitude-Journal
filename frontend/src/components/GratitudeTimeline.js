import React from "react";

const GratitudeTimeline = ({ gratitudes }) => {
  return (
    <div>
      {gratitudes.length > 0 ? (
        gratitudes.map((entry) => (
          <div
            key={entry._id}
            className="p-4 w-1/2 mb-2 border rounded-md border-gray-300 mx-auto"
          >
            <p className="mb-2">
              <strong>Date:</strong> {new Date(entry.date).toLocaleDateString()}{" "}
              <br></br>
              <strong>Time:</strong>
              {new Date(entry.date).toLocaleTimeString()}
            </p>
            <p>
              <strong>Gratitude 1:</strong> {entry.gratitude1}
            </p>
            <p>
              <strong>Gratitude 2:</strong> {entry.gratitude2}
            </p>
            <p>
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
