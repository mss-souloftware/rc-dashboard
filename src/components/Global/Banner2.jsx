import Image from "next/image";
import React from "react";

export default function Banner2({ imgUrl, title, subtitle }) {
  return (
    <div className="flex items-center justify-between w-full h-67 overflow-hidden rounded-2xl p-8 bg-gradient-to-r from-[#D7DBEC] to-[#D4ECDC]">
      {/* Left Side - Text */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <p className=" text-gray-600 mt-1">{subtitle}</p>
      </div>

      {/* Right Side - Image */}
      <div className="relative">
        <Image
          src={imgUrl}
          alt="Banner Illustration"
            width={300}
            height={300}
          className="object-cover"
        />
      </div>
    </div>
  );
}
