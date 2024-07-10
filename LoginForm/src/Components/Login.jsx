import {useContext, useState} from 'react'
import UserContext from '../Context/UserContext'
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser}= useContext(UserContext)
    const handleSubmit = (e)=>{
      e.preventDefault()
      setUser({username, password})
    }
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">
            UserName
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userName"
            type="text"
            placeholder="UserName"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}

          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
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
