'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { ShieldCheck, PhoneCall, Lock, Moon, Radio, CheckCircle, AlertTriangle, Eye } from 'lucide-react';

export function SafetyShield() {
  const { setIsSosModalOpen } = useApp();

  const safetyPillars = [
    {
      title: '100% Female Drivers with Police Clearance',
      description:
        'Every Sakhi driver partner undergoes rigorous 7-tier verification: Aadhaar biometric verification, police criminal history clearance, in-person driving capability test, and empathy training.',
      stat: '7-Step Audit',
      icon: ShieldCheck,
      highlightColor: 'from-orange-500 to-amber-500',
    },
    {
      title: 'Direct 112 & Women Helpline 1091 SOS',
      description:
        'One-touch emergency trigger directly broadcasts live GPS coordinates, driver identity, and vehicle telemetry to local PCR response vans and your personal emergency contacts.',
      stat: 'Under 10s Dispatch',
      icon: Radio,
      highlightColor: 'from-red-500 to-rose-600',
    },
    {
      title: 'Encrypted In-App Calling & Zero Number Exposure',
      description:
        'Your mobile number is never displayed to driver partners or third parties. All pre-ride communications route through secure masked VoIP proxies to safeguard your personal identity.',
      stat: '100% Private',
      icon: Lock,
      highlightColor: 'from-blue-600 to-indigo-600',
    },
    {
      title: 'Night Guardian & Doorstep Escort Protocol',
      description:
        'For rides between 8:00 PM and 6:00 AM, drivers are instructed to keep headlights illuminated and stay stationary until you safely unlock and enter your building or residence gate.',
      stat: '8 PM – 6 AM Escort',
      icon: Moon,
      highlightColor: 'from-purple-600 to-indigo-700',
    },
  ];

  return (
    <section id="safety-protocol" className="py-20 lg:py-28 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Human Editorial Title */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
            Uncompromising Security Standard
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 mt-2 tracking-tight text-balance">
            The Sakhi Triple-Shield Safety Architecture
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed text-balance">
            Safety isn’t a marketing checkbox—it is the foundational reason Sakhi Ride exists. Every single trip, vehicle,
            and driver is monitored through an uncompromising system engineered exclusively for women.
          </p>
        </div>

        {/* 4 Pillars Grid (Asymmetric Bento Hierarchy) */}
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
                    <span>Active on all routes</span>
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
              sharing, automatic emergency SMS broadcasts, and two-way audio monitoring.
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
