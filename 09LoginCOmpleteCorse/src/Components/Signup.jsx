import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../Context/UserContext';

function Signup() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { setUser } = useContext(UserContext);

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }
    setUser({ userName, email, password });
    console.log('Value is saved in Context');
  };

  return (
    <>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-3xl font-bold mb-4">Sign up</h1>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="userName"
              className="block text-sm font-bold mb-2"
            >
              User Name
            </label>
            <input
              type="text"
              id="userName"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded"
              placeholder="User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            onClick={handleSignup}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign up
          </button>
          <p className="text-sm text-gray-600 flex pl-2">
            Already have an account?{' '}
            <span>
              <Link to="/" className="text-orange-500 hover:text-orange-800">
                Login
              </Link>
            </span>
          </p>
        </form>
      </div>
    </>
  );
}

export default Signup;