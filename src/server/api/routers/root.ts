/**
 * This file contains the root router of your tRPC-backend
 */
import { router } from "../trpc";
import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { favoriteEventsRouter } from "./favoriteEvent";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  favoriteEvents: favoriteEventsRouter,
});

export type AppRouter = typeof appRouter;
