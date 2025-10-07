import React from "react";

export default function FormStep({
  question,
  fields,
  formData,
  onChange,
  questSubtitle,
}) {
  return (
    <div className="flex flex-col  justify-center  space-y-8 w-full">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
        {question}
      </h2>
      <p className="text-gray-500">{questSubtitle}</p>

      <form className="w-full max-w-2xl border p-5 rounded-2xl bg-[#f6f7f9] border-gray-300 space-y-4">
        {fields.map((field, idx) => (
          <div key={idx} className="text-left">
            <label className="block text-sm  font-semibold text-gray-700 mb-1">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={(e) => onChange(field.name, e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-800 focus:outline-none"
              required={field.required}
            />
          </div>
        ))}
      </form>

      <div className="border-b border-gray-300 my-8"></div>

      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          Is the pin in the right spot?
        </h3>
        <p className="text-gray-500">
          Pinpoint your exact location to give tenants a clear view of where
          your property is situated.
        </p>
        <div className="w-full h-[350px] rounded-xl overflow-hidden border my-5 border-gray-300">
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
  );
}
