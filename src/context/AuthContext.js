// context/AuthContext.js

import React, { createContext, useState, useEffect, useContext } from "react";
import { getAuthUser } from "../services/api";
// Assuming you have an API call to get the authenticated user
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getAuthUser(); // Modify this according to your actual API call
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching authenticated user:", err);
      }
    };

    fetchUser();
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    // Optionally clear any stored tokens or user data here
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
