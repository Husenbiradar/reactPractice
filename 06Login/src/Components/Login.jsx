import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    const HandleSubmite =(e)=>{
        e.preventDefault()
        setUser({userName, password})
    }
    return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="UserName">
            User Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="UserName"
            type="UserName"
            placeholder="Enter User Name"
            value={userName}
            onChange={(e)=> setUserName(e.target.value)}

          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onClick={HandleSubmite}
          >
            Login
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login
