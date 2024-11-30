import React from "react";
import { useAuth } from "./AuthProvider";

function LogoutBtn() {
  const { logout } = useAuth();

  async function handleLogout() {
    await logout();
  }

  return (
    <button
      className="mt-8 bg-red-500 text-gruvbox-bg w-full p-3 rounded-xl font-bold transition-all hover:opacity-85 active:opacity-70"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
