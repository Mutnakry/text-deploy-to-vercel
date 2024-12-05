"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useAuth from '../../app/page'; // Adjust path as needed
import Navbar from '@/components/Slidbar';


function TestShowimage() {
    useAuth();
    const router = useRouter();
    const name = localStorage.getItem('names');
    const role = localStorage.getItem('rol');
    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token
        localStorage.removeItem('rol');
        localStorage.removeItem('names');
        router.push('/login'); // Redirect to login page
    };

    return (

        <div>
            < Navbar />
            <div className='p-4 py-16 sm:ml-64'>
                <button onClick={handleLogout} className='bg-green-400 px-6 rounded-lg py-2' >Logout</button>
                <div className='p-6 bg-gray-100 rounded-lg shadow-lg'>
                    <h1 className='text-2xl font-bold'>Welcome, {name}</h1>
                    <p className='text-lg'>Role: {role}</p>
                </div>
            </div>
        </div >
    );
}

export default TestShowimage;
