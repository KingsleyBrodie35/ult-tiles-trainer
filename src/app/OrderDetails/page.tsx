"use client"
import Link from "next/link";
import { useState } from 'react';
import Nav from "../_components/nav"

export default async function OrderDetails() { 
    return (
        <main className="bg-slate-600 w-screen h-screen flex flex-col align-items">
        <Nav></Nav> 
        <div className="flex flex-col justify-center items-center">
            <div>Hello</div>
        </div>

        <div className="absolute bottom-0 right-0">
          <CompleteButton></CompleteButton>
          <button className="bg-slate-400	w-40 p-2 m-5 rounded-lg hover:bg-slate-300">Next Page</button>
        </div>
        
      </main>
    )
}

function CompleteButton() {
  const [complete, setComplete] = useState(false);

  //conditionally render bg colour
  const bgColour = complete ? "bg-green-400" : "bg-slate-400";

  function handleClick() {
    setComplete(!complete)
  }

  return (
    <button onClick={handleClick} className={`${bgColour} w-40 p-2 m-5 rounded-lg`}>Mark As Complete</button>
  )
}

