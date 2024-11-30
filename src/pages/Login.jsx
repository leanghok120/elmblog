import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router";
import { account } from "../appwrite/config";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      await account.createEmailPasswordSession(email, password);

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
          <h1 className="text-3xl md:text-4xl font-black">Login</h1>
          <form className="space-y-3 my-6" onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
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
              Login
            </button>
            {error && <p className="text-red-500 text-center">{error}</p>}
          </form>
          <Link to="/signup" className="underline">
            Don't have an account?
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
