import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "~/env.mjs";

import { createContext } from "~/server/api/context";
import { appRouter } from "~/server/api/routers/root";

export default createNextApiHandler({
  router: appRouter,
  createContext(opts) {
    return createContext({
      type: "api",
      ...opts,
    });
  },
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
          );
        }
      : undefined,
});
