"use client"
import Link from "next/link";
import { useState } from 'react';
import Nav from "../_components/nav"
import { comment } from "postcss";
import { trpc } from "~/utils/trpc";

interface CompleteBtnProps {
  complete: boolean;
  setComplete: (complete: boolean) => void;
}

interface CompleteProps {
  complete: boolean;
}


export default function OrderDetails() {
    const [complete, setComplete] = useState(false);
    return (
        <main className="bg-slate-600 w-screen h-screen flex flex-col align-items">
        <Nav></Nav> 
        <div className="flex flex-col justify-center items-center">
            <div>Hello</div>
        </div>

        <div className="absolute bottom-0 right-0">
          <CompleteButton complete={complete} setComplete={setComplete}></CompleteButton>
          <NextPage complete={complete}></NextPage>
        </div>
        
      </main>
    )
}

function CompleteButton(CompleteProps: CompleteBtnProps) {
  const {complete, setComplete} = CompleteProps
  //conditionally render bg colour
  const bgColour = complete ? "bg-green-400" : "bg-slate-400";

  function handleClick() {
    setComplete(!complete)
  }

  return (
    <button onClick={handleClick} className={`${bgColour} w-40 p-2 m-5 rounded-lg`}>Mark As Complete</button>
  )
}


function NextPage(completeProps: CompleteProps) {
  const {complete} = completeProps
  //check if mark as complete has been clicked
  if (complete) {
    const msg = trpc.training.updateOrderDetails.useMutation()
  }

  return (
    <Link href={"/DeliveryDetails"}><button className="bg-slate-400	w-40 p-2 m-5 rounded-lg hover:bg-slate-300">Next Page</button></Link>
  )
}

