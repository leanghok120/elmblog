import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../components/AuthProvider";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signup(email, password, username);
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="p-3 w-full bg-transparent border-gruvbox-bg2 border rounded-xl outline-none"
            />
            <input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="p-3 w-full bg-transparent border-gruvbox-bg2 border rounded-xl outline-none"
            />
            <input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="p-3 w-full bg-transparent border-gruvbox-bg2 border rounded-xl outline-none"
            />
            <button
              disabled={isLoading}
              className="bg-gruvbox-fg text-gruvbox-bg w-full p-3 rounded-xl font-bold transition-all hover:opacity-85 active:opacity-70"
            >
              Signup
            </button>
            {error && <p className="text-red-500 text-center">{error}</p>}
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
