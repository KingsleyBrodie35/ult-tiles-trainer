import { z } from "zod";
import { getSession } from "next-auth/react";
import { getServerAuthSession } from "~/server/auth";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const sessionRouter = createTRPCRouter({
  getUsername: protectedProcedure.query(async ({ ctx } ) => {
    const name = ctx.session.user.name
    return name
  }),
  getSession: protectedProcedure.query(async ({ ctx } ) => {
    return ctx.session
  }),
});
