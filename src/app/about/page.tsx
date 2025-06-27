
import React from 'react';
import TopBar from '../../components/TopBar';
import MainNavbar from '../../components/MainNavbar';
import Breadcrumb from '../../components/Breadcrumb';
import AboutCompany from '../../components/AboutCompany';
import Footer from '../../components/Footer';
import { FaBullseye, FaEye } from 'react-icons/fa';

export const metadata = {
  title: 'About Us | SATPAL AND SONS',
  description: 'Learn about our mission, vision, and commitment to quality steel products.',
};

export default function AboutContent() {
  return (
    <>
      <TopBar />
      <MainNavbar />
      <Breadcrumb />
      <AboutCompany />

      <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        {/* Mission */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
          <div className="flex items-center gap-3 mb-4">
            <FaBullseye className="text-blue-600 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
          </div>
          <p className="text-gray-600 text-[17px] leading-relaxed">
            To deliver superior quality steel products and services, fostering sustainable growth
            for our clients and stakeholders, while maintaining the highest ethical standards.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
          <div className="flex items-center gap-3 mb-4">
            <FaEye className="text-green-600 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
          </div>
          <p className="text-gray-600 text-[17px] leading-relaxed">
            To be recognized as a leader in the steel industry, renowned for our reliability,
            innovation, and comprehensive range of solutions, contributing to the development
            of infrastructure and industries across the nation.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
