'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaAngleDown, FaUserCircle, FaPhoneAlt } from 'react-icons/fa';
import { mockCategories } from '@/lib/mockData';

export default function MainNavbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const isProductsPath = pathname.startsWith('/products');

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
        <Link href="/" className="text-2xl font-extrabold tracking-wide text-white">
          SATPAL & SONS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-[16px] font-bold tracking-wide">
          {['/', '/about', '/contact'].map((route) => (
            <Link
              key={route}
              href={route}
              className={`hover:text-blue-400 transition-colors duration-200 ${
                pathname === route ? 'text-blue-400' : ''
              }`}
            >
              {route === '/' ? 'Home' : route.slice(1).charAt(0).toUpperCase() + route.slice(2)}
            </Link>
          ))}

          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('product')}
              className={`flex items-center gap-1 hover:text-blue-400 transition duration-200 focus:outline-none ${
                isProductsPath ? 'text-blue-400' : ''
              }`}
            >
              Products <FaAngleDown />
            </button>

            {isMounted && isProductDropdownOpen && (
              <div className="absolute left-0 mt-9 bg-white text-black rounded-lg shadow-xl w-[490px] max-h-[350px] overflow-y-auto z-50 px-4 py-3 grid grid-cols-2 gap-2">
                {mockCategories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/products/${category.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z\-]/g, '')}`}
                    className="block px-2 py-2 hover:bg-[#011F4B] hover:text-white transition rounded-md"
                  >
                    {category.name}
                  </Link>
                ))}
                <div className="col-span-2 mt-2">
                  <Link
                    href="/products"
                    className="block w-full text-center font-medium text-[#011F4B] hover:text-white hover:bg-[#011F4B] transition rounded-md py-2"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('profile')}
              className={`flex items-center gap-1 hover:text-blue-400 transition duration-200 ${
                pathname === '/profile' ? 'text-blue-400' : ''
              }`}
            >
              <FaUserCircle className="text-lg" /> Profile <FaAngleDown />
            </button>
            {isMounted && isProfileDropdownOpen && (
              <div className="absolute left-0 mt-9 bg-white text-black rounded-lg shadow-xl w-44 py-2 z-50">
                <Link
                  href="/profile"
                  className="block px-4 py-2 hover:bg-[#011F4B] hover:text-white transition rounded-md"
                >
                  My Profile
                </Link>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-4 md:mt-2 md:ml-4">
            <div className="flex items-center bg-blue-100 rounded-xl px-4 py-2 shadow-sm space-x-3">
              <div className="flex items-center justify-center w-9 h-9 bg-white rounded-full shadow">
                <FaPhoneAlt className="text-blue-600 text-base" />
              </div>
              <span className="text-sm text-[#011F4B] font-medium">
                Call us at{' '}
                <a href="tel:9868210750" className="font-bold text-[#011F4B] hover:text-blue-700 transition">
                  9868210750
                </a>{' '}
                —{' '}
                <span className="text-[#011F4B] font-semibold animate-pulse text-red-600">
                  we’re available!
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-black px-6 py-4 space-y-4 font-semibold text-base">
          {/* Standard Links */}
          {['/', '/about', '/contact'].map((route) => (
            <Link
              key={route}
              href={route}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                pathname === route ? 'text-blue-600 bg-blue-50' : 'hover:text-blue-500 hover:bg-gray-100'
              }`}
            >
              {route === '/' ? 'Home' : route.slice(1).charAt(0).toUpperCase() + route.slice(2)}
            </Link>
          ))}

          {/* Products Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('product')}
              className={`w-full flex justify-between items-center px-3 py-2 rounded-md ${
                isProductsPath ? 'text-blue-600 bg-blue-50' : 'hover:bg-gray-100'
              }`}
            >
              Products <FaAngleDown />
            </button>
            {isProductDropdownOpen && (
              <div className="bg-gray-50 mt-2 rounded-md px-4 py-4 space-y-2 shadow-inner">
                {mockCategories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/products/${category.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z\-]/g, '')}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-sm hover:bg-blue-100 hover:text-blue-700"
                  >
                    {category.name}
                  </Link>
                ))}
                <Link
                  href="/products"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-center rounded-md text-sm font-semibold bg-blue-100 text-blue-800 hover:bg-blue-200"
                >
                  View All Products
                </Link>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('profile')}
              className={`w-full flex justify-between items-center px-3 py-2 rounded-md ${
                pathname === '/profile' ? 'text-blue-600 bg-blue-50' : 'hover:bg-gray-100'
              }`}
            >
              Profile <FaAngleDown />
            </button>
            {isProfileDropdownOpen && (
              <div className="bg-gray-50 mt-2 rounded-md px-4 py-3 shadow-inner">
                <Link
                  href="/profile"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm hover:bg-blue-100 hover:text-blue-700"
                >
                  My Profile
                </Link>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-4">
            <div className="flex items-center bg-blue-100 rounded-xl px-4 py-2 shadow-sm space-x-3">
              <div className="flex items-center justify-center w-9 h-9 bg-white rounded-full shadow">
                <FaPhoneAlt className="text-blue-600 text-base" />
              </div>
              <span className="text-sm text-[#011F4B] font-medium">
                Call us at{' '}
                <a href="tel:9868210750" className="font-bold text-[#011F4B] hover:text-blue-700 transition">
                  9868210750
                </a>{' '}
                —{' '}
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
