import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const AddNumber=()=>{
    if(count < 20) setCount(count+1)
  }
  const Decrease=()=>{
    if(count>0) setCount(count -1)
  }

  return (
    <>
     <h1>Number</h1>
     <h2 onChange={setCount}>{count}</h2>
     <button onClick={AddNumber} >Increase</button>
     <button onClick={Decrease} >Decrease</button>
    </>
  )
}

export default App
