"use client"
import React from 'react';
import { useState } from 'react';
import Nav from "../_components/nav"
import Link from "next/link";
import { trpc } from "~/utils/trpc";
import { getSession } from "next-auth/react";

export default function TrainingDashboard() {
    //authorization of page
    const session = trpc.session.getSession.useQuery()
    if (session.data?.user) return (
      <main className="bg-slate-600 w-screen min-h-screen	 h-full flex flex-col align-items pb-8">
      <Nav></Nav>
      <div className="flex flex-col justify-center items-center">
        <Bar heading="Debtor Enquiry" subHeadings={[{heading: 'Introduction', link: 'Debtor'}]}></Bar>
        {/* <Bar heading="Inventory Master File" subHeadings={["Search", "Macros", "Supplier Stock Check"]}></Bar> */}
        <Bar heading="Sales Orders" subHeadings={[{heading: "Order Details", link: "OrderDetails"}, {heading: "Delivery Details", link: "DeliveryDetails"}]}></Bar>
        {/* <Bar heading="Quotes" subHeadings={["Quote Details", "Delivery Details", "Items", "Delivery"]}></Bar>
        <Bar heading="Delivery Run Sheet" subHeadings={["Booking a delivery", "Amending a delivery"]}></Bar> */}
      </div>
    </main>
    )

    return <div className="w-screen h-screen bg-slate-600 flex justify-center items-center"><a href="/api/auth/signin" className="">Sign in</a></div>
}

interface BarProps {
    heading: string;
    subHeadings: {heading: String, link: String}[];
}

function Bar(props: BarProps) {

    const [showMore, setShowMore] = useState(false);
    const { heading, subHeadings } = props;
    let complete: boolean[] = []

    subHeadings.map((subheading) => {
      switch (subheading.heading) {
        case "Order Details":
          const val = trpc.training.getOrderDetails.useQuery()
          if (val === undefined) {
            complete.push(false)
          } else {
            complete.push(val.data)
          }
        break;
        
      }
    })

    const rows: React.ReactNode[] = subHeadings.map((subHeading, idx) => (
      <Link key={idx} href={`/${subHeading?.link}`} className="w-full flex flex justify-center items-center">
      <div className={"flex items-center justify-between w-5/6 border p-6 cursor-pointer bg-slate-700"}>
        <p className={`text-xl ${complete[idx] ? "text-green-600" : "text-slate-50"}`}>{subHeading.heading}</p>
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