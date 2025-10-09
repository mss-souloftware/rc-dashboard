import React from "react";
import { Pencil, CreditCard } from "lucide-react";
import { useState } from "react";

export default function PriceStep({ question, questSubtitle, fields }) {
     const [weeklyRent, setWeeklyRent] = useState(650);
  const [useService, setUseService] = useState(false);

    const managementFee = 25;
  const monthlyEarnings = (weeklyRent + (useService ? managementFee : 0)) * 4;

  return (
    <div className="flex flex-col  justify-center  space-y-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
        {question}
      </h2>
      <p className="text-gray-500">{questSubtitle}</p>

       <div className=" p-8 max-w-3xl mx-auto">
      {/* Weekly Rent Section */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-6xl font-semibold text-gray-900">${weeklyRent}</h1>
          <span className="text-gray-600 text-xl">/ week</span>
          <Pencil className="text-gray-400 w-5 h-5 cursor-pointer hover:text-gray-600" />
        </div>
      </div>

      <div
        onClick={() => setUseService(!useService)}
        className={`flex bg-white items-center justify-between px-5 py-4 border rounded-xl cursor-pointer transition-all ${
          useService ? "border-[#202A54] bg-[#202A54]/5" : "border-gray-200"
        }`}
      >
        <div >
          <p className="font-medium text-gray-800">
            Use Our property management service
          </p>
          
        </div>
        <span className="text-gray-800 font-semibold">
          +${managementFee} <span className="text-sm font-normal">/ week</span>
          <p className="text-sm text-gray-400">+ Valued at $99</p>
        </span>
      </div>

      <div className="flex justify-between items-center mt-4 bg-white border border-gray-200 rounded-xl px-5 py-3">
        <p className="text-gray-600 font-medium">You earn</p>
        <p className="text-gray-800 font-semibold">
          ${monthlyEarnings}{" "}
          <span className="text-sm font-normal text-gray-500">/ Month</span>
        </p>
      </div>

      <p className="text-gray-800 mt-8 text-sm">
        “How many weeks can you afford 0% rental yield?”{" "}
        <span className="text-red-500">*</span>
      </p>

      <div className="flex gap-3 mt-4">
        <img src="/global/visa.png" alt="Visa" className="w-14 h-auto border rounded-md p-1" />
        <img src="/global/mastercard.png" alt="Mastercard" className="w-14 h-auto border rounded-md p-1" />
        <img src="/global/paypal.png" alt="PayPal" className="w-14 h-auto border rounded-md p-1" />
        <img src="/global/applepay.png" alt="ApplePay" className="w-14 h-auto border rounded-md p-1" />
      </div>


      <form className="mt-6 space-y-4 p-5 rounded-2xl border bg-[#f6f7f9] border-gray-300">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Cardholder name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full border bg-white border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-[#202A54] focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-4 gap-3">
          <div className="col-span-2">
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Card number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full border bg-white border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-[#202A54] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full border bg-white border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-[#202A54] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CCV <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="123"
              className="w-full border bg-white border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-[#202A54] focus:outline-none"
            />
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}
