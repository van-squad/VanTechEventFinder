import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prisma } from "~/server/db";
import { router, publicProcedure } from "../trpc";

export const favoriteEventsRouter = router({
  getFavorites: publicProcedure
    .input(
      z.object({
        // userId
        userId: z.string().nonempty(),
      })
    )
    .query(async ({ input }) => {
      const favEvents = await prisma.favEvent.findMany({
        where: { userId: input.userId },
      });
      if (!favEvents) {
        throw new TRPCError({
          code: "UNPROCESSABLE_CONTENT",
          message: "Failed to get fav events",
        });
      }
      console.log({ favEvents });
      return favEvents;
    }),
  addFavorite: publicProcedure
    .input(
      z.object({
        // meetup data
        id: z.string().nonempty(),
        userId: z.string().nonempty(),
        date: z.string().nonempty(),
      })
    )
    .mutation(async ({ input }) => {
      // add data to db through prisma
      await prisma.favEvent.create({
        data: {
          ...input,
        },
      });
    }),
  deleteFavorite: publicProcedure
    .input(
      z.object({
        // meetup data, userId?
        id: z.string().nonempty(),
      })
    )
    .mutation(async ({ input }) => {
      // delete meetup data from favorite list
      await prisma.favEvent.delete({
        where: { id: input.id },
      });
    }),
});
