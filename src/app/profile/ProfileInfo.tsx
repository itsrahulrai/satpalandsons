"use client";

import React from "react";
import Image from "next/image";
import { GalleryData } from '@/lib/mockData';

export default function ProfileInfo() {
  return (
    <div className="space-y-8 p-4 md:p-8 bg-gray-50">
      {/* Company Description Card */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-[#011F4B] mb-4">About Us</h2>
        <p className="text-gray-700 text-justify leading-relaxed">
          <strong>Satpal and Sons</strong> is a premier leading company in India.
          It was established in 1954 in iron and steel. We deal in
          <span className="text-[#1A3C6B] font-semibold"> Color Coated Profile Sheets</span>,
          <span className="text-[#1A3C6B] font-semibold"> Color Coated Coil</span> and
          <span className="text-[#1A3C6B] font-semibold"> Air Fryer</span>. We provide simple and lasting products to the user and our advanced technology and durability of the products are the foremost qualities that put <strong>Satpal and Sons</strong> years ahead and are giving it a clear edge in today’s market.
          <br /><br />
          We are working in Delhi/NCR and we undertake projects all over India. Our team is well experienced, hard working and dedicated for work to give quality, unmatched in the industry.
        </p>
      </div>

      {/* Factsheet Card */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-semibold text-[#011F4B] mb-4">Factsheet</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-800">
          <div>
            <p className="mb-2"><span className="font-semibold">Nature of Business:</span> Wholesaler / Distributor</p>
            <p className="mb-2"><span className="font-semibold">Additional Business:</span> Wholesale, Retail, Office / Sale Office</p>
            <p className="mb-2"><span className="font-semibold">Company CEO:</span> Naresh Aggarwal</p>
            <p className="mb-2"><span className="font-semibold">Legal Status of Firm:</span> Proprietorship</p>
          </div>
          <div>
            <p className="mb-2"><span className="font-semibold">GST Registration Date:</span> 01-07-2017</p>
            <p className="mb-2"><span className="font-semibold">GST Partner Name:</span> Naresh Aggarwal</p>
            <p className="mb-2"><span className="font-semibold">GST No.:</span> 07AAMPA1256E1Z5</p>
          </div>
        </div>
      </div>

      {/* Company Images Card */}
    <div className="bg-white rounded-lg shadow-md p-6">
  <h3 className="text-2xl font-semibold text-[#011F4B] mb-4">Company Images</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {GalleryData.map((img) => (
      <div key={img.id} className="relative h-90 rounded-lg overflow-hidden shadow">
        <Image
          src={img.imageUrl}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
