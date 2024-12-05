"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Slidbar";

function TestShowimage() {
  const router = useRouter();
  const [name, setName] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  // Load data from localStorage on the client side
  useEffect(() => {
    const storedName = localStorage.getItem("names");
    const storedRole = localStorage.getItem("rol");
    setName(storedName);
    setRole(storedRole);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    localStorage.removeItem("rol");
    localStorage.removeItem("names");
    router.push("/login"); // Redirect to login page
  };

  return (
    <div>
      <Navbar />
      <div className="p-4 py-16 sm:ml-64">
        <button onClick={handleLogout} className="bg-green-400 px-6 rounded-lg py-2">
          Logout
        </button>
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold">Welcome, {name || "Guest"}</h1>
          <p className="text-lg">Role: {role || "Unknown"}</p>
        </div>
      </div>
    </div>
  );
}

export default TestShowimage;
