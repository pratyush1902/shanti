'use client';

import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = [
    {
      name: 'Ramesh Kumar',
      locality: 'Kankarbagh, Patna',
      comment:
        'Very clean dialysis facility and supportive nursing staff. The charges are reasonable and doctors are always helpful.',
    },
    {
      name: 'Meena Devi',
      locality: 'Boring Road, Patna',
      comment:
        'We got my mother’s pathology blood test reports on time. Reliable neighborhood diagnostic centre.',
    },
    {
      name: 'Suresh Prasad',
      locality: 'Rajendra Nagar, Patna',
      comment:
        'Good OPD consultation with Dr. Sharma. The clinic staff is polite and there was no unnecessary waiting.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1E88E5] text-xs font-semibold">
            <span>Patient Testimonials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937]">
            What Families Say About Our Care
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="clinic-card p-6 bg-[#F8FAFC] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Google Review Style Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-gray-200/80 flex items-center justify-between">
                <div>
                  <div className="font-bold text-xs text-[#1F2937] flex items-center gap-1">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                  </div>
                  <div className="text-[11px] text-gray-500">{item.locality}</div>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-[#1E88E5]">
                  Google Review
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
