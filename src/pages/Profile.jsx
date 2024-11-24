import React from "react";
import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/ProfileCard";

function Profile() {
  return (
    <>
      <Sidebar />
      <div className="h-full flex justify-center">
        <div className="p-10 w-1/3">
          <h1 className="text-4xl font-black">Profile</h1>
          <ProfileCard />
        </div>
      </div>
    </>
  );
}

export default Profile;
