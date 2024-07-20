import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UseContext from '../Context/UseContext';

function Signup() {
  const { setUser } = useContext(UseContext);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateUsername = (username) => {
    // Username should not contain numbers or special characters
    const re = /^[a-zA-Z]+$/;
    return re.test(username);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    // Reset errors
    setErrorMessage('');
    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    // Check for empty fields
    if (!formData.username) {
      setUsernameError('Username is required');
      isValid = false;
    }
    if (!formData.email) {
      setEmailError('Email is required');
      isValid = false;
    }
    if (!formData.password) {
      setPasswordError('Password is required');
      isValid = false;
    }
    if (!confirmPassword) {
      setConfirmPasswordError('Confirm Password is required');
      isValid = false;
    }

    // Validate username
    if (formData.username && !validateUsername(formData.username)) {
      setUsernameError('Username should not contain numbers or special characters');
      isValid = false;
    }

    // Validate email
    if (formData.email && !validateEmail(formData.email)) {
      setEmailError('Invalid email format');
      isValid = false;
    }

    // Check if passwords match
    if (formData.password && confirmPassword && formData.password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    // If all validations pass
    setUser(formData);
    setFormData({ username: '', email: '', password: '' });
    setConfirmPassword('');
    alert('Signup Successfully');
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
          type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Username" />
        {usernameError && <p className="text-red-500 text-xs italic">{usernameError}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input 
          name='email'
          value={formData.email}
          onChange={handleChange}
          type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Email" />
        {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
        <input
          name='password'
          value={formData.password}
          onChange={handleChange}
          type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="********" />
        {passwordError && <p className="text-red-500 text-xs italic">{passwordError}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="********" />
        {confirmPasswordError && <p className="text-red-500 text-xs italic">{confirmPasswordError}</p>}
      </div>
      <div className="text-center">
        <button 
          type='submit'
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-20 rounded">Sign Up</button> 
         
         <p className="text-sm text-gray-600 flex pt-4 pl-[7rem]">Already have an account? <span>
         <Link to='/' className='text-orange-500 hover:text-orange-800'>Login</Link></span></p>
      </div>
    </form>
  )
}

export default Signup;
