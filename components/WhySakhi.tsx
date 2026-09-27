'use client';

import React from 'react';
import { HeartHandshake, ShieldCheck, TrendingUp, Sparkles, Quote } from 'lucide-react';

export function WhySakhi() {
  const impactStories = [
    {
      rider: 'Dr. Aarushi Mehta',
      role: 'Emergency Medicine Registrar, Safdarjung Hospital',
      city: 'New Delhi',
      comment:
        'Finishing a 14-hour ER shift at 3:30 AM used to be filled with anxiety. With Sakhi Ride, seeing a verified woman driver outside the hospital gate brings an immediate sense of relief and calm.',
    },
    {
      rider: 'Tanya Sengupta',
      role: 'Product Lead & Mother',
      city: 'Gurugram',
      comment:
        'I send my 17-year-old daughter to tuition and tennis practice exclusively via Sakhi. The driver details, facial verification, and live tracking mean I never have to worry about her safety.',
    },
    {
      rider: 'Shabana Parveen',
      role: 'Sakhi Fleet Captain & Mother of 3',
      city: 'Noida',
      comment:
        'Driving with Sakhi gave me dignity and financial freedom. I earn ₹42,000 every month on my own terms, and all my passengers treat me with immense sisterhood and respect.',
    },
  ];

  return (
    <section id="why-sakhi" className="py-20 lg:py-28 bg-[#FFFDFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission & Impact */}
          <div className="lg:col-span-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              The Sakhi Movement
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 mt-2 tracking-tight leading-tight text-balance">
              More than a ride. A movement for female freedom & dignity.
            </h2>

            <p className="mt-5 text-base text-slate-600 leading-relaxed text-balance">
              For decades, public and app-based urban mobility failed women—either through compromised safety or a complete
              absence of female drivers. Sakhi Ride bridges this divide by turning transportation into an ecosystem of
              mutual trust, financial independence, and collective empowerment.
            </p>

            {/* Impact Metric Rows */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/80">
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-[#EA580C] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Zero Harassment Tolerance</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    100% of driver partners and riders are verified women, creating an unprecedented safe zone.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/80">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Economic Dignity & Fair Earnings</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Driver partners retain up to 88% of ride fares—highest in the country—with micro-insurance and EV subsidy support.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/80">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Empowering Night Economy</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Women doctors, nurses, aviation crew, and shift workers travel after midnight with absolute peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Stories */}
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
                  <span className="text-slate-400 font-medium">{story.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
