import React, { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwrite/config";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await account.get();
        setUser(userData);
      } catch {
        setUser(null);
      }
    };

    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
