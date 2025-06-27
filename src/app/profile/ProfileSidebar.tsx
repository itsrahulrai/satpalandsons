// src/app/profile/ProfileSidebar.tsx
'use client';

import React from 'react';
import {
  FaUser,           // For Profile
  FaCommentDots,    // For Testimonials
  FaStore,          // For Retailer Enquiry Form
  FaDownload,       // For Download Brochure
} from 'react-icons/fa'; // Import necessary icons from react-icons/fa

interface ProfileSidebarProps {
  activeSection: string; // The currently active section ID
  setActiveSection: (section: string) => void; // Callback to change active section
}

export default function ProfileSidebar({ activeSection, setActiveSection }: ProfileSidebarProps) {
  const sidebarItems = [
    { id: 'profile', label: 'Profile', icon: <FaUser className="w-5 h-5" /> },
    { id: 'testimonials', label: 'Testimonials', icon: <FaCommentDots className="w-5 h-5" /> },
    { id: 'retailer-enquiry', label: 'Retailer Enquiry Form', icon: <FaStore className="w-5 h-5" /> },
    { id: 'download-brochure', label: 'Download Brochure', icon: <FaDownload className="w-5 h-5" /> },
  ];

  return (
    <div className="w-full md:w-64 bg-gray-50 rounded-lg shadow-lg p-4 md:p-6 sticky top-24 md:top-32 self-start border border-gray-100"> {/* Added a subtle border */}
      <nav>
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-md font-medium transition-all duration-200 flex items-center gap-3
                  ${activeSection === item.id
                    ? 'bg-[#1A3C6B] text-white shadow-md transform scale-[1.02] translate-x-0.5' // Active state with subtle scale/translate
                    : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900' // Inactive state
                  }`}
              >
                {item.icon} {/* Render the icon */}
                <span className="flex-1">{item.label}</span> {/* Use flex-1 for label to push other content */}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}