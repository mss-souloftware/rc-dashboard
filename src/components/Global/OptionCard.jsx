import React from "react";

export default function OptionCard({ option, selected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(option)}
      className={`flex flex-col items-center justify-center border rounded-xl p-6 w-full sm:w-48 h-36 transition-all ${
        selected
          ? "border-blue-800 bg-blue-50 shadow-md"
          : "border-gray-200 bg-white hover:border-blue-300"
      }`}
    >
      <div className="text-3xl mb-3">{option.icon}</div>
      <span
        className={`font-medium ${
          selected ? "text-blue-900" : "text-gray-700"
        }`}
      >
        {option.label}
      </span>
    </button>
  );
}
