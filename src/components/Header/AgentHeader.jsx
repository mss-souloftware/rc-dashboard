"use client";
import { Bell, Menu, Search, Settings } from "lucide-react";
import Image from "next/image";

export default function AgentHeader({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="h-16 bg-white border-b border-[#E5E7EB] flex items-center justify-between px-4 md:px-6 shadow-sm">
      {/* Left Section - Menu + Location */}
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden text-gray-600"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Location (hidden on mobile) */}
        <div className="hidden sm:flex items-center text-sm text-gray-700 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-green-500 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 10s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
            />
          </svg>
          <span>Your Location</span>
          <span className="ml-1 text-gray-500">
            503/16 Lonsdale Street, Braddon
          </span>
        </div>
      </div>

      {/* Center - Search (hidden on mobile) */}
      <div className="flex-1 max-w-md mx-4 hidden sm:flex items-center bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5">
        <Search className="h-5 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search here..."
          className="flex-1 bg-transparent border-0 focus:outline-none text-sm text-gray-700 px-2"
        />
      </div>

      {/* Right Section - Icons + Profile */}
      <div className="flex items-center gap-4">
        <button className="hidden sm:flex items-center text-gray-600 hover:text-gray-800 transition">
          <Settings className="h-5 w-5" />
        </button>

        <button className="flex items-center text-gray-600 hover:text-gray-800 transition">
          <Bell className="h-5 w-5 mr-1" />
          <span className="hidden md:inline text-sm font-medium">
            Notifications
          </span>
        </button>

        <div className="flex items-center gap-2">
          <Image
            src="/global/profile.jpg"
            alt="Profile"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <span className="hidden sm:inline text-sm font-medium text-gray-800">
            Antoni Francki
          </span>
        </div>
      </div>
    </header>
  );
}
