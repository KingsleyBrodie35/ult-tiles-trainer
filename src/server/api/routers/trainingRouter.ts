import { Truculenta } from "next/font/google";
import {
    createTRPCRouter,
    publicProcedure,
  } from "~/server/api/trpc";

export const trainingRouter = createTRPCRouter({
    updateOrderDetails: publicProcedure.query(async ({ ctx } ) => {
      if (ctx.session?.user.email != null) {
        const updatedUser = await ctx.db.user.update({
          where: {
            email: ctx.session.user.email
          },
          data: {
            orderDetails: true
          }
        })
        console.log(updatedUser)
        return "Success"
      } else {
        return "User not signed in"
      }
    }),

    getOrderDetails: publicProcedure.query(async ({ ctx }) => {
      if (ctx.session?.user.email != null) {
        const user = await ctx.db.user.findFirst({
          where: {
            email: ctx.session.user.email
          }
        })
        return user?.orderDetails
      }
      return false
    })
})