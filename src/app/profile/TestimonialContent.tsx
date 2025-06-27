'use client';

import React from 'react';

export default function TestimonialContent() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-3xl font-bold text-[#011F4B] mb-6">Testimonials</h2>
      <div className="space-y-8">
        <blockquote className="border-l-4 border-orange-500 pl-4 py-2 italic text-gray-700">
          &quot;We used Satpal &amp; Sons’ color coated profile sheets for our Delhi warehouse. Extremely durable and stylish finish!&quot;
          <footer className="mt-2 text-right text-gray-600 not-italic">- Sandeep Khurana </footer>
        </blockquote>
        <blockquote className="border-l-4 border-orange-500 pl-4 py-2 italic text-gray-700">
          &quot;Top-quality TMT bars with timely delivery. Their team is responsive and experienced.&quot;
          <footer className="mt-2 text-right text-gray-600 not-italic">- Kavita Mishra </footer>
        </blockquote>
        <blockquote className="border-l-4 border-orange-500 pl-4 py-2 italic text-gray-700">
          &quot;Highly satisfied with their bathroom vanities. Great designs and smooth installation support.&quot;
          <footer className="mt-2 text-right text-gray-600 not-italic">- Rohan Bhatnagar </footer>
        </blockquote>
        <blockquote className="border-l-4 border-orange-500 pl-4 py-2 italic text-gray-700">
          &quot;Satpal &amp; Sons provided premium quality profile sheets for our government project in Lucknow. Excellent service!&quot;
          <footer className="mt-2 text-right text-gray-600 not-italic">- Anil Jain </footer>
        </blockquote>
      </div>
    </div>
  );
}
