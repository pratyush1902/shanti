'use client';

import React from 'react';
import { Camera, CheckCircle2 } from 'lucide-react';

export default function GallerySection() {
  const galleryItems = [
    {
      title: 'Reception Desk',
      description: 'Clean entrance and helpful registration counter.',
      tag: 'Reception',
    },
    {
      title: 'Dialysis Room',
      description: 'Hygienic dialysis bay with RO water supply.',
      tag: 'Dialysis Room',
    },
    {
      title: 'Diagnostic Laboratory',
      description: 'Automated blood testing and pathology setup.',
      tag: 'Laboratory',
    },
    {
      title: 'Patient Waiting Area',
      description: 'Comfortable seating for families and attendants.',
      tag: 'Waiting Area',
    },
    {
      title: 'Doctors Room',
      description: 'Private OPD consultation room for checkups.',
      tag: 'Doctors',
    },
    {
      title: 'Medical Equipment',
      description: 'Well-maintained diagnostic and monitoring machines.',
      tag: 'Medical Equipment',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1E88E5] text-xs font-semibold">
            <Camera className="w-3.5 h-3.5" />
            <span>Facility Gallery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937]">
            Inside Our Well-Maintained Centre
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            A clean, orderly neighborhood medical facility designed for everyday family healthcare.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="clinic-card overflow-hidden bg-white p-4 space-y-3"
            >
              <div className="h-44 rounded-xl bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100/60 border border-gray-200 p-4 flex flex-col justify-between">
                <span className="self-start text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white text-[#1E88E5] shadow-sm">
                  {item.tag}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>Sanitized &amp; Clean</span>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-sm text-[#1F2937]">{item.title}</h3>
                <p className="text-xs text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
