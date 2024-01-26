"use client"
import Nav from "../_components/nav"
import Link from "next/link";

export default function DeliveryDetails() {
    return (
        <main className="bg-slate-600 w-screen h-screen flex flex-col align-items">
        <Nav></Nav> 
        <div className="flex flex-col justify-center items-center">
            <div>Delivery Details</div>
        </div>
      </main>
    )
}