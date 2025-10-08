import React from "react";
import { useState } from "react";
import {X} from "lucide-react";

export default function DescriptionStep({ question, questSubtitle, fields }) {
  const [selectedTags, setSelectedTags] = useState([]);
  const allTags = [
    {
      label: "Culturally Welcoming",
      color: "bg-rose-50 text-rose-700 border border-rose-200",
    },
    {
      label: "International Student Friendly",
      color: "bg-purple-50 text-purple-700 border border-purple-200",
    },
    {
      label: "Vegetarian Household",
      color: "bg-green-50 text-green-700 border border-green-200",
    },
    {
      label: "Languages Spoken: Mandarin, Hindi, Arabic",
      color: "bg-indigo-50 text-indigo-700 border border-indigo-200",
    },
    {
      label: "Prayer Space Available",
      color: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    },
    {
      label: "Shared with University Students",
      color: "bg-sky-50 text-sky-700 border border-sky-200",
    },
    {
      label: "Women-Only Sharehouse",
      color: "bg-green-50 text-green-700 border border-green-200",
    },
  ];

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };
  return (
    <div className="flex flex-col  justify-center  space-y-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
        {question}
      </h2>
      <p className="text-gray-500">{questSubtitle}</p>

      <div className="flex gap-3">
        <span className="text-sm text-gray-600 px-3 py-2 rounded-3xl border border-gray-300 bg-white">Template 1</span>
        <span className="text-sm text-gray-600 px-3 py-2 rounded-3xl border border-gray-300 bg-white">Template 2</span>
        <span className="text-sm text-gray-600 px-3 py-2 rounded-3xl border border-gray-300 bg-white">Template 3</span>
      </div>

       <div className="space-y-4 border border-gray-300 rounded-2xl p-3">
        <div>
          <h3 className="text-lg  mb-2 text-gray-700">Your Message</h3>
          <textarea
            className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-800 focus:outline-none"
            rows="5"
            placeholder="Type your message...."
          ></textarea>
        </div>
       </div>

      <div className="space-y-4 border border-gray-300 rounded-2xl p-5">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Tags</h3>
          <div className="flex bg-white border border-gray-200 rounded p-3 flex-wrap gap-2">
            {selectedTags.length > 0 ? (
              selectedTags.map((tag, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm ${tag.color}`}
                >
                  <span>{tag.label}</span>
                  <button
                    onClick={() => removeTag(tag)}
                    className="hover:text-gray-600 transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-sm  text-gray-400">No tags selected</p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {allTags.map((tag, i) => (
            <button
              key={i}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1.5 rounded-full text-sm transition border ${
                selectedTags.includes(tag)
                  ? `${tag.color} ring-2 ring-offset-1 ring-blue-200`
                  : `${tag.color} opacity-90 hover:opacity-100`
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
