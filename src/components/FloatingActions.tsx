'use client';

import React from 'react';
import { PhoneCall, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello Shanti Diagnostic & Nursing Home, I would like to inquire about appointment and tests.'
    );
    window.open(`https://wa.me/917004007919?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button (bottom right on desktop & mobile) */}
      <button
        type="button"
        onClick={handleWhatsApp}
        style={{ backgroundColor: '#16A34A' }}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 p-4 rounded-full text-white shadow-lg hover:opacity-90 transition-all flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Sticky Bottom Call Bar on Mobile Only */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-3 shadow-lg">
        <a
          href="tel:+917004007919"
          style={{ backgroundColor: '#1E88E5' }}
          className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-sm"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Call Centre Now: 70040 07919</span>
        </a>
      </div>
    </>
  );
}
