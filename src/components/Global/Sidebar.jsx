"use client";
import React from "react";
import Logo from "../Header/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  KeyRound,
  LayoutDashboard,
  Mailbox,
  MapPinHouse,
  Settings,
  X,
  Bell,
  Search,
} from "lucide-react";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/tenant-dashboard" },
    { name: "Properties", icon: MapPinHouse, href: "/tenant-dashboard/properties" },
    { name: "Mail me", icon: Mailbox, href: "/tenant-dashboard/mail-me" },
    { name: "Ready to Rent", icon: KeyRound, href: "/tenant-dashboard/ready-to-rent" },
    { name: "Profile Settings", icon: Settings, href: "/tenant-dashboard/profile" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 flex flex-col`}
      >
        {/* Top section */}
        <div className="h-16 flex items-center justify-between border-b border-[#F1F3F7] px-4">
          <Logo />
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile-only controls */}
        <div className="md:hidden px-4 py-4 border-b border-[#F1F3F7] space-y-4">
          {/* Search */}
          <div className="flex items-center bg-gray-100 rounded-md px-2 py-2">
            <Search className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full bg-transparent border-0 focus:outline-none px-2 text-sm"
            />
          </div>

          {/* Settings & Notifications */}
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-2 text-gray-700 hover:text-[#202A54] transition-colors">
              <Settings className="h-5 w-5" />
              <span className="text-sm font-medium">Settings</span>
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-[#202A54] transition-colors">
              <Bell className="h-5 w-5" />
              <span className="text-sm font-medium">Notifications</span>
            </button>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 px-4 py-6 space-y-3 overflow-y-auto">
          {navItems.map(({ name, icon: Icon, href }) => {
            const isActive = pathname === href;
            return (
              <Link key={name} href={href} onClick={() => setSidebarOpen(false)}>
                <button
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center font-medium transition-all
                    ${
                      isActive
                        ? "bg-[#202A54] text-white"
                        : "hover:bg-gray-100 text-[#78808B]"
                    }`}
                >
                  <Icon className="h-5 w-5 mr-2.5" />
                  <span>{name}</span>
                </button>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
