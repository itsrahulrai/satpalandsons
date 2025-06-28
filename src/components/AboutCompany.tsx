// components/AboutCompany.tsx
import React from "react";
import {
  FaHandshake,
  FaUsers,
  FaBuilding,
  FaGavel,
  FaFileInvoice,
} from "react-icons/fa";
import Image from "next/image";
import Link from 'next/link';

const companyInfo = [
  {
    icon: <FaHandshake className="text-[#1A3C6B]  text-2xl" />,
    label: "Nature of Business",
    value: "Trader - Wholesaler/Distributor",
  },
  {
    icon: <FaUsers className="text-[#1A3C6B]  text-2xl" />,
    label: "Total Number of Employees",
    value: "Upto 10 People",
  },
  {
    icon: <FaBuilding className="text-[#1A3C6B]  text-2xl" />,
    label: "GST Registration Date",
    value: "01-07-2017",
  },
  {
    icon: <FaGavel className="text-[#1A3C6B]  text-2xl" />,
    label: "Legal Status of Firm",
    value: "Proprietorship",
  },
  {
    icon: <FaFileInvoice className="text-[#1A3C6B]  text-2xl" />,
    label: "GST No.",
    value: "07AAMPA1256E1Z5",
  },
];

const bgColors = [
  "bg-red-50",
  "bg-yellow-50",
  "bg-blue-50",
  "bg-green-50",
  "bg-purple-50",
  "bg-pink-50",
];

export default function AboutCompany() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        {/* Left Column */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {companyInfo.map((item, idx) => {
            const cardBg = bgColors[idx % bgColors.length];
            return (
              <div
                key={idx}
                className={`flex items-start gap-4 p-4 rounded-xl ${cardBg} shadow-sm hover:shadow-md transition`}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white text-red-700">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.label}</p>
                  <p className="text-sm text-gray-700">{item.value}</p>
                </div>
              </div>
            );
          })}

          {/* Trustseal Verified (Styled Consistently) */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-teal-50 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white">
              <Image
               src="/images/trustseal.png"
                alt="Trustseal Verified"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Trustseal Verified</p>
              <p className="text-sm text-gray-700">Officially certified</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <p className="text-base font-bold text-[#1A3C6B] tracking-wide mb-2">
            Welcome To
          </p>
          <h2 className="text-4xl md:text-4xl font-extrabold text-dark font-serif leading-tight mb-4 tracking-tight">
            Satpal and Sons
          </h2>
          <p className="text-gray-700 mb-4 text-justify">
            Satpal and Sons, is a premier leading company in India. It was
            established in 1954 in iron and steel. We deal in
            <span className="text-[#1A3C6B] font-semibold">
              {" "}
              Color Coated Profile Sheets
            </span>
            ,
            <span className="text-[#1A3C6B] font-semibold">
              {" "}
              Color Coated Coil
            </span>
            ,
            and
            <span className="text-[#1A3C6B] font-semibold"> Air Fryer</span>. We
            provide simple and lasting products to the user and our advanced
            technology and durability of the products are the foremost qualities
            that put Satpal and Sons years ahead and are giving it a clear edge
            in today’s market. We are working in Delhi/NCR and we undertake
            projects all over India. Our team is well experienced, hard working
            and dedicated for work to give quality, unmatched in the industry.
          </p>

          <p className="text-sm text-gray-800 font-medium mb-6">
            GET IN TOUCH WITH US FOR BEST DEALS
          </p>
         <Link href="/contact">
            <button className="bg-[#1A3C6B] text-white px-6 py-2 rounded-md font-semibold transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
