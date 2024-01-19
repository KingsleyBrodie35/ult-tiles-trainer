import Link from "next/link";
import { trpc } from "~/utils/trpc";

export const Nav = () => {
   const {data} = trpc.session.getUsername.useQuery()
   return (
    <div>
      <div className="flex flex-row w-100	items-center p-2 justify-between py-5">
        <div className="flex flex-row items-center flex-start">
          <img className="w-40 pr-8 pl-4"src="/logo.png"></img>
          <p className="text-xl font-medium text-slate-50">Training Module</p>
        </div>
        <div className="flex flex-row items-center justify-items-end text-slate-50">
          <Link href="/TrainingDashboard" className="text-slate-50 pr-4">
          Training
          </Link>
          <p className="pr-4">{data}</p>
          <Link
            href={data ? "/api/auth/signout" : "/api/auth/signin"}
            className="rounded-full bg-white/10 px-10 py-3 no-underline transition hover:bg-white/20 mr-8">
            {data ? "Sign out" : "Sign in"}
        </Link>
        </div>
      </div>
    </div>
   )
}

export default Nav