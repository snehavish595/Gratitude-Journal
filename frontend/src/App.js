import React, { useState, useEffect } from "react";
import axios from "axios";
import HomePage from "./pages/HomePage";

function App() {
  const [gratitudes, setGratitudes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/entries")
      .then((response) => {
        setGratitudes(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <HomePage setGratitudes={setGratitudes} gratitudes={gratitudes} />
    </div>
  );
}

export default App;
