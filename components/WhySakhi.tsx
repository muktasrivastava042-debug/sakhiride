'use client';

import React from 'react';
import { HeartHandshake, ShieldCheck, TrendingUp, Quote } from 'lucide-react';

export function WhySakhi() {
  const impactStories = [
    {
      rider: 'Dr. Sunanda Misra',
      role: 'Emergency Medicine Resident, IMS-BHU (Sir Sunderlal Hospital)',
      location: 'Lanka & BHU Campus',
      comment:
        'Finishing a 14-hour emergency shift at 2:30 AM used to be filled with dread about finding safe transit back to my hostel in Lanka. Seeing Captain Aarti waiting right outside the hospital gate is a true blessing for female healthcare workers in Kashi.',
    },
    {
      rider: 'Ananya Roy',
      role: 'Solo Cultural Traveler & Photographer',
      location: 'Assi Ghat & Godowlia',
      comment:
        'Experiencing the 7:00 PM Ganga Aarti at Dashashwamedh as a solo female traveler was a spiritual dream. Having Shanti ji pick me up in her green e-auto with fixed meter pricing meant zero haggling, zero staring, and absolute dignity.',
    },
    {
      rider: 'Shanti Devi',
      role: 'Assi Ghat Fleet Captain & Mother',
      location: 'Assi, Varanasi',
      comment:
        'Driving with Sakhi gave me honor in my own city. I earn over ₹38,000 every month on my own terms. My daughter is completing her Masters in Zoology at BHU because of this wheel.',
    },
  ];

  return (
    <section id="why-sakhi" className="py-20 lg:py-28 bg-[#FFFDFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission & Impact */}
          <div className="lg:col-span-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              The Varanasi Sakhi Movement
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 mt-2 tracking-tight leading-tight text-balance">
              More than a ride. Sacred freedom & dignity for women in Kashi.
            </h2>

            <p className="mt-5 text-base text-slate-600 leading-relaxed text-balance">
              In the sacred city of Varanasi, women have always contributed to culture, education, and devotion—yet
              traditional transit often failed their safety needs after dark. Sakhi Ride bridges this divide by turning
              transportation into an ecosystem of mutual trust, financial independence, and collective empowerment.
            </p>

            {/* Impact Metric Rows */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/80">
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-[#EA580C] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Zero Harassment Sanctuary</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    100% of driver partners and riders are verified women, creating an unprecedented safe zone across the
                    ghats.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/80">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Economic Dignity for Banaras Women</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Driver partners retain up to 88% of ride fares—highest in Uttar Pradesh—with subsidized EV auto leases.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/80">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Protecting Night & Morning Ghat Pilgrims</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    From 4:30 AM Subah-e-Banaras morning prayers to midnight Cantt train arrivals, women travel with peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Varanasi Stories */}
          <div className="lg:col-span-6 space-y-5">
            {impactStories.map((story, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative"
              >
                <Quote className="w-8 h-8 text-orange-200/70 absolute top-5 right-5" />
                <p className="text-sm text-slate-700 leading-relaxed italic relative z-10">
                  &ldquo;{story.comment}&rdquo;
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-slate-900">{story.rider}</p>
                    <p className="text-[11px] text-slate-500">{story.role}</p>
                  </div>
                  <span className="text-[#EA580C] font-semibold">{story.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
