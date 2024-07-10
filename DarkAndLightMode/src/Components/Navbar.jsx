import React, { useState } from 'react'

function Navbar({darkMode,setDarkMode}) {
const NavBtn =()=>{
  const NavItems=document.getElementById('NavItems')
  NavItems.classList.toggle('hidden')
}
  return (
    <>
      <div className={` ${darkMode  ? "bg-black text-white" : "bg-white text-black"} flex justify-between px-5 py-2`}>
        <div className="text-xl"> <h1>Master</h1></div>
        <div className={`md:flex md:space-x-11 hidden absolute md:stick left-60 top-6 md:top-2 ${darkMode ? "bg-black text-white   " : " bg-white text-black "} p-2 md:p-0 `}id='NavItems' >
            <div className="item">
                <a href="/">Home</a>
            </div>
            <div className="item">
                <a href="/">About</a>
            </div>
            <div className="item">
                <a href="/">Setting</a>
            </div>
            <div className="item">
                <a href="/">Contact</a>
            </div>
        </div>
            <div className="flex" >
              <div className="flex" onClick={()=> setDarkMode(!darkMode)}>
              <div className={`${darkMode ? "hidden" : "block"}`} >
            <i className=" fa-solid fa-moon"></i>
            </div>
            <div className={`${darkMode ? "block" : "hidden"}`}>
              <i className="fa-solid fa-sun "></i>
            </div>
              </div>
             <div className="">
             <i className="fa-solid fa-bars px-2 md:hidden " onClick={NavBtn}></i>
             </div>
            </div>
      </div>
    </>
  )
}

export default Navbar
