'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaAngleDown, FaUserCircle, FaPhoneAlt } from 'react-icons/fa';
import { mockCategories } from '@/lib/mockData';

export default function MainNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        if (window.innerWidth > 768) {
          setIsMobileMenuOpen(false);
          setIsProductDropdownOpen(false);
          setIsProfileDropdownOpen(false);
        }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const toggleDropdown = (type: 'product' | 'profile') => {
    if (type === 'product') {
      setIsProductDropdownOpen((prev) => !prev);
      setIsProfileDropdownOpen(false);
    } else {
      setIsProfileDropdownOpen((prev) => !prev);
      setIsProductDropdownOpen(false);
    }
  };

  return (
    <nav className="bg-[#011F4B] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide text-white">
          SATPAL & SONS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-[16px] font-bold tracking-wide">
          <Link href="/" className="hover:text-blue-400 transition-colors duration-200">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors duration-200">
            About
          </Link>

          {/* Products Dropdown */}
       

            <div className="relative">
  <button
    onClick={() => toggleDropdown('product')}
    className="flex items-center gap-1 hover:text-blue-400 transition-colors duration-200 focus:outline-none"
  >
    Products <FaAngleDown className="mt-[1px]" />
  </button>

  {isMounted && isProductDropdownOpen && (
    <div className="absolute left-0 mt-9 bg-white text-black rounded-lg shadow-xl w-[490px] max-h-[350px] overflow-y-auto z-50 px-4 py-3 grid grid-cols-2 gap-2">
      {mockCategories.map((category) => (
        <Link
          key={category.id}
          href={`/products/${category.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z\-]/g, '')}`}
          className="block px-2 py-2 hover:bg-[#011F4B] hover:text-white transition-colors duration-200 rounded-md"
        >
          {category.name}
        </Link>
      ))}

      {/* View All Products link (spans full width) */}
      <div className="col-span-2 mt-2">
        <Link
          href="/products"
          className="block w-full text-center font-medium text-[#011F4B] hover:text-white hover:bg-[#011F4B] transition-colors duration-200 rounded-md py-2"
        >
          View All Products
        </Link>
      </div>
    </div>
  )}
</div>

          <Link href="/contact" className="hover:text-blue-400 transition-colors duration-200">
            Contact
          </Link>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('profile')}
              className="flex items-center gap-1 hover:text-blue-400 transition-colors duration-200 focus:outline-none"
            >
              <FaUserCircle className="text-lg" />
              Profile <FaAngleDown className="mt-[1px]" />
            </button>
            {isMounted && isProfileDropdownOpen && (
              <div className="absolute left-0 mt-9 bg-white text-black rounded-lg shadow-xl w-44 py-2 z-50">
              <Link
                  href="/profile"
                  className="block px-4 py-2 hover:bg-[#011F4B] hover:text-white transition-colors duration-200"
                >
                  My Profile
                </Link>

              
              </div>


            )}
          </div>

          {/* Contact info block after profile */}
          <div className="mt-4 md:mt-2 md:ml-4">
            <div className="flex items-center bg-blue-100 rounded-xl px-4 py-2 shadow-sm space-x-3">
              <div className="flex items-center justify-center w-9 h-9 bg-white rounded-full shadow">
                <FaPhoneAlt className="text-blue-600 text-base" />
              </div>
              <span className="text-sm text-[#011F4B] font-medium">
                Call us at{" "}
                <a
                  href="tel:9868210750"
                  className="font-bold text-[#011F4B] hover:text-blue-700 transition"
                >
                  9868210750
                </a>{" "}
                —{" "}
                <span className="text-[#011F4B] font-semibold animate-pulse text-red-600">
                  we’re available!
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-black px-6 py-4 space-y-3 font-semibold text-base">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-blue-500">
            Home
          </Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-blue-500">
            About
          </Link>

          {/* Mobile Products Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('product')}
              className="w-full flex justify-between items-center py-2 focus:outline-none"
            >
              Products <FaAngleDown />
            </button>
            {isProductDropdownOpen && (
              <div className="pl-4 space-y-1 max-h-64 overflow-y-auto">
                {mockCategories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/products/${category.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z\-]/g, '')}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block hover:text-blue-600 text-sm"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-blue-500">
            Contact
          </Link>

          {/* Mobile Profile and contact info */}
          <div>
            <button
              onClick={() => toggleDropdown('profile')}
              className="w-full flex justify-between items-center py-2 focus:outline-none"
            >
              Profile <FaAngleDown />
            </button>
            {isProfileDropdownOpen && (
              <div className="pl-4 space-y-1">
                <Link href="/profile" onClick={() => { setIsMobileMenuOpen(false); }} className="block hover:text-blue-600">
                  My Profile
                </Link>
                
              </div>
            )}
          </div>

          {/* Contact info block in mobile menu */}
          <div className="mt-4">
            <div className="flex items-center bg-blue-100 rounded-xl px-4 py-2 shadow-sm space-x-3">
              <div className="flex items-center justify-center w-9 h-9 bg-white rounded-full shadow">
                <FaPhoneAlt className="text-blue-600 text-base" />
              </div>
              <span className="text-sm text-[#011F4B] font-medium">
                Call us at{" "}
                <a
                  href="tel:9868210750"
                  className="font-bold text-[#011F4B] hover:text-blue-700 transition"
                >
                  9868210750
                </a>{" "}
                —{" "}
                <span className="text-[#011F4B] font-semibold animate-pulse text-red-600">
                  we’re available!
                </span>
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}