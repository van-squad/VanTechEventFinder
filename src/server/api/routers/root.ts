/**
 * This file contains the root router of your tRPC-backend
 */
import { router } from "../trpc";
import { exampleRouter } from "./example";

export const appRouter = router({
  example: exampleRouter,
});

export type AppRouter = typeof appRouter;
