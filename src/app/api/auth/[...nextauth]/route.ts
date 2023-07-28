import type { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "~/server/db";
import { verifyPassword } from "~/utils";
import { env } from "~/env.mjs";

let maxAge = 15 * 60;
export const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      async authorize(credentials) {
        const { email, password } = credentials ?? {};
        if (!email || !password) throw new Error("Invalid Inputs");
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!user) {
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) {
          throw new Error("Could not log you in!");
        }
        return user;
      },
      credentials: {
        email: { type: "text" },
        password: { type: "password" },
      },
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge,
  },
  callbacks: {
    jwt({ token, account }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
};

async function auth(req: NextApiRequest, res: NextApiResponse) {
  // Get user's preference from cookie
  const cookieStore = cookies();
  const rememberMe = cookieStore.get("remember-me");

  // Get user's preference from form
  const urlString = req.url;
  const url = new URL(urlString as string);
  const params = new URLSearchParams(url.search);
  const rememberPassword = params.get("rememberPassword");

  if (rememberMe) {
    maxAge = rememberMe.value === "true" ? 30 * 24 * 60 * 60 : 15 * 60;
  }
  if (rememberPassword) {
    maxAge = rememberPassword === "true" ? 30 * 24 * 60 * 60 : 15 * 60;
    cookieStore.set("remember-me", rememberPassword, {
      path: "/",
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return await NextAuth(req, res, nextAuthOptions);
}

export { auth as GET, auth as POST };
