"use client";
import Banner2 from "@/components/Global/Banner2";
import Sidebar from "@/components/Global/Sidebar";
import Header from "@/components/Header/Header";
import StepIndicator from "@/components/Global/StepIndicator";
import QuestionGroup from "@/components/Global/QuestionGroup";
import React, { useState } from "react";

export default function ReadyToRent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const questionGroups = [
    {
      id: 1,
      title: "Personal Information",
      description: "Name and email",
      fields: [
        { label: "Full Name", type: "text", name: "fullName", required: true, placeholder: "John Doe" },
        { label: "Phone Number", type: "tel", name: "phone", required: true, placeholder: "+61 434-567-890" },
        { label: "Email Address", type: "email", name: "email", required: true, placeholder: "example@email.com" },
      ],
    },
    {
      id: 2,
      title: "Rental Preferences",
      description: "Preferred suburbs",
      fields: [
        { label: "Preferred Suburb", type: "text", name: "suburb", required: true, placeholder: "Downtown" },
        { label: "Budget Range(per week)", type: "text", name: "budget", required: true, placeholder: "$1000 - $1500 / week" },
        { label: "Desired lease length", type: "text", name: "leaseLength", required: true, placeholder: "6 months" },
        { label: "Do you have pets?", type: "radio", name: "pets", required: true, options: ["Yes", "No"] },
        { label: "Preferred Living Arrangement", type: "radio", name: "livingArrangement", required: true, options: ["Shared", "Private"] },
      ],
    },
    {
      id: 3,
      title: "Employment & Rental History",
      description: "Employment details",
      fields: [
        { label: "Current Employment Status", type: "radio", name: "employmentStatus", required: true, options: ["Employed", "Unemployed"] },
        { label: "Employer Name", type: "text", name: "employerName", placeholder: "ABC Corp" },
        { label: "Position (optional)", type: "text", name: "position", placeholder: "Software Engineer" },
        { label: "Approximate Monthly Income", type: "text", name: "monthlyIncome", required: true, placeholder: "$5000" },
        { label: "How long have you been renting?", type: "radio", name: "rentalDuration", required: true, options: ["<6 months", "6m–1y", "1–3y", "3+y"] },
        { label: "Previous Address (optional)", type: "text", name: "prevAddress", placeholder: "123 Main St, Cityville" },
      ],
    },
    {
      id: 4,
      title: "References (optional)",
      description: "Landlord reference",
      fields: [
        { label: "Name", type: "text", name: "refName", placeholder: "John Doe" },
        { label: "Contact", type: "tel", name: "refPhone", placeholder: "+61 434-567-890" },
        { label: "Employer Reference (Name)", type: "text", name: "employerRef", placeholder: "ABC Corp" },
        { label: "Contact", type: "tel", name: "empPhone", placeholder: "+61 434-567-890" },
      ],
    },
  ];

  const steps = [
    { title: "Personal Information", description: "Name and email" },
    { title: "Rental Preferences", description: "Preferred suburbs" },
    { title: "Employment & Rental History", description: "Employment History" },
    { title: "References", description: "Landlord reference" },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentGroup = questionGroups[currentStep];
  const allFilled = currentGroup.fields.every((f) => !f.required || answers[f.name]?.trim());

  const handleChange = (name, value) => setAnswers({ ...answers, [name]: value });

  const handleNext = () => {
    if (currentStep < questionGroups.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Submitted answers:", answers);
      alert("Form submitted! Check console for output.");
    }
  };

  const handleBack = () => currentStep > 0 && setCurrentStep(currentStep - 1);

  return (
    <div className="min-h-screen bg-gray-50 flex overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="p-5 bg-[#F8F9FC] overflow-hidden">
          <Banner2
            imgUrl="/global/ready-to-rent.png"
            title="Ready to Rent"
            subtitle="Let Landlords Find You"
            buttonUrl="/dashboard"
          />
        </div>

        <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-3xl lg:max-w-5xl flex flex-col items-center justify-center my-5">
            <div className="w-full overflow-hidden">
              <StepIndicator steps={steps} currentStep={currentStep} />
            </div>

            <div className="w-full bg-[#f8f9fc] border border-gray-300 rounded-2xl shadow p-6 sm:p-8 space-y-6 mt-5">
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  {currentGroup.id}. {currentGroup.title}
                </h2>

                <QuestionGroup
                  fields={currentGroup.fields}
                  answers={answers}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between mt-6 gap-3 sm:gap-0">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className={`px-5 py-2 rounded-full text-gray-600 font-medium border border-gray-300 ${
                    currentStep === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Back
                </button>

                <button
                  onClick={handleNext}
                  disabled={!allFilled}
                  className={`px-5 py-2 rounded-full text-white font-medium ${
                    !allFilled
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-blue-900 hover:bg-blue-800"
                  }`}
                >
                  {currentStep === questionGroups.length - 1 ? "Submit" : "Next"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
