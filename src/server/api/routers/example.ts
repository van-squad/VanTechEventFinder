import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { router, publicProcedure } from "~/server/api/trpc";
import { prisma } from "~/server/db";

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(async ({ input }) => {
      const d = await prisma.user.findFirst({
        where: { email: input.text },
      });
      if (!d) {
        throw new TRPCError({
          code: "UNPROCESSABLE_CONTENT",
          message: "user not found!",
        });
      }
      console.log("d: ", d);
      return {
        greeting: d,
      };
    }),
});
