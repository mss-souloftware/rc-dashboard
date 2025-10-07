import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQForm({ onChange }) {
  const questions = [
    "🏡 How much bond do I need to pay?",
    "📈 Can my landlord increase my rent?",
    "📜 Can I break my lease early?",
    "🔧 My landlord won’t fix something—what can I do?",
    "Any additional notes or unique details about your property?",
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const handleAnswerChange = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
    if (onChange) onChange(updated);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 ">
        Renter's FAQ
      </h2>

      <div className="space-y-4">
        {questions.map((question, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-gray-200  rounded-xl overflow-hidden transition-all"
            >
              {/* Accordion Header */}
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center p-4  bg-white hover:bg-gray-100 transition-colors"
              >
                <span className="text-gray-800 font-medium text-left">
                  {question}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {/* Accordion Body */}
              {isOpen && (
                <div className="p-4 bg-white border-t border-gray-200">
                  <textarea
                    rows="3"
                    placeholder="Type your answer..."
                    value={answers[index]}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-700 focus:outline-none text-gray-700 placeholder-gray-400 transition-all"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
