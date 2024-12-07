import bcrypt from "bcrypt";
import { getUser } from "./sessions";
import { redirect } from "@remix-run/react";

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

export async function comparePassword(
  password: string,
  hashedPassword: string
) {
  return await bcrypt.compare(password, hashedPassword);
}

export async function requireAuth(request) {
  const user = await getUser(request);
  if (!user) {
    throw redirect("/signup");
  }

  return user;
}
