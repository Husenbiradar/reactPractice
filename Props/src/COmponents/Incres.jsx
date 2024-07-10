import React, { useState } from 'react'

function Incres() {

    const [number, setNumber]= useState(1)
        const Increase = ()=>{
            if (number <= 1 ) setNumber( number -1)
        }
    const decrease = ()=>{
        if(number > 20) setNumber(number + 1)
    } 
  return (
    <>
      <h1>{number}</h1>
        <button onClick={Increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default Incres
