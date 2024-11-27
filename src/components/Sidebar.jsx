import React, { useState } from "react";
import { Link } from "react-router";
import { HomeIcon, UserIcon, TelescopeIcon, PencilIcon } from "lucide-react";

function Sidebar() {
  const [isVisible, setIsVisible] = useState(true);

  function handleMouseEnter() {
    setIsVisible(true);
  }

  function handleMouseLeave() {
    setIsVisible(false);
  }

  return (
    <>
      {/* Hover Area */}
      <div
        className="fixed top-0 left-0 h-full w-20 bg-transparent"
        onMouseEnter={handleMouseEnter}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-52 p-5 border-2 border-gruvbox-bg2 transition-transform`}
        style={{
          transform: isVisible ? "translateX(0)" : "translateX(-100%)",
        }}
        onMouseLeave={handleMouseLeave}
      >
        <nav className="flex flex-col gap-10">
          <Link to="/" className="text-xl font-bold flex items-center gap-2">
            <HomeIcon size={24} />
            Home
          </Link>
          <Link
            to="/write"
            className="text-xl font-bold flex items-center gap-2"
          >
            <PencilIcon size={24} />
            Write
          </Link>
          <Link
            to="/discover"
            className="text-xl font-bold flex items-center gap-2"
          >
            <TelescopeIcon size={24} />
            Discover
          </Link>
          <Link
            to="/profile"
            className="text-xl font-bold flex items-center gap-2"
          >
            <UserIcon size={24} />
            Profile
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
