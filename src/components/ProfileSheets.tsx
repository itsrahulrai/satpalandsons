"use client";
import React from "react";
import Image from "next/image";

interface ProfileSheetItem {
  id: number;
  name: string;
  price: number;
  unit: string;
  image: string;
  details: {
    label: string;
    value: string;
  }[];
}

interface Props {
  profileSheet: ProfileSheetItem[]; // ✅ This must match the prop name in page.tsx
}

const ProfileSheets: React.FC<Props> = ({ profileSheet }) => {
  return (
   <div className="bg-[#fff5db] w-full  mx-auto mt-10 mb-10 py-10 px-10 rounded-xl shadow-md">
      <p className="text-base font-bold text-[#1A3C6B] tracking-wide mb-2">
        Premium Profile Sheets
      </p>

      

       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-dark font-serif leading-tight tracking-tight">
            Profile Sheets
        </h2>
  
      <button className="group inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white bg-[#1A3C6B] px-4 sm:px-5 py-2 rounded shadow-md hover:bg-[#163153] transition duration-300 w-full sm:w-auto">
        View All
        <svg
          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {profileSheet.map((sheet) => (
          <div
            key={sheet.id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow h-full"
          >
            <div className="w-full h-56 relative">
              <Image
                src={sheet.image}
                alt={sheet.name}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-bold text-[#1A3C6B] mb-1">
                  {sheet.name}
                </h3>
                <p className="text-lg font-semibold text-red-600 mb-3">
                  ₹ {sheet.price}
                  <span className="text-sm font-normal text-gray-600"> /{sheet.unit}</span>
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  {sheet.details.map((detail, idx) => (
                    <li key={idx}>
                      <strong>{detail.label}:</strong> {detail.value}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-4 w-full bg-[#1A3C6B] text-white py-2 rounded-lg font-medium hover:bg-[#163153] transition">
                Get Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSheets;
