"use client";
import Sidebar from "@/components/Global/Sidebar";
import Header from "@/components/Header/Header";
import Step from "@/components/MakeListing/Step";
import ProgressBar from "@/components/Global/ProgressBar";
import FormStep from "@/components/MakeListing/FormStep";
import AmenityStep from "@/components/MakeListing/AmenityStep";
import ImageStep from "@/components/MakeListing/ImageStep";
import ImageReorderStep from "@/components/MakeListing/ImageReorderStep";
import DescriptionStep from "@/components/MakeListing/DescriptionStep";
import PriceStep from "@/components/MakeListing/PriceStep";
import LastStep from "@/components/MakeListing/LastStep";
import React, { useState } from "react";
import Image from "next/image";

import {
  Home,
  Building,
  Users,
  GraduationCap,
  Building2,
  MapPin,
  DollarSign,
  BedDouble,
} from "lucide-react";

export default function AgentProperties() {
  const steps = [
    {
      type: "options",
      question: "Which of these best describes your place?",
      questSubtitle: "",
      options: [
        { label: "House", icon: <Home /> },
        { label: "Apartment", icon: <Building /> },
        { label: "Shared", icon: <Users /> },
        { label: "Student", icon: <GraduationCap /> },
        { label: "Unit/Town house", icon: <Building2 /> },
      ],
    },

    {
      type: "form",
      question: "Address",
      questSubtitle:
        "Make sure your address is correct so potential tenants can easily find your property.",
      fields: [
        {
          label: "Country / region",
          type: "text",
          name: "country",
          placeholder: "Australia",
          required: true,
        },
        {
          label: "Street Address",
          type: "text",
          name: "address",
          placeholder: "123 Main St",
          required: true,
        },
        {
          label: "City / Town / Village",
          type: "text",
          name: "city",
          placeholder: "Sydney",
          required: true,
        },
        {
          label: "Apt, Floor",
          type: "text",
          name: "floot",
          placeholder: "Downtown",
          required: true,
        },

        {
          label: "province / state / territory",
          type: "text",
          name: "province",
          placeholder: "3rd Floor",
          required: true,
        },
        {
          label: "Postal Code",
          type: "text",
          name: "postal",
          placeholder: "3rd Floor",
          required: true,
        },
      ],
    },

    {
      type: "cards",
      question: "Tell Us About Your Home",
      questSubtitle:
        "Let’s cover the essentials—how many bedrooms, bathrooms, and special features make your place unique? The right details help attract the perfect tenants.",
      options: [
        { label: "House", icon: <Home /> },
        { label: "Apartment", icon: <Building /> },
        { label: "Shared", icon: <Users /> },
        { label: "Student", icon: <GraduationCap /> },
        { label: "Unit/Town house", icon: <Building2 /> },
      ],
    },

    {
      type: "amenity",
      question: "Distance to Nearby Amenities",
      questSubtitle:
        "Make your listing stand out by sharing what’s nearby—shops, schools, parks, or public transport. The right details can help attract the perfect tenant!",
      fields: [
        { name: "Canberra Grammar School", type: "School", distance: "1.6Km" },
        { name: "City Interchange", type: "Bus Stop", distance: "1.6Km" },
        { name: "Dickson Centre", type: "Mall", distance: "1.6Km" },
      ],
    },
    {
      type: "imageReorder",
      question: "Magic! How does it look ?",
      questSubtitle: "Drag to reorder",
      fields: [],
    },
    {
      type: "description",
      question: "Create A Description",
      questSubtitle:
        "Share any extra details about your property—whether it’s a cozy balcony view, a recent renovation, or anything that makes it special. Need help writing? use your templates",

      fields: [{ tags: "abc" }],
    },
    {
      type: "priced",
      question: "Now, set your price",
      questSubtitle:
        "Choose a price that works for you—make it competitive, fair, and ready to attract the right tenants!",
      fields: [],
    },
    {
      type: "image",
      question: "Add some images of your property",
      questSubtitle:
        "Show your property in its best light! Add clear, high-quality photos to give potential tenants a great first impression.",
      address: "503/16 Lonsdale Street, Braddon ",
      propertyType: "Apartment",
      description:
        "Stunning 4-bedroom, 3-bathroom home nestled in a sought-after suburb of Canberra. Designed for comfort and style, this property features a spacious open-plan living area, a modern kitchen with high-end appliances, and a private backyard perfect for entertaining. The master bedroom boasts an ensuite and walk-in wardrobe, while the additional bedrooms offer ample space and built-in storage. Located close to parks, schools, shopping centres, and public transport, this home is ideal for families or investors looking for a prime real estate opportunity. Bedrooms: 4Bathrooms: 3Parking: 2-car garageLand Size: 600m²Extras: Ducted heating/cooling, solar panels, and premium finishes",
      fields: [
        {
          label: "First Name",
          type: "text",
          name: "firstName",
          placeholder: "John",
          required: true,
        },
        {
          label: "Last Name",
          type: "text",
          name: "lastName",
          placeholder: "Doe",
          required: true,
        },
        {
          label: "Phone Number",
          type: "number",
          name: "phone",
          placeholder: "808 080 098",
          required: true,
        },
        {
          label: "Address",
          type: "text",
          name: "address",
          placeholder: "Downtown",
          required: true,
        },
      ],
    },
  ];

  const totalSteps = steps.length;
  const [currentStep, setCurrentStep] = useState(0);
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [parking, setParking] = useState(1);
  const [answers, setAnswers] = useState(Array(totalSteps).fill(null));
  const [formData, setFormData] = useState({});
  const [showLastStep, setShowLastStep] = useState(false);
  const handleNext = () => {
    if (currentStep < totalSteps - 1) setCurrentStep(currentStep + 1);
    else {
      console.log("Final Answers:", answers, formData);
      setShowLastStep(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSelect = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = answer;
    setAnswers(newAnswers);
  };

  const handleFormChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const current = steps[currentStep];
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Header />
        {!showLastStep ? (
          <>
            <div className="bg-white py-6 px-3 flex gap-3 items-center">
              <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
              <div className="flex gap-1 items-center bottom-2 relative">
                <span className=" text-lg">1/{steps.length}</span>
                <button className="bg-white border rounded-4xl text-[#202A54] hover:bg-[#202A54] hover:text-white px-6 py-1 btn ">
                  save & Exit
                </button>
              </div>
            </div>
            <main>
              <div className="flex flex-col min-h-screen bg-gray-50 items-center py-8 px-4">
                <div className="w-full max-w-3xl">
                  {current.type === "options" ? (
                    <Step
                      question={current.question}
                      options={current.options}
                      questSubtitle={current.questSubtitle}
                      selected={answers[currentStep]}
                      onSelect={handleSelect}
                    />
                  ) : current.type === "cards" ? (
                    <div className="flex flex-col  justify-center  space-y-8">
                      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                        {current.question}
                      </h2>
                      <p className="text-gray-500">{current.questSubtitle}</p>
                      <div className="grid grid-cols-3 gap-4 mt-6">
                        {/* Bedrooms */}
                        <div className="border border-gray-300 bg-white shadow-sm rounded-lg p-4 flex flex-col items-start">
                          <div className="p-2 border border-gray-300 rounded my-2">
                            <Image
                              src="/global/bedroom.svg"
                              width={22}
                              height={22}
                              alt="Bedrooms"
                            />
                          </div>
                          <p className="font-medium mb-2 ">Bedrooms</p>
                          <div className="flex items-center gap-3 w-full justify-center">
                            <button
                              onClick={() =>
                                setBedrooms(Math.max(0, bedrooms - 1))
                              }
                              className="border border-gray-300 hover:border-[#202A54] rounded-full w-8 h-8 flex items-center justify-center"
                            >
                              -
                            </button>
                            <span>{bedrooms}</span>
                            <button
                              onClick={() => setBedrooms(bedrooms + 1)}
                              className="border  border-gray-300 hover:border-[#202A54] rounded-full w-8 h-8 flex items-center justify-center"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Bathrooms */}
                        <div className="border border-gray-300 bg-white shadow-sm rounded-lg p-4 flex flex-col items-start">
                          <div className="p-2 border border-gray-300 rounded my-2">
                            <Image
                              src="/global/bath.svg"
                              width={22}
                              height={22}
                              alt="Bathroom"
                            />
                          </div>
                          <p className="font-medium mb-2">Bathrooms</p>
                          <div className="flex items-center gap-3 w-full justify-center">
                            <button
                              onClick={() =>
                                setBathrooms(Math.max(0, bathrooms - 1))
                              }
                              className="border rounded-full  border-gray-300 hover:border-[#202A54] w-8 h-8 flex items-center justify-center"
                            >
                              -
                            </button>
                            <span>{bathrooms}</span>
                            <button
                              onClick={() => setBathrooms(bathrooms + 1)}
                              className="border  border-gray-300 hover:border-[#202A54] rounded-full w-8 h-8 flex items-center justify-center"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Parking */}
                        <div className="border border-gray-300 bg-white shadow-sm rounded-lg p-4 flex flex-col items-start">
                          <div className="p-2 border border-gray-300 rounded my-2">
                            <Image
                              src="/global/parking.svg"
                              width={22}
                              height={22}
                              alt="Parking"
                            />
                          </div>
                          <p className="font-medium mb-2">Parking Space</p>
                          <div className="flex items-center gap-3 w-full justify-center">
                            <button
                              onClick={() =>
                                setParking(Math.max(0, parking - 1))
                              }
                              className="border rounded-full  border-gray-300 hover:border-[#202A54] w-8 h-8 flex items-center justify-center"
                            >
                              -
                            </button>
                            <span>{parking}</span>
                            <button
                              onClick={() => setParking(parking + 1)}
                              className="border rounded-full  border-gray-300 hover:border-[#202A54] w-8 h-8 flex items-center justify-center"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : current.type === "form" ? (
                    <FormStep
                      question={current.question}
                      fields={current.fields}
                      formData={formData}
                      questSubtitle={current.questSubtitle}
                      onChange={handleFormChange}
                    />
                  ) : current.type === "amenity" ? (
                    <AmenityStep
                      question={current.question}
                      questSubtitle={current.questSubtitle}
                      fields={current.fields}
                    />
                  ) : current.type === "image" ? (
                    <ImageStep
                      question={current.question}
                      questSubtitle={current.questSubtitle}
                      fields={current.fields}
                      description={current.description}
                      propertyType={current.propertyType}
                      address={current.address}
                      formData={formData}
                      onSelect={handleSelect}
                    />
                  ) : current.type === "description" ? (
                    <DescriptionStep
                      question={current.question}
                      questSubtitle={current.questSubtitle}
                      fields={current.fields}
                    />
                  ) : current.type === "imageReorder" ? (
                    <ImageReorderStep
                      question={current.question}
                      questSubtitle={current.questSubtitle}
                      fields={current.fields}
                    />
                  ) : current.type === "priced" ? (
                    <PriceStep
                      question={current.question}
                      questSubtitle={current.questSubtitle}
                      fields={current.fields}
                    />
                  ) : null}

                  <div className="flex justify-between mt-10">
                    <button
                      onClick={handleBack}
                      disabled={currentStep === 0}
                      className="px-6 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-40"
                    >
                      Back
                    </button>

                    <button
                      onClick={handleNext}
                      className="px-6 py-2 rounded-full bg-[#202A54] text-white hover:bg-blue-900 transition"
                    >
                      {currentStep === totalSteps - 1 ? "Finish" : "Next"}
                    </button>
                  </div>

                  <div className="text-sm text-gray-400 mt-4 text-right">
                    Step {currentStep + 1} / {totalSteps}
                  </div>
                </div>
              </div>
            </main>
          </>
        ) : (
          <LastStep
            question="Congratulations your property is now listed"
            questSubtitle="Your listing is live! Sit back and let interested renters come to you."
          />
        )}
      </div>
    </div>
  );
}
