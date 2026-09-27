'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { VEHICLE_FLEET } from '@/lib/data';
import { Check, ArrowRight } from 'lucide-react';

export function FleetSection() {
  const { setIsBookingModalOpen } = useApp();

  return (
    <section id="fleet-pricing" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
            Tailored For Varanasi Roads & Holy Ghats
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-2 tracking-tight">
            Transparent Fleet & Safety Amenities
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed text-balance">
            Whether it’s an e-auto through Godowlia to the Ganga aarti, a BHU campus commute, or a midnight Babatpur airport
            transfer, select the ideal vehicle category. Zero surge pricing and guaranteed Banaras women captains.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VEHICLE_FLEET.map((fleet) => {
            const isNightGuardian = fleet.id === 'sakhi-night-suraksha';
            return (
              <div
                key={fleet.id}
                className={`rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between relative ${
                  isNightGuardian
                    ? 'bg-slate-950 text-white border-slate-800 shadow-xl'
                    : 'bg-[#FFFDFB] text-slate-900 border-slate-200/90 hover:border-orange-300 hover:shadow-lg'
                }`}
              >
                {/* Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                      isNightGuardian
                        ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                        : 'bg-orange-100 text-orange-800'
                    }`}
                  >
                    {fleet.badge}
                  </span>
                  <span
                    className={`text-xs font-semibold ${isNightGuardian ? 'text-slate-400' : 'text-slate-500'}`}
                  >
                    {fleet.capacity}
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="text-xl font-bold tracking-tight">{fleet.name}</h3>
                  <p
                    className={`text-xs mt-1 font-medium ${
                      isNightGuardian ? 'text-slate-400' : 'text-[#EA580C]'
                    }`}
                  >
                    {fleet.category}
                  </p>

                  {/* Pricing Display */}
                  <div className="mt-5 pt-4 border-t border-slate-200/20">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black tabular-nums">₹{fleet.baseFare}</span>
                      <span
                        className={`text-xs ${isNightGuardian ? 'text-slate-400' : 'text-slate-500'}`}
                      >
                        base + ₹{fleet.ratePerKm}/km
                      </span>
                    </div>
                    <p
                      className={`text-[11px] mt-1 ${isNightGuardian ? 'text-slate-400' : 'text-slate-500'}`}
                    >
                      Estimated pickup in ~{fleet.etaMins} mins
                    </p>
                  </div>

                  {/* Fleet description */}
                  <p
                    className={`mt-4 text-xs leading-relaxed ${
                      isNightGuardian ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {fleet.tagline}
                  </p>

                  {/* Amenities List */}
                  <div className="mt-5 space-y-2 text-xs">
                    {fleet.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 ${
                            isNightGuardian ? 'text-orange-400' : 'text-emerald-600'
                          }`}
                        />
                        <span
                          className={isNightGuardian ? 'text-slate-200' : 'text-slate-700 font-medium'}
                        >
                          {amenity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book CTA */}
                <div className="mt-7 pt-4 border-t border-slate-200/20">
                  <button
                    onClick={() => setIsBookingModalOpen(true)}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      isNightGuardian
                        ? 'bg-gradient-to-r from-[#FF7A00] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white shadow-md'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>Book {fleet.name.split(' ')[1] || 'Ride'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
