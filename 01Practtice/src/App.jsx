import { useState } from 'react'
import Navbar from './components/Navbar'
import User from './components/User'
import Readd from './readd'
function App() {
  const [name, setName] = useState("Hitsh")

  return (
    <>
    <Navbar name={name} />
    <button onClick={()=> setName("Shahid")} className='bg-green-900 rounded-md  px-4 p-2 text-white'>Update Btn</button>
    
    <br /><User/>

    <br />
    <Readd/>
     </>
  )
}

export default App
