"use client";
import { Bell, Menu, Search, Settings } from "lucide-react";
import Image from "next/image";

export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="h-16 bg-white border-b border-[#F1F3F7] flex items-center justify-between px-4">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden"
      >
        <Menu className="h-6 w-6 text-gray-700" />
      </button>

      {/* Search (desktop only) */}
      <div className="hidden md:flex flex-1 justify-start items-center">
        <Search className="h-5 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search here..."
          className="w-full max-w-md border-0 focus:outline-none px-2 py-2 text-sm bg-transparent"
        />
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-4">
        {/* Desktop: Settings + Notifications + Profile */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-600 hover:text-[#202A54] transition-colors">
            <Settings className="h-6 w-6" />
          </button>

          <button className="flex items-center gap-1 text-gray-600 hover:text-[#202A54] transition-colors">
            <Bell className="h-6 w-6" />
            <span className="text-sm">Notifications</span>
          </button>

          <div className="flex items-center gap-2">
            <Image
              src="/global/profile.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-sm font-medium text-[#222934]">
              Antoni Francki
            </span>
          </div>
        </div>

        {/* Mobile: Profile only */}
        <div className="flex items-center gap-2 md:hidden">
          <Image
            src="/global/profile.jpg"
            alt="Profile"
            width={35}
            height={35}
            className="rounded-full"
          />
          <span className="text-sm font-medium text-[#222934]">Antoni</span>
        </div>
      </div>
    </header>
  );
}
