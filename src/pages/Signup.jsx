import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router";

function Signup() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <Navbar />
      <div className="h-full flex justify-center">
        <div className="p-4 md:p-10 w-full max-w-xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">Signup</h1>
          <form className="space-y-3 my-6" onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              type="email"
              className="p-3 w-full bg-transparent border-gruvbox-bg2 border rounded-xl outline-none"
            />
            <input
              placeholder="Username"
              type="text"
              className="p-3 w-full bg-transparent border-gruvbox-bg2 border rounded-xl outline-none"
            />
            <input
              placeholder="Password"
              type="password"
              className="p-3 w-full bg-transparent border-gruvbox-bg2 border rounded-xl outline-none"
            />
            <button className="bg-gruvbox-fg text-gruvbox-bg w-full p-3 rounded-xl font-bold transition-all hover:opacity-85 active:opacity-70">
              Signup
            </button>
          </form>
          <Link to="/login" className="underline">
            Already have an account?
          </Link>
        </div>
      </div>
    </>
  );
}

export default Signup;
