"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token ) {
      setAuthState({
        isAuthenticated: true,
      });
    }
    setLoading(false);
  }, []);

  const signIn = (token, user) => {
    localStorage.setItem("authToken", token);
    setAuthState({
      isAuthenticated: true,
    });
  };
  const signup = (token, user) => {
    localStorage.setItem("authToken", token);
    setAuthState({
      isAuthenticated: true,
    });
  };

  const signOut = () => {
    localStorage.removeItem("authToken");
    setAuthState({
      isAuthenticated: false,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, signIn,signup, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
