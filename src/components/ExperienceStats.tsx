// src/components/ExperienceStats.tsx
import React from 'react';
import { FaAward, FaBriefcase, FaSmile, FaCheckCircle } from 'react-icons/fa';

export default function ExperienceStats() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Stats Area */}
      <div className="grid grid-cols-1 gap-6 relative">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full w-1 bg-gray-200 hidden md:block"></div>

        {/* Stat Card */}
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4 relative z-10">
          <FaCheckCircle className="text-blue-600 text-3xl" />
          <div>
            <h3 className="text-3xl font-bold text-gray-800">123</h3>
            <p className="text-gray-600 text-sm">Projects Completed</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4 relative z-10">
          <FaSmile className="text-yellow-500 text-3xl" />
          <div>
            <h3 className="text-3xl font-bold text-gray-800">84</h3>
            <p className="text-gray-600 text-sm">Happy Clients</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4 relative z-10">
          <FaAward className="text-orange-400 text-3xl" />
          <div>
            <h3 className="text-3xl font-bold text-gray-800">37</h3>
            <p className="text-gray-600 text-sm">Awards Won</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4 relative z-10">
          <FaBriefcase className="text-indigo-600 text-3xl" />
          <div>
            <h3 className="text-3xl font-bold text-gray-800">70</h3>
            <p className="text-gray-600 text-sm">Years in Business</p>
          </div>
        </div>
      </div>

      {/* Text Area */}
      <div>
        <h2 className="text-4xl font-extrabold text-[#6B1B1B] leading-snug">70 Years Experience</h2>
        <p className="mt-4 text-gray-600">
          Satpal and Sons, is a premier leading company in India. It was established in 1954 in iron and steel. Over the decades, our commitment to excellence,
          customer satisfaction, and product innovation has positioned us as a trusted brand in the steel and lighting industry.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#6B1B1B] text-white rounded hover:bg-[#541010] transition font-semibold">
          Contact Us
        </button>
      </div>
    </section>
  );
}
