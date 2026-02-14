"use client";

import React, { useContext, createContext, useState, useEffect } from "react";

type User = {
  username: string;
  password: string;
};

type AuthContextType = {
  user: string | null;
  login: (username: string, password: string) => boolean;
  register: (username: string, password: string) => boolean;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  //  cek localstorage
  useEffect(() => {
    const savedUser = localStorage.getItem("quiz_current_user");
    if (savedUser) {
      setUser(savedUser);
    }
    setIsLoading(false);
  }, []);

  // register
  const register = (username: string, password: string) => {
    // ambil semua users yang udah daftar
    const usersData = localStorage.getItem("quiz_users");
    const users: User[] = usersData ? JSON.parse(usersData) : [];

    // cek username
    const existUser = users.find((u) => u.username === username);
    if (existUser) {
      return false;
    }

    // simpan user baru
    users.push({ username, password });
    localStorage.setItem("quiz_users", JSON.stringify(users));
    return true;
  };

  // login
  const login = (username: string, password: string) => {
    // ambil semua users
    const usersData = localStorage.getItem("quiz_users");
    const users: User[] = usersData ? JSON.parse(usersData) : [];

    // cek username & password
    const user = users.find(
      (u) => u.username === username && u.password === password,
    );

    if (user) {
      localStorage.setItem("quiz_current_user", username);
      setUser(username);
      return true;
    }

    // login gagal
    return false;
  };

  //  logout
  const logout = () => {
    try {
      localStorage.removeItem("quiz_current_user");
      setUser(null);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth digunakan dengan AuthProvider");
  }
  return context;
}
