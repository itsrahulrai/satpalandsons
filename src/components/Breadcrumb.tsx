'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { HiChevronRight } from 'react-icons/hi';
import { FaHome } from 'react-icons/fa';

const PATH_NAMES: { [key: string]: string } = {
  '': 'Home',
  about: 'About Us',
  products: 'Products',
  contact: 'Contact Us',
  profile: 'My Profile',
  company: 'Company Info',
  certifications: 'Certifications',
  careers: 'Careers',
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <nav className="w-full bg-white border border-gray-200 rounded-md py-3 px-4 sm:px-6 lg:px-8 shadow-sm overflow-x-auto">
      <ol className="flex items-center space-x-1 sm:space-x-2 text-sm text-gray-700">
        {/* Home with Icon */}
        <li className="flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium transition"
          >
            <FaHome className="text-base" />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const href = '/' + pathSegments.slice(0, index + 1).join('/');
          const isLast = index === pathSegments.length - 1;
          const displayName =
            PATH_NAMES[segment] ||
            segment
              .replace(/-/g, ' ')
              .replace(/\b\w/g, char => char.toUpperCase());

          return (
            <li key={href} className="flex items-center">
              <HiChevronRight className="text-gray-400 text-base mx-1" />
              {isLast ? (
                <span className="text-gray-900 font-semibold truncate">{displayName}</span>
              ) : (
                <Link
                  href={href}
                  className="text-blue-600 hover:text-blue-800 font-medium transition truncate"
                >
                  {displayName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
