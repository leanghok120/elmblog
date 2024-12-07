import { createCookieSessionStorage } from "@remix-run/node";

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

export async function getUserId(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));
  return session.get("userId");
}

export async function destroyUserSession(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));
  return destroySession(session);
}
