'use client';

import React, { useState } from 'react';
import { Calendar, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Dialysis Centre');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    const text = encodeURIComponent(
      `*New Appointment Booking Request*\n\n*Patient Name:* ${name}\n*Phone:* ${phone}\n*Service Required:* ${service}\n*Preferred Date:* ${date || 'As soon as possible'}\n*Message:* ${message || 'None'}`
    );
    window.open(`https://wa.me/917004007919?text=${text}`, '_blank');
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `*New Appointment Inquiry*\n\n*Patient Name:* ${name || 'Patient'}\n*Phone:* ${phone || 'N/A'}\n*Service Required:* ${service}\n*Preferred Date:* ${date || 'Soon'}\n*Message:* ${message || 'None'}`
    );
    window.open(`https://wa.me/917004007919?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1E88E5] text-xs font-semibold">
            <span>Contact &amp; Bookings</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937]">
            Schedule Your Appointment
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Fill out this quick form or reach us directly on WhatsApp for prompt scheduling.
          </p>
        </div>

        <div className="clinic-card bg-white p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-100 text-[#16A34A] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2937]">Appointment Requested</h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Thank you, {name}. Our reception desk will call you shortly at {phone} to confirm
                your appointment timing.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-[#1E88E5] hover:underline"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Patient Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1E88E5] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1E88E5] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1E88E5] text-sm bg-white"
                  >
                    <option value="Dialysis Centre">Dialysis Centre</option>
                    <option value="Diagnostic Laboratory">Diagnostic Laboratory</option>
                    <option value="Pathology Tests">Pathology Tests</option>
                    <option value="OPD Consultation">OPD Consultation</option>
                    <option value="Emergency Care">Emergency Care</option>
                    <option value="Nursing Care">Nursing Care</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1E88E5] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Message (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Any specific symptoms or test requirement..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1E88E5] text-sm"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  style={{ backgroundColor: '#1E88E5' }}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-white font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  style={{ backgroundColor: '#16A34A' }}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-white font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
