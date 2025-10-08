import React from "react";
import OptionCard from "../Global/OptionCard";

export default function Step({ question, options, selected, onSelect, questSubtitle }) {
  return (
    <div className="flex flex-col  justify-center  space-y-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
        {question}
      </h2>
      <p className="text-gray-500">{questSubtitle}</p>

      <div className="flex flex-wrap justify-center gap-4">
        {options.map((option, idx) => (
          <OptionCard
            key={idx}
            option={option}
            selected={selected === option.label}
            onSelect={() => onSelect(option.label)}
          />
        ))}
      </div>
    </div>
  );
}
