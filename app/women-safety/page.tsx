'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { VARANASI_HELPLINES, VARANASI_PINK_BOOTHS } from '@/lib/data';
import {
  ShieldCheck,
  Phone,
  Radio,
  AlertTriangle,
  MapPin,
  Lock,
  Moon,
  CheckCircle2,
  ExternalLink,
  Info,
  HeartHandshake,
  UserCheck
} from 'lucide-react';

export default function WomenSafetyPage() {
  const { user, setIsSosModalOpen, showToast } = useApp();
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopyNumber = (num: string, name: string) => {
    navigator?.clipboard?.writeText(num);
    setCopiedNumber(num);
    showToast(`Helpline ${num} (${name}) copied!`);
    setTimeout(() => setCopiedNumber(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-slate-900 pb-24">
      {/* Top Banner: Emergency Speed Dial */}
      <section className="bg-gradient-to-r from-red-950 via-slate-950 to-red-950 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-red-900/60 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-900/60 border border-red-700/80 text-red-200 text-xs font-bold mb-4">
                <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                <span>24/7 Varanasi Emergency & Safety Directory</span>
              </span>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Women Safety & Emergency Helplines in Varanasi
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Whether you are a solo traveler attending the evening Aarti at Dashashwamedh, a student returning to BHU
                late at night, or a local resident, these toll-free verified helplines are available 24/7 across Kashi.
              </p>
            </div>

            {/* Quick Speed Dial Card */}
            <div className="bg-red-900/40 border border-red-700/80 rounded-3xl p-6 sm:p-7 backdrop-blur-md max-w-md w-full">
              <p className="text-xs font-bold uppercase tracking-wider text-red-200 mb-3">
                Immediate Emergency Speed Dial
              </p>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:1090"
                  className="p-4 bg-red-600 hover:bg-red-500 rounded-2xl text-center shadow-lg transition-transform active:scale-95 flex flex-col items-center justify-center gap-1"
                >
                  <span className="text-2xl font-black font-mono tracking-widest text-white">1090</span>
                  <span className="text-[11px] font-bold text-red-100">UP Women Power Line</span>
                </a>

                <a
                  href="tel:112"
                  className="p-4 bg-slate-900 hover:bg-slate-800 rounded-2xl text-center border border-slate-700 shadow-lg transition-transform active:scale-95 flex flex-col items-center justify-center gap-1"
                >
                  <span className="text-2xl font-black font-mono tracking-widest text-white">112</span>
                  <span className="text-[11px] font-bold text-slate-300">UP Emergency Police</span>
                </a>
              </div>

              <div className="mt-4 pt-3 border-t border-red-800/80 flex items-center justify-between text-xs">
                <span className="text-red-200">National Women Desk:</span>
                <a href="tel:1091" className="font-mono font-bold text-white hover:underline">
                  1091 (Toll-Free)
                </a>
              </div>

              <button
                onClick={() => setIsSosModalOpen(true)}
                className="w-full mt-4 py-3 bg-white hover:bg-red-50 text-red-950 text-xs font-black rounded-xl shadow transition-colors flex items-center justify-center gap-2"
              >
                <Radio className="w-4 h-4 text-red-600 animate-pulse" />
                <span>Test Interactive Live SOS Broadcast</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Helplines Directory Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
            Official Government & Police Hotlines
          </p>
          <h2 className="text-3xl font-extrabold text-slate-950 mt-1 tracking-tight">
            Complete Varanasi Helplines Directory
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Tap to dial directly or copy helpline numbers to your phone contacts. Verified by Varanasi Police
            Commissionerate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VARANASI_HELPLINES.map((hl, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                hl.isPriority
                  ? 'bg-red-50/50 border-red-200 shadow-sm'
                  : 'bg-white border-slate-200/90 hover:border-orange-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      hl.isPriority ? 'bg-red-100 text-red-800 font-extrabold' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {hl.badge}
                  </span>
                  <span className="text-[11px] text-slate-500 font-semibold">{hl.available}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mt-4 leading-snug">{hl.name}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{hl.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Dial Number</span>
                  <a
                    href={`tel:${hl.number.replace(/\s+/g, '')}`}
                    className="text-xl font-black font-mono text-[#EA580C] hover:underline"
                  >
                    {hl.number}
                  </a>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopyNumber(hl.number, hl.name)}
                    className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
                  >
                    {copiedNumber === hl.number ? 'Copied' : 'Copy'}
                  </button>
                  <a
                    href={`tel:${hl.number.replace(/\s+/g, '')}`}
                    className="p-2 bg-gradient-to-r from-[#FF7A00] to-[#EA580C] text-white rounded-lg shadow-sm hover:opacity-90"
                    title={`Call ${hl.name}`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Varanasi Pink Police Booths Section */}
      <section className="py-14 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              On-Ground Female Law Enforcement
            </span>
            <h2 className="text-3xl font-extrabold text-slate-950 mt-1 tracking-tight">
              Varanasi Pink Police Booths Network
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Staffed exclusively by trained female police officers of the Varanasi Commissionerate. Equipped with private
              waiting areas, first aid, and direct emergency dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VARANASI_PINK_BOOTHS.map((booth, idx) => (
              <div
                key={idx}
                className="bg-[#FFFDFB] rounded-2xl p-5 border border-slate-200/90 hover:border-orange-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mt-3">{booth.location}</h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-start gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#EA580C] shrink-0 mt-0.5" />
                    <span>{booth.landmark}</span>
                  </p>

                  <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                    <p className="text-[11px] font-bold text-slate-700">Officer In-Charge:</p>
                    <p className="text-slate-900 font-semibold">{booth.officerInCharge}</p>
                    <p className="text-[11px] text-slate-500 mt-1">Services: {booth.services}</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={`tel:${booth.contact.replace(/\s+/g, '')}`}
                    className="text-xs font-mono font-bold text-[#EA580C] hover:underline"
                  >
                    {booth.contact}
                  </a>
                  <a
                    href={`tel:${booth.contact.replace(/\s+/g, '')}`}
                    className="p-1.5 bg-pink-50 hover:bg-pink-100 text-pink-700 rounded-lg text-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Sakhi Triple-Shield in Kashi */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
            Built For Holy City Transit
          </p>
          <h2 className="text-3xl font-extrabold text-slate-950 mt-1 tracking-tight">
            How Sakhi Ride Protects Women in Varanasi
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Four active digital and physical layers guarding every meter of your journey across the ghats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#EA580C] flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-4">100% Female Drivers with Police Thana Verification</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Every driver partner undergoes strict background verification at their local Varanasi police station
                (Chowk, Sigra, Bhelupur, or Dashashwamedh). Complete Aadhaar biometric audit, clean driving record, and
                character certification.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Certified under Kashi Women Driver Charter</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-4">Live SOS Broadcast to UP 1090 & Nearest PCR Van</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Tapping the in-app SOS instantly shares live GPS coordinates, vehicle registration number, and cabin audio
                with the nearest UP 112 PCR response van and your emergency circle.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-semibold text-red-700 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              <span>Under 6-minute emergency response target</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-4">VoIP Phone Masking & Private Identity Protection</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Your personal phone number is never disclosed to drivers or external parties. All communications route
                through encrypted virtual channels to prevent unwanted follow-ups or harassment.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-semibold text-blue-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Zero contact leaks guaranteed</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <Moon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-4">Night Suraksha & Doorstep Gate Escort (8 PM – 6 AM)</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                For late-night arrivals at Cantt Station or Babatpur Airport, our driver stays stationary with illuminated
                headlights until you safely enter your residential gate or hotel lobby.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-semibold text-purple-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Safe entry confirmation before ride conclusion</span>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Safety Tips for Women Visiting Varanasi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-7 sm:p-10 border border-orange-200">
          <h3 className="text-2xl font-bold text-slate-950 flex items-center gap-2">
            <HeartHandshake className="w-6 h-6 text-[#EA580C]" />
            <span>Essential Tips for Women Visiting Varanasi</span>
          </h3>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
            <div className="bg-white/90 p-4 rounded-xl border border-orange-100 space-y-1">
              <p className="font-bold text-slate-900">1. Ganga Aarti Crowds</p>
              <p className="leading-relaxed">
                During 7:00 PM Aarti at Dashashwamedh, arrive by 6:00 PM. Book your Sakhi pickup at Godowlia intersection
                in advance as vehicles cannot enter the pedestrian ghat steps.
              </p>
            </div>

            <div className="bg-white/90 p-4 rounded-xl border border-orange-100 space-y-1">
              <p className="font-bold text-slate-900">2. Night Train Arrivals at Cantt</p>
              <p className="leading-relaxed">
                Varanasi Cantt Platform 1 has an active Pink Booth right near the main exit. Request your Sakhi Night
                Guardian driver to meet you near the Tourist Bureau.
              </p>
            </div>

            <div className="bg-white/90 p-4 rounded-xl border border-orange-100 space-y-1">
              <p className="font-bold text-slate-900">3. Live GPS Sharing</p>
              <p className="leading-relaxed">
                Always use the in-app &ldquo;Share Live Trip&rdquo; feature to transmit your route to family members or hostel
                wardens whenever traveling after 8:00 PM.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

