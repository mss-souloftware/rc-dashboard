"use client";
import Banner from "@/components/Global/Banner";
import AgentSidebar from "@/components/Global/AgentSidebar";
import AgentHeader from "@/components/Header/AgentHeader";
import React from "react";
import  {useState} from "react";
import {Zap, WandSparkles, Image, ImageUp} from "lucide-react";

export default function ImageResizer() {
  const [image, setImage] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AgentSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <AgentHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        <div className="p-5 bg-[#F8F9FC]">
          <Banner
            imgUrl="/global/agentList.png"
            title="Resize your Image"
            buttonUrl="/dashboard"
            buttonText={"Resize"}
          />
          <div className="min-h-screen bg-gray-50 p-10 flex flex-col items-center">

            <div className="bg-white w-full max-w-6xl rounded-xl shadow p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">

              <div className="border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center p-10 text-center">
                {image ? (
                  <img
                    src={image}
                    alt="Uploaded"
                    className="object-contain w-60 h-60 rounded-lg"
                  />
                ) : (
                  <>
                    <div className="w-14 h-14 mb-4 border border-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-2xl flex justify-center"><ImageUp /></span>
                    </div>
                    <label
                      htmlFor="upload"
                      className="bg-[#202A54] text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-[#2c3670]"
                    >
                      Select Image
                    </label>
                    <input
                      type="file"
                      id="upload"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <p className="text-gray-500 mt-4">
                      or, drag and drop an image here
                    </p>
                  </>
                )}
              </div>

              <div className="flex flex-col justify-between space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Resize Image
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-600 mb-1">
                        Aspect Ratio
                      </label>
                      <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                        <option>Custom</option>
                        <option>16:9</option>
                        <option>4:3</option>
                        <option>1:1</option>
                      </select>
                    </div>

                    {/* Width & Height */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-600 mb-1">
                          Width
                        </label>
                        <input
                          type="number"
                          placeholder="Custom"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-600 mb-1">
                          Height
                        </label>
                        <input
                          type="number"
                          placeholder="Custom"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />
                      </div>
                    </div>

                    <button className="text-sm text-[#202A54] underline mt-2">
                      Reset
                    </button>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600 border-t pt-4">
                  <p>
                    <strong>Original Size:</strong> 5MB
                  </p>
                  <p>
                    <strong>Compressed Size:</strong> 1MB
                  </p>
                  <div className="flex gap-3 pt-3">
                    <button className="bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-100">
                      Open in Adobe Express
                    </button>
                    <button className="bg-[#202A54] text-white px-4 py-2 rounded-full hover:bg-[#2c3670]">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <p className="text-xl mb-2 flex justify-center"><Image /></p>
                <h3 className="font-semibold text-gray-800">Perfect Quality</h3>
                <p className="text-gray-500 text-sm mt-2">
                  The best online image resizer to resize your image at the
                  highest quality.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow text-center">
                <p className="text-xl mb-2 flex justify-center"><Zap /></p>
                <h3 className="font-semibold text-gray-800">Lightning Fast</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Highly scalable tool that resizes your images within seconds.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow text-center">
                <p className="text-xl mb-2 flex justify-center"><WandSparkles /></p>
                <h3 className="font-semibold text-gray-800">Easy to Use</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Upload, adjust, and you’re all set. Simple and efficient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
