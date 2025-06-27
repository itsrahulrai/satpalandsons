// src/app/profile/TestimonialContent.tsx
'use client'; // This component will be conditionally rendered client-side by ProfilePage.tsx

import React from 'react';

export default function TestimonialContent() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-3xl font-bold text-[#011F4B] mb-6">Testimonials</h2>
      <div className="space-y-8">
        <blockquote className="border-l-4 border-orange-500 pl-4 py-2 italic text-gray-700">
          "We used Satpal & Sons’ color coated profile sheets for our Delhi warehouse. Extremely durable and stylish finish!"
          <footer className="mt-2 text-right text-gray-600 not-italic">- Sandeep Khurana </footer>
        </blockquote>
        <blockquote className="border-l-4 border-orange-500 pl-4 py-2 italic text-gray-700">
          "Top-quality TMT bars with timely delivery. Their team is responsive and experienced."
          <footer className="mt-2 text-right text-gray-600 not-italic">- Kavita Mishra </footer>
        </blockquote>
        <blockquote className="border-l-4 border-orange-500 pl-4 py-2 italic text-gray-700">
          "Highly satisfied with their bathroom vanities. Great designs and smooth installation support."
          <footer className="mt-2 text-right text-gray-600 not-italic">- Rohan Bhatnagar </footer>
        </blockquote>
        <blockquote className="border-l-4 border-orange-500 pl-4 py-2 italic text-gray-700">
          "Satpal & Sons provided premium quality profile sheets for our government project in Lucknow. Excellent service!"
          <footer className="mt-2 text-right text-gray-600 not-italic">- Anil Jain </footer>
        </blockquote>
      </div>
    </div>
  );
}
