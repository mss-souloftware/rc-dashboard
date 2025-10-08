import React from "react";

export default function  AgentPropertyCard(){
  return (
    <div className="flex items-center justify-between my-2 border border-gray-200 rounded-lg p-3 hover:shadow-md transition">

      <div className="flex items-center gap-3">
        <img
          src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=100&h=100&fit=crop"
          alt="property"
          className="w-16 h-16 rounded-md object-cover"
        />
        <div>
          <p className="text-sm font-medium text-gray-800">
            503/16 Lonsdale Street, Braddon
          </p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-green-600 text-xs font-semibold">APARTMENT</p>
        <p className="text-gray-800 font-semibold text-sm">
          $650 <span className="text-gray-500 font-normal">/ week</span>
        </p>
      </div>
    </div>
  );
};


