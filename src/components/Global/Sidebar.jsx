import React from 'react'
import Logo from '../Header/Logo'
import { KeyRound, LayoutDashboard, Mailbox, MapPinHouse, Settings } from 'lucide-react'

export default function Sidebar() {
    return (
        <aside className="hidden md:flex flex-col w-64 bg-white shadow-lg">
            <div className="h-16 flex items-center justify-center border-b border-[#F1F3F7]">
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
    )
}
