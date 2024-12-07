import { Form, Link } from "@remix-run/react";

function login() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-black text-gruvbox-contrast">
        Login
      </h1>
      <Form className="mt-8 space-y-4">
        <div>
          <label>Username</label>
          <input
            type="text"
            className="input border-1 border-base-200 w-full max-w-xs"
            placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            className="input border-1 border-base-200 w-full max-w-xs"
            placeholder="Enter your password"
            required
          />
        </div>
        <button className="btn w-full text-lg">Login</button>
        <Link className="text-gruvbox-muted" to="/signup">
          Don't have an account?
        </Link>
      </Form>
    </>
  );
}

export default login;
