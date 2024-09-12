// Get all gratitude entries
export const getGratitudeEntries = async () => {
  const response = await fetch("http://localhost:5000/api/entries"); // Update to port 5000
  const data = await response.json();
  return data;
};

// Add a new gratitude entry
export const addGratitude = async (gratitudes) => {
  const response = await fetch("http://localhost:5000/api/entries", {
    // Update to port 5000
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ entries: gratitudes }),
  });

  if (!response.ok) {
    throw new Error("Failed to add gratitude entry");
  }

  const data = await response.json();
  return data;
};
