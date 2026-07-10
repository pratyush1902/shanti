'use client';

import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, PhoneCall } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Dialysis Centre');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    const text = encodeURIComponent(
      `*New Appointment Booking (Shanti Diagnostic & Nursing Home)*\n\n*Patient Name:* ${name}\n*Phone:* ${phone}\n*Service Requested:* ${service}`
    );
    window.open(`https://wa.me/917004007919?text=${text}`, '_blank');
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl relative border border-gray-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-500 hover:bg-gray-100"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-green-100 text-[#16A34A] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-[#1F2937]">Appointment Confirmed</h3>
            <p className="text-xs text-gray-600">
              Thank you, {name}. Our reception desk will call you shortly at {phone} to confirm your
              slot.
            </p>
            <button
              type="button"
              onClick={handleReset}
              style={{ backgroundColor: '#1E88E5' }}
              className="w-full py-3 rounded-xl text-white font-medium text-xs"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[#1F2937]">Book Appointment</h3>
              <p className="text-xs text-gray-600">
                Shanti Diagnostic &amp; Nursing Home — Neighborhood Centre
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Patient Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter full name"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1E88E5] text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit mobile number"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1E88E5] text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Select Service
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1E88E5] text-xs bg-white"
              >
                <option value="Dialysis Centre">Dialysis Centre</option>
                <option value="Diagnostic Laboratory">Diagnostic Laboratory</option>
                <option value="Pathology Tests">Pathology Tests</option>
                <option value="OPD Consultation">OPD Consultation</option>
                <option value="Emergency Care">Emergency Care</option>
              </select>
            </div>

            <button
              type="submit"
              style={{ backgroundColor: '#1E88E5' }}
              className="w-full py-3 rounded-xl text-white font-medium text-xs hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Confirm Booking</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
