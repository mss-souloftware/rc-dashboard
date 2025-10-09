import React from "react";

export default function ProgressBar({ currentStep, totalSteps }) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full bg-gray-100 rounded-full h-2">
      <div
        className="bg-[#202A54] h-2 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
