import React, { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwrite/config";
import db from "../appwrite/databases";

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
    const user = await account.create("unique()", email, password, username);

    await db.profiles.create({
      userId: user.$id,
      bio: "A quick little bio",
    });

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
    getUser,
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
