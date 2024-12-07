import type { MetaFunction } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Elm" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

function signup() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-black text-gruvbox-contrast">
        Signup
      </h1>
      <Form className="mt-8 space-y-4">
        <div>
          <label>Name</label>
          <input
            type="text"
            className="input border-1 border-base-200 w-full max-w-xs"
            placeholder="Enter your name"
            required
          />
        </div>
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
        <button className="btn w-full text-lg">Signup</button>
        <Link className="text-gruvbox-muted" to="/login">
          Already have an account?
        </Link>
      </Form>
    </>
  );
}

export default signup;
