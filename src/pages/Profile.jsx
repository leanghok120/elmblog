import React from "react";
import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/ProfileCard";
import Navbar from "../components/Navbar";

function Profile() {
  return (
    <>
      <Navbar />
      <div className="h-full flex justify-center">
        <div className="p-4 md:p-10 w-full max-w-xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">Profile</h1>
          <ProfileCard />
        </div>
      </div>
    </>
  );
}

export default Profile;
