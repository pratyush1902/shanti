'use client';

import React from 'react';
import {
  Activity,
  FlaskConical,
  FileText,
  Siren,
  Stethoscope,
  Bed,
  HeartHandshake,
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Activity className="w-6 h-6 text-[#1E88E5]" />,
      title: 'Dialysis Centre',
      description:
        'Hygienic hemodialysis sessions supervised by trained nurses and doctors with clean RO water systems.',
    },
    {
      icon: <FlaskConical className="w-6 h-6 text-[#1E88E5]" />,
      title: 'Diagnostic Laboratory',
      description:
        'Accurate blood tests, biochemistry, and routine diagnostic profiles for timely health tracking.',
    },
    {
      icon: <FileText className="w-6 h-6 text-[#16A34A]" />,
      title: 'Pathology Tests',
      description:
        'Complete kidney function tests (KFT), liver panels, sugar profiles, and urine microscopy.',
    },
    {
      icon: <Siren className="w-6 h-6 text-rose-600" />,
      title: 'Emergency Care',
      description:
        '24×7 immediate medical attention and first-aid stabilization for urgent patient requirements.',
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-[#1E88E5]" />,
      title: 'OPD Consultation',
      description:
        'Daily outpatient consultations with experienced general physicians and visiting nephrologists.',
    },
    {
      icon: <Bed className="w-6 h-6 text-purple-600" />,
      title: 'IPD Services',
      description:
        'Comfortable inpatient observational care and nursing support for short-stay treatments.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#16A34A]" />,
      title: 'Nursing Care',
      description:
        'Compassionate bedside dressing, IV infusions, blood pressure monitoring, and elder assistance.',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1E88E5] text-xs font-semibold">
            <span>Our Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937]">
            Comprehensive Neighborhood Medical Services
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Quality diagnostic testing, reliable dialysis, and attentive nursing under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="clinic-card p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1F2937]">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
