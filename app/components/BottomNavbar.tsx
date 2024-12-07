import { Link, useRouteLoaderData } from "@remix-run/react";
import { HomeIcon, UserIcon, TelescopeIcon, PencilIcon } from "lucide-react";

function BottomNavbar() {
  const data = useRouteLoaderData("root");
  const user = data?.user;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-base-100 shadow-inner border-t border-base-300 z-50">
      <nav className="flex items-center justify-evenly py-3">
        <Link to="/" className="btn btn-ghost btn-circle text-primary-focus">
          <HomeIcon size={24} />
        </Link>
        <Link
          to="/write"
          className="btn btn-ghost btn-circle text-primary-focus"
        >
          <PencilIcon size={24} />
        </Link>
        <Link
          to="/discover"
          className="btn btn-ghost btn-circle text-primary-focus"
        >
          <TelescopeIcon size={24} />
        </Link>
        <Link
          to={user ? `/profile/${user.username}` : "/signup"}
          className="btn btn-ghost btn-circle text-primary-focus"
        >
          <UserIcon size={24} />
        </Link>
      </nav>
    </div>
  );
}

export default BottomNavbar;
