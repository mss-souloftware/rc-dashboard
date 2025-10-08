"use client";
import Banner2 from "@/components/Global/Banner2";
import PropertyListCard from "@/components/Global/PropertyListCard";
import Sidebar from "@/components/Global/Sidebar";
import Header from "@/components/Header/Header";
import Inspection from "@/components/Inspection/Inspection";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

export default function TenantProperties() {
  const [activeTab, setActiveTab] = useState("saved");
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-5 bg-[#F8F9FC]">
          <Banner2
            imgUrl="/global/propHome.png"
            title="Properties"
            buttonText="Ready to Rent"
            buttonUrl="/dashboard"
          />

          <div className="w-full flex items-center justify-between mt-5">
            {/* Tabs */}
            <div className="flex items-center gap-3 bg-white p-1.5 rounded-lg">
              <button
                onClick={() => setActiveTab("saved")}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
                  activeTab === "saved"
                    ? "border border-[#DBE0EA] bg-[#F8F9FC] text-gray-900"
                    : "bg-transparent border-transparent text-gray-600 hover:text-gray-800"
                }`}
              >
                Saved Properties
              </button>
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
                  activeTab === "upcoming"
                    ? "border border-[#DBE0EA] bg-[#F8F9FC] text-gray-900"
                    : "bg-transparent border-transparent text-gray-600 hover:text-gray-800"
                }`}
              >
                Upcoming Inspections
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

          {activeTab === "saved" ? (
            <main className="py-6">
              <PropertyListCard
                imageUrl="/global/property.png"
                price="650"
                address="503/16 Lonsdale Street, Braddon "
                bedrooms="2"
                bathrooms="1"
                parks="2"
                agency="Independent Property Group"
                agent="Antoni Francki "
                type="Under Offer"
                slug="1-property"
              />

              <PropertyListCard
                imageUrl="/global/property.png"
                price="650"
                address="503/16 Lonsdale Street, Braddon "
                bedrooms="2"
                bathrooms="1"
                parks="2"
                agency="Independent Property Group"
                agent="Antoni Francki "
                type="Under Offer"
                slug="1-property"
              />

              <PropertyListCard
                imageUrl="/global/property.png"
                price="650"
                address="503/16 Lonsdale Street, Braddon "
                bedrooms="2"
                bathrooms="1"
                parks="2"
                agency="Independent Property Group"
                agent="Antoni Francki "
                type="Under Offer"
                slug="1-property"
              />

              <PropertyListCard
                imageUrl="/global/property.png"
                price="650"
                address="503/16 Lonsdale Street, Braddon "
                bedrooms="2"
                bathrooms="1"
                parks="2"
                agency="Independent Property Group"
                agent="Antoni Francki "
                type="Under Offer"
                slug="1-property"
              />

              <PropertyListCard
                imageUrl="/global/property.png"
                price="650"
                address="503/16 Lonsdale Street, Braddon "
                bedrooms="2"
                bathrooms="1"
                parks="2"
                agency="Independent Property Group"
                agent="Antoni Francki "
                type="Under Offer"
                slug="1-property"
              />
            </main>
          ) : (
            <main>
                <div className="flex justify-between items-center w-full my-5 p-5 bg-white  rounded-2xl">
                  <div>
                    <span className="text-gray-500">Total Inspections</span>
                    <h1 className="text-3xl  font-bold text-[#1B254F]">
                    12
                  </h1>
                  </div>
                  <button className="text-[#6B6B6B] border border-[#F2F2F2] px-3.5 py-1.5 rounded-full text-sm font-semibold">
                    Make a Ready to Rent Application
                  </button>
                </div>
              <div className="bg-white border my-5 border-[#DBE0EA] rounded-xl p-5 flex flex-col items-center ">
                <Inspection/>
                <Inspection/>
              </div>
            </main>
          )}
        </div>
      </div>
    </div>
  );
}
