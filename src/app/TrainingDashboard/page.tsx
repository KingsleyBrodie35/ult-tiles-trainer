"use client"
import React, { ReactNode } from 'react';
import { useState } from 'react';
import { string } from "zod";
import Nav from "../_components/nav"
import Link from "next/link";

export default function TrainingDashboard() { 
    return (
    <main className="bg-slate-600 w-screen h-screen flex flex-col align-items">
      <Nav></Nav>
      <div className="flex flex-col justify-center items-center">
        <Bar heading="Debtor Enquiry" subHeadings={[]}></Bar>
        <Bar heading="Sales Orders" subHeadings={["Order Details", "Delivery Details"]}></Bar>
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

    const rows: React.ReactNode[] = subHeadings.map((subHeading, idx) => (
      <Link key={idx} href={`/${subHeading.replace(" ", "")}`}>
      <div className={"w-5/6 border border-slate-500 bg-slate-700 p-6 cursor-pointer"}>
        <p className="text-slate-50 text-xl">{subHeading}</p>
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