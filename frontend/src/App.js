import React, { useState, useEffect } from "react";
import axios from "axios";
import HomePage from "./pages/HomePage";
import "./index.css";

function App() {
  const [gratitudes, setGratitudes] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = (isDark) => {
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark); // Toggle dark mode class
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/entries")
      .then((response) => {
        setGratitudes(response.data); // Check this line to ensure it's working properly
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  return (
    <div className={`App ${isDarkMode ? "dark" : ""}`}>
      {/* <ToggleButton toggleTheme={toggleTheme} /> */}
      {/* <Navbar toggleTheme={toggleTheme} /> */}
      <HomePage setGratitudes={setGratitudes} gratitudes={gratitudes} />
      
    </div>
  );
}

export default App;
