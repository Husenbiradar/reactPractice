import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import UseContext from '../Context/UseContext'
function Signup() {
//   const [name, setName] =useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState()


//   const {setUser}= useContext(UseContext)
// const HandlerSubmit=(e)=>{
//   e.preventDefault()
//   setUser({name,email,password})
// }
const { setUser } = useContext(UseContext);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    setUser(formData);
  };


  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 mt-14 bg-white rounded shadow-md">
    <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
      <input
      name='username'
      value={formData.username}
      onChange={handleChange}
      type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="John Doe" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
      <input 
      // value={email}
      // onChange={(e)=> setEmail(e.target.value)}
      name='email'
      value={formData.email}
      onChange={handleChange}
      type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="johndoe@example.com" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
      <input
      // value={password}
      // onChange={(e)=> setPassword(e.target.value)}
      name='password'
      value={formData.password}
      onChange={handleChange}
      type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="********" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">Confirm Password</label>
      <input type="password" id="confirm-password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="********" />
    </div>
    <div className="flex items-center justify-between">
      <button 

      type='submit'
    // onClick={handleSubmit}
      className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
      <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Already have an account?</a>
    </div>
    <div>
          <p className="text-sm text-gray-600 flex pl-24 pt-10">Don't have on account? <span>
            <Link to='/' className=' text-orange-500 hover:text-orange-800'>Login</Link></span></p>
        </div>
  </form>
  )
}

export default Signup
