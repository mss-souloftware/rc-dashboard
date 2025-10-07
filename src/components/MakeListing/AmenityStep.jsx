import React from "react";
import AmenityRow from "../Global/AmenityRow";

export default function AmenityStep({
  question,
  questSubtitle,
  fields
}) {
  return (
    <div className="flex flex-col  justify-center  space-y-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
        {question}
      </h2>
      <p className="text-gray-500">{questSubtitle}</p>
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
      <div className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 p-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm">
              <th className="p-3 font-medium">Name</th>
              <th className="p-3 font-medium">Type</th>
              <th className="p-3 font-medium">Distance</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((item,index)=>(
                <AmenityRow key={index} name={item.name} type={item.type} distance={item.distance} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
