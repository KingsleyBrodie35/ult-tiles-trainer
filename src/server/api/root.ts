import { sessionRouter } from "~/server/api/routers/post";
import { trainingRouter } from "~/server/api/routers/trainingRouter";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  session: sessionRouter,
  training: trainingRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
