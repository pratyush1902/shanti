'use client';

import React from 'react';
import { Calendar, PhoneCall, CheckCircle2, HeartPulse, Stethoscope, Clock } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const trustBadges = [
    'Experienced Doctors',
    'Dialysis Centre',
    'Pathology Lab',
    '24×7 Emergency',
  ];

  return (
    <section className="py-12 md:py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Subheadline, Buttons & Trust Badges */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1E88E5] text-xs font-semibold border border-blue-100">
              <span>Well-Maintained Neighborhood Healthcare</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight">
              Trusted Dialysis &amp; Diagnostic Care for Your Family
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-xl">
              Affordable healthcare with experienced doctors, modern diagnostic services, dialysis
              care, and compassionate support.
            </p>

            {/* Buttons: Book Appointment & Call Now */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                type="button"
                onClick={onOpenBooking}
                style={{ backgroundColor: '#1E88E5' }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-medium text-base hover:opacity-90 transition-opacity shadow-sm"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>

              <a
                href="tel:+917004007919"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#1F2937] font-medium text-base border border-gray-300 hover:border-[#1E88E5] hover:text-[#1E88E5] transition-all shadow-sm"
              >
                <PhoneCall className="w-5 h-5 text-[#1E88E5]" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Small Trust Badges */}
            <div className="pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {trustBadges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700"
                  >
                    <span
                      style={{ color: '#16A34A' }}
                      className="font-bold text-base leading-none"
                    >
                      ✓
                    </span>
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Welcoming neighborhood clinic image card */}
          <div className="lg:col-span-5">
            <div className="clinic-card overflow-hidden bg-white p-4 space-y-4">
              {/* Realistic neighborhood clinic visual */}
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 border border-blue-100/80 p-6 sm:p-7">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white text-[#1E88E5] text-xs font-semibold shadow-sm">
                      Neighborhood Centre
                    </span>
                    <span className="text-xs font-medium text-gray-600">Patna Facility</span>
                  </div>

                  <div className="py-4 space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[#1E88E5] text-white flex items-center justify-center font-bold">
                      <HeartPulse className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1F2937]">
                      Clean, Hygienic &amp; Welcoming Care
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Our facility is designed around patient comfort and safety, offering gentle
                      dialysis suites, timely diagnostic lab tests, and attentive nursing staff.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-blue-200/60 text-xs">
                    <div className="bg-white/80 p-2.5 rounded-lg">
                      <div className="text-gray-500">Dialysis Timings</div>
                      <div className="font-semibold text-[#1F2937]">6:00 AM – 9:00 PM</div>
                    </div>
                    <div className="bg-white/80 p-2.5 rounded-lg">
                      <div className="text-gray-500">Diagnostic Lab</div>
                      <div className="font-semibold text-[#16A34A]">Reports Same Day</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Card info */}
              <div className="flex items-center justify-between px-2 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-[#1E88E5]" />
                  <span>Experienced Doctors Available Daily</span>
                </div>
                <span className="font-medium text-[#16A34A]">Open 7 Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
