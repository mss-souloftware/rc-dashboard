import React from "react";
import Image from "next/image";

export default function ImageReorderStep({ question, questSubtitle, fields }) {
  return (
    <div className="flex flex-col  justify-center  space-y-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
        {question}
      </h2>
      <p className="text-gray-500">{questSubtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="relative rounded-xl overflow-hidden border border-gray-200">
          <Image
            src="/global/property1.png"
            alt="Property1"
            fill
            className="object-cover"
          />
          <button className="absolute top-2 right-2 bg-[#2d2b3c] text-white rounded-full w-7 h-7 shadow">
            ✕
          </button>
          <p className="absolute bottom-2 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded-3xl">
            Main Image
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="relative rounded-xl w-full h-[200px] overflow-hidden border border-gray-200">
            <Image
              src="/global/property2.png"
              alt="Property2"
              fill
              className="object-cover"
            />
            <button className="absolute top-2 right-2 bg-[#2d2b3c] text-white rounded-full w-7 h-7 shadow">
              ✕
            </button>
          </div>
          <div className="relative rounded-xl w-full h-[200px] overflow-hidden border border-gray-200">
            <Image
              src="/global/property2.png"
              alt="Property2"
              fill
              className="object-cover"
            />
            <button className="absolute top-2 right-2 bg-[#2d2b3c] text-white rounded-full w-7 h-7 shadow">
              ✕
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3">
          <div className="cursor-pointer hover:bg-gray-50">
            <div className="relative rounded-xl w-full h-80  overflow-hidden border border-gray-200">
            <Image
              src="/global/property3.png"
              alt="Property2"
              fill
              className="object-cover"
            />
            <button className="absolute top-2 right-2 bg-[#2d2b3c] text-white rounded-full w-7 h-7 shadow">
              ✕
            </button>
          </div>
          </div>
          <button className="border border-gray-300 rounded-xl px-4 py-2 text-sm mb-8 hover:bg-[#202A54] hover:text-white flex gap-2 items-center justify-center">
            <span className="text-3xl font-semibold text-[#202A54]">+</span>{" "}
            <span>Show All Photos</span>
          </button>
        </div>
      </div>
    </div>
  );
}
