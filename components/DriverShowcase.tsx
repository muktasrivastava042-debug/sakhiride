'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { VERIFIED_DRIVERS, DriverProfile } from '@/lib/data';
import { ShieldCheck, Star, Award, Car, CheckCircle2, ChevronRight, MessageSquare, ArrowRight } from 'lucide-react';

export function DriverShowcase() {
  const { setSelectedDriver, setIsBookingModalOpen, setCurrentView, setDashboardTab } = useApp();

  return (
    <section id="verified-drivers" className="py-20 lg:py-28 bg-[#FFFDFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              Empowered & Professional Pilots
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-2 tracking-tight">
              Meet Our Verified Women Drivers
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed text-balance">
              Not just drivers, but guardians of safety and pioneers of financial independence. Every captain is
              extensively background-verified, emergency-trained, and committed to dignity in mobility.
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentView('dashboard');
              setDashboardTab('drivers');
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#EA580C] hover:text-[#C2410C] transition-colors"
          >
            <span>View All Drivers in Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Driver Profiles Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VERIFIED_DRIVERS.map((driver: DriverProfile) => {
            return (
              <div
                key={driver.id}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-orange-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Driver Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 text-white font-black text-base flex items-center justify-center shadow-md">
                        {driver.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 leading-snug">{driver.name}</h3>
                        <p className="text-xs text-slate-500">{driver.experienceYears} Years Driving</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-lg text-xs font-bold text-amber-900 tabular-nums">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                      <span>{driver.rating}</span>
                    </div>
                  </div>

                  {/* Vehicle Details */}
                  <div className="mt-4 bg-slate-50 rounded-xl p-3 border border-slate-100">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700 truncate">{driver.vehicleModel}</span>
                      <span className="font-mono text-slate-500 text-[11px] font-bold">{driver.vehicleNumber}</span>
                    </div>
                    <p className="text-[11px] text-[#EA580C] font-semibold mt-1">{driver.vehicleType}</p>
                  </div>

                  {/* Trust Badges */}
                  <div className="mt-4 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="truncate">{driver.policeClearanceDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-orange-500 shrink-0" />
                      <span className="truncate">{driver.badges[0]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-blue-500 shrink-0" />
                      <span className="tabular-nums font-medium">{driver.totalRides.toLocaleString()} safe rides</span>
                    </div>
                  </div>

                  {/* Rider Review Quote */}
                  <div className="mt-4 p-3 bg-orange-50/40 rounded-xl border border-orange-100 text-xs text-slate-700 italic">
                    <p className="line-clamp-2">&ldquo;{driver.recentReview.text}&rdquo;</p>
                    <p className="text-[10px] text-slate-500 not-italic font-bold mt-1 text-right">
                      — {driver.recentReview.author}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedDriver(driver)}
                    className="flex-1 text-center py-2 text-xs font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                  >
                    View Dossier
                  </button>
                  <button
                    onClick={() => {
                      setIsBookingModalOpen(true);
                    }}
                    className="flex-1 text-center py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    Request Ride
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
