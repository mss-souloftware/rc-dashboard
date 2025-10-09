"use client";
import React, { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

export default function InspectionDates() {
  const [range, setRange] = useState({ from: undefined, to: undefined });
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleAddToCalendar = () => {
    if (range?.from && range?.to) {
      setFromDate(format(range.from, "EEEE d, MMMM"));
      setToDate(format(range.to, "EEEE d, MMMM"));
      alert("✅ Dates added to calendar!");
    } else {
      alert("⚠️ Please select a date range first.");
    }
  };

  return (
    <div className=" rounded-xl my-7 p-6">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Dates for Inspection
      </h2>

      <div className="flex flex-wrap gap-4 bg-white items-center border border-gray-200 rounded-lg px-4 py-3 mb-8">
        <div className="flex items-center gap-3 border-r border-gray-200 pr-4">
          <div>
            <p className="text-xs text-gray-500">From</p>
            <p className="text-sm font-medium text-gray-700">
              {fromDate || "Select a date"}
            </p>
          </div>
          <AiOutlineCalendar className="text-gray-500 text-xl cursor-pointer" />
        </div>


        <div className="flex items-center gap-3 border-r border-gray-200 pr-4">
          <div>
            <p className="text-xs text-gray-500">To</p>
            <p className="text-sm font-medium text-gray-700">
              {toDate || "Select a date"}
            </p>
          </div>
          <AiOutlineCalendar className="text-gray-500 text-xl cursor-pointer" />
        </div>

        <button
          onClick={handleAddToCalendar}
          className="ml-auto bg-white border border-gray-300 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-50 transition"
        >
          Add to calendar
        </button>
      </div>

      <div className="flex justify-center">
        <DayPicker
          mode="range"
          selected={range}
          onSelect={setRange}
          numberOfMonths={2}
          pagedNavigation
        />
      </div>
    </div>
  );
}
