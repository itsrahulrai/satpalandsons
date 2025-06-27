'use client';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const InputField = ({ id, name, label, type = 'text', value, onChange, required = false, placeholder = '', optional = false }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
      {optional && <span className="text-gray-500 text-xs ml-1">(Optional)</span>}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary-blue sm:text-sm"
    />
  </div>
);

const TextareaField = ({ id, name, label, value, onChange, placeholder = '', rows = 5 }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary-blue sm:text-sm resize-y"
    />
  </div>
);

export default function RetailerEnquiryFormContent() {
  const [formData, setFormData] = useState({
    retailerName: '', phone: '', storeName: '', email: '', address: '', message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.retailerName || !formData.phone) {
      toast.error('Name and Phone are required.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/retailer-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(data.message || 'Inquiry sent successfully!');
        setFormData({ retailerName: '', phone: '', storeName: '', email: '', address: '', message: '' });
      } else {
        toast.error(data.error || 'Failed to send inquiry.');
      }
    } catch {
      toast.error('Unexpected error. Try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-[#011F4B] mb-6">Retailer Enquiry Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <InputField id="retailerName" name="retailerName" label="Your Name" value={formData.retailerName} onChange={handleChange} required />
          <InputField id="phone" name="phone" label="Phone" value={formData.phone} onChange={handleChange} required type="tel" />
        </div>
        <InputField id="storeName" name="storeName" label="Store/Company Name" value={formData.storeName} onChange={handleChange} optional />
        <InputField id="email" name="email" label="Email" value={formData.email} onChange={handleChange} type="email" optional />
        <TextareaField id="address" name="address" label="Address" value={formData.address} onChange={handleChange} placeholder="Your address..." />
        <TextareaField id="message" name="message" label="Your Message" value={formData.message} onChange={handleChange} placeholder="Message or inquiry..." />
        <button
          type="submit"
          className={`w-full py-3 px-4 rounded-md text-white font-bold text-lg bg-[#011F4B] shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue ${
            submitting ? 'opacity-75 cursor-not-allowed' : ''
          }`}
          disabled={submitting}
        >
          {submitting ? 'Sending...' : 'Send Inquiry'}
        </button>
      </form>
    </div>
  );
}
    