import React from "react";
// import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";

const Navbar = ({ toggleTheme }) => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-blue-500 text-white dark:bg-gray-800 dark:text-gray-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className=" text-xl font-bold">Gratitude Journal</h1>
        <div className="flex space-x-4 ">
          <a href="/" className="text-white">
            Home
          </a>
          <a href="#add-entry" className="text-white">
            Add Entry
          </a>
          <a href="#timeline" className="text-white">
            Timeline
          </a>
          {/* <button
            onClick={toggleDarkMode}
            className="text-white border-white-100 border-2 rounded mx-2 px"
          >
            Dark Mode
          </button> */}
          <ToggleButton toggleTheme={toggleTheme} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
