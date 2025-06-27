"use client";

import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import toast from "react-hot-toast";

interface ModalPopupProps {
  isOpen: boolean;
  onClose: () => void;
  product: any;
}

const ModalPopup: React.FC<ModalPopupProps> = ({ isOpen, onClose, product }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    if (!name || !phone) {
      toast.error("Please enter name and phone number.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message, productName: product.name }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Inquiry sent successfully!");
        form.reset();
        onClose();
      } else {
        toast.error(data.message || "Failed to send inquiry.");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-2 md:px-4">
      <div className="w-full max-w-3xl md:rounded-2xl bg-white shadow-xl border border-gray-300 flex flex-col md:flex-row overflow-hidden animate-popupShow">
        {/* Product Info */}
        <div className="hidden md:block md:w-1/2 bg-gray-50 p-6 border-r">
          <Image
            src={product.image}
            alt={product.name}
            width={220}
            height={220}
            className="rounded shadow-sm mx-auto"
          />
          <div className="mt-4 text-center">
            <h3 className="text-base font-semibold text-gray-800">{product.name}</h3>
            <p className="text-sm text-red-600 font-semibold mt-1">
              ₹ {product.price} / {product.unit}
            </p>
            <ul className="text-xs text-gray-600 mt-2 space-y-1 text-left max-w-xs mx-auto">
              {product.details?.map((d: any, i: number) => (
                <li key={i}>
                  <strong>{d.label}:</strong> {d.value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 relative bg-white max-h-[90vh] overflow-y-auto">
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-red-600"
            onClick={onClose}
          >
            <FaTimes className="text-xl" />
          </button>

          <h2 className="text-lg font-semibold text-center mb-2 text-[#011F4B]">
            Connect with <span className="font-bold">Sat Pal & Sons</span>
          </h2>
          <p className="text-sm text-center text-gray-600 mb-6">
            Get product details instantly on your mobile
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Your Name</label>
              <input
                name="name"
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Mobile Number</label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <span className="px-3 py-2 bg-gray-100 border-r text-sm">+91</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  className="flex-grow px-3 py-2 outline-none text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Message</label>
              <textarea
                name="message"
                rows={3}
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center items-center bg-[#011F4B] hover:bg-[#022a6c] text-white py-3 rounded-lg text-sm font-semibold transition duration-300 ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Submit Now"
              )}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes popupShow {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-popupShow {
          animation: popupShow 0.35s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ModalPopup;
