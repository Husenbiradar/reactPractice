import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UseContext from '../Context/UseContext';

function LoginForm() {
    const { user } = useContext(UseContext);
    const navigate = useNavigate();
    const [input, setInput] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const userName = user ? user.username : "guest";
    const userEmail = user ? user.email : 'guest';
    const userPassword = user ? user.password : "noPassword";

    const onSubmit = (e) => {
        e.preventDefault();
        if (!input || !password) {
            setErrorMessage("Please fill all the fields");
            return;
        }

        if ((input === userEmail || input === userName) && password === userPassword) {
            setErrorMessage('');
            navigate('/home');
        } else {
            setErrorMessage("Invalid credentials");
        }
    }

    return (
        <div>
            <form className="max-w-md mx-auto p-4 mt-28 bg-white rounded shadow-md" onSubmit={onSubmit}>
                <h1 className="text-3xl font-bold mb-4">Login</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input">Username or Email</label>
                    <input
                        type="text"
                        id="input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Username or Email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="********"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Login</button>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Forgot password?</a>
                </div>
                <div>
                    <p className="text-sm text-gray-600 flex pl-24 pt-10">Don't have an account? <span><Link to='/signup' className='text-orange-500 hover:text-orange-800'>Signup</Link></span></p>
                </div>
                {errorMessage && <p className="text-red-500 text-xs italic mt-4">{errorMessage}</p>}
            </form>
        </div>
    );
}

export default LoginForm;
