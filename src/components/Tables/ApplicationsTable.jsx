import { ChevronRight, SquarePen } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const applications = [
    { id: 1, status: "Applied", color: "green" },
    { id: 2, status: "Saved", color: "red" },
    { id: 3, status: "Applied", color: "green" },
    { id: 4, status: "Applied", color: "green" },
];

export default function ApplicationsTable() {
    return (
        <div className="bg-white rounded-xl border border-[#DBE0EA] p-5">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-[#1B254F]">Total Applications</h3>
                <select className="border border-[#DBE0EA] rounded-lg px-2 py-2 text-sm">
                    <option>This week</option>
                    <option>This month</option>
                </select>
            </div>

            <table className="w-full text-sm">
                <thead>
                    <tr className="text-gray-500 border-b  border-[#EAEAF0]">
                        <th className="text-left font-normal py-2">Property</th>
                        <th className="text-left font-normal py-2">Agent</th>
                        <th className="text-left font-normal py-2">Price</th>
                        <th className="text-left font-normal py-2">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {applications.map((app) => (
                        <tr key={app.id} className="hover:bg-gray-50 odd:bg-gray-50 border border-[#EAEAF0] border-r-0 border-l-0">
                            <td className="py-3">
                                <div className='flex items-center gap-2'>
                                    <Image
                                        src="/global/property.png"
                                        alt="Property"
                                        width={40}
                                        height={40}
                                        className="rounded-lg"
                                    />
                                    <span>503/16 Lonsdale Street, Braddon</span>
                                </div>
                            </td>
                            <td className="py-3 flex items-center gap-2">
                                <div className='flex items-center gap-2'>
                                    <Image
                                        src="/global/profile.jpg"
                                        alt="Agent"
                                        width={30}
                                        height={30}
                                        className="rounded-full"
                                    />
                                    <span>Antoni Francki</span>
                                </div>
                            </td>
                            <td className="py-3">$650 / week</td>
                            <td className="py-3">
                                <div className='flex items-center justify-between'>
                                    <span
                                        className={`px-3 py-1 text-xs font-medium rounded-full ${app.color === "green"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-600"
                                            }`}
                                    >
                                        {app.status}
                                    </span>

                                    <SquarePen className="w-4 h-4 text-[#323C65] mr-4" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
                <button className="text-blue-600 text-sm decoration-1 underline">See all</button>
                <div className="flex items-center gap-2">
                    <button className="px-3 py-1 border rounded">1</button>
                    <button className="px-3 py-1 border rounded bg-[#202A54] text-white">
                        2
                    </button>
                    <button className="px-3 py-1 border rounded">3</button>
                    <button className="px-3 py-1 border rounded">4</button>
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                </div>
            </div>
        </div>
    )
}
