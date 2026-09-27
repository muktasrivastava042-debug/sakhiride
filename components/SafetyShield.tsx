'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { ShieldCheck, PhoneCall, Lock, Moon, Radio, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

export function SafetyShield() {
  const { setIsSosModalOpen } = useApp();

  const safetyPillars = [
    {
      title: '100% Female Drivers with Local Thana Clearance',
      description:
        'Every Varanasi driver partner undergoes strict verification: local police station character certificate (Chowk, Sigra, Bhelupur, or Dashashwamedh Thana), biometric Aadhaar KYC, and commercial driving proficiency.',
      stat: 'Local Police Cleared',
      icon: ShieldCheck,
    },
    {
      title: 'Direct UP 1090 & 112 Police Integration',
      description:
        'One-touch emergency trigger directly broadcasts live GPS coordinates and vehicle telemetry to local Varanasi Commissionerate PCR vans, nearest Pink Booths, and your personal emergency contacts.',
      stat: 'Under 6 Min Target',
      icon: Radio,
    },
    {
      title: 'Encrypted In-App Calling & Zero Number Exposure',
      description:
        'Your personal mobile number is never displayed to driver partners or third parties. All pre-ride communications route through secure masked VoIP proxies to safeguard your personal identity.',
      stat: '100% Identity Shield',
      icon: Lock,
    },
    {
      title: 'Night Suraksha & Doorstep Escort (8 PM – 6 AM)',
      description:
        'For midnight train arrivals at Varanasi Cantt, Babatpur airport drops, or late-night hospital shifts at IMS-BHU, drivers keep headlights illuminated and wait until you safely enter your residential gate or hotel lobby.',
      stat: '8 PM – 6 AM Escort',
      icon: Moon,
    },
  ];

  return (
    <section id="safety-protocol" className="py-20 lg:py-28 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              Varanasi Security Standard
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 mt-2 tracking-tight text-balance">
              The Kashi Triple-Shield Safety Architecture
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed text-balance">
              Engineered specifically for Varanasi’s vibrant ghats, university corridors, and train terminals. Every single
              trip is guarded by physical and digital safety systems.
            </p>
          </div>

          <Link
            href="/women-safety"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#EA580C] hover:text-[#C2410C]"
          >
            <span>Explore Helplines & Pink Booths</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {safetyPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#FFFDFB] rounded-2xl p-7 border border-slate-200/80 hover:border-orange-300 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-orange-100/70 text-[#EA580C] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-500 tracking-wider uppercase font-mono">
                      {pillar.stat}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mt-5 group-hover:text-[#EA580C] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Active on all Varanasi routes</span>
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">Pillar 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive SOS Test Sandbox */}
        <div className="mt-12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-7 lg:p-9 border border-slate-800 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400 mb-2">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span>Interactive Safety Sandbox</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Experience the Sakhi Live SOS Response in Real Time
            </h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Test how the emergency protocol works without triggering actual police dispatch. Review real-time coordinate
              sharing, automatic emergency SMS broadcasts, and two-way audio monitoring across Varanasi.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => setIsSosModalOpen(true)}
              className="px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-red-600/30 flex items-center gap-2 active:scale-95"
            >
              <Radio className="w-4 h-4 animate-pulse" />
              <span>Open SOS Demo Console</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
