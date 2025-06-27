  import React from "react";
  import Link from "next/link";
  import {
    FaMapMarkerAlt,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaInstagram,
  } from "react-icons/fa";

  export default function TopBar() {
    return (
      <div className="bg-white py-1.5 px-4 text-gray-800 shadow-sm border-b hidden md:block">

        <div className="container mx-auto flex justify-between items-center">
          {/* Left: Address */}
          <div className="flex items-center space-x-2 text-sm font-semibold text-[#011F4B]">
            <FaMapMarkerAlt className="text-red-500" />
            <span>
              Y-252, 2nd Mezzanine Floor, Back Side Loha Mandi, Naraina, New
              Delhi-28
            </span>
          </div>

          {/* Center: Phone Contact */}
          {/* <div className="flex items-center bg-blue-100 rounded-xl px-4 py-2 shadow-sm space-x-3">
            <div className="flex items-center justify-center w-9 h-9 bg-white rounded-full shadow">
              <FaPhoneAlt className="text-blue-600 text-base" />
            </div>
            <span className="text-sm text-[#011F4B] font-medium text-current">
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
          </div> */}

          {/* Right: Social Media Icons */}
          <div className="flex items-center space-x-2">
            {[
              {
                icon: <FaFacebookF size={14} />,
                href: "#",
                hover: "hover:bg-[#1877F2]",
              },
              {
                icon: <FaTwitter size={14} />,
                href: "#",
                hover: "hover:bg-[#1DA1F2]",
              },
              {
                icon: <FaInstagram size={14} />,
                href: "#",
                hover: "hover:bg-[#E1306C]",
              },
              {
                icon: <FaLinkedinIn size={14} />,
                href: "#",
                hover: "hover:bg-[#0077B5]",
              },
              {
                icon: <FaYoutube size={14} />,
                href: "#",
                hover: "hover:bg-[#FF0000]",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`w-7 h-7 flex items-center justify-center rounded-full bg-[#011F4B] text-white transition ${item.hover}`}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
