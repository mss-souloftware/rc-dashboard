import React from "react";

export default function StepIndicator({ steps, currentStep }) {
  return (
    <div className="flex justify-center items-center w-full  my-8">
      <div className="flex w-md md:w-full max-w-4xl items-center justify-between md:flex-row flex-col gap-6 relative">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <div
              key={index}
              className="flex-1 flex md:flex-col flex-row items-center md:items-center relative w-full"
            >
              
              {index > 0 && (
                <div
                  className={`absolute md:block hidden top-4 left-[-50%] w-full h-0.5 ${
                    isCompleted ? "bg-[#202A54]" : "bg-gray-200"
                  }`}
                ></div>
              )}

            
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full border-2 z-10 transition-all duration-300 ${
                  isActive
                    ? "border-[#202A54] bg-[#202A54] text-white"
                    : isCompleted
                    ? "border-[#202A54] bg-white text-[#202A54]"
                    : "border-gray-300 bg-white text-gray-400"
                }`}
              >
                <span className="text-sm font-semibold">{index + 1}</span>
              </div>

              <div className="md:mt-2 md:text-center ml-3 md:ml-0">
                <div
                  className={`text-sm font-medium ${
                    isActive
                      ? "text-blue-900"
                      : isCompleted
                      ? "text-[#202A54]"
                      : "text-gray-500"
                  }`}
                >
                  {step.title}
                </div>
                <div className="text-xs text-gray-400">{step.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
