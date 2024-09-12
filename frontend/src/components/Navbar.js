import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className=" text-xl font-bold">Gratitude Journal</h1>
        <div className="flex space-x-4 pr-6">
          <a href="/" className="text-white">
            Home
          </a>
          <a href="#add-entry" className="text-white">
            Add Entry
          </a>
          <a href="#timeline" className="text-white">
            Timeline
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
