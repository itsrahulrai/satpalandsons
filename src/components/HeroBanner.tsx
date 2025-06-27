"use client";

import React from "react";
import { FaBriefcase, FaBalanceScale, FaFileInvoice } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";

export default function HeroBanner() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center"
      style={{ backgroundImage: "url('/images/slider1.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 container mx-auto px-4 text-white text-center flex flex-col items-center justify-center">
        {/* Headline */}

      <div className="max-w-3xl mx-auto text-center mt-60">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg text-white">
            SATPAL & SONS
          </h1>
        <p className="text-lg md:text-2xl font-medium mt-4 drop-shadow-sm text-white/90">
          Since 1954 — Experts in Profile Sheets, Coils & Air Fryers
        </p>

        </div>


        {/* Stats Box */}
        <div className="bg-white text-[#011F4B] rounded-xl p-6 mt-25 mb-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl shadow-lg">
          <div className="flex items-center space-x-3">
            <FaBriefcase className="text-yellow-500 text-2xl" />
            <div>
              <h3 className="font-bold text-xl">Nature of Business</h3>
              <p className="text-sm">Wholesaler / Distributor</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <FaBalanceScale className="text-blue-500 text-2xl" />
            <div>
              <h3 className="font-bold text-xl">Legal Status</h3>
              <p className="text-sm">Proprietorship</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <FaFileInvoice className="text-indigo-500 text-2xl" />
            <div>
              <h3 className="font-bold text-xl">GST Number</h3>
              <p className="text-sm">07AAMPA1256E1Z5</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MdCheckCircle className="text-green-600 text-2xl" />
            <div>
              <h3 className="font-bold text-xl">500K+</h3>
              <p className="text-sm">Orders Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
