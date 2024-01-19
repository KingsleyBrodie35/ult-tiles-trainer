import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

export default async function OrderDetails() { 
    const session = await getServerAuthSession();
    return (
        <main className="bg-slate-600 w-screen h-screen flex flex-col align-items">
        
        <div className="flex flex-row w-100	items-center p-2 justify-between py-5">
        <div className="flex flex-row items-center flex-start">
          <img className="w-40 pr-8 pl-4"src="/logo.png"></img>
          <p className="text-xl font-medium text-slate-50">Training Module</p>
        </div>
        <div className="flex flex-row items-center justify-items-end text-slate-50">
          <Link href="/TrainingDashboard" className="text-slate-50 pr-4">
          Training
          </Link>
          <p className="pr-4">{session?.user.name}</p>
          <Link
            href={session ? "/api/auth/signout" : "/api/auth/signin"}
            className="rounded-full bg-white/10 px-10 py-3 no-underline transition hover:bg-white/20 mr-8">
            {session ? "Sign out" : "Sign in"}
        </Link>
        </div>
      </div>

        <div className="flex flex-col justify-center items-center">
            <div>Hello</div>
        </div>
      </main>
    )
}