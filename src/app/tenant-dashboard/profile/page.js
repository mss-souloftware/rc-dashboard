"use client";
import Image from "next/image";
import Sidebar from "@/components/Global/Sidebar";
import Header from "@/components/Header/Header";
import React, { useState } from "react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("my-profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPreference, setSelectedPreference] = useState("");
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  const profileItems = [
    {
      title: "Photo",
      desc: "This would be displayed on your profile",
      content: (
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Image
            src="/global/profile.jpg"
            alt="Profile"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="flex flex-wrap gap-2">
            <button className="bg-white text-gray-600 border rounded-full border-gray-400 px-6 py-1">
              Delete
            </button>
            <button className="bg-white border rounded-full text-[#202A54] hover:bg-[#202A54] hover:text-white px-6 py-1">
              Change
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "Full Name",
      desc: "This would be displayed on your profile",
      content: "Antonio Francki",
      action: "Edit",
    },
    {
      title: "Full Name",
      desc: "This would be displayed on your profile",
      content: (
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex flex-col justify-center">
            <label>Full Name</label>
            <input
              className="bg-white p-2 border rounded-lg border-gray-200 w-full"
              type="password"
              placeholder="Enter your Name"
            />
          </div>
        </div>
      ),
      action: "Save",
    },
    {
      title: "Date of Birth",
      desc: "This would be displayed on your profile",
      content: "03 March, 1978",
      action: "Edit",
    },
    {
      title: "Phone Number",
      desc: "",
      content: "+1 (234)- 567-890",
      action: "Edit",
    },
    {
      title: "Email",
      desc: "",
      content: "antonifrancki@gmail.com",
      action: "Edit",
    },
    {
      title: "Address",
      desc: "",
      content: "503/16 Lonsdale Street, Braddon",
      action: "Edit",
    },
  ];

  const toggleNotification = (key) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex overflow-x-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content */}
      <div className="flex-1 flex flex-col max-w-full">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="p-4 sm:p-6 lg:p-8 bg-[#F8F9FC] w-full overflow-x-hidden">
          <h3 className="text-[#202A54] font-semibold text-2xl sm:text-3xl">
            Profile
          </h3>
          <p className="text-gray-500 my-3 text-sm sm:text-base">
            Manage your personal details here
          </p>

          {/* Tabs */}
          <div className="w-full flex justify-between mt-5 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-3 bg-white p-1.5 rounded-lg min-w-max">
              {["my-profile", "security", "notifications"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 whitespace-nowrap rounded-lg text-sm font-medium border transition ${
                    activeTab === tab
                      ? "border border-[#DBE0EA] bg-[#F8F9FC] text-gray-900"
                      : "bg-transparent border-transparent text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {tab === "my-profile"
                    ? "My Profile"
                    : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Profile Tab */}
          {activeTab === "my-profile" && (
            <div className="mt-8 space-y-4">
              <h3 className="text-[#202A54] font-semibold p-2 border-b border-gray-200 text-xl">
                My Profile
              </h3>
              {profileItems.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 items-start p-3 border-b border-gray-200"
                >
                  <div>
                    <h3 className="text-[#202A54] text-lg">{item.title}</h3>
                    {item.desc && (
                      <span className="text-sm text-gray-600">{item.desc}</span>
                    )}
                  </div>
                  <div className="text-[#202A54] font-semibold break-words">
                    {item.content}
                  </div>
                  {item.action &&
                    (item.action === "Edit" ? (
                      <div className="text-[#202A54] hover:underline font-semibold cursor-pointer">
                        {item.action}
                      </div>
                    ) : (
                      <div className="mt-3">
                        <button className="bg-white border rounded-full text-[#202A54] hover:bg-[#202A54] hover:text-white px-6 py-1">
                          Save
                        </button>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <div className="mt-8 space-y-4">
              <h3 className="text-[#202A54] font-semibold p-2 border-b border-gray-200 text-xl">
                Security
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-3 border-b border-gray-200">
                <div>
                  <h3 className="text-[#202A54] text-lg">Password</h3>
                  <span className="text-sm text-gray-600">
                    Last Updated 2 months ago
                  </span>
                </div>
                <div className=" text-[#202A54] hover:underline font-semibold cursor-pointer">
                  Change Password
                </div>
                <div></div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-3 border-b border-gray-200">
                <div>
                  <h3 className="text-[#202A54] text-lg">Password</h3>
                  <span className="text-sm text-gray-600">
                    Last Updated 2 months ago
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-col w-full">
                    <label>Current Password</label>
                    <input
                      className="bg-white p-2 border rounded-lg border-gray-200 w-full"
                      type="password"
                      placeholder="Enter current password"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label>New Password</label>
                    <input
                      className="bg-white p-2 border rounded-lg border-gray-200 w-full"
                      type="password"
                      placeholder="Enter new password"
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center lg:justify-end">
                  <button className="bg-white border rounded-full text-[#202A54] hover:bg-[#202A54] hover:text-white px-6 py-1">
                    Save
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-3 border-b border-gray-200">
                <div>
                  <h3 className="text-[#202A54] text-lg">Account</h3>
                  <span className="text-sm text-gray-600">
                    Deactivate Your Account
                  </span>
                </div>
                <div className=" text-[#202A54] hover:underline font-semibold cursor-pointer">
                  Deactivate
                </div>
                <div></div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div className="mt-8 py-4 bg-[#F9FAFB] rounded-xl text-[#1E293B]">
              <div className="px-4 space-y-6">
                <h2 className="text-lg font-semibold">
                  Notification Preferences
                </h2>
                {["tenant", "payment", "reminders"].map((opt) => (
                  <label
                    key={opt}
                    className="flex items-start space-x-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="preference"
                      className="accent-[#202A54] mt-1"
                      checked={selectedPreference === opt}
                      onChange={() => setSelectedPreference(opt)}
                    />
                    <div>
                      <p className="font-medium">
                        {opt === "tenant"
                          ? "New Tenant Inquiries"
                          : opt === "payment"
                          ? "Payment Updates"
                          : "Lease Reminders"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {opt === "tenant"
                          ? "Get notified when someone is interested in your property."
                          : opt === "payment"
                          ? "Know when rent payments are processed."
                          : "Get notified about lease renewals and deadlines."}
                      </p>
                    </div>
                  </label>
                ))}

                <hr className="my-4" />

                <h2 className="text-lg font-semibold">
                  Choose How You Get Notified
                </h2>

                <div className="space-y-3">
                  {Object.entries(notifications).map(([key, value]) => (
                    <label
                      key={key}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="accent-[#202A54] w-5 h-5"
                        checked={value}
                        onChange={() => toggleNotification(key)}
                      />
                      <span className="font-medium capitalize">
                        {key} Notifications
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
