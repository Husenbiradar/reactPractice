import React, { useCallback, useState, useEffect, useRef } from 'react'

function App() {
const [password, setPasssword] =useState(null)
const [lenght, setLenght] = useState(8)
const [number, setNumber] =useState(false)
const [charector, setCharector] = useState(false)

const PasswordGenrator= useCallback(()=>{

let pass= '';
let str= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
let num= '1234567890'
let char= '!@#$%^&*()_+=-~'

if(number) str+=num
if(charector) str+=char

// lenght Loop 
for (let i =0; i<=lenght; i++){
  let chare =Math.floor(Math.random()* str.length + 1)
  pass+=str.charAt(chare)
}
setPasssword(pass)


},[lenght, number, charector,setPasssword])

useEffect(()=>{
  PasswordGenrator()
},[lenght, number, charector, PasswordGenrator])

// useRef hook 


const PasswordRef= useRef(null)
const coppyBtn= useCallback(()=>{
  PasswordRef.current?.select()
  window.navigator.clipboard.writeText(password)

},[password])
return (
    <div>
      <div className="w-1/3 text-white bg-black px-2 py-11 mx-auto text-center space-y-3 my-13">
        <h1 className=''>Password Genretor</h1>
        <input value={password} ref={PasswordRef} type="text" className='w-64 py-1  px-2 bg-transparent text-white border-2' readOnly />
        <button  onClick={coppyBtn} className='bg-green-700 px-1 py-[6px] rounded-r-md'>Coppy</button>
        <div className="space-x-3 ">
          <label htmlFor="">Lenght : {lenght}</label>
          <input value={lenght} onChange={(e)=>{setLenght(e.target.value)}} type="range"/>
          <input  value={number} onChange={()=> setNumber((prev)=> !prev)} type="checkBox" />
          <label htmlFor="">Number</label>
          <input value={charector} onChange={()=> setCharector((prev)=> !prev) } type="checkBox" />
          <label htmlFor="">Charector</label>
        </div>
      </div>
    </div>
  )
}

export default App
