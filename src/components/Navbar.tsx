'use client';

import React, { useState } from 'react';
import { PhoneCall, Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl h-20 flex items-center justify-between">
        {/* Logo Left */}
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="SMA Lakhisarai Logo"
            className="w-12 h-12 rounded-full object-cover shadow-sm border border-gray-200 shrink-0"
          />
          <div>
            <div className="font-bold text-[#1F2937] text-base sm:text-lg leading-tight">
              Shanti Diagnostic &amp; Nursing Home
            </div>
            <div className="text-xs text-gray-500 font-medium">
              Trusted Neighborhood Healthcare
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-700">
          <a href="#top" className="hover:text-[#1E88E5] transition-colors">
            Home
          </a>
          <a href="#services" className="hover:text-[#1E88E5] transition-colors">
            Services
          </a>
          <a href="#doctors" className="hover:text-[#1E88E5] transition-colors">
            Doctors
          </a>
          <a href="#about" className="hover:text-[#1E88E5] transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-[#1E88E5] transition-colors">
            Contact
          </a>
        </nav>

        {/* Right Side: Call Now Button */}
        <div className="hidden sm:flex items-center">
          <a
            href="tel:+917004007919"
            style={{ backgroundColor: '#1E88E5' }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-sm"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-5 space-y-3">
          <nav className="flex flex-col gap-3 text-sm font-medium text-gray-800">
            <a href="#top" onClick={() => setMobileMenuOpen(false)}>
              Home
            </a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>
              Services
            </a>
            <a href="#doctors" onClick={() => setMobileMenuOpen(false)}>
              Doctors
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
          </nav>
          <div className="pt-2">
            <a
              href="tel:+917004007919"
              style={{ backgroundColor: '#1E88E5' }}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-white font-medium text-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
