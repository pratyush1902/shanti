'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What are the working hours of Shanti Diagnostic & Nursing Home?',
      answer:
        'Our Dialysis Centre and Diagnostic Lab are open daily from 6:00 AM to 9:00 PM. Emergency care and nursing assistance are available 24×7.',
    },
    {
      question: 'Do I need a prior appointment for dialysis or blood tests?',
      answer:
        'For regular dialysis sessions, prior booking is recommended to secure your preferred time slot. Routine pathology blood tests can be done on a walk-in basis.',
    },
    {
      question: 'How soon can I get my pathology diagnostic test reports?',
      answer:
        'Most routine diagnostic reports (blood sugar, KFT, CBC) are ready within a few hours and sent directly to your phone via WhatsApp or SMS.',
    },
    {
      question: 'Are your doctors available every day?',
      answer:
        'Yes, we have experienced doctors available for morning and evening OPD consultations, as well as daily supervision of all dialysis sessions.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1E88E5] text-xs font-semibold">
            <span>Simple FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="clinic-card overflow-hidden bg-[#F8FAFC]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#1F2937]"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      isOpen ? 'rotate-180 text-[#1E88E5]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-200/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
