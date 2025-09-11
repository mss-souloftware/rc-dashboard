import { Calendar, Clock, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Inspection() {
    return (
        <div className="bg-white border border-[#DBE0EA] rounded-xl p-5 flex flex-col items-center ">
            <div className="flex justify-between items-center w-full mb-5">
                <h3 className="text-lg font-bold text-[#1B254F]">Upcoming Inspections</h3>
                <button className="text-[#6B6B6B] border border-[#F2F2F2] px-3.5 py-1.5 rounded-full text-sm font-bold">See All</button>
            </div>

            <div className="w-full bg-white border border-[#E4E8EF] rounded-xl p-4 flex justify-between items-start mb-5">
                {/* Left section */}
                <div className="flex flex-col gap-3">
                    {/* Profile */}
                    <div className="flex items-center gap-3">
                        <Image
                            src="/global/profile.jpg"
                            alt="Antoni Francki"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <div>
                            <h3 className="font-semibold text-[#1F2437] text-md">
                                Antoni Francki
                            </h3>
                            <p className="text-gray-500 text-sm">Independent Property Group</p>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-center gap-2 text-md text-gray-600">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span>503/16 Lonsdale Street, Braddon</span>
                    </div>

                    {/* Date & Time */}
                    <div className="flex items-center gap-6 text-md text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span>March 3rd</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span>12:00 PM</span>
                        </div>
                    </div>
                </div>

                {/* Right badge */}
                <div className="flex items-start">
                    <span className="bg-green-600 text-white text-xs font-medium rounded-md px-2 py-1">
                        12
                    </span>
                </div>
            </div>

            <div className="w-full bg-white border border-[#E4E8EF] rounded-xl p-4 flex justify-between items-start mb-5">
                {/* Left section */}
                <div className="flex flex-col gap-3">
                    {/* Profile */}
                    <div className="flex items-center gap-3">
                        <Image
                            src="/global/profile.jpg"
                            alt="Antoni Francki"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <div>
                            <h3 className="font-semibold text-[#1F2437] text-md">
                                Antoni Francki
                            </h3>
                            <p className="text-gray-500 text-sm">Independent Property Group</p>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-center gap-2 text-md text-gray-600">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span>503/16 Lonsdale Street, Braddon</span>
                    </div>

                    {/* Date & Time */}
                    <div className="flex items-center gap-6 text-md text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span>March 3rd</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span>12:00 PM</span>
                        </div>
                    </div>
                </div>

                {/* Right badge */}
                <div className="flex items-start">
                    <span className="bg-green-600 text-white text-xs font-medium rounded-md px-2 py-1">
                        12
                    </span>
                </div>
            </div>
        </div>
    )
}
