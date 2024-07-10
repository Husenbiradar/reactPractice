import { useState } from 'react'

function App() {

  
  const body= document.getElementsByTagName('body')[0]
  body.add
  const [color, setColor] =useState('danger')

  const Primary=()=>{
    setColor('primary')
  }
  const Secondary=()=>{
    setColor('secondary')
  }
  const Success=()=>{
    setColor('success')
  }
  const Danger=()=>{
    setColor('danger')
  }
  const Warning=()=>{
    setColor('warning')
  }
  const Info=()=>{
    setColor('info')
  }
  const Light=()=>{
    setColor('light')
  }
  const Dark=()=>{
    setColor('dark')
  }


  return (
    <>
   <div className="d-flex justify-content-center align-items-center mt-5">
  <button type="button" className="btn btn-primary m-2" onClick={Primary}>Primary</button>
  <button type="button" className="btn btn-secondary m-2" onClick={Secondary} >Secondary</button>
  <button type="button" className="btn btn-success m-2" onClick={Success} >Success</button>
  <button type="button" className="btn btn-danger m-2" onClick={Danger}>Danger</button>
  <button type="button" className="btn btn-warning m-2" onClick={Warning} >Warning</button>
  <button type="button" className="btn btn-info m-2" onClick={Info} >Info</button>
  <button type="button" className="btn btn-light m-2" onClick={Light} >Light</button>
  <button type="button" className="btn btn-dark m-2" Dark >Dark</button>
  
</div>

<div className={`border border-5 bg-${color} `} onChange={()=> setColor()} >
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit fugiat quaerat repellat animi nesciunt dolore dicta debitis dolores et, perferendis, mollitia rerum eaque quo deserunt quae eius hic, culpa modi.
</div>
    </>
  )
}

export default App
