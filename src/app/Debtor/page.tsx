"use client"
import Nav from "../_components/nav"
import CompleteButtons from "../_components/completeButtons"

export default function Debtor() {
  return (
    <main className="bg-slate-600 w-screen h-screen flex flex-col">
      <Nav></Nav>
      <div className="w-screen flex justify-center">
        <div className="flex flex-col justify-center items-center w-3/6 bg-slate-700 p-6">
            <h1 className="text-2xl font-medium text-slate-50 pb-6">Debtor Introduction</h1>
            <p className="text-white text-lg">The Debtor’s Master File is where each customer is stored in the system and allows us to search for any piece of information relating to a customer. In this module we will learn how to search for a debtor and the various macro’s attached to the debtors file which are utilized daily.</p>
        </div>
      </div>
      <CompleteButtons></CompleteButtons>
    </main>
  )
}