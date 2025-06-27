"use client";

import { useState } from "react";
import { ProductData } from "../../../lib/mockData";
import TopBar from "../../../components/TopBar";
import MainNavbar from "../../../components/MainNavbar";
import Breadcrumb from "../../../components/Breadcrumb";
import Footer from "../../../components/Footer";
import ModalPopup from "../ModalPopup";
import Image from "next/image";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function FilteredProductPageClient({ slug }: { slug: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categoryName = decodeURIComponent(slug).replace(/-/g, " ").toLowerCase();

  const filteredProducts = ProductData.filter((product) =>
    product.name.toLowerCase().includes(categoryName)
  );

  return (
    <>
      <TopBar />
      <MainNavbar />
      <Breadcrumb />

      <div className="container mx-auto px-4 pt-8">
        <h1 className="text-3xl font-extrabold text-[#011F4B] mb-2 capitalize">
          {categoryName}
        </h1>
        <p className="text-gray-600 text-base mb-6">
          Explore our premium quality products under{" "}
          <strong>{categoryName}</strong>.
        </p>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-600">No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg p-6 md:flex md:items-start md:gap-8"
            >
              <div className="flex-shrink-0 w-full md:w-1/2 mb-4 md:mb-0">
                <div className="relative w-full h-64 md:h-80">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>

              <div className="flex-grow">
                <h2 className="text-2xl font-bold text-[#011F4B] mb-3">
                  {product.name}
                </h2>

                <div className="text-xl text-[#011F4B] font-semibold mb-2">
                  ₹ {product.price} / {product.unit}
                </div>

                <ul className="space-y-1 text-sm text-gray-700 mb-3">
                  {product.details.map((detail, idx) => (
                    <li key={idx}>
                      <strong>{detail.label}:</strong> {detail.value}
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-gray-600 mb-4">
                  We offer top-grade <strong>{product.name}</strong> known for
                  durability and performance across various industrial
                  applications.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className="flex items-center justify-center gap-2 border border-[#011F4B] text-[#011F4B] hover:bg-[#011F4B] hover:text-white transition px-4 py-2 rounded-lg text-sm font-medium"
                    onClick={() => {
                      setSelectedProduct(product);
                      setIsModalOpen(true);
                    }}
                  >
                    <FaPhoneAlt />
                    Request Callback
                  </button>

                  <button
                    className="flex items-center justify-center gap-2 bg-[#011F4B] hover:bg-[#022a6c] text-white transition px-4 py-2 rounded-lg text-sm font-medium"
                    onClick={() => {
                      setSelectedProduct(product);
                      setIsModalOpen(true);
                    }}
                  >
                    <FaEnvelope />
                    Yes! I am Interested
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <ModalPopup
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />

      <Footer />
    </>
  );
}
