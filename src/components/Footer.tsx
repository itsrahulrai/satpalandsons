import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0C234A] text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-x-20 text-base md:text-[16px]">
        {/* Company Info */}
        <div>
          <Link
            href="/"
            className="text-3xl md:text-3xl font-extrabold text-white tracking-wide"
          >
            SATPAL & SONS
          </Link>
          <p className="text-gray-300 text-[15px] leading-relaxed mt-4 text-justify">
            Satpal and Sons is a premier company in India, established in 1954
            in iron and steel. We deal in color coated profile sheets, coils,
            LED lights, fancy lighting, bathroom vanities, sanitary ware, and
            air fryers.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-5 mt-6 text-xl text-white">
            <FaFacebookF className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6 border-b border-gray-600 pb-2">
            Useful Links
          </h3>
          <ul className="space-y-4 text-white font-semibold">
            <li>
              <Link href="/" className="transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition-colors duration-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors duration-200">
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
              >
                Download Brochure
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6 border-b border-gray-600 pb-2">
            Products
          </h3>
          <ul className="space-y-4 text-white font-semibold">
            <li>
              <Link
                href="/products/roofing-sheets"
                className="transition-colors duration-200"
              >
                Roofing Sheets
              </Link>
            </li>
            <li>
              <Link
                href="/products/profile-sheets"
                className="transition-colors duration-200"
              >
                Profile Sheets
              </Link>
            </li>
            <li>
              <Link
                href="/products/tmt-bars"
                className="transition-colors duration-200"
              >
                TMT Bars
              </Link>
            </li>
            <li>
              <Link
                href="/products/ironrods"
                className="transition-colors duration-200"
              >
                Iron Rods
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6 border-b border-gray-600 pb-2">
            Contact
          </h3>
          <div className="space-y-4 text-white font-semibold text-sm leading-relaxed">
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-orange-400" />
              Sat Pal & Sons,
              <br />
              Y252, 2nd Mezzanine Floor, Back Side Loha Mandi,
              <br />
              Naraina, New Delhi - 110028, Delhi, India
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-orange-400" />
              <a href="mailto:info@satpalandsons.com" className="transition">
                info@satpalandsons.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-400" />
              <a href="tel:+919868210750" className="transition">
                +91 98682 10750
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-12 border-t border-gray-600 pt-6 text-center text-[15px] text-gray-300 font-medium tracking-wide">
        <p>
          © 2025 <strong>Satpal and Sons</strong>. All Rights Reserved. | Designed by{" "}
          <a
            href="https://hoverbusinessservices.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-400 transition font-semibold"
          >
            Hover Business Services LLP
          </a>
        </p>
      </div>
    </footer>
  );
}
