'use client';

import React, { useState } from "react";
import TopBar from "../../components/TopBar";
import MainNavbar from "../../components/MainNavbar";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import ModalPopup from "./ModalPopup";
import Image from "next/image";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLayerGroup,
  FaWarehouse,
  FaWind,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { ProductData } from "../../lib/mockData";

const sidebarData = [
  {
    title: "GI Sheet (3)",
    icon: <FaLayerGroup />,
    items: ["GI Sheet"],
  },
  {
    title: "Roofing Sheet (2)",
    icon: <FaWarehouse />,
    items: ["GI Sheet", "GI Sheet"],
  },
  {
    title: "Other Products (14)",
    icon: <FaWind />,
    items: [
      "Colour Coated Roofing Sheet",
      "Color Coated Profile Sheet",
      "Color Coated Profile Coil",
      "MS Sheet",
      "Iron Rods",
      "TMT Bars",
      "Polycarbonate Sheet",
      "Cr Steel",
    ],
  },
];

export default function ProductPageClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredProducts = selectedCategory
    ? ProductData.filter((product) =>
        product.name.toLowerCase().includes(selectedCategory.toLowerCase())
      )
    : ProductData;

  return (
    <>
      <TopBar />
      <MainNavbar />
      <Breadcrumb />

      <div className="container mx-auto px-4 pt-6">
        <h1 className="text-2xl font-bold text-[#011F4B] mb-2">
          {selectedCategory ? `Products: ${selectedCategory}` : "All Products"}
        </h1>
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          We are Leading Supplier and Trader from New Delhi. Our product range
          includes Iron & Steel Sheets such as
          <strong> GP Sheets</strong>, <strong> GC Sheets</strong>,{" "}
          <strong> Color Coated Roofing Sheets</strong>,
          <strong> Color Coated Sheets</strong> and many more items.
        </p>
      </div>

      <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="space-y-3 col-span-1">
          {sidebarData.map((category, index) => (
            <div key={index} className="bg-red-50 rounded shadow-sm">
              <button
                className="w-full flex justify-between items-center px-4 py-2 text-sm font-medium text-[#011F4B] hover:bg-[#011F4B] hover:text-white rounded transition"
                onClick={() => toggleIndex(index)}
              >
                <span className="flex items-center gap-2">
                  {category.icon} {category.title}
                </span>
                <span className="ml-2">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {openIndex === index && category.items.length > 0 && (
                <div className="pl-4 pr-2 py-2 text-sm space-y-1">
                  {category.items.map((item, subIndex) => (
                    <div
                      key={subIndex}
                      className="text-gray-700 hover:text-[#011F4B] border-b border-gray-200 pb-1 cursor-pointer"
                      onClick={() => setSelectedCategory(item)}
                    >
                      {item}
                    </div>
                  ))}
                  <div
                    className="text-red-600 hover:underline cursor-pointer font-medium"
                    onClick={() => setSelectedCategory(null)}
                  >
                    View All
                  </div>
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* Product Cards */}
        <div className="col-span-1 md:col-span-3 space-y-6">
          {filteredProducts.length === 0 ? (
            <p className="text-gray-600">No products found.</p>
          ) : (
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-[#011F4B]">
                    {product.name}
                  </h2>
                  <button
                    className="flex items-center gap-2 text-[#011F4B] border border-[#011F4B] px-4 py-2 rounded-lg hover:bg-[#011F4B] hover:text-white text-sm font-medium transition duration-300 shadow-sm"
                    onClick={() => {
                      setSelectedProduct(product);
                      setIsModalOpen(true);
                    }}
                  >
                    <FaPhoneAlt className="text-base" />
                    Request Callback
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col items-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="rounded-lg object-cover"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="text-xl font-semibold text-[#011F4B]">
                      ₹ {product.price} / {product.unit}{" "}
                      <span
                        className="text-sm text-red-600 cursor-pointer underline"
                        onClick={() => {
                          setSelectedProduct(product);
                          setIsModalOpen(true);
                        }}
                      >
                        Get Latest Price
                      </span>
                    </div>

                    <ul className="text-sm text-gray-800 space-y-1">
                      {product.details.map((detail, i) => (
                        <li key={i}>
                          <strong>{detail.label}:</strong> {detail.value}
                        </li>
                      ))}
                    </ul>

                    <p className="text-gray-700 text-sm">
                      We are the leading manufacturer and supplier of{" "}
                      <strong>{product.name}</strong> with high-quality
                      material used as per industry standards.
                    </p>

                    <button
                      className="mt-3 bg-[#011F4B] hover:bg-[#022a6c] text-white px-6 py-2 rounded flex items-center gap-2 text-sm font-medium transition"
                      onClick={() => {
                        setSelectedProduct(product);
                        setIsModalOpen(true);
                      }}
                    >
                      <FaEnvelope className="text-base" />
                      Yes! I am interested
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal */}
      <ModalPopup
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />

      <Footer />
    </>
  );
}
