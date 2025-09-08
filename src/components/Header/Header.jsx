import { Bell, Menu, Search, Settings } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <header className="h-16 bg-white border-b border-[#F1F3F7] flex items-center justify-between px-4">
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden"
            >
                <Menu className="h-6 w-6" />
            </button>

            <div className="flex-1 flex justify-start items-center">
                <Search className="h-6 w-6 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search here..."
                    className="w-full max-w-md border-0 focus:outline-0 focus:border-0 px-2 py-2 text-sm"
                />
            </div>

            <div className="flex items-center gap-4">
                <span className="border-l border-r border-[#E9E9E9] px-2 text-[#222934]">
                    <Settings className="h-6 w-6 text-gray-500" />
                </span>
                <span className="flex items-center gap-2 border-r border-[#E9E9E9] px-2 text-[#222934]">
                    <Bell className="h-6 w-6 text-gray-500" />
                    Notifications
                </span>
                <span className="flex items-center gap-2 text-[#222934]">
                    <Image
                        src="/global/profile.jpg"
                        alt="Profile"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    Antoni Francki
                </span>
            </div>
        </header>
    )
}
