import type { MetaFunction } from "@remix-run/node";
import { Form, Link, redirect, useActionData } from "@remix-run/react";
import { comparePassword } from "~/utils/auth";
import prisma from "~/utils/db";
import { createSession } from "~/utils/sessions";

export const meta: MetaFunction = () => {
  return [
    { title: "Elm" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function action({ request }) {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) {
    return { error: "User not found" };
  }

  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    return { error: "Invalid credentials" };
  }

  const session = await createSession(user.id);

  return redirect("/", {
    headers: {
      "Set-Cookie": session,
    },
  });
}

function login() {
  const actionData = useActionData();

  return (
    <>
      <h1 className="text-3xl md:text-4xl font-black text-gruvbox-contrast">
        Login
      </h1>
      <Form className="mt-8 space-y-4" method="post">
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="input border-1 border-base-200 w-full"
            placeholder="Enter your username"
            name="username"
            id="username"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="input border-1 border-base-200 w-full"
            placeholder="Enter your password"
            name="password"
            id="password"
            required
          />
        </div>
        <button className="btn w-full text-lg">Login</button>
        <Link className="text-gruvbox-muted" to="/signup">
          Don't have an account?
        </Link>
        {actionData?.error && (
          <p className="text-red-500">{actionData.error}</p>
        )}
      </Form>
    </>
  );
}

export default login;
