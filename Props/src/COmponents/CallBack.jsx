import React, { useState } from 'react'

function CallBack({getColor}) {
    const [activeColor, setActivColor]= useState()
    
    const handleChage=(e)=>{
        const {value} = e.target;
        setActivColor(value)
        getColor(value)
    }
    
  return (
    <div>
      <input type="text" placeholder='Enter the color name' onChange={handleChage}  value={activeColor} />
    </div>
  )
}

export default CallBack
