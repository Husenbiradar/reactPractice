import React, { useCallback, useEffect, useRef, useState } from 'react'

function App2() {

  const [Password, setPassword] = useState(null)
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [Charector, setCharector] = useState(false)

  const PasswordGenrator = useCallback(() => {
    let pass = '';
    let num = '1234567890'
    let str = 'abcdefghijklmnopqrstuvwxyzABCDFGHIJKLMNOPQRSTUVWXYZ';
    let char = '!@#$%^&*()_+-=`';

    if (number) str += num;
    if (Charector) str += char;

    for (let i = 0; i < length; i++) {
      let letters = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(letters)
    }
    setPassword(pass)


  }, [length, number, Charector, setPassword])

  useEffect(() => {
    PasswordGenrator()
  }, [length, number, Charector, PasswordGenrator])

  // Coppy Btn 
  const PassRef = useRef(null)
  const CoppyBtn = useCallback(() => {
    PassRef.current.select();
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  return (
    <div className='flex items-center'>

      <div className=" w-2/6 bg-black mx-auto p-3 text-white text-center my-32 ">
        <h1 className='text-2xl text-orange-700'>Password Genrator</h1>
        <input value={Password} ref={PassRef} type="text" className='w-64 bg-transparent border-white border-2 ' readOnly />
        <button onClick={CoppyBtn} className='py-[2px] px-2 bg-green-800 rounded-r-md'>Coppy</button>

        <div className="space-x-2 py-4">
          <label htmlFor="">Length : {length}</label>
          <input value={length} onChange={(e) => { setLength(e.target.value) }} type="range" />
          <label htmlFor="">number</label>
          <input value={number} onChange={() => setNumber((prev) => !prev)} type="checkbox" />
          <label htmlFor="">Charector</label>
          <input value={Charector} onChange={() => setCharector((prev) => !prev)} type="checkbox" />
        </div>
      </div>
    </div>
  )
}

export default App2
