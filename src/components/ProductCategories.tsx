// src/components/ProductCategories.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

interface Category {
  id: number;
  name: string;
  image: string;
}

interface ProductCategoriesProps {
  categories: Category[];
}

// Helper to convert name to slug
function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/\-+/g, '-');
}

export default function ProductCategories({ categories }: ProductCategoriesProps) {
  return (
    <div className="max-w-screen-xl mx-auto py-10 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/products/${slugify(category.name)}`}
            className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between
                       transition-all duration-300 ease-in-out
                       group cursor-pointer
                       border border-gray-200
                       hover:shadow-xl hover:border-transparent
                       hover:bg-gradient-to-r hover:from-[#1A3C6B] hover:via-[#0F2D54] hover:to-[#2C3E50]
                       hover:text-white"
          >
            <div className="w-20 h-20 flex-shrink-0 relative">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover rounded-full border border-gray-300"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 flex-1 text-center group-hover:text-white transition-colors duration-300">
              {category.name}
            </h3>
            <div className="w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0
                            bg-[#1A3C6B] text-white group-hover:bg-white group-hover:text-[#1A3C6B]
                            transition-all duration-300 ease-in-out">
              <FaArrowRight size={16} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
