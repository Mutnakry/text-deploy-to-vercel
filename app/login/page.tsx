"use client"; // Ensure this component is a Client Component

import React, { useReducer, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';


const Page = () => {
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:6800/api/login', { email, pass });
            localStorage.setItem('token', response.data.token); // Save token
            localStorage.setItem('rol', response.data.rol);
            localStorage.setItem('names', response.data.names);
            router.push('backend/');
            toast.success('Login successfull');
        } catch (error) {
            // Handle error and notify the user
            toast.error('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className='h-screen'>
            <div className='h-screen max-w-sm mx-auto grid items-center'>
                <div className='p-6 shadow-gray-500 rounded-lg bg-slate-400'>
                    <div className='text-center'>
                        <h1 className='p-6 text-5xl text-white font-bold'>Login</h1>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className='mb-5'>
                            <label className='block mb-2 text-sm font-bold text-white'>Your Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className='mb-5'>
                            <label className='block mb-2 text-white w-full text-sm font-bold'>Your Password</label>
                            <input
                                type="password"
                                value={pass}
                                onChange={(e) => setPassword(e.target.value)}
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                                required
                                placeholder="Password"
                            />
                        </div>
                        <div className='flex justify-center py-7'>
                            <button
                                type="submit"
                                className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5'
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Page;
