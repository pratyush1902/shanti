'use client';

import React from 'react';
import {
  Calendar,
  PhoneCall,
  CheckCircle2,
  HeartPulse,
  Stethoscope,
  Clock,
  ShieldCheck,
  MapPin,
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const trustBadges = [
    'Experienced Doctors',
    'Dialysis Centre',
    'Pathology Lab',
    '24×7 Emergency Care',
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/40 via-[#F8FAFC] to-[#F8FAFC] border-b border-gray-200/60">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Headline, Subheadline, Action Buttons & Flex Trust Badges */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/70 text-[#1E88E5] text-xs sm:text-sm font-semibold border border-blue-200/60">
              <ShieldCheck className="w-4 h-4 text-[#1E88E5]" />
              <span>Well-Maintained Neighborhood Healthcare</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2937] leading-[1.18] tracking-tight">
              Trusted Dialysis &amp; Diagnostic Care for Your Family
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-xl">
              Affordable healthcare with experienced doctors, modern diagnostic services, dialysis
              care, and compassionate support.
            </p>

            {/* Buttons: Book Appointment & Call Now */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                style={{ backgroundColor: '#1E88E5' }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-white font-semibold text-base hover:opacity-95 transition-all shadow-md shadow-blue-500/15"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>

              <a
                href="tel:+917004007919"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white text-[#1F2937] font-semibold text-base border border-gray-300 hover:border-[#1E88E5] hover:text-[#1E88E5] transition-all shadow-sm"
              >
                <PhoneCall className="w-5 h-5 text-[#1E88E5]" />
                <span>Call: 70040 07919</span>
              </a>
            </div>

            {/* Trust Badges (Flex wrap cleanly so text never wraps awkwardly) */}
            <div className="pt-6 border-t border-gray-200/80">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {trustBadges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 bg-white px-3.5 py-1.5 rounded-lg border border-gray-200/70 shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Polished Neighborhood Centre Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 sm:p-8 space-y-6">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1E88E5] flex items-center justify-center font-bold">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F2937] text-base">Shanti Medical Centre</h3>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#1E88E5]" />
                      <span>Lakhisarai / Patna</span>
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-green-50 text-[#16A34A] text-xs font-semibold border border-green-200/60">
                  Open Today
                </span>
              </div>

              {/* Core Feature Text */}
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-[#1F2937]">
                  Clean, Hygienic &amp; Welcoming Care
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our neighborhood facility is designed around patient comfort and safety, offering
                  gentle dialysis suites, rapid pathology reports, and attentive nursing staff.
                </p>
              </div>

              {/* Timing & Lab Status Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-gray-200/80">
                  <div className="text-xs text-gray-500 font-medium">Dialysis Bay</div>
                  <div className="text-sm font-bold text-[#1F2937] mt-0.5">6:00 AM – 9:00 PM</div>
                </div>
                <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-gray-200/80">
                  <div className="text-xs text-gray-500 font-medium">Diagnostic Lab</div>
                  <div className="text-sm font-bold text-[#16A34A] mt-0.5">Reports Same Day</div>
                </div>
              </div>

              {/* Bottom Assurance Bar */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-medium text-gray-600">
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-[#1E88E5]" />
                  <span>Experienced Doctors Available</span>
                </div>
                <span className="font-semibold text-[#16A34A]">All 7 Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
