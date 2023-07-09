"use client";

import superjson from "superjson";
import { createHydrateClient } from "~/@trpc/next-layout";
// Wrap with this component for React Server Component
export const HydrateClient = createHydrateClient({
  transformer: superjson,
});
