import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Font Awesome icons

const ToggleButton = ({ toggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme(!isDarkMode);
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
    >
      {isDarkMode ? (
        <FaSun className="text-yellow-500 text-xl" />
      ) : (
        <FaMoon className="text-blue-500 text-xl" />
      )}
    </button>
  );
};

export default ToggleButton;
