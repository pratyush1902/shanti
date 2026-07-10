'use client';

import React from 'react';
import { UserCheck, BadgeIndianRupee, Sparkles, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <UserCheck className="w-6 h-6 text-[#1E88E5]" />,
      title: 'Experienced Medical Staff',
      description:
        'Qualified doctors and skilled nurses committed to providing careful and friendly patient attention.',
    },
    {
      icon: <BadgeIndianRupee className="w-6 h-6 text-[#16A34A]" />,
      title: 'Affordable Treatment',
      description:
        'Fair, transparent pricing for routine consultations, lab tests, and dialysis sessions without hidden charges.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#1E88E5]" />,
      title: 'Clean & Hygienic Facility',
      description:
        'Strict daily sanitization of patient areas, procedure tables, and dialysis equipment for family safety.',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#16A34A]" />,
      title: 'Fast Diagnostic Reports',
      description:
        'Prompt pathology test reporting so doctors can begin right treatments without delay.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1E88E5] text-xs font-semibold">
            <span>Why Choose Shanti</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937]">
            Trusted by Local Families Every Day
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="clinic-card p-6 bg-[#F8FAFC] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-[#1F2937]">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
