import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="bg-slate-600 w-100 min-h-screen">
      <div className="flex flex-row w-100	items-center p-2">
        <div className="flex flex-row items-center flex-start">
          <img src="/logo.png"></img>
          <p>Training Module</p>
        </div>
        <div className="flex flex-row items-center justify-end">
          {/* <img src={session?.user.image} className="rounded-full size-16"></img> */}
          <p>{session?.user.name}</p>
          <Link
            href={session ? "/api/auth/signout" : "/api/auth/signin"}
            className="rounded-full bg-white/10 px-10 py-3 no-underline transition hover:bg-white/20"
          >
            {session ? "Sign out" : "Sign in"}
        </Link>
        </div>
      </div>
    </main>
  );
}
