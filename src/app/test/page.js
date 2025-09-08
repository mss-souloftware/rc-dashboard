"use client";
import Image from "next/image";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
} from "recharts";
import { ChevronRight } from "lucide-react";

const chartData = [
    { date: "Mar 12", applications: 12 },
    { date: "Mar 19", applications: 9 },
    { date: "Mar 26", applications: 10 },
    { date: "Apr 2", applications: 8 },
    { date: "Apr 9", applications: 1 },
    { date: "Apr 16", applications: 11 },
    { date: "Apr 23", applications: 13 },
];

const applications = [
    { id: 1, status: "Applied", color: "green" },
    { id: 2, status: "Saved", color: "red" },
    { id: 3, status: "Applied", color: "green" },
    { id: 4, status: "Applied", color: "green" },
];

export default function DashboardPage() {
    return (
        <main className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 bg-gray-50 min-h-screen">
            <div className="col-span-2 space-y-6">
                {/* Chart */}
                <div className="bg-white rounded-xl shadow p-5">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Total Applications</h3>
                        <select className="border rounded px-2 py-1 text-sm">
                            <option>This week</option>
                            <option>This month</option>
                        </select>
                    </div>
                    <div className="h-60">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Area
                                    type="monotone"
                                    dataKey="applications"
                                    stroke="#2563eb"
                                    fill="#bfdbfe"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="applications"
                                    stroke="#2563eb"
                                    strokeWidth={2}
                                    dot={{ r: 5 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

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

            {/* Right Sidebar */}
            <div className="space-y-6">
                {/* Profile Card */}
                <div className="bg-white rounded-xl shadow p-5 text-center">
                    <div className="flex justify-end">
                        <button className="text-sm border px-3 py-1 rounded-lg">
                            Edit Profile
                        </button>
                    </div>
                    <Image
                        src="/profile.jpg"
                        alt="Profile"
                        width={80}
                        height={80}
                        className="rounded-full mx-auto mb-3"
                    />
                    <h4 className="text-lg font-semibold">Antoni Francki</h4>
                    <p className="text-gray-500 text-sm">Lonsdale Street, Braddon</p>

                    <div className="text-left mt-4 space-y-1 text-sm text-gray-600">
                        <p>
                            <span className="font-medium">Email:</span>{" "}
                            antonifrancki@gmail.com
                        </p>
                        <p>
                            <span className="font-medium">Date of birth:</span> 03 March, 1978
                        </p>
                        <p>
                            <span className="font-medium">Address:</span> 503/16 Lonsdale
                            Street, Braddon
                        </p>
                    </div>
                </div>

                {/* Saved Listings */}
                <div className="bg-white rounded-xl shadow p-5">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold">Saved Listings</h3>
                        <button className="text-blue-600 text-sm">See more</button>
                    </div>
                    <div className="relative">
                        <Image
                            src="/saved.jpg"
                            alt="Saved Listings"
                            width={400}
                            height={200}
                            className="rounded-lg"
                        />
                        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                            Under Offer
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
}
