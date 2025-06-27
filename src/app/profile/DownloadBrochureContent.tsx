
'use client'; 

import React from 'react';
import Link from 'next/link';
import { FaFilePdf, FaDownload } from 'react-icons/fa6'; 

export default function DownloadBrochureContent() {

  const brochures = [
    { id: '1', name: 'Product Catalog 2024', file: '/brochures/product_catalog_2024.pdf' },
   
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-3xl font-bold text-[#011F4B] mb-6">Download Our Brochures</h2>
      <p className="text-gray-700 leading-relaxed mb-8">
        Access our latest brochures and detailed product information by clicking the download links below. These resources provide in-depth insights into our offerings and company.
      </p>

      <div className="space-y-4"> {/* Space between brochure items */}
        {brochures.map((brochure) => (
          <div key={brochure.id} className="flex flex-col sm:flex-row items-center justify-between p-4 border border-gray-200 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
            <div className="flex items-center gap-4 mb-2 sm:mb-0">
              <FaFilePdf className="text-red-600 text-3xl flex-shrink-0" /> {/* PDF icon */}
              <span className="font-medium text-lg text-gray-800">{brochure.name}</span>
            </div>
            <Link
              href={brochure.file}
              target="_blank" 
              rel="noopener noreferrer" 
              download 
              className="flex items-center gap-2 px-4 py-2 bg-[#1A3C6B] text-white rounded-md  transition-colors duration-200 shadow-sm text-sm sm:text-base"
              aria-label={`Download ${brochure.name}`}
            >
              <FaDownload className="w-4 h-4" /> Download
            </Link>
          </div>
        ))}
      </div>
      <p className="text-gray-600 text-sm mt-8">
        *Note: All files are provided in PDF format for easy viewing and printing. A PDF reader (e.g., Adobe Acrobat Reader) is required to open them.
      </p>
    </div>
  );
}
