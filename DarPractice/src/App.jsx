import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'


function App() {
  const [darkmode, setDarkMode] = useState(false)


  return (
    <>
      <Navbar darkmode={darkmode} setDarkMode={setDarkMode}/>
      <Home/>
    </>
  )
}

export default App
