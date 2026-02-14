"use client";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import React from "react";

export default function QuizPage() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    try {
      logout();
      router.push("/login");
      alert("Berhasil logout");
    } catch (err) {
      console.error("Gagal logout", err);
      alert("Gagal logout");
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <button onClick={handleLogout} className="bg-gray-300 p-4 cursor-pointer">
        ini logout
      </button>
    </div>
  );
}
