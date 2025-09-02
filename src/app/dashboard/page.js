"use client";
import { useState } from "react";
import { Menu, Bell, Square, LayoutDashboard, MapPinHouse, Mailbox, KeyRound, Settings } from "lucide-react";
import Image from "next/image";
import Logo from "@/components/Header/Logo";

export default function TenantDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="hidden md:flex flex-col w-64 bg-white shadow-lg">
                <div className="h-16 flex items-center justify-center border-b">
                    <Logo />
                </div>
                <nav className="flex-1 px-4 py-6 space-y-3">
                    <button className="w-full text-left px-3 py-2 rounded-md bg-[#202A54] text-white font-medium flex items-center">
                        <LayoutDashboard className="h-5 w-5 mr-2.5" />
                        <span>Dashboard</span>
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 text-[#78808B] flex items-center">
                        <MapPinHouse className="h-5 w-5 mr-2.5" />
                        <span>Properties</span>
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 text-[#78808B] flex items-center">
                        <Mailbox className="h-5 w-5 mr-2.5" />
                        <span>Mail me</span>
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 text-[#78808B] flex items-center">
                        <KeyRound className="h-5 w-5 mr-2.5" />
                        <span>Ready to Rent</span>
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 text-[#78808B] flex items-center">
                        <Settings className="h-5 w-5 mr-2.5" />
                        <span>Profile Settings</span>
                    </button>
                </nav>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="h-16 bg-white border-b flex items-center justify-between px-4">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="md:hidden"
                    >
                        <Menu className="h-6 w-6" />
                    </button>

                    <div className="flex-1 flex justify-center">
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="w-full max-w-md border rounded-lg px-3 py-2 text-sm"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <Bell className="h-6 w-6 text-gray-500" />
                        <Image
                            src="/profile.jpg"
                            alt="Profile"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                    </div>
                </header>

                {/* Dashboard Banner */}
                <div className="relative h-48 w-full">
                    <Image
                        src="/banner.jpg"
                        alt="Dashboard Banner"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                        <h2 className="text-2xl font-semibold text-white">
                            Tenant Dashboard
                        </h2>
                        <button className="mt-3 bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow">
                            Ready to Rent
                        </button>
                    </div>
                </div>

                {/* Content Grid */}
                <main className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Chart Card */}
                    <div className="col-span-2 bg-white rounded-xl shadow p-5">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Total Applications</h3>
                            <select className="border rounded px-2 py-1 text-sm">
                                <option>This week</option>
                                <option>This month</option>
                            </select>
                        </div>

                        {/* Replace this div with Recharts component */}
                        <div className="h-60 flex items-center justify-center text-gray-400">
                            [Chart Placeholder]
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
    );
}
