"use client"
import React from 'react'

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
} from "recharts";

const chartData = [
    { date: "Mar 12", applications: 12 },
    { date: "Mar 19", applications: 9 },
    { date: "Mar 26", applications: 10 },
    { date: "Apr 2", applications: 8 },
    { date: "Apr 9", applications: 1 },
    { date: "Apr 16", applications: 11 },
    { date: "Apr 23", applications: 13 },
];

export default function Application() {
    return (
        <div className="bg-white rounded-xl border border-[#DBE0EA] p-5">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-[#1B254F]">Total Applications</h3>
                <select className="border border-[#DBE0EA] rounded-lg px-2 py-2 text-sm">
                    <option>This week</option>
                    <option>This month</option>
                </select>
            </div>
            <div className="h-60">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="applications"
                            stroke="#2563eb"
                            fill="#bfdbfe"
                        />
                        <Line
                            type="monotone"
                            dataKey="applications"
                            stroke="#2563eb"
                            strokeWidth={2}
                            dot={{ r: 5 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
