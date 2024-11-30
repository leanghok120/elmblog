import React, { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwrite/config";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const userData = await account.get();
      setUser(userData);
    } catch {
      setUser(null);
    }
  }

  async function signup(email, password, username) {
    await account.create("unique()", email, password, username);
    getUser();
  }

  async function login(email, password) {
    await account.createEmailPasswordSession(email, password);
    getUser();
  }

  async function logout() {
    await account.deleteSession("current");
    getUser();
  }

  const contextData = {
    user,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
