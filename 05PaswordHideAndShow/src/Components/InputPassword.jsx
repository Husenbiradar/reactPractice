import React from 'react'

function InputPassword() {
    const [passWord, setPassword]= React.useState(true)
    const checkPassword =()=>{
        setPassword(!passWord)
    }
  return (
    <div >
 
    <div >
    
      <input type={passWord ? "password" :"text"} 
      placeholder='passWord'
      onChange={(e)=> setPassword(e.target.value)} 
      />
      <div  onClick ={checkPassword}>
        { passWord ? <i class="fa-solid fa-eye-slash"></i> : <i class="fa-solid fa-eye"></i> }
      </div>
      
     </div>
      
    </div>
  )
}

export default InputPassword
