import { useState } from 'react'
// import Data from './COmponents/Data'
import CallBack from './COmponents/CallBack'
import './App.css'
import ParetComponte from './COmponents/ParentComponent'
import Incres from './COmponents/Incres'

function App() {
  const [count, setCount] = useState(0)

  const [UIcolor, setUIcolor] = useState(null)

  const getColor = (color)=>{
    setUIcolor(color)
  }
  return (
    <>
      <h1>Props</h1>
      <div style={{ backgroundColor: `${UIcolor}`, height: '10rem', width: '10rem', border: ' 1px solid black' }}></div>
      <br />
      
      <CallBack getColor={getColor}/>
      {/* <Data profile="Shahid"/> */}
      <Incres/>
      <ParetComponte/>
    </>
  )
}

export default App
