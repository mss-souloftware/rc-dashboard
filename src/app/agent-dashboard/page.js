"use client";
import AgentSidebar from "@/components/Global/AgentSidebar";
import AgentHeader from "@/components/Header/AgentHeader";
import Application from "@/components/Charts/Application";
import ApplicationsTable from "@/components/Tables/ApplicationsTable";
import React, { useState } from "react";
import { Eye, ArrowUpRight } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import PropertyCard from "@/components/Global/PropertyCard";
import AgentPropertyCard from "@/components/Global/AgentPropertyCard";

export default function AgentDashboard() {
  const [activeTab, setActiveTab] = useState("listed");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const data = [
    { name: "Pending", value: 445 },
    { name: "Approved", value: 400 },
    { name: "Rejected", value: 100 },
  ];

  const COLORS = ["#202A54", "#2E8B57", "#8B008B"];
  const total = data.reduce((acc, entry) => acc + entry.value, 0);
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AgentSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <AgentHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 py-6 m-7 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <h3 className="text-[#202A54] font-semibold text-2xl">Overview</h3>
            <div className="flex items-center justify-around gap-7">
              <div className="relative bg-green-600 text-white rounded-2xl px-5 py-10 w-70 shadow-md">

                <div className="absolute top-3 left-3 bg-green-700 p-2 rounded-lg">
                  <Eye className="w-5 h-5 text-white" />
                </div>

                <div className="absolute top-3 right-3 flex items-center text-sm font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5 mr-1" />
                  <span>+4.05%</span>
                </div>

                <div className="mt-10">
                  <p className="text-sm opacity-90">Property Views</p>
                  <h2 className="text-2xl font-bold mt-1">1321</h2>
                </div>
              </div>
              <div className="relative bg-[#2f3a68] text-white rounded-2xl px-5 py-10 w-70 shadow-md">

                <div className="absolute top-3 left-3 bg-[#2f3a68] p-2 rounded-lg">
                  <Eye className="w-5 h-5 text-white" />
                </div>

                <div className="absolute top-3 right-3 flex items-center text-sm font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5 mr-1" />
                  <span>+4.05%</span>
                </div>

                <div className="mt-10">
                  <p className="text-sm opacity-90">Occupied Properties</p>
                  <h2 className="text-2xl font-bold mt-1">346</h2>
                </div>
              </div>
              <div className="relative bg-[#55a23c] text-white rounded-2xl px-5 py-10 w-70 shadow-md">
                <div className="absolute top-3 left-3 bg-[#55a23c] p-2 rounded-lg">
                  <Eye className="w-5 h-5 text-white" />
                </div>

                <div className="absolute top-3 right-3 flex items-center text-sm font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5 mr-1" />
                  <span>+4.05%</span>
                </div>

                <div className="mt-10">
                  <p className="text-sm opacity-90">Vacant Properties</p>
                  <h2 className="text-2xl font-bold mt-1">500</h2>
                </div>
              </div>
            </div>

            <Application />

            <ApplicationsTable />
          </div>
          <div className="col-span-1 space-y-6">
            <div className="w-full max-w-xs bg-white shadow-sm rounded-2xl p-5 text-center">
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Tenant Database Match
              </h3>

              <div className="w-full h-56 flex items-center justify-center">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={data}
                      dataKey="value"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      startAngle={90}
                      endAngle={450}
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>

                <div className="absolute text-center">
                  <p className="text-xl font-bold text-gray-800">{total}</p>
                </div>
              </div>

              <div className="flex justify-around mt-4 text-xs text-gray-600">
                {data.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="flex items-center gap-1">
                      <span
                        className="inline-block w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: COLORS[index] }}
                      ></span>
                      <span>{item.name}</span>
                    </div>
                    <span className="font-semibold text-gray-800">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full max-w-xs bg-white shadow-sm rounded-2xl p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Most Viewed Property
              </h3>
             <AgentPropertyCard/>
             <AgentPropertyCard/>
             <AgentPropertyCard/>
             <AgentPropertyCard/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
