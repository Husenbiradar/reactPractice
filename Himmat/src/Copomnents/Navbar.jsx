import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UseContext from '../Context/UseContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(UseContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Default to 'Admin' if username is not set
  const username = user?.username || 'Admin';

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">{username}</div>
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink to="" className="text-gray-300 hover:text-white">Home</NavLink>
          <NavLink to="about" className="text-gray-300 hover:text-white">About</NavLink>
          <NavLink to="services" className="text-gray-300 hover:text-white">Services</NavLink>
          <NavLink to="contact" className="text-gray-300 hover:text-white">Contact</NavLink>
          <div className="flex items-center space-x-2 px-16">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 text-gray-300 border border-gray-600 rounded-md px-3 py-1 focus:outline-none focus:ring focus:border-blue-300"
            />
            <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none">
              Search
            </button>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-300 focus:outline-none" id="menu-toggle">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <NavLink to="" className="block text-gray-300 hover:text-white py-2">Home</NavLink>
          <NavLink to="about" className="block text-gray-300 hover:text-white py-2">About</NavLink>
          <NavLink to="services" className="block text-gray-300 hover:text-white py-2">Services</NavLink>
          <NavLink to="contact" className="block text-gray-300 hover:text-white py-2">Contact</NavLink>
          <div className="flex items-center space-x-2 py-2">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 text-gray-300 border border-gray-600 rounded-md px-3 py-1 focus:outline-none focus:ring focus:border-blue-300"
            />
            <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none">
              Search
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
