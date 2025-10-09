"use client";
import React from "react";
import Logo from "../Header/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MessageCircle,
  LayoutDashboard,
  Settings,
  X,
  NotepadText,
  House,
  Upload,
  User,
  Bell,
  Search,
} from "lucide-react";

export default function AgentSidebar({ sidebarOpen, setSidebarOpen }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/agent-dashboard" },
    { name: "Transactions", icon: NotepadText, href: "" },
    { name: "Listed", icon: House, href: "/agent-dashboard/properties" },
    {
      name: "Make a Listing",
      icon: Upload,
      href: "/agent-dashboard/make-listing",
    },
    { name: "Tenants", icon: User, href: "" },
    { name: "Messages", icon: MessageCircle, href: "" },
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
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 flex flex-col`}
      >
        <div className="h-16 flex items-center justify-between border-b border-[#F1F3F7] px-4">
          <Logo />
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* 🔹 Mobile-Only Section (Location + Search + Icons) */}
        <div className="md:hidden border-b border-gray-200 px-4 py-4 space-y-4">
          {/* Location */}
          <div className="flex items-center text-sm text-gray-700 font-medium">
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
            <span>503/16 Lonsdale Street, Braddon</span>
          </div>

          {/* Search */}
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-3 py-2">
            <Search className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search here..."
              className="flex-1 bg-transparent border-0 focus:outline-none text-sm text-gray-700 px-2"
            />
          </div>

          {/* Settings + Notification */}
          <div className="flex items-center gap-4">
            <button className="flex items-center text-gray-600 hover:text-gray-800 transition">
              <Settings className="h-5 w-5" />
              <span className="ml-1 text-sm font-medium">Settings</span>
            </button>
            <button className="flex items-center text-gray-600 hover:text-gray-800 transition">
              <Bell className="h-5 w-5" />
              <span className="ml-1 text-sm font-medium">Notifications</span>
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-3 overflow-y-auto">
          {navItems.map(({ name, icon: Icon, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={name}
                href={href}
                onClick={() => setSidebarOpen(false)}
              >
                <button
                  className={`w-full text-left px-3 py-2 my-3 rounded-md flex items-center font-medium transition-all
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

          <div className="border-b border-gray-200 my-3"></div>

          <Link
            href="/agent-dashboard/image-resizer"
            onClick={() => setSidebarOpen(false)}
          >
            <button
              className={`w-full text-left px-3 py-2 rounded-md flex items-center font-medium transition-all hover:bg-gray-100 text-[#78808B] shadow-sm border border-gray-200`}
            >
              <User className="h-5 w-5 mr-2.5" />
              <span>Image Resizer</span>
            </button>
          </Link>

          <Link href="" onClick={() => setSidebarOpen(false)}>
            <button
              className={`w-full text-left px-3 py-2 rounded-md flex items-center font-medium transition-all hover:bg-gray-100 text-[#78808B] shadow-sm border border-gray-200 my-3`}
            >
              <MessageCircle className="h-5 w-5 mr-2.5" />
              <span>Description Maker</span>
            </button>
          </Link>
        </nav>
      </aside>
    </>
  );
}
