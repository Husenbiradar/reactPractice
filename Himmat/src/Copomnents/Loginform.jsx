import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UseContext from '../Context/UseContext';

function LoginForm() {
    const { user } = useContext(UseContext);
    const navigate = useNavigate();
    const [input, setInput] = useState('');
    const [password, setPassword] = useState('');
    const [inputError, setInputError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const userName = user ? user.username : "guest";
    const userEmail = user ? user.email : 'guest';
    const userPassword = user ? user.password : "noPassword";

    const validateInput = (value) => {
        if (!value) return "Please fill this field";
        if (/\d/.test(value)) return "Input contains numbers";
        const specialCharsPattern = /[^a-zA-Z]/;
        if (specialCharsPattern.test(value)) return "Input contains special characters";
        return '';
    };

    const validatePassword = (value) => {
        if (!value) return "Please fill this field";
        return '';
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const inputValidationError = validateInput(input);
        const passwordValidationError = validatePassword(password);

        if (inputValidationError || passwordValidationError) {
            setInputError(inputValidationError);
            setPasswordError(passwordValidationError);
            return;
        }

        if ((input === userEmail || input === userName) && password === userPassword) {
            setInputError('');
            setPasswordError('');
            navigate('/Layout');
        } else {
            setInputError('');
            setPasswordError("Invalid Password");
        }
    };

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
                        onChange={(e) => { setInput(e.target.value); setInputError(''); }}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Username or Email"
                    />
                    {inputError && <p className="text-red-500 text-xs italic mt-2">{inputError}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); setPasswordError(''); }}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="********"
                    />
                    {passwordError && <p className="text-red-500 text-xs italic mt-2">{passwordError}</p>}
                </div>
                <div className="flex items-center justify-center">
                    <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-20 rounded">Login</button>
                </div>
                <div className='flex items-center justify-center '>
                    <p className="text-sm text-gray-600 flex  pt-4">Don't have an account? <span><Link to='/signup' className='text-orange-500 hover:text-orange-800'>Signup</Link></span></p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
