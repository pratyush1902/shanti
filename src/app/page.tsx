'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import DoctorSection from '@/components/DoctorSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GallerySection from '@/components/GallerySection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import BookingModal from '@/components/BookingModal';

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Navbar with Logo & Call Now Button */}
      <Navbar />

      <main className="flex-grow pb-16 sm:pb-0">
        {/* Hero Section */}
        <Hero onOpenBooking={() => setBookingOpen(true)} />

        {/* About Shanti Diagnostic & Nursing Home */}
        <AboutSection />

        {/* Our Services (7 clean grid cards) */}
        <ServicesSection />

        {/* Why Choose Shanti (4 simple cards) */}
        <WhyChooseUs />

        {/* Doctor Section (Profile cards) */}
        <DoctorSection onOpenBooking={() => setBookingOpen(true)} />

        {/* Patient Testimonials (Google review style stars) */}
        <TestimonialsSection />

        {/* Realistic Clinic Gallery */}
        <GallerySection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact & Appointment Section */}
        <ContactSection />
      </main>

      {/* Footer with Address, Google Maps & Schema.org MedicalClinic */}
      <Footer />

      {/* Sticky Call Button (mobile) & Floating WhatsApp Button */}
      <FloatingActions />

      {/* Appointment Booking Modal */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
