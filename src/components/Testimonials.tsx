// src/components/Testimonials.tsx
"use client";

import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: "We used Satpal & Sons’ color coated profile sheets for our Delhi warehouse. Extremely durable and stylish finish!",
    name: "Sandeep Khurana",
    role: "Structural Consultant at BuildBridge Pvt. Ltd.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 2,
    text: "Top-quality TMT bars with timely delivery. Their team is responsive and experienced.",
    name: "Kavita Mishra",
    role: "Site Engineer at Apex Builders, Noida",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 3,
    text: "Highly satisfied with their bathroom vanities. Great designs and smooth installation support.",
    name: "Rohan Bhatnagar",
    role: "Interior Designer at UrbanAura, Gurugram",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    id: 4,
    text: "Satpal & Sons provided premium quality profile sheets for our government project in Lucknow. Excellent service!",
    name: "Priya Sehgal",
    role: "Project Coordinator at InfraDev India",
    image: "https://randomuser.me/api/portraits/women/38.jpg",
  },
  {
    id: 5,
    text: "The LED lights we sourced from them are long-lasting and energy-efficient. Best vendor experience so far!",
    name: "Anil Jain",
    role: "Electrical Contractor, South Delhi",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 6,
    text: "Their team delivered on time, and the iron rods were of excellent quality. Trustworthy supplier.",
    name: "Divya Menon",
    role: "Project Manager at BuildNest Kerala",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    id: 7,
    text: "Very happy with their polycarbonate roofing sheets. Perfect for our industrial shed project in Pune.",
    name: "Harish Shetty",
    role: "Owner, Shetty Constructions",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
  },
  {
    id: 8,
    text: "We ordered sanitary ware for a luxury villa project in Goa – classy products and strong packaging.",
    name: "Ritika Deshmukh",
    role: "Architect, Elements by Ritika",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    id: 9,
    text: "Satpal & Sons is our go-to for coils and roofing sheets. They maintain consistency and quality every time.",
    name: "Mohit Arora",
    role: "Vendor Manager at Arora Developers, Jaipur",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 10,
    text: "Their products are solid, team is professional, and they handle pan-India orders efficiently. Highly recommended.",
    name: "Sneha Rathi",
    role: "Founder at Rathi Homes, Mumbai",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
];


const bgColors = [
  "bg-blue-50",
  "bg-yellow-50",
  "bg-green-50",
  "bg-pink-50",
  "bg-purple-50",
  "bg-indigo-50",
  "bg-red-50",
  "bg-teal-50",
  "bg-orange-50",
  "bg-emerald-50",
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;
  const maxIndex = testimonials.length - itemsPerPage;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + itemsPerPage));
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, [maxIndex]);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + itemsPerPage, maxIndex));
  };

  return (
    <section className="py-12 bg-[#F3F8FF] mt-10">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1A3C6B] flex items-center justify-center text-white text-lg">
              <FaQuoteLeft />
            </div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight font-serif text-black">
              What Our Customers are Saying
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-[#1A3C6B] hover:bg-gray-100 disabled:opacity-40"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= maxIndex}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A3C6B] text-white hover:bg-[#163153] disabled:opacity-40"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-500">
          {testimonials
            .slice(startIndex, startIndex + itemsPerPage)
            .map((testimonial, i) => (
              <div
                key={testimonial.id}
                className={`border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition ${
                  bgColors[(startIndex + i) % bgColors.length]
                }`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div className="mb-6">
                    <p className="text-lg text-gray-800 font-medium leading-relaxed italic relative pl-6  before:text-4xl before:text-[#1A3C6B] before:absolute before:left-0 before:top-[-4px]">
                      {testimonial.text}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                    />
                    <div>
                      <p className="text-base font-semibold text-[#1A3C6B]">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
