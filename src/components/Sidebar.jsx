import React, { useState } from "react";
import { Link } from "react-router";
import { HomeIcon, UserIcon, TelescopeIcon, PencilIcon } from "lucide-react";

function Sidebar() {
  const [isVisible, setIsVisible] = useState(false);

  function handleMouseEnter() {
    setIsVisible(true);
  }

  function handleMouseLeave() {
    setIsVisible(false);
  }

  return (
    <>
      <div
        className="fixed top-0 left-0 h-full w-52"
        onMouseEnter={handleMouseEnter}
      ></div>

      <div
        className={`fixed top-0 h-full w-52 p-5 border-2 border-gruvbox-bg2 transition-transform`}
        style={{
          transform: isVisible ? "translateX(0)" : "translateX(-100%)",
        }}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col gap-10">
          <Link to="/" className="text-xl font-bold flex items-center gap-2">
            <HomeIcon />
            Home
          </Link>
          <Link
            to="/write"
            className="text-xl font-bold flex items-center gap-2"
          >
            <PencilIcon />
            Write
          </Link>
          <Link
            to="/discover"
            className="text-xl font-bold flex items-center gap-2"
          >
            <TelescopeIcon />
            Discover
          </Link>
          <Link
            to="/profile"
            className="text-xl font-bold flex items-center gap-2"
          >
            <UserIcon />
            Profile
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
