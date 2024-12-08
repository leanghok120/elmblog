import { createCookieSessionStorage, redirect } from "@remix-run/node";
import prisma from "./db";

const sessionSecret = process.env.SESSION_SECRET;

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "user_session",
      secure: process.env.NODE_ENV === "production", // Only secure cookies in production
      secrets: [sessionSecret],
      sameSite: "lax",
    },
  });

export async function createSession(userId: string) {
  const session = await getSession();
  session.set("userId", userId);
  return commitSession(session);
}

export async function getUser(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");
  if (!userId) {
    return null;
  }

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    return user;
  } catch (error) {
    return null;
  }
}

export async function destroyUserSession(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));

  return redirect("/signup", {
    headers: { "Set-Cookie": await destroySession(session) },
  });
}
