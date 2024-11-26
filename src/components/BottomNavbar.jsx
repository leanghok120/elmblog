import React from "react";
import { Link } from "react-router";
import { HomeIcon, UserIcon, TelescopeIcon, PencilIcon } from "lucide-react";

function BottomNavbar() {
  return (
    <div className="fixed bottom-0 w-full border-t-2 border-gruvbox-bg2 p-5">
      <nav className="flex items-center justify-evenly">
        <Link to="/" className="text-2xl font-bold">
          <HomeIcon size={24} />
        </Link>
        <Link to="/write" className="text-2xl font-bold">
          <PencilIcon size={24} />
        </Link>
        <Link to="/discover" className="text-2xl font-bold">
          <TelescopeIcon size={24} />
        </Link>
        <Link to="/profile" className="text-2xl font-bold">
          <UserIcon size={24} />
        </Link>
      </nav>
    </div>
  );
}

export default BottomNavbar;
