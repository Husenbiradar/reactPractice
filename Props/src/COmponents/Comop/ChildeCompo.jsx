import React, { useState } from 'react'

function ChildeCompo({getColor}) {
    const [activeColor, setActivColor]=useState('')
    const ColoChange=(e)=>{
        const {value} = e.target;
        setActivColor(value)
        getColor(value)
    }
  return (
    <div>
        <input placeholder='Enter the color name' onChange={ColoChange} value={activeColor}/>
    </div>
  )
}

export default ChildeCompo
