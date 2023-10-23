import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prisma } from "~/server/db";
import { checkEmailValid, hashPassword } from "~/utils";
import { router, publicProcedure } from "~/server/api/trpc";

export const authRouter = router({
  signup: publicProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
        name: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { email, password, name } = input;
      console.log({ email, password, name });
      const isValidEmail = checkEmailValid(email);
      if (!isValidEmail)
        throw new TRPCError({
          code: "UNPROCESSABLE_CONTENT",
          message: "Email is invalid",
        });
      const existingUser = await prisma.user.findUnique({
        where: { email: email },
      });
      if (existingUser)
        throw new TRPCError({
          code: "UNPROCESSABLE_CONTENT",
          message: "User exists already!",
        });
      const hashedPassword = await hashPassword(password);
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
        },
      });
      return newUser;
    }),
});
