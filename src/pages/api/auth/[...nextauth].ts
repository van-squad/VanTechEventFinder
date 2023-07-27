import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "~/server/db";
import { verifyPassword } from "~/utils";
import { env } from "~/env.mjs";

export const nextAuthOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 60,
  },
  secret: env.NEXTAUTH_SECRET,

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
};

export default NextAuth(nextAuthOptions);
