"use client";
import Image from "next/image";
import Sidebar from "@/components/Global/Sidebar";
import Header from "@/components/Header/Header";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("my-profile");
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-5 bg-[#F8F9FC]">
          <h3 className="text-[#202A54] font-semibold text-3xl">Profile</h3>
          <p className="text-gray-500 my-3">
            Manage your personal details here
          </p>

          <div className="w-full flex items-center justify-between mt-5">
            {/* Tabs */}
            <div className="flex items-center gap-3 bg-white p-1.5 rounded-lg">
              <button
                onClick={() => setActiveTab("my-profile")}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
                  activeTab === "my-profile"
                    ? "border border-[#DBE0EA] bg-[#F8F9FC] text-gray-900"
                    : "bg-transparent border-transparent text-gray-600 hover:text-gray-800"
                }`}
              >
                My Profile
              </button>
              <button
                onClick={() => setActiveTab("security")}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
                  activeTab === "security"
                    ? "border border-[#DBE0EA] bg-[#F8F9FC] text-gray-900"
                    : "bg-transparent border-transparent text-gray-600 hover:text-gray-800"
                }`}
              >
                Security
              </button>
              <button
                onClick={() => setActiveTab("notifications")}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
                  activeTab === "notifications"
                    ? "border border-[#DBE0EA] bg-[#F8F9FC] text-gray-900"
                    : "bg-transparent border-transparent text-gray-600 hover:text-gray-800"
                }`}
              >
                Notifications
              </button>
            </div>
          </div>

          {activeTab === "my-profile" ? (
            <div className="mt-8">
              <h3 className="text-[#202A54] font-semibold p-2 border-b border-gray-200 text-xl">
                My Profile
              </h3>
              <div className="grid grid-cols-3 gap-1 justify-between items-center p-2 py-4 border-b mx-5 border-gray-200">
                <div>
                  <h3 className="text-[#202A54] text-lg">Photo</h3>
                  <span className="text-sm text-gray-600">
                    This would be displayed on your profile
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src="/global/profile.jpg"
                    alt="Profile"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <span className="flex gap-1 flex-col md:flex-row">
                    <button className="bg-white text-gray-600 border rounded-4xl border-gray-400 px-6 py-1 btn ">
                      Delete
                    </button>
                    <button className="bg-white border rounded-4xl text-[#202A54] hover:bg-[#202A54] hover:text-white px-6 py-1 btn ">
                      Change
                    </button>
                  </span>
                </div>
                <div></div>
              </div>
              <div className="grid grid-cols-3 gap-1 justify-between items-center p-2 py-4 border-b mx-5 border-gray-200">
                <div>
                  <h3 className="text-[#202A54] text-lg">Full Name</h3>
                  <span className="text-sm text-gray-600">
                    This would be displayed on your profile
                  </span>
                </div>
                <div className="flex gap-2 items-center">Antonio Francki</div>
                <div className="text-[#202A54] hover:underline text-lg font-semibold">
                  Edit
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1 justify-between items-center p-2 py-4 border-b mx-5 border-gray-200">
                <div>
                  <h3 className="text-[#202A54] text-lg">Full Name</h3>
                  <span className="text-sm text-gray-600">
                    This would be displayed on your profile
                  </span>
                </div>
                <div className="flex gap-2 flex-col items-start justify-center">
                  <label htmlFor="name">Full Name</label>
                  <input className="bg-white p-2 border rounded-lg border-gray-200"
                    type="text"
                    placeholder="Enter your name"
                    required
                    name="name"
                  ></input>
                </div>
                <div >
                 <button className="bg-white border rounded-4xl text-[#202A54] hover:bg-[#202A54] hover:text-white px-6 py-1 btn ">
                      Save
                    </button>
                </div>
              </div>
            
              <div className="grid grid-cols-3 gap-1 justify-between items-center p-2 py-4 border-b mx-5 border-gray-200">
                <div>
                  <h3 className="text-[#202A54] text-lg">Date of Birth</h3>
                  <span className="text-sm text-gray-600">
                    This would be displayed on your profile
                  </span>
                </div>
                <div className="text-[#202A54] font-semibold">
                  03 March,1978
                </div>
                <div className="text-[#202A54] hover:underline text-lg font-semibold">
                  Edit
                </div>
              </div>
                <div className="grid grid-cols-3 gap-1 justify-between items-center p-2 py-4 border-b mx-5 border-gray-200">
                <div>
                  <h3 className="text-[#202A54] text-lg">Email</h3>
                  
                </div>
                <div className="text-[#202A54] font-semibold">
                  antonifrancki@gmail.com
                </div>
                <div className="text-[#202A54] hover:underline text-lg font-semibold">
                  Edit
                </div>
              </div>
                <div className="grid grid-cols-3 gap-1 justify-between items-center p-2 py-4 border-b mx-5 border-gray-200">
                <div>
                  <h3 className="text-[#202A54] text-lg">Address</h3>
                  
                </div>
                <div className="text-[#202A54] font-semibold">
                  503/16 Lonsdale Street, Braddon 
                </div>
                <div className="text-[#202A54] hover:underline text-lg font-semibold">
                  Edit
                </div>
              </div>
            </div>
          ) : activeTab === "security" ? (
            <div>security</div>
          ) : (
            <div>notifications</div>
          )}
        </div>
      </div>
    </div>
  );
}
