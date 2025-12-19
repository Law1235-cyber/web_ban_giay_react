import React, { createContext, useContext, useState, useEffect } from "react";
import { authService } from "@/data/authService";

const AuthContext = createContext();

const CURRENT_USER_KEY = "vite_current_user";

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem(CURRENT_USER_KEY);
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
  }, [currentUser]);

  const login = async (credentials) => {
    setLoading(true);
    try {
      const user = await authService.login(credentials);
      setCurrentUser(user);
    } finally {
      setLoading(false);
    }
  };

  const register = async (userInfo) => {
    setLoading(true);
    try {
      const user = await authService.register(userInfo);
      setCurrentUser(user);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const value = { currentUser, login, register, logout, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
