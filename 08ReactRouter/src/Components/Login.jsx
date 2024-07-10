import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <form className='bg-gray-700 text-center space-x-14 space-y-5 py-6'>
            <div></div>
        <h1 className='text-4xl text-gray-100'>Login Page</h1>
            <label>Username:</label>
            <input type="text" className='bg-gray-400' />
            <br />
            <label>Password:</label>
            <input type="password" />
            <br />
            <button type="submit">Login</button>
           <p> If You dont have Acount ?<Link  to="/Login/SignUp" className='text-blue-500 ' > SignUp</Link></p>
        </form>
    </div>
  )
}

export default Login