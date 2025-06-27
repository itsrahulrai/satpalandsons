'use client';

import React, { useState } from 'react';
import TopBar from '../../components/TopBar';
import MainNavbar from '../../components/MainNavbar';
import Breadcrumb from '../../components/Breadcrumb';
import Footer from '../../components/Footer';

import ProfileSidebar from './ProfileSidebar';
import ProfileInfo from './ProfileInfo';
import TestimonialContent from './TestimonialContent';
import RetailerEnquiryFormContent from './RetailerEnquiryFormContent';
import DownloadBrochureContent from './DownloadBrochureContent';

export default function ProfilePageClient() {
  const [activeSection, setActiveSection] = useState('profile');

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileInfo />;
      case 'testimonials':
        return <TestimonialContent />;
      case 'retailer-enquiry':
        return <RetailerEnquiryFormContent />;
      case 'download-brochure':
        return <DownloadBrochureContent />;
      default:
        return <ProfileInfo />;
    }
  };

  return (
    <>
      <TopBar />
      <MainNavbar />
      <Breadcrumb />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col md:flex-row gap-8">
        <ProfileSidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <div className="flex-1 min-h-[500px]">{renderContent()}</div>
      </div>

      <Footer />
    </>
  );
}
