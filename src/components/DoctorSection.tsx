'use client';

import React from 'react';
import { Calendar, Stethoscope, User } from 'lucide-react';

interface DoctorSectionProps {
  onOpenBooking: () => void;
}

export default function DoctorSection({ onOpenBooking }: DoctorSectionProps) {
  const doctors = [
    {
      name: 'Dr. A. K. Sharma',
      qualification: 'MBBS, MD (General Medicine)',
      specialization: 'Senior Physician & Diabetologist',
      experience: '18 Years Experience',
      timing: 'Morning & Evening OPD',
    },
    {
      name: 'Dr. S. R. Verma',
      qualification: 'MBBS, DNB (Nephrology)',
      specialization: 'Visiting Dialysis Specialist',
      experience: '12 Years Experience',
      timing: 'Daily Dialysis Supervision',
    },
    {
      name: 'Dr. N. K. Mishra',
      qualification: 'MBBS, MD (Pathology)',
      specialization: 'Consultant Pathologist',
      experience: '15 Years Experience',
      timing: 'Lab Quality & Diagnostics',
    },
  ];

  return (
    <section id="doctors" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1E88E5] text-xs font-semibold">
            <span>Experienced Team</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937]">
            Meet Our Dedicated Medical Doctors
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Caring practitioners focused on thorough checkups and proper treatment advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="clinic-card p-6 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Photo Placeholder / Medical Avatar */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-100 text-[#1E88E5] flex items-center justify-center shrink-0">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1F2937]">{doc.name}</h3>
                    <div className="text-xs font-semibold text-[#1E88E5] mt-0.5">
                      {doc.qualification}
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Specialization:</span>
                    <span className="font-semibold text-[#1F2937]">{doc.specialization}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Experience:</span>
                    <span className="font-semibold text-[#16A34A]">{doc.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">OPD Availability:</span>
                    <span className="font-medium text-gray-700">{doc.timing}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  style={{ backgroundColor: '#1E88E5' }}
                  className="w-full py-3 rounded-xl text-white font-medium text-xs hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
