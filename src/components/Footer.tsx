'use client';

import React from 'react';
import { MapPin, PhoneCall, Clock, Siren } from 'lucide-react';

export default function Footer() {
  const schemaOrgData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Shanti Diagnostic & Nursing Home',
    description:
      'Neighborhood healthcare facility providing reliable dialysis, diagnostic laboratory testing, pathology, and OPD consultation.',
    telephone: '+917004007919',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Boring Road / Kankarbagh Main Road',
      addressLocality: 'Patna',
      addressRegion: 'Bihar',
      postalCode: '800001',
      addressCountry: 'IN',
    },
    openingHours: 'Mo-Su 06:00-21:00',
    medicalSpecialty: ['RenalDialysis', 'Pathology', 'GeneralPractice'],
  };

  return (
    <footer className="bg-white border-t border-gray-200 pt-14 pb-10 text-gray-700">
      {/* Schema.org JSON-LD Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
      />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-200">
          {/* Col 1: Brand & Intro */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.jpg"
                alt="SMA Lakhisarai Logo"
                className="w-10 h-10 rounded-full object-cover shadow-sm border border-gray-200 shrink-0"
              />
              <span className="font-bold text-[#1F2937] text-base">
                Shanti Diagnostic &amp; Nursing Home
              </span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              A clean, well-maintained neighborhood diagnostic and dialysis centre serving local
              families with care and professionalism.
            </p>
          </div>

          {/* Col 2: Hospital Address & Phone */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-[#1F2937]">Contact Details</h4>
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#1E88E5] shrink-0 mt-0.5" />
                <span>Main Road, Near Crossing, Patna, Bihar 800001</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#1E88E5] shrink-0" />
                <a href="tel:+917004007919" className="hover:text-[#1E88E5]">
                  Phone: +91 70040 07919
                </a>
              </div>
              <div className="flex items-center gap-2 font-semibold text-rose-600">
                <Siren className="w-4 h-4 shrink-0" />
                <a href="tel:+917004007919">Emergency Contact: 70040 07919 (24×7)</a>
              </div>
            </div>
          </div>

          {/* Col 3: Working Hours */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-[#1F2937]">Working Hours</h4>
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Dialysis &amp; Lab: 6:00 AM – 9:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>OPD Consultations: 9:00 AM – 8:00 PM</span>
              </div>
              <div className="flex items-center gap-2 font-medium text-gray-800">
                <span>Open All 7 Days of the Week</span>
              </div>
            </div>
          </div>

          {/* Col 4: Google Maps Embed placeholder */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-[#1F2937]">Locate Centre</h4>
            <div className="rounded-xl overflow-hidden border border-gray-200 h-28 bg-gray-100 relative">
              <iframe
                title="Shanti Diagnostic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86107246534!2d85.06064119335936!3d25.608175570889154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5844f0bb6903%3A0x57ad3fed1bbae325!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Shanti Diagnostic &amp; Nursing Home. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-[#1E88E5]">
              Back to Top
            </a>
            <span>•</span>
            <span>Neighborhood Healthcare</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
