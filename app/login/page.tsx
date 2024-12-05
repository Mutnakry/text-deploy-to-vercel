"use client"; // Ensure this component is a Client Component

import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Link from "next/link"; // Import Next.js Link
import Register from "@/components/Register/";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form reload
    try {
      // Make a POST request to login API
      const response = await axios.post("http://localhost:6800/api/login", {
        email,
        pass,
      });

      // Store token and user details in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("rol", response.data.rol);
      localStorage.setItem("names", response.data.names);

      // Navigate to the backend route
      toast.success("Login successful!");
      router.push("/backend"); // Update path to match your actual backend route
    } catch (error: any) {
      // Handle error and show notification
      toast.error(error.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div className="h-screen">
      <div className="h-screen max-w-sm mx-auto grid items-center">
        <div className="p-6 shadow-gray-500 rounded-lg bg-slate-400">
          <div className="text-center">
            <h1 className="p-6 text-5xl text-white font-bold">Login</h1>
          </div>
          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="mb-5">
              <label className="block mb-2 text-sm font-bold text-white">
                Your Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Email"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-5">
              <label className="block mb-2 text-white w-full text-sm font-bold">
                Your Password
              </label>
              <input
                type="password"
                value={pass}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Password"
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-8 items-center py-4">
              <button
                type="submit"
                className="text-blue-700 bg-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Login
              </button>
              <Link
                href="/register"
                className="text-blue-700 bg-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
