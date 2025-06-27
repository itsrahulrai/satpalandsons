'use client';

import React, { useRef, useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const form = formRef.current;
    if (!form) return;

    const formData = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message || 'Message sent successfully!');
        form.reset(); // Clear form
      } else {
        toast.error(data.error || 'Failed to send message.');
      }
    } catch {
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">Name <span className="text-red-500">*</span></label>
        <input
          name="name"
          type="text"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">Phone</label>
        <input
          name="phone"
          type="tel"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
        <input
          name="email"
          type="email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">Subject</label>
        <input
          name="subject"
          type="text"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">Message</label>
        <textarea
          name="message"
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm resize-y"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          disabled={submitting}
          className={`w-full py-3 px-4 rounded-md text-white font-semibold bg-[#1A3C6B] shadow-sm hover:bg-[#174076] transition-colors duration-200 ${
            submitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {submitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
