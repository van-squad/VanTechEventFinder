/**
 * This file contains the root router of your tRPC-backend
 */
import { router } from "../trpc";
import { exampleRouter } from "./example";
import { authRouter } from "./auth";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
