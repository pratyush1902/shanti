'use client';

import React from 'react';
import { Heart, UserCheck, ShieldCheck } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Short Introduction */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1E88E5] text-xs font-semibold">
              <span>About Shanti</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937]">
              Patient-First Healthcare for Local Families
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Shanti Diagnostic &amp; Nursing Home is committed to providing reliable, affordable
              healthcare with a patient-first approach. From dialysis services to diagnostics and
              emergency care, we aim to serve every patient with compassion and professionalism.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-200">
                <div className="font-semibold text-sm text-[#1F2937]">Compassionate Care</div>
                <div className="text-xs text-gray-600 mt-1">Dignified, attentive nursing support</div>
              </div>
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-200">
                <div className="font-semibold text-sm text-[#1F2937]">Clean &amp; Hygienic</div>
                <div className="text-xs text-gray-600 mt-1">Strict daily sanitation &amp; safety</div>
              </div>
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-200">
                <div className="font-semibold text-sm text-[#1F2937]">Affordable Rates</div>
                <div className="text-xs text-gray-600 mt-1">Transparent pricing for families</div>
              </div>
            </div>
          </div>

          {/* Right Column: Reception / Staff clinic image card */}
          <div className="lg:col-span-5">
            <div className="clinic-card p-5 bg-[#F8FAFC] space-y-4">
              <div className="rounded-xl overflow-hidden bg-white border border-gray-200 p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1E88E5] flex items-center justify-center font-bold">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#1F2937]">Welcoming Reception &amp; Staff</div>
                    <div className="text-xs text-gray-500">Dedicated assistance from arrival</div>
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed">
                  Our reception and nursing team assist patients with appointment scheduling, lab report
                  collection, and doctor consultations in a calm, family-friendly environment.
                </p>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-medium text-gray-600">
                  <span>Help Desk Available Daily</span>
                  <span style={{ color: '#16A34A' }}>8:00 AM – 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
