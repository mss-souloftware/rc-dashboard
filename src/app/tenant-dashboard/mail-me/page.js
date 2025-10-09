"use client";
import Banner2 from "@/components/Global/Banner2";
import Sidebar from "@/components/Global/Sidebar";
import Header from "@/components/Header/Header";
import React, { useState, useEffect, useRef } from "react";

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
  const [selectedTypes, setSelectedTypes] = useState("Apartments");
  const [minPrice, setMinPrice] = useState(150);
  const [maxPrice, setMaxPrice] = useState(450);
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [parking, setParking] = useState(1);
  const [selectedSuburbs, setSelectedSuburbs] = useState(["Red Hill"]);
  const allSuburbs = ["Red Hill", "Kingston", "Braddon", "Gungahlin", "Woden"];
  const TYPES = [
    { name: "All", icon: HomeIcon },
    { name: "Apartments", icon: Building },
    { name: "House", icon: HomeIcon },
    { name: "Townhouse", icon: Building },
    { name: "Shared", icon: Users },
  ];
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const MIN = 150;
  const MAX = 1400;
  const STEP = 10;

  const trackRef = useRef(null);
  const activeThumbRef = useRef(null);

  const valueToPercent = (value) => ((value - MIN) / (MAX - MIN)) * 100;

  const startDrag = (thumb) => (e) => {
    e.preventDefault();
    activeThumbRef.current = thumb;
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: false });
    window.addEventListener("mouseup", endDrag);
    window.addEventListener("touchend", endDrag);
  };

  const handleMove = (e) => {
    if (!activeThumbRef.current) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    let ratio = (clientX - rect.left) / rect.width;
    ratio = Math.max(0, Math.min(1, ratio));
    let value = Math.round((MIN + ratio * (MAX - MIN)) / STEP) * STEP;
    value = Math.max(MIN, Math.min(MAX, value));

    if (activeThumbRef.current === "min") {
      const clamped = Math.min(value, maxPrice - STEP);
      setMinPrice(clamped);
    } else {
      const clamped = Math.max(value, minPrice + STEP);
      setMaxPrice(clamped);
    }
  };

  const endDrag = () => {
    activeThumbRef.current = null;
    window.removeEventListener("mousemove", handleMove);
    window.removeEventListener("touchmove", handleMove);
    window.removeEventListener("mouseup", endDrag);
    window.removeEventListener("touchend", endDrag);
  };

  const handleTrackClick = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    let ratio = (clientX - rect.left) / rect.width;
    ratio = Math.max(0, Math.min(1, ratio));
    let value = Math.round((MIN + ratio * (MAX - MIN)) / STEP) * STEP;
    value = Math.max(MIN, Math.min(MAX, value));

    if (Math.abs(value - minPrice) <= Math.abs(value - maxPrice)) {
      setMinPrice(Math.min(value, maxPrice - STEP));
    } else {
      setMaxPrice(Math.max(value, minPrice + STEP));
    }
  };

  const onMinInputChange = (v) => {
    const n = Math.round(Number(v) / STEP) * STEP || MIN;
    const clamped = Math.min(Math.max(n, MIN), maxPrice - STEP);
    setMinPrice(clamped);
  };

  const onMaxInputChange = (v) => {
    const n = Math.round(Number(v) / STEP) * STEP || MAX;
    const clamped = Math.max(Math.min(n, MAX), minPrice + STEP);
    setMaxPrice(clamped);
  };

  useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", endDrag);
      window.removeEventListener("touchend", endDrag);
    };
  }, []);

  const leftPct = valueToPercent(minPrice);
  const rightPct = valueToPercent(maxPrice);

  const toggleSuburb = (suburb) => {
    setSelectedSuburbs((prev) =>
      prev.includes(suburb)
        ? prev.filter((s) => s !== suburb)
        : [...prev, suburb]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
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

                  <div className="flex flex-col gap-1">
                    {TYPES.map(({ name, icon: Icon }) => (
                      <label
                        key={name}
                        className={`flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-gray-50 ${
                          selectedTypes.includes(name)
                            ? "bg-gray-100 font-medium"
                            : ""
                        }`}
                      >
                        <input
                          className="accent-[#202A54]"
                          type="checkbox"
                          checked={selectedTypes.includes(name)}
                          onChange={() =>
                            setSelectedTypes((prev) =>
                              prev.includes(name)
                                ? prev.filter((t) => t !== name)
                                : [...prev, name]
                            )
                          }
                        />
                        <Icon className="w-5 h-5 text-gray-600" />
                        <span>{name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">
                    Price Range{" "}
                    <span className="text-gray-500 text-sm">(/wk)</span>
                  </h3>

                  <div className="relative pt-4 pb-2">
                    <div
                      ref={trackRef}
                      className="relative h-3 bg-gray-200 rounded-full"
                      onMouseDown={handleTrackClick}
                      onTouchStart={(e) => {
                        e.preventDefault();
                        handleTrackClick(e);
                      }}
                      role="slider"
                      aria-label="Price range"
                    >
                      <div
                        className="absolute h-3 bg-[#202A54] rounded-full"
                        style={{
                          left: `${leftPct}%`,
                          width: `${Math.max(0, rightPct - leftPct)}%`,
                        }}
                      />
                      <button
                        type="button"
                        onMouseDown={startDrag("min")}
                        onTouchStart={(e) => {
                          e.preventDefault();
                          startDrag("min")(e);
                        }}
                        className="absolute -top-2 w-6 h-6 rounded-full bg-white border shadow flex items-center justify-center -translate-x-1/2 touch-manipulation"
                        style={{
                          left: `${leftPct}%`,
                          zIndex: activeThumbRef.current === "min" ? 50 : 30,
                        }}
                        aria-label="Minimum price"
                      >
                        <div className="w-2 h-2 bg-[#202A54] rounded-full"></div>
                      </button>

                      <button
                        type="button"
                        onMouseDown={startDrag("max")}
                        onTouchStart={(e) => {
                          e.preventDefault();
                          startDrag("max")(e);
                        }}
                        className="absolute -top-2 w-6 h-6 rounded-full bg-white border shadow flex items-center justify-center -translate-x-1/2 touch-manipulation"
                        style={{
                          left: `${rightPct}%`,
                          zIndex: activeThumbRef.current === "max" ? 50 : 40,
                        }}
                        aria-label="Maximum price"
                      >
                        <div className="w-2 h-2 bg-[#202A54] rounded-full"></div>
                      </button>
                    </div>

                    <div className="flex justify-between text-sm text-gray-500 mt-6">
                      <span>${minPrice}/pw</span>
                      <span>${maxPrice}/pw</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
                    <div className="flex flex-col w-full">
                      <label className="text-xs text-gray-500 mb-1">
                        Min Price ($/pw)
                      </label>
                      <input
                        inputMode="numeric"
                        type="number"
                        min={MIN}
                        max={maxPrice - STEP}
                        step={STEP}
                        value={minPrice}
                        onChange={(e) => onMinInputChange(e.target.value)}
                        className="border rounded-md text-sm px-3 py-2 w-full"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="text-xs text-gray-500 mb-1">
                        Max Price ($/pw)
                      </label>
                      <input
                        inputMode="numeric"
                        type="number"
                        min={minPrice + STEP}
                        max={MAX}
                        step={STEP}
                        value={maxPrice}
                        onChange={(e) => onMaxInputChange(e.target.value)}
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
