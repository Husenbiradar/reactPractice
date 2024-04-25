import React from 'react'

function Navbar({name}) {
    console.log(" render Methodas ");
  return (
    <>
      <form action="" className='flex justify-between px-4 bg-blue-400 text-white py-2 '>
        <div className="text-2xl">Logo</div>

        <ul className=' space-x-11 md:flex hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Contact</li>
        </ul>
      </form>


     <div className="text-center">
     <h1>Render Method</h1>
      {name}
     </div>

    </>
  )
}

export default Navbar
