"use client"
import Link from "next/link";
import { useState } from 'react';
import { string } from "zod";

export default async function TrainingDashboard() { 
  const barRows = []
  
  return (
   <main className="bg-slate-600 w-screen h-screen flex flex-col align-items">
     <div className="flex flex-col justify-center items-center">
       <Bar heading="Sales Orders" subHeadings={["Order Details", "Delivery Details"]}></Bar>
     </div>
   </main>
   )
}

interface BarProps {
    heading: string;
    subHeadings: string[];
}

function Bar({heading, subHeadings}: BarProps) {
    const [showMore, setShowMore] = useState(false);

    function handleClick() {
        //toggle showMore
        setShowMore(!showMore)
    }
    
    return (
      <>
        <div className="w-5/6 border border-slate-500 shadow-lg p-6" onClick={handleClick}>
              <p className="text-slate-50 text-xl">{heading}</p>
        </div>
        <div className="w-4/6 border border-slate-500 shadow-lg p-6"
        style={{ display: showMore ? 'block' : 'none' }}>
          
        </div>
      </>  
    )
}