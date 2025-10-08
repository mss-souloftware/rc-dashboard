"use client";
import React from "react";
import Image from "next/image";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FAQForm from "../Global/FAQForm";

export default function ImageStep({
  question,
  questSubtitle,
  fields,
  propertyType,
  description,
  address,
  formData,
}) {
  const [value, setValue] = useState(new Date());
    const [faqAnswers, setFaqAnswers] = useState([]);
  return (
    <div className="flex flex-col  justify-center  space-y-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
        {question}
      </h2>
      <p className="text-gray-500">{questSubtitle}</p>

      <div className="relative rounded-xl h-56  border border-gray-200">
        <Image
          src="/global/property1.png"
          alt="Property1"
          fill
          className="object-cover rounded-2xl"
        />
        <button className="absolute top-2 right-2 bg-[#2d2b3c] text-white rounded-full w-7 h-7 shadow">
          ✕
        </button>
        <p className="absolute bottom-2 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded-3xl">
          Main Image
        </p>
      </div>
      <div>
        <span className="text-green-600">{propertyType}</span>
        <h1 className="text-3xl my-2">{address}</h1>
        <div className="flex my-5">
          <span className="flex gap-2 border border-gray-200 p-1">
            {" "}
            <Image
              src="/global/bedroom.svg"
              width={16}
              height={16}
              alt="Bedrooms"
            />
            <span>2 Bedroom</span>
          </span>
          <span className="flex gap-2 border border-gray-200 p-1">
            {" "}
            <Image
              src="/global/bath.svg"
              width={16}
              height={16}
              alt="Bathrooms"
            />
            <span>2 Bedroom</span>
          </span>
          <span className="flex gap-2 border border-gray-200 p-1">
            <Image
              src="/global/parking.svg"
              width={16}
              height={16}
              alt="Parking"
            />
            <span>2 Bedroom</span>
          </span>
        </div>

        <div>
          <h3 className="text-lg text-gray-600 my-2">
            Modern 2-Bedroom Family Home on 503/16 Lonsdale Street, Braddon 
          </h3>
          <p className="text-gray-400 my-2 text-sm">{description}</p>
          <span className="flex gap-2 text-[#202A54]"><span>Read More</span> <ChevronDown/></span>
        </div>

        <div className="w-full h-[350px] rounded-xl overflow-hidden border my-5 border-gray-300">
          <iframe
            title="map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345098045!2d144.95373531531726!3d-37.81627937975192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f2a0b9f5%3A0xf5775db21e6f3a5!2sMelbourne!5e0!3m2!1sen!2sau!4v1633566148203!5m2!1sen!2sau"
          ></iframe>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
          <h2 className="text-lg font-semibold mb-4">Select a Date</h2>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <Calendar onChange={setValue} value={value} />
          </div>
          <p className="mt-4 text-gray-600">
            Selected Date: {value.toDateString()}
          </p>
        </div>

        <div className="flex flex-col items-center">
      <FAQForm onChange={(answers) => setFaqAnswers(answers)} />
      <button
        onClick={() => console.log(faqAnswers)}
        className="mt-6 bg-blue-800 text-white px-6 py-2 rounded-xl hover:bg-blue-900"
      >
        Continue
      </button>
    </div>


<div className="w-full max-w-3xl mx-auto p-6">
  <h3 className="font-bold text-2xl my-4">Your Details</h3>
          <form className="w-full max-w-2xl border p-5 rounded-2xl bg-[#f6f7f9] border-gray-300 space-y-4">
        {fields.map((field, idx) => (
          <div key={idx} className="text-left">
            <label className="block text-sm  font-semibold text-gray-700 mb-1">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={(e) => onChange(field.name, e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-800 focus:outline-none"
              required={field.required}
            />
          </div>
        ))}
      </form>

</div>
      </div>
    </div>
  );
}
