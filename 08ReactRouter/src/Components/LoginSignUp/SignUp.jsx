import React from 'react'
import {Link} from 'react-router-dom'

function SignUp() {
  return (
    <div className='bg-gray-700 text-center   py-6'>
        <h1 className='p-y-6 text-white'>Sign Up</h1>
        <form className='space-y-5 space-x-14 '>
          <div></div>
            <label>Username:</label>
            <input type="text" id="username" name="username" className=' bg-gray-400' />
            <br />
            <label>Email:</label>
            <input type="email" id="email" name="email"  className=' bg-gray-400' />
            <br />
            <label>Password:</label>
            <input type="password" id="password" name="password"  className=' bg-gray-400'/>
             <br />
             <label>Confirm Password:</label>
             <input type="password" id="confirmPassword" name="confirmPassword" className=' bg-gray-400' />
             <br />
             <input type="submit" value="Sign Up" />
             <p> If You have Acount ?<Link  to="/Login" className='text-blue-500 ' > Login</Link></p>
             </form>
      
    </div>
  )
}

export default SignUp
