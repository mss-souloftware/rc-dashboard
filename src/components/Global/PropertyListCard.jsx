"use client";
import React from "react";
import { Heart, Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PropertyListCard({
    imageUrl,
    price,
    address,
    bedrooms,
    bathrooms,
    parks,
    agency,
    agent,
    type,
    slug
}) {
    const agentInitials = agent
        .split(" ")
        .map((n) => n[0])
        .join("");

    return (
        <Link href={`/properties/${slug}`} className="mb-4 inline-block w-full">
            <div className="bg-white rounded-2xl p-3 hover:shadow-lg transition flex flex-col md:flex-row gap-4 items-start cursor-pointer border border-[#F4F7F9]">
                {/* Image */}
                <div className="relative w-full md:w-[360px] h-[180px] md:h-[260px] rounded-xl overflow-hidden shrink-0">
                    <Image
                        src={imageUrl}
                        alt="Property"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-10 rounded-xl" />
                    <button className="absolute top-3 right-3 bg-white/40 p-1.5 rounded-full">
                        <Heart className="w-5 h-5 text-white" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center h-full md:py-1">
                    <div className="flex items-center gap-2 text-xs text-[#342C91] font-semibold bg-[#DCE0F480] w-fit px-3 py-1 rounded-full mb-2">
                        <Dot className="w-4 h-4" /> {type}
                    </div>
                    <p className="font-bold text-2xl text-gray-800">${price} <span className="text-gray-800">/ week</span></p>
                    <p className="text-gray-600 text-md my-2">{address}</p>

                    {/* Icons */}
                    <div className="flex gap-4 text-gray-600 text-sm mt-3 flex-wrap">
                        <span className="flex items-center gap-1.5">
                            <Image src="/global/bedroom.svg" width={16} height={16} alt="Bedrooms" /> {bedrooms}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Image src="/global/bath.svg" width={16} height={16} alt="Bathrooms" /> {bathrooms}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Image src="/global/parking.svg" width={16} height={16} alt="Parking" /> {parks}
                        </span>
                    </div>
                </div>

                {/* Agent Info */}
                <div className="hidden md:flex flex-col justify-center items-start max-w-[240px] min-w-[180px] text-sm text-gray-600 pl-4 border-l border-gray-100 self-stretch">
                    <div className="flex flex-col items-start gap-2">
                        <div className="w-9 h-9 rounded-full bg-[#202A54] flex items-center justify-center text-xs font-bold text-white">
                            {agentInitials}
                        </div>
                        <div className="text-sm leading-tight">
                            <div className="text-2xl font-medium text-gray-800">{agency}</div>
                            <div className="text-lg text-gray-500 mt-3">{agent}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
