"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ModalPopup from "../app/products/ModalPopup";

interface ProductDetail {
  label: string;
  value: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  image: string;
  details: ProductDetail[];
}

interface FeaturedProductsProps {
  products: Product[];
}

// Converts "Color Coated Coil" → "color-coated-coil"
const slugify = (name: string) =>
  name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="w-full mx-auto py-12">
      <div className="bg-[#F3F8FF] p-10 shadow-lg mb-10">
        <h2 className="text-4xl font-extrabold font-serif text-dark mb-4 tracking-tight">
          Our Products
        </h2>

        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 hover:border-transparent"
              >
                {/* Image with dynamic route */}
                <Link href={`/products/${slugify(product.name)}`}>
                  <div className="w-full h-56 relative overflow-hidden cursor-pointer">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="p-6 flex flex-col justify-between flex-grow bg-white">
                  <div>
                    {/* Name with dynamic route */}
                    <Link href={`/products/${slugify(product.name)}`}>
                      <h3 className="text-xl font-bold text-[#1A3C6B] mb-1 group-hover:text-[#0D1F3F] transition-colors duration-300 cursor-pointer">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="text-lg font-semibold text-red-600 mb-3">
                      ₹ {product.price}
                      <span className="text-sm font-normal text-gray-600">
                        /{product.unit}
                      </span>
                    </p>

                    <ul className="space-y-1 text-sm text-gray-700">
                      {product.details.map((detail, idx) => (
                        <li key={idx}>
                          <strong>{detail.label}:</strong> {detail.value}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className="mt-4 w-full bg-[#1A3C6B] text-white py-2 rounded-lg font-medium hover:bg-[#163153] transition duration-300"
                    onClick={() => handleOpenModal(product)}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      <ModalPopup
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </div>
  );
}
