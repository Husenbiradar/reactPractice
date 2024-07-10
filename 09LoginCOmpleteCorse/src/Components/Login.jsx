import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    < >
        <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded px-8  pb-8 mb-4">
        <h2 className="text-3xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
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
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
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
        <div>
          <p className="text-sm text-gray-600 flex pl-24 pt-10">Don't have on account? <span>
            <Link to='/SignUp' className=' text-orange-500 hover:text-orange-800'>Signup</Link></span></p>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Login
