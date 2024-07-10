import React from "react";

export default function Card({darkMode}){
    return(
        <>
            <div className={` ${darkMode ? "bg-black text-white" : "bg-white text-black"} md:w-2/6 mx-auto my-2 text-center shadow-xl shadow-black p-2 `}>
              <div className="p-2 mx-auto text-center ">
                    <img src="https://images.unsplash.com/photo-1714547808442-e4199a7f8e09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D"  alt="" />
              </div>
              <div className="md:text-2xl text-xl">My name Is khan</div>
              <button className="px-2 py-1 text-white rounded-md shadow-2xl shadow-black  bg-blue-600 " >Click me</button>
            </div>
        </>
    )
}