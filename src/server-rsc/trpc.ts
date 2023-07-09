import { createTRPCNextLayout } from "~/@trpc/next-layout";
import { createContext } from "~/server/api/context";
import { appRouter } from "~/server/api/routers/root";
import { getUser } from "./getUser";
import superjson from "superjson";

export const rsc = createTRPCNextLayout({
  router: appRouter,
  transformer: superjson,
  createContext() {
    return createContext({
      type: "rsc",
      getUser,
    });
  },
});
