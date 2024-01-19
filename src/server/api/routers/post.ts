import { z } from "zod";
import { getSession } from "next-auth/react";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const sessionRouter = createTRPCRouter({
  getUsername: publicProcedure.query(async ({ ctx } ) => {
    const name = ctx.session?.user.name
    return name
  })
});
