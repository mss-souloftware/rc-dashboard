"use client";
import Banner2 from "@/components/Global/Banner2";
import Sidebar from "@/components/Global/Sidebar";
import Header from "@/components/Header/Header";
import React, { useState } from "react";

import {
  HomeIcon,
  Building2,
  Building,
  Users,
  Bath,
  Car,
  Plus,
  Minus,
  Mail,
} from "lucide-react";

export default function MailComp() {
  const [selectedType, setSelectedType] = useState("Apartments");
  const [minPrice, setMinPrice] = useState(150);
  const [maxPrice, setMaxPrice] = useState(450);
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [parking, setParking] = useState(1);
  const [selectedSuburbs, setSelectedSuburbs] = useState(["Red Hill"]);
  const allSuburbs = ["Red Hill", "Kingston", "Braddon", "Gungahlin", "Woden"];
  const propertyTypes = ["All", "Apartments", "House", "Townhouse", "Shared"];

  const toggleSuburb = (suburb) => {
    setSelectedSuburbs((prev) =>
      prev.includes(suburb)
        ? prev.filter((s) => s !== suburb)
        : [...prev, suburb]
    );
  };

  const handleMinChange = (e) => {
    const value = Math.min(+e.target.value, maxPrice - 10);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(+e.target.value, minPrice + 10);
    setMaxPrice(value);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-5 bg-[#F8F9FC]">
          <Banner2
            imgUrl="/global/mail.png"
            title="Mail Me"
            subtitle="Quit Daily searching - Get daily emails on properties you’re interested in"
            buttonUrl="/dashboard"
          />

          <div className="w-full flex items-center justify-center flex-col mt-5">
            <div className="w-full mx-auto  border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row gap-6 font-sans">
              <div className="flex-1 space-y-6 border-r pr-6 border-gray-200">
                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">
                    Property type
                  </h3>

                  {[
                    { name: "All", icon: HomeIcon },
                    { name: "Apartments", icon: Building2 },
                    { name: "House", icon: HomeIcon },
                    { name: "Townhouse", icon: Building },
                    { name: "Shared", icon: Users },
                  ].map(({ name, icon: Icon }) => (
                    <label
                      key={name}
                      className={`flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-gray-50 ${
                        selectedType === name ? "bg-gray-100 font-medium" : ""
                      }`}
                    >
                      <input
                        className="accent-[#202A54]"
                        type="checkbox"
                        checked={selectedType === name}
                        onChange={() => setSelectedType(name)}
                      />
                      <Icon className="w-5 h-5 text-gray-600" />
                      <span>{name}</span>
                    </label>
                  ))}
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">
                    Price Range{" "}
                    <span className="text-gray-500 text-sm">(/wk)</span>
                  </h3>

                  <div className="relative pt-4 pb-2">
                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="absolute h-2 bg-[#202A54] rounded-full"
                        style={{
                          left: `${
                            ((Math.max(minPrice, 150) - 150) / (1400 - 150)) *
                            100
                          }%`,
                          right: `${
                            100 -
                            ((Math.min(maxPrice, 1400) - 150) / (1400 - 150)) *
                              100
                          }%`,
                        }}
                      ></div>
                    </div>

                    <input
                      type="range"
                      min="150"
                      max="1400"
                      step="10"
                      value={minPrice}
                      onChange={(e) =>
                        setMinPrice(
                          Math.min(
                            Math.max(Number(e.target.value), 150),
                            maxPrice - 10
                          )
                        )
                      }
                      className="absolute w-full top-3 accent-[#202A54]"
                      style={{ zIndex: 3 }}
                    />
                    <input
                      type="range"
                      min="150"
                      max="1400"
                      step="10"
                      value={maxPrice}
                      onChange={(e) =>
                        setMaxPrice(
                          Math.max(
                            Math.min(Number(e.target.value), 1400),
                            minPrice + 10
                          )
                        )
                      }
                      className="absolute w-full top-3 accent-[#202A54]"
                      style={{ zIndex: 4 }}
                    />

                    <div className="flex justify-between text-sm text-gray-500 mt-8">
                      <span>${minPrice}/pw</span>
                      <span>${maxPrice}/pw</span>
                    </div>
                  </div>

                  <div className="flex justify-between gap-4 mt-4">
                    <div className="flex flex-col w-full">
                      <label className="text-xs text-gray-500 mb-1">
                        Min Price ($/pw)
                      </label>
                      <input
                        type="number"
                        min="150"
                        max={maxPrice - 10}
                        step="10"
                        value={minPrice}
                        onChange={(e) =>
                          setMinPrice(
                            Math.min(
                              Math.max(Number(e.target.value), 150),
                              maxPrice - 10
                            )
                          )
                        }
                        className="border rounded-md text-sm px-3 py-2 w-full"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="text-xs text-gray-500 mb-1">
                        Max Price ($/pw)
                      </label>
                      <input
                        type="number"
                        min={minPrice + 10}
                        max="1400"
                        step="10"
                        value={maxPrice}
                        onChange={(e) =>
                          setMaxPrice(
                            Math.max(
                              Math.min(Number(e.target.value), 1400),
                              minPrice + 10
                            )
                          )
                        }
                        className="border rounded-md text-sm px-3 py-2 w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">Suburbs</h3>
                  <div className="flex flex-wrap gap-2 mb-3 bg-white p-2 border border-gray-300 rounded">
                    {selectedSuburbs.map((s) => (
                      <span
                        key={s}
                        className="bg-blue-100 text-[#202A54] px-3 py-1 rounded-full text-sm flex items-center gap-2"
                      >
                        {s}
                        <button
                          onClick={() => toggleSuburb(s)}
                          className="text-[#202A54] hover:text-[#202A54]"
                        >
                          ✕
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {allSuburbs.map((suburb) => (
                      <button
                        key={suburb}
                        onClick={() => toggleSuburb(suburb)}
                        className={`border px-3 py-1 rounded-full text-sm transition ${
                          selectedSuburbs.includes(suburb)
                            ? "bg-[#202A54] text-white border-[#202A54]"
                            : "border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {suburb}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      label: "Bedrooms",
                      icon: HomeIcon,
                      value: bedrooms,
                      set: setBedrooms,
                    },
                    {
                      label: "Bathrooms",
                      icon: Bath,
                      value: bathrooms,
                      set: setBathrooms,
                    },
                    {
                      label: "Parking Space",
                      icon: Car,
                      value: parking,
                      set: setParking,
                    },
                  ].map(({ label, icon: Icon, value, set }) => (
                    <div
                      key={label}
                      className="flex justify-between items-center   px-3 py-6 border-b border-gray-200 "
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-5 h-5 text-gray-600" />
                        <span>{label}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => set(Math.max(0, value - 1))}
                          className="border rounded-full p-1 hover:bg-gray-100"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span>{value}</span>
                        <button
                          onClick={() => set(value + 1)}
                          className="border rounded-full p-1 hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Signup */}
            <div className="flex items-center gap-2 rounded-4xl border border-gray-300 bg-white p-2 my-5">
              <Mail className="ml-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className=" px-3 py-2 flex-1 text-sm"
              />
              <button className="bg-[#202A54] rounded-3xl text-white px-6 py-2  hover:bg-[#202A54]">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
