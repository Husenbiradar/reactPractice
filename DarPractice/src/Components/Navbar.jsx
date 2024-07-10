import React from "react";

export default function Navbar({darkmode, setDarkMode}){

const onClickBtn =()=>{
    setDarkMode(!darkmode)
}
const NavbarBtn= ()=>{
    const Navitems=document.getElementById('Navitems')
    Navitems.classList.toggle('hidden')
}
    return(
    
    <>
        <div className={`flex justify-between  px-3 py-2  ${darkmode ? "bg-black text-white  " : "bg-gray-300 text-black"}  md:px-5 `}>
            <div className="Logo text-2xl  ">PortFolio</div>
            <div className="flex">
            <div className={`absolute left-0 top-12 px-2 py-2 md:static just md:space-x-12 md:flex  ${darkmode ? "bg-black " : "bg-gray-300 " } md:block hidden `} id="Navitems">
                <div className="item">Home</div>
                <div className="item">About</div>
                <div className="item">Gallery</div>
                <div className="item">Contact</div>
            </div>
           <div className="flex space-x-2">
           <div className="flex ">
                <input type="text" placeholder="Search" className={`ps-2 ${darkmode ? "text-white border-2 border-white" :  "text-black border-[1px] rounded-l-md border-black "} outline-none bg-inherit  `}/>
                <button className="bg-green-800 px-2 rounded-r-md text-white">Search</button>
            </div>
                <div className="flex md:text-md md:pt-1 "  >
                    <div className={`${darkmode ?"hidden" :"block"}`} >
                        <i class="fa-solid fa-moon" onClick={onClickBtn} ></i>
                    </div>
                    <div className={`${darkmode ? "block" :"hidden"}`}>
                        <i class="fa-solid fa-sun" onClick={onClickBtn}></i>
                    </div>
                    <div className="">
                        <div className="text-md px-2 ">{darkmode ? "Light" : "Dark"}</div>
                    </div>
                </div>
                <div className="md:hidden">
                <i class="fa-solid fa-bars" onClick={NavbarBtn} ></i>
                </div>
           </div>
        </div>
        </div>
    </>
    
    )
}