'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

export function DriverRecruitmentBanner() {
  const { setIsAuthModalOpen, setAuthModalMode } = useApp();

  return (
    <section className="py-16 bg-[#FFFDFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-xl pointer-events-none" />
          <div className="absolute top-0 right-1/3 w-64 h-64 rounded-full bg-amber-400/20 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/20 text-orange-100 text-xs font-bold backdrop-blur-md mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Varanasi Women on Wheels Initiative</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-white">
              Are you a woman in Varanasi looking for dignified financial independence?
            </h2>

            <p className="mt-4 text-base text-orange-50 leading-relaxed">
              Join Kashi&apos;s most respected women-led mobility fleet. Drive electric autos or cabs, earn up to
              ₹42,000/month, work preferred shifts around Assi, BHU or Cantt, and serve women passengers with 24/7
              security backup.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-orange-100 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-white" />
                <span>Zero vehicle ownership required (Subsidized EV Leases)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-white" />
                <span>Daily UPI bank payouts with zero delay</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-white" />
                <span>Police verification & licensing paperwork support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-white" />
                <span>Free self-defense & EV maintenance workshops</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  setAuthModalMode('driver-partner');
                  setIsAuthModalOpen(true);
                }}
                className="px-6 py-3.5 bg-slate-950 hover:bg-slate-900 text-white text-xs font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <span>Register as a Varanasi Driver Partner</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-orange-100 font-semibold">
                Takes less than 3 minutes to start verification in Kashi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
