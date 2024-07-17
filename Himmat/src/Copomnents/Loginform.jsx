import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UseContext from '../Context/UseContext'


// function Loginform() {

//   const {user} = useContext(UseContext)
//   console.log(user.setFormData.)
//   return (
//     <form className="max-w-md mx-auto p-4 mt-28 bg-white rounded shadow-md">
//   <h1 className="text-3xl font-bold mb-4">Login</h1>
//   <div className="mb-4">
//     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
//     <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="example@example.com" />
//   </div>
//   <div className="mb-4">
//     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
//     <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="********" />
//   </div>
//   <div className="flex items-center justify-between">
//     <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" >Login</button>
//     <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Forgot password?</a>
//   </div>
//   <div>
//           <p className="text-sm text-gray-600 flex pl-24 pt-10">Don't have on account? <span>
//             <Link to='/signup' className=' text-orange-500 hover:text-orange-800'>Signup</Link></span></p>
//         </div>
// </form>
//   )
// }
function Loginform(){
 
    const { user } = useContext(UseContext)

  if (!user) {
    return <div>
            <form className="max-w-md mx-auto p-4 mt-28 bg-white rounded shadow-md">
  <h1 className="text-3xl font-bold mb-4">Login</h1>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
    <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="example@example.com" />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
    <input type="password" id="password"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="********" />
  </div>
  <div className="flex items-center justify-between">
    <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" >Login</button>
    <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Forgot password?</a>
  </div>
  <div>
          <p className="text-sm text-gray-600 flex pl-24 pt-10">Don't have on account? <span>
            <Link to='/signup' className=' text-orange-500 hover:text-orange-800'>Signup</Link></span></p>
        </div>
</form>
    </div>;
  }

  return (
    <>
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>

        <form className="max-w-md mx-auto p-4 mt-28 bg-white rounded shadow-md">
  <h1 className="text-3xl font-bold mb-4">Login</h1>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
    <input type="email" value={user.email} id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="example@example.com" />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
    <input type="password" id="password" value={user.password} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="********" />
  </div>
  <div className="flex items-center justify-between">
    <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" >Login</button>
    <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Forgot password?</a>
  </div>
  <div>
          <p className="text-sm text-gray-600 flex pl-24 pt-10">Don't have on account? <span>
            <Link to='/signup' className=' text-orange-500 hover:text-orange-800'>Signup</Link></span></p>
        </div>
</form>
</>
  );
};
export default Loginform
