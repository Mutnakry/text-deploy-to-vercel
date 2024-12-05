
"use client"; // Mark this component as a Client Component

import Image from "next/image";
import Login from '@/components/Login'
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
const useAuth = () => {
    const router = useRouter();
    useEffect(() => {
        // Check if token exists
        const token = localStorage.getItem('token');
        if (token) {
            router.push('/backend/'); // Redirect to the protected page
        }
        else{
          router.push('/login');
        }
    }, [router]);
};

export default useAuth;


