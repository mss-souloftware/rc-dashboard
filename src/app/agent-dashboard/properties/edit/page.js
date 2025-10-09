"use client";
import Banner from "@/components/Global/Banner";
import Image from "next/image";
import AgentSidebar from "@/components/Global/AgentSidebar";
import AgentHeader from "@/components/Header/AgentHeader";
import AmenityRow from "@/components/Global/AmenityRow";
import { ChevronDown, X } from "lucide-react";
import React, { useState } from "react";

export default function EditProperties() {
  const [activeTab, setActiveTab] = useState("listed");
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [parking, setParking] = useState(1);
  const [selectedTags, setSelectedTags] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const amenities = [
    { name: "Canberra Grammar School", type: "School", distance: "1.6Km" },
    { name: "City Interchange", type: "Bus Stop", distance: "1.6Km" },
    { name: "Dickson Centre", type: "Mall", distance: "1.6Km" },
  ];

  const allTags = [
    {
      label: "Culturally Welcoming",
      color: "bg-rose-50 text-rose-700 border border-rose-200",
    },
    {
      label: "International Student Friendly",
      color: "bg-purple-50 text-purple-700 border border-purple-200",
    },
    {
      label: "Vegetarian Household",
      color: "bg-green-50 text-green-700 border border-green-200",
    },
    {
      label: "Languages Spoken: Mandarin, Hindi, Arabic",
      color: "bg-indigo-50 text-indigo-700 border border-indigo-200",
    },
    {
      label: "Prayer Space Available",
      color: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    },
    {
      label: "Shared with University Students",
      color: "bg-sky-50 text-sky-700 border border-sky-200",
    },
    {
      label: "Women-Only Sharehouse",
      color: "bg-green-50 text-green-700 border border-green-200",
    },
  ];

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AgentSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <AgentHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        <div className="p-5 bg-[#F8F9FC]">
          <Banner
            imgUrl="/global/agentList.png"
            title="Properties"
            buttonText="Ready to Rent"
            buttonUrl="/dashboard"
          />

          <div className="w-full flex items-center justify-between mt-5">
            {/* Tabs */}
            <div className="flex items-center gap-3 bg-white p-1.5 rounded-lg">
              <button
                onClick={() => setActiveTab("listed")}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
                  activeTab === "listed"
                    ? "border border-[#DBE0EA] bg-[#F8F9FC] text-gray-900"
                    : "bg-transparent border-transparent text-gray-600 hover:text-gray-800"
                }`}
              >
                Listed
              </button>
              <button
                onClick={() => setActiveTab("listed")}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
                  activeTab === "drafts"
                    ? "border border-[#DBE0EA] bg-[#F8F9FC] text-gray-900"
                    : "bg-transparent border-transparent text-gray-600 hover:text-gray-800"
                }`}
              >
                Drafts
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex flex-col w-30 gap-2 bg-[#F2F4F8] border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600">
              <span className="text-xs">Sort by:</span>
              <button className="flex items-center justify-between gap-1 font-medium text-gray-800 -mt-2.5">
                Newest
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>

          <main className="py-6">
            <div className="bg-[#F9FAFB] min-h-screen p-8 text-gray-700">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Edit Your Property</h1>
                <button className="bg-white border rounded-4xl text-[#202A54] hover:bg-[#202A54] hover:text-white px-6 py-1 btn ">
                  Change
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="relative rounded-xl overflow-hidden border border-gray-200">
                  <Image
                    src="/global/property1.png"
                    alt="Property1"
                    fill
                    className="object-cover"
                  />
                  <button className="absolute top-2 right-2 bg-[#2d2b3c] text-white rounded-full w-7 h-7 shadow">
                    ✕
                  </button>
                  <p className="absolute bottom-2 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded-3xl">
                    Main Image
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="relative rounded-xl w-full h-[200px] overflow-hidden border border-gray-200">
                    <Image
                      src="/global/property2.png"
                      alt="Property2"
                      fill
                      className="object-cover"
                    />
                    <button className="absolute top-2 right-2 bg-[#2d2b3c] text-white rounded-full w-7 h-7 shadow">
                      ✕
                    </button>
                  </div>
                  <div className="relative rounded-xl w-full h-[200px] overflow-hidden border border-gray-200">
                    <Image
                      src="/global/property2.png"
                      alt="Property2"
                      fill
                      className="object-cover"
                    />
                    <button className="absolute top-2 right-2 bg-[#2d2b3c] text-white rounded-full w-7 h-7 shadow">
                      ✕
                    </button>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-3">
                  <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl h-56 cursor-pointer hover:bg-gray-50">
                    <span className="text-3xl text-gray-400">+</span>
                  </div>
                  <button className="border border-gray-300 rounded-xl px-4 py-2 text-sm mb-8 hover:bg-[#202A54] hover:text-white flex gap-2 items-center justify-center">
                    <span className="text-3xl font-semibold text-[#202A54]">
                      +
                    </span>{" "}
                    <span>Add More Photos</span>
                  </button>
                </div>
              </div>

              <div className="border-b border-gray-300 my-8"></div>

              <div>
                <h2 className="text-xl font-semibold my-6">Property Details</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-center">
                      <div>
                        <label htmlFor="propAddress">Property Address</label>
                        <input
                          type="text"
                          name="propAddress"
                          placeholder="Input Address"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        />
                      </div>

                      <div>
                        <label htmlFor="propType">Property Type</label>
                        <select
                          name="propType"
                          className="w-full border border-gray-300 rounded-lg px-4 py-3"
                        >
                          <option>Select a reason</option>
                          <option>Apartment</option>
                          <option>House</option>
                          <option>Studio</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="propTitle">Property Title</label>
                      <input
                        type="text"
                        placeholder="Input your title"
                        name="propTitle"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                      />
                    </div>

                    <div>
                      <label htmlFor="propDescription">
                        Property Description
                      </label>
                      <textarea
                        placeholder="Describe your property"
                        rows={4}
                        name="propDescription"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                      ></textarea>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {/* Bedrooms */}
                    <div className="border border-gray-300 bg-white shadow-sm rounded-lg p-4 flex flex-col items-start">
                      <div className="p-2 border border-gray-300 rounded my-2">
                        <Image
                          src="/global/bedroom.svg"
                          width={22}
                          height={22}
                          alt="Bedrooms"
                        />
                      </div>
                      <p className="font-medium mb-2 ">Bedrooms</p>
                      <div className="flex items-center gap-3 w-full justify-center">
                        <button
                          onClick={() => setBedrooms(Math.max(0, bedrooms - 1))}
                          className="border border-gray-300 hover:border-[#202A54] rounded-full w-8 h-8 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span>{bedrooms}</span>
                        <button
                          onClick={() => setBedrooms(bedrooms + 1)}
                          className="border  border-gray-300 hover:border-[#202A54] rounded-full w-8 h-8 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Bathrooms */}
                    <div className="border border-gray-300 bg-white shadow-sm rounded-lg p-4 flex flex-col items-start">
                      <div className="p-2 border border-gray-300 rounded my-2">
                        <Image
                          src="/global/bath.svg"
                          width={22}
                          height={22}
                          alt="Bathroom"
                        />
                      </div>
                      <p className="font-medium mb-2">Bathrooms</p>
                      <div className="flex items-center gap-3 w-full justify-center">
                        <button
                          onClick={() =>
                            setBathrooms(Math.max(0, bathrooms - 1))
                          }
                          className="border rounded-full  border-gray-300 hover:border-[#202A54] w-8 h-8 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span>{bathrooms}</span>
                        <button
                          onClick={() => setBathrooms(bathrooms + 1)}
                          className="border  border-gray-300 hover:border-[#202A54] rounded-full w-8 h-8 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Parking */}
                    <div className="border border-gray-300 bg-white shadow-sm rounded-lg p-4 flex flex-col items-start">
                      <div className="p-2 border border-gray-300 rounded my-2">
                        <Image
                          src="/global/parking.svg"
                          width={22}
                          height={22}
                          alt="Parking"
                        />
                      </div>
                      <p className="font-medium mb-2">Parking Space</p>
                      <div className="flex items-center gap-3 w-full justify-center">
                        <button
                          onClick={() => setParking(Math.max(0, parking - 1))}
                          className="border rounded-full  border-gray-300 hover:border-[#202A54] w-8 h-8 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span>{parking}</span>
                        <button
                          onClick={() => setParking(parking + 1)}
                          className="border rounded-full  border-gray-300 hover:border-[#202A54] w-8 h-8 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-300 my-8"></div>

                  {/* Distance to Key Amenities */}
                  <div className="mt-10">
                    <h2 className="text-lg font-semibold mb-4">
                      Distance to key amenities
                    </h2>
                    <div className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 p-4">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="text-gray-500 text-sm">
                            <th className="p-3 font-medium">Name</th>
                            <th className="p-3 font-medium">Type</th>
                            <th className="p-3 font-medium">Distance</th>
                          </tr>
                        </thead>
                        <tbody>
                          {amenities.map((item, index) => (
                            <AmenityRow
                              key={index}
                              name={item.name}
                              type={item.type}
                              distance={item.distance}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <button className=" rounded-xl my-3 px-4 py-2 text-sm mb-8 hover:bg-[#202A54] hover:text-white flex gap-2 items-center justify-center">
                      <span className="text-3xl font-semibold text-[#202A54]">
                        +
                      </span>{" "}
                      <span>Add Row</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-700">
                        Tags
                      </h3>
                      <div className="flex bg-white border border-gray-200 rounded p-3 flex-wrap gap-2">
                        {selectedTags.length > 0 ? (
                          selectedTags.map((tag, i) => (
                            <div
                              key={i}
                              className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm ${tag.color}`}
                            >
                              <span>{tag.label}</span>
                              <button
                                onClick={() => removeTag(tag)}
                                className="hover:text-gray-600 transition"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))
                        ) : (
                          <p className="text-sm  text-gray-400">
                            No tags selected
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {allTags.map((tag, i) => (
                        <button
                          key={i}
                          onClick={() => toggleTag(tag)}
                          className={`px-3 py-1.5 rounded-full text-sm transition border ${
                            selectedTags.includes(tag)
                              ? `${tag.color} ring-2 ring-offset-1 ring-blue-200`
                              : `${tag.color} opacity-90 hover:opacity-100`
                          }`}
                        >
                          {tag.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg mb-4">
                    Pin your Property Location on the Map
                  </h2>
                  <div className="w-full h-[350px] rounded-xl overflow-hidden border border-gray-300">
                    <iframe
                      title="map"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345098045!2d144.95373531531726!3d-37.81627937975192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f2a0b9f5%3A0xf5775db21e6f3a5!2sMelbourne!5e0!3m2!1sen!2sau!4v1633566148203!5m2!1sen!2sau"
                    ></iframe>
                  </div>
                </div>
              </div>

            
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
