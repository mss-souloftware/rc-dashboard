import React from "react";
import Image from "next/image";
import { useState } from "react";

export default function PriceStep({ question, questSubtitle, fields }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-7 w-full my-15 space-y-8">
      <div className="flex flex-col gap-3 text-center md:text-left align-center mx-5 md:mx-0 md:align-start md:w-2xl ">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          {question}
        </h2>
        <p className="text-gray-500">{questSubtitle}</p>
        <div>
            <button className="bg-[#202A54]  border rounded-4xl text-white hover:bg-white hover:text-[#202A54] px-6 py-1 btn ">
          Go to your Dashboard
        </button>
        </div>
      </div>

      <div className="w-[300px] h-[500px] overflow-hidden rounded-2xl shadow-md">
        <Image
          src="/global/property1.png"
          alt="Property1"
          width={300}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
