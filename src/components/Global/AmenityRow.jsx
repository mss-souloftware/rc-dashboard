import React, { useState } from "react";
import { School, Bus, ShoppingBag } from "lucide-react";

export default function AmenityRow({ name, type, distance }) {
  const [amenityType, setAmenityType]=useState("");
  const [amenityName, setAmenityName]=useState("");
  const icons = {
    School: <School className="w-4 h-4 inline-block mr-2 text-gray-600" />,
    "Bus Stop": <Bus className="w-4 h-4 inline-block mr-2 text-gray-600" />,
    Mall: <ShoppingBag className="w-4 h-4 inline-block mr-2 text-gray-600" />,
  };

  return (
    <tr className="border-b border-gray-200">
      <td className="p-3">
        <input
          type="text"
          value={name}
            onChange={e=>setAmenityName(e.target.value)}

          readOnly
          className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none"
        />
      </td>

      <td className="p-3">
        <div className="flex items-center border border-gray-200 bg-white rounded-md px-3 py-2 text-sm">
          {icons[type]}
          <select
            value={type}
            onChange={e=>setAmenityType(e.target.value)}
            className="bg-transparent focus:outline-none cursor-pointer text-gray-700"
          >
            <option>School</option>
            <option>Bus Stop</option>
            <option>Mall</option>
          </select>
        </div>
      </td>

      <td className="p-3 text-gray-700 text-sm ">{distance}</td>
    </tr>
  );
}
