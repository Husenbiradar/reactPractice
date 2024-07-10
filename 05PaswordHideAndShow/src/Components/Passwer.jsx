import React from 'react'

function Passwer() {

  const [passWord , setPassword]= React.useState(true)

  const Toggel= ()=>{
    setPassword(!passWord)
  }

  return (
    <div style={{display : 'flex' , border:  '.1px solid gray'  }}>
        <input type={passWord? 'password': ' text'} 
        style={{outline : 'white', border: 'white'}}
        onChange={(e)=> setPassword(e.target.value)} />
        <div style={{display: "flex", paddingLeft : ".4rem"}} onClick={Toggel}>
          {
            passWord ?  <i class="fa-solid fa-eye-slash"></i> :
            <i class="fa-solid fa-eye"></i>
          }
         
         </div>
    </div>
  )
}

export default Passwer
