import Image from 'next/image'
import React from 'react'

export default function Banner({ imgUrl, title, buttonText, buttonUrl }) {
    return (
        <div className="relative h-58 w-full rounded-2xl overflow-hidden">
            <Image
                src={imgUrl}
                alt="Dashboard Banner"
                fill
                className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                <h2 className="text-3xl font-semibold text-white">
                    {title}
                </h2>
                <button className="mt-4 bg-white text-[#6B6B6B] px-5 py-3 rounded-full text-sm font-semibold shadow">
                    {buttonText}
                </button>
            </div>
        </div>
    )
}
