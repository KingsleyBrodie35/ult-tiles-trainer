"use client"
import React, { ReactNode } from 'react';
import { useState } from 'react';
import { boolean, string } from "zod";
import Nav from "../_components/nav"
import Link from "next/link";
import { trpc } from "~/utils/trpc";

export default function TrainingDashboard() { 
    return (
    <main className="bg-slate-600 w-screen h-screen flex flex-col align-items">
      <Nav></Nav>
      <div className="flex flex-col justify-center items-center">
        <Bar heading="Debtor Enquiry" subHeadings={[]}></Bar>
        <Bar heading="Sales Orders" subHeadings={["Order Details", "Delivery Details"]} ></Bar>
        <Bar heading="Delivery Details" subHeadings={["Address"]}></Bar>
      </div>
    </main>
   )
}

interface BarProps {
    heading: string;
    subHeadings: string[];
}

function Bar(props: BarProps) {

    const [showMore, setShowMore] = useState(false);
    const { heading, subHeadings } = props;
    let complete: boolean[] = []
    subHeadings.map((subheading) => {
      switch (subheading) {
        case "Order Details":
          const val = trpc.training.getOrderDetails.useQuery()
          if (val.data === undefined || val.data === null) {
            complete.push(false)
          } else {
            complete.push(val.data)
          }
        break;
        
      }
    })

    const rows: React.ReactNode[] = subHeadings.map((subHeading, idx) => (
      <Link key={idx} href={`/${subHeading.replace(" ", "")}`} className="w-full flex flex justify-center items-center">
      <div className={"flex items-center justify-between w-5/6 border p-6 cursor-pointer bg-slate-700"}>
        <p className={`text-xl ${complete[idx] ? "text-green-600" : "text-slate-50"}`}>{subHeading}</p>
        {complete[idx] && <span className="text-green-600 text-2xl">&#10003;</span>}
      </div>
      </Link>
      
    ));

    function handleClick() {
        //toggle showMore
        setShowMore(!showMore)
    }

    return (
      <>
        <div className="w-5/6 border border-slate-500 p-6 cursor-pointer" onClick={handleClick}>
              <p className="text-slate-50 text-xl">{heading}</p>
        </div>
        {showMore && rows}
      </>
    )
}