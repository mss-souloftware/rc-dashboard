"use client";
import Banner2 from "@/components/Global/Banner2";
import PropertyListCard from "@/components/Global/PropertyListCard";
import Sidebar from "@/components/Global/Sidebar";
import Header from "@/components/Header/Header";
import Inspection from "@/components/Inspection/Inspection";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Mail, Phone, User } from "lucide-react";
import StepIndicator from "@/components/Global/StepIndicator";
import QuestionGroup from "@/components/Global/QuestionGroup";

export default function ReadyToRent() {
  const questionGroups = [
    {
      id: 1,
      title: "Personal Information",
      description: "Name and email",
      fields: [
        {
          label: "Full Name",
          type: "text",
          name: "fullName",
          required: true,
          placeholder: "John Doe",
        },
        {
          label: "Phone Number",
          type: "tel",
          name: "phone",
          required: true,
          placeholder: "+61 434-567-890",
        },
        {
          label: "Email Address",
          type: "email",
          name: "email",
          required: true,
          placeholder: "example@email.com",
        },
      ],
    },
    {
      id: 2,
      title: "Rental Preferences",
      description: "Preferred suburbs",
      fields: [
        {
          label: "Preferred Suburb",
          type: "text",
          name: "suburb",
          required: true,
          placeholder: "Downtown",
        },
        {
          label: "Budget Range(per week)",
          type: "text",
          name: "budget",
          required: true,
          placeholder: "$1000 - $1500 / week",
        },
        {
          label: "Desired lease length",
          type: "text",
          name: "leaseLength",
          required: true,
          placeholder: "6 months",
        },
        {
            label:"Do you have pets?",
            type:"radio",
            name:"pets",
            required:true,
            options:["Yes","No"]
        },
        {
            label:"Preffered Living Arrangement",
            type:"radio",
            name:"livingArrangement",
            required:true,
            options:["Shared","Private"]
        },
      ],
    }, {
      id: 3,
      title: "Employment & Rental History",
      description: "Preferred suburbs",
      fields: [
        {
          label:"Current Employment Status",
            type:"radio",
            name:"employmentStatus",
            required:true,
            options:["Employed","Unemployed"]
        },
        {
          label: "Employer Name",
          type: "text",
          name: "employerName",
          required: false,
          placeholder: "ABC Corp",
        },
        {
          label: "Position(optional)",
          type: "text",
          name: "position",
          required: false,
          placeholder: "Software Engineer",
        },
        {
          label: "Approximate Monthly Income",
          type: "text",
          name: "monthlyIncome",
          required: true,
          placeholder: "$5000",
        },
        {
            label:"How long have you been renting?",
            type:"radio",
            name:"rentalDuration",
            required:true,
            options:["Less than 6 months","6 months - 1 year","1-3 years","3+ years"]
        },
        {
           label: "Previous Address(optional)",
          type: "text",
          name: "monthlyIncome",
          required: false,
          placeholder: "123 Main St, Cityville",
        },
      ],
    }, {
      id: 4,
      title: "References (optional)",
      description: "Landlord reference",
      fields: [
        {
          label: "Name",
          type: "text",
          name: "refName",
          required: false,
          placeholder: "John Doe",
        },
        {
          label: "Contact",
          type: "tel",
          name: "refPhone",
          required: false,
          placeholder: "+61 434-567-890",
        },
        {
          label: "Employer Reference (Name)",
          type: "text",
          name: "employerRef",
          required: false,
          placeholder: "ABC Corp",
        },
         {
          label: "Contact",
          type: "tel",
          name: "empPhone",
          required: false,
          placeholder: "+61 434-567-890",
        },
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

  const handleChange = (name, value) => {
    setAnswers({ ...answers, [name]: value });
  };


  const allFilled = currentGroup.fields.every(
    (f) => !f.required || answers[f.name]?.trim()
  );

  const handleNext = () => {
    if (currentStep < questionGroups.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Submitted answers:", answers);
      alert("Form submitted! Check console for output.");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-5 bg-[#F8F9FC]">
          <Banner2
            imgUrl="/global/ready-to-rent.png"
            title="Ready to Rent"
            subtitle="Let Landlords Find You"
            buttonUrl="/dashboard"
          />
        </div>

        <div className="flex justify-center items-center w-full">
            <div className=" w-fit md:min-w-4xl flex flex-col items-center mx-5 lg:mx-0 justify-center my-5">
          <StepIndicator steps={steps} currentStep={currentStep} />
          <div className=" w-full lg:w-full mx-5 md:mx-0 md:max-w-3xl lg:max-w-5xl bg-[#f8f9fc] border border-gray-300 rounded-2xl shadow p-8 space-y-6">

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

            <div className="flex justify-between mt-6">
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
