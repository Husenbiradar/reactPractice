import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Headder() {
  return (
    <header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-gray-100">
    <a
      href="/"
      className="flex items-center h-10 px-10 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-500 rounded-tl-full rounded-br-full font-bold uppercase italic text-white hover:opacity-90"
    >
      Title
    </a>
    <nav className="hidden sm:flex justify-between items-center gap-4 font-semibold">
      <NavLink to="" className="hover:text-gray-500">Home</NavLink>
      <NavLink to="/about" className="hover:text-gray-500">About</NavLink>
      <NavLink to="/Contact" className="hover:text-gray-500">Contact</NavLink>
    </nav>
    <div className="flex">
      <Link to="/login" className="text-gray-100 hover:text-gray-900 bg-green-900 px-5 py-2 rounded-md">Login</Link>
    </div>
  </header>
  )
}

export default Headder
