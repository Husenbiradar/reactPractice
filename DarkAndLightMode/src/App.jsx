import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
// import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const NavBtn=()=>{
    const Nav = document.getElementById('NavItems')
    Nav.classList.toggle('hidden')
  }

  return (
    <>
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    <Card darkMode={darkMode}/>
    </>
  )
}

export default App
