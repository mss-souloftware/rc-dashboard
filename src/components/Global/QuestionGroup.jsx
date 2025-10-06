import React from "react";
import { User, Phone, Mail, MapPin, DollarSign } from "lucide-react";

const iconMap = {
  fullName: <User className="w-4 h-4 text-gray-400" />,
  phone: <Phone className="w-4 h-4 text-gray-400" />,
  email: <Mail className="w-4 h-4 text-gray-400" />,
  suburb: <MapPin className="w-4 h-4 text-gray-400" />,
  budget: <DollarSign className="w-4 h-4 text-gray-400" />,
};

export default function QuestionGroup({ fields, answers, onChange }) {
  const length = fields.length;
  if (length === 0) return null;

  if (length === 6) {
    const first = fields[0];
    const secondRow = fields.slice(1, 4);
    const thirdRow = fields[4];
    const last = fields[5];

    return (
      <div className="space-y-6 my-5 mx-5 md:mx-0">
        <div>
          <FieldComponent field={first} answers={answers} onChange={onChange} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondRow.map((field) => (
            <FieldComponent
              key={field.name}
              field={field}
              answers={answers}
              onChange={onChange}
            />
          ))}
        </div>

        <div>
          <FieldComponent
            field={thirdRow}
            answers={answers}
            onChange={onChange}
          />
        </div>

        <div>
          <FieldComponent field={last} answers={answers} onChange={onChange} />
        </div>
      </div>
    );
  }

  let gridCols = "grid-cols-1";
  if (length === 2) gridCols = "md:grid-cols-2";
  else if (length === 3 || length == 4) gridCols = "md:grid-cols-2 grid-rows-2";
  else if (length === 5) gridCols = "md:grid-cols-3 grid-rows-2";

  return (
    <div className={`grid ${gridCols} gap-6 my-5`}>
      {fields.map((field) => (
        <FieldComponent
          key={field.name}
          field={field}
          answers={answers}
          onChange={onChange}
        />
      ))}
    </div>
  );
}

function FieldComponent({ field, answers, onChange }) {
  const value = answers[field.name] || "";

  if (!field) return null;

  return (
    <div className="flex flex-col my-2">
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        {field.label}
        {field.required && <span className="text-red-500">*</span>}
      </label>

      <div
        className={
          field.type === "radio"
            ? "flex flex-wrap items-center gap-4"
            : "flex items-center border bg-white border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-[#202A54]"
        }
      >
        {iconMap[field.name]}

        {["text", "email", "tel"].includes(field.type) ? (
          <input
            type={field.type}
            placeholder={field.placeholder}
            value={value}
            onChange={(e) => onChange(field.name, e.target.value)}
            className="flex-1 pl-2 outline-none text-gray-700"
          />
        ) : field.type === "radio" && field.options ? (
          <div className="flex gap-4 pl-2">
            {field.options.map((option) => (
              <label
                key={option}
                className={`flex items-center gap-2 px-4 py-2 border rounded-xl cursor-pointer transition-all ${
                  value === option
                    ? "bg-blue-50 border-[#202A54] text-[#202A54]"
                    : "bg-white border-gray-300 text-gray-700"
                }`}
              >
                <input
                  type="radio"
                  name={field.name}
                  value={option}
                  checked={value === option}
                  onChange={(e) => onChange(field.name, e.target.value)}
                  className="hidden"
                />
                <span
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    value === option ? "border-[#202A54]" : "border-gray-400"
                  }`}
                >
                  {value === option && (
                    <span className="w-2 h-2 bg-[#202A54] rounded-full"></span>
                  )}
                </span>
                <span>{option}</span>
              </label>
            ))}
          </div>
        ) : field.type === "select" && field.options ? (
          <select
            value={value}
            onChange={(e) => onChange(field.name, e.target.value)}
            className="flex-1 pl-2 outline-none text-gray-700"
          >
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : null}
      </div>
    </div>
  );
}
