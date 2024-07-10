import React, { useState,useContext } from 'react'
import UserContext from '../Context/UserContext'

function SignUp() {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useContext(UserContext)

  const HandleSubmit=(e)=>{
    e.preventDefault()
    setUser({username, email, password})
  }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your username"
              required
              value={username}
              onChange={(e)=> setUserName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <a
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={HandleSubmit}
            >
              Sign Up
            </a>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600">Already have an account? <a href="#" className="text-blue-500 hover:text-blue-700">Login</a></p>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default SignUp
