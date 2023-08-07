import { hash, compare } from "bcryptjs";

export async function hashPassword(password: string) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export async function verifyPassword(password: string, hashedPassword: string) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}

/**
 *
 * Check if email is valid with following rules:
 * 1️⃣ The local part (before the @ symbol) can contain letters (both uppercase and lowercase), numbers, and special characters like ._%+-.
 * 2️⃣ The domain part (after the @ symbol) can contain letters, numbers, and hyphens.
 * 3️⃣ There must be at least one period . after the @ symbol, followed by at least two letters (e.g., .com, .org, .net).
 * powered by chatGPT
 */
export function checkEmailValid(email: string) {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
}
