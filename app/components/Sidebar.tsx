import { useState } from "react";
import { Link, useRouteLoaderData } from "@remix-run/react";
import { HomeIcon, UserIcon, TelescopeIcon, PencilIcon } from "lucide-react";

function Sidebar() {
  const [isVisible, setIsVisible] = useState(true);
  const data = useRouteLoaderData("root");
  const user = data?.user;

  // Use a small delay to prevent accidental triggers
  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <>
      {/* Hover Area */}
      <div
        className="fixed top-0 left-0 h-full w-24 bg-transparent z-10"
        onMouseEnter={handleMouseEnter}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-base-100 border-2 border-base-200 shadow-lg z-20 transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-4">
          <nav className="flex flex-col gap-6">
            <Link
              prefetch="intent"
              to="/"
              className="btn btn-ghost flex items-center gap-3 text-lg font-medium"
            >
              <HomeIcon size={24} />
              Home
            </Link>
            <Link
              prefetch="intent"
              to="/write"
              className="btn btn-ghost flex items-center gap-3 text-lg font-medium"
            >
              <PencilIcon size={24} />
              Write
            </Link>
            <Link
              prefetch="intent"
              to="/discover"
              className="btn btn-ghost flex items-center gap-3 text-lg font-medium"
            >
              <TelescopeIcon size={24} />
              Discover
            </Link>
            <Link
              prefetch="intent"
              to={user ? `/profile/${user.username}` : "/signup"}
              className="btn btn-ghost flex items-center gap-3 text-lg font-medium"
            >
              <UserIcon size={24} />
              Profile
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
