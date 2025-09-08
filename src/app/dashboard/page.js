"use client";
import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Global/Sidebar";
import Header from "@/components/Header/Header";
import Banner from "@/components/Global/Banner";
import Application from "@/components/Charts/Application";

import { ChevronRight } from "lucide-react";


const applications = [
    { id: 1, status: "Applied", color: "green" },
    { id: 2, status: "Saved", color: "red" },
    { id: 3, status: "Applied", color: "green" },
    { id: 4, status: "Applied", color: "green" },
];

export default function TenantDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <Sidebar />

            {/* Main content */}
            <div className="flex-1 flex flex-col">
                <Header />
                <div className="p-5 bg-[#F8F9FC]">
                    <Banner />

                    <main className="flex-1 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Chart Card */}
                        <div className="col-span-2 space-y-6">
                            {/* Chart */}
                            <Application />

                            {/* Applications Table */}
                            <div className="bg-white rounded-xl shadow p-5">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-semibold">Applications</h3>
                                    <select className="border rounded px-2 py-1 text-sm">
                                        <option>This week</option>
                                        <option>This month</option>
                                    </select>
                                </div>

                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="text-gray-500 border-b">
                                            <th className="text-left py-2">Property</th>
                                            <th className="text-left py-2">Agent</th>
                                            <th className="text-left py-2">Price</th>
                                            <th className="text-left py-2">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        {applications.map((app) => (
                                            <tr key={app.id} className="hover:bg-gray-50">
                                                <td className="py-3 flex items-center gap-2">
                                                    <Image
                                                        src="/property.jpg"
                                                        alt="Property"
                                                        width={40}
                                                        height={40}
                                                        className="rounded-lg"
                                                    />
                                                    <span>503/16 Lonsdale Street, Braddon</span>
                                                </td>
                                                <td className="py-3 flex items-center gap-2">
                                                    <Image
                                                        src="/profile.jpg"
                                                        alt="Agent"
                                                        width={30}
                                                        height={30}
                                                        className="rounded-full"
                                                    />
                                                    <span>Antoni Francki</span>
                                                </td>
                                                <td className="py-3">$650 / week</td>
                                                <td className="py-3">
                                                    <span
                                                        className={`px-3 py-1 text-xs font-medium rounded-full ${app.color === "green"
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-red-100 text-red-600"
                                                            }`}
                                                    >
                                                        {app.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                {/* Pagination */}
                                <div className="flex justify-between items-center mt-4">
                                    <button className="text-blue-600 text-sm">See all</button>
                                    <div className="flex items-center gap-2">
                                        <button className="px-2 py-1 border rounded">1</button>
                                        <button className="px-2 py-1 border rounded bg-blue-600 text-white">
                                            2
                                        </button>
                                        <button className="px-2 py-1 border rounded">3</button>
                                        <button className="px-2 py-1 border rounded">4</button>
                                        <ChevronRight className="w-4 h-4 text-gray-600" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Profile Card */}
                        <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center">
                            <Image
                                src="/profile.jpg"
                                alt="Profile"
                                width={80}
                                height={80}
                                className="rounded-full mb-3"
                            />
                            <h4 className="text-lg font-semibold">Antoni Francki</h4>
                            <p className="text-gray-500 text-sm">Lonsdale Street, Braddon</p>
                            <p className="text-gray-600 text-sm mt-2">
                                antonifrancki@gmail.com
                            </p>
                            <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg">
                                Edit Profile
                            </button>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
