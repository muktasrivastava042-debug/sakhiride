'use client';

import React from 'react';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { SafetyShield } from '@/components/SafetyShield';
import { WhySakhi } from '@/components/WhySakhi';
import { DriverShowcase } from '@/components/DriverShowcase';
import { FleetSection } from '@/components/FleetSection';
import { DriverRecruitmentBanner } from '@/components/DriverRecruitmentBanner';
import { FAQSection } from '@/components/FAQSection';
import { VARANASI_PILGRIMAGE_PACKAGES, VARANASI_HELPLINES } from '@/lib/data';
import { Compass, ShieldCheck, ArrowRight, Phone, Sparkles, MapPin } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Varanasi Pilgrimage & Heritage Tours Spotlight Strip */}
      <section className="py-12 bg-white border-y border-orange-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
                Spiritual & Heritage Transit
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
                Popular Varanasi Rides & Holy Yatra Trails
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fixed-fare spiritual journeys with local Banaras women captains who know every ghat and temple gate.
              </p>
            </div>

            <Link
              href="/rides"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EA580C] hover:text-[#C2410C]"
            >
              <span>Explore All Rides & Bookings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {VARANASI_PILGRIMAGE_PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-[#FFFDFB] rounded-2xl p-6 border border-slate-200/90 hover:border-orange-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                      {pkg.tag}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{pkg.timing}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mt-3">{pkg.title}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{pkg.route}</p>
                  <p className="text-[11px] text-emerald-700 font-medium mt-3 bg-emerald-50 p-2 rounded-lg border border-emerald-100">
                    ✓ {pkg.includes}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-black text-[#EA580C]">{pkg.fare}</span>
                  <Link
                    href="/rides"
                    className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    Book Yatra
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Shield */}
      <SafetyShield />

      {/* Quick Helpline Callout Strip linking to Women Safety Page */}
      <section className="bg-red-950 text-white py-8 border-y border-red-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-800/80 border border-red-600 text-red-200 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 animate-pulse text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-white text-base">Varanasi Women Emergency Network</span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-red-800 px-2 py-0.5 rounded text-white">
                  24/7 Active
                </span>
              </div>
              <p className="text-xs text-red-200 mt-0.5">
                UP Women Power Line: <span className="font-mono font-bold text-white">1090</span> · Emergency: <span className="font-mono font-bold text-white">112</span> · Varanasi Mahila Thana: <span className="font-mono font-bold text-white">0542-2508100</span>
              </p>
            </div>
          </div>

          <Link
            href="/women-safety"
            className="px-5 py-2.5 bg-white text-red-950 hover:bg-red-50 text-xs font-extrabold rounded-xl shadow transition-colors flex items-center gap-2 shrink-0"
          >
            <span>View Full Women Safety & Helplines Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Why Sakhi in Varanasi */}
      <WhySakhi />

      {/* Varanasi Verified Women Drivers */}
      <DriverShowcase />

      {/* Varanasi Fleet Rates */}
      <FleetSection />

      {/* Driver Recruitment for Banaras Women */}
      <DriverRecruitmentBanner />

      {/* Varanasi Safety & Travel FAQs */}
      <FAQSection />
    </div>
  );
}
