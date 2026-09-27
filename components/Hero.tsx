'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { VEHICLE_FLEET, POPULAR_LOCATIONS, VERIFIED_DRIVERS } from '@/lib/data';
import {
  MapPin,
  Navigation,
  ShieldCheck,
  Clock,
  ArrowRight,
  Car,
  CheckCircle2,
  Users,
  Compass,
  PhoneCall
} from 'lucide-react';

export function Hero() {
  const { addNewRide, setIsBookingModalOpen, setIsSosModalOpen } = useApp();

  const [pickup, setPickup] = useState(POPULAR_LOCATIONS[1]); // Cantt Station
  const [destination, setDestination] = useState(POPULAR_LOCATIONS[3]); // Assi Ghat
  const [selectedFleetId, setSelectedFleetId] = useState(VEHICLE_FLEET[0].id); // Ganga Auto
  const [rideTimeType, setRideTimeType] = useState<'now' | 'schedule'>('now');

  const selectedVehicle = VEHICLE_FLEET.find((v) => v.id === selectedFleetId) || VEHICLE_FLEET[0];
  
  // Dynamic fare calculation for Varanasi routes
  const simulatedDistance = 7.4; // km
  const estimatedFare = Math.round(selectedVehicle.baseFare + simulatedDistance * selectedVehicle.ratePerKm);

  const handleInstantBook = () => {
    const matchedDriver = VERIFIED_DRIVERS[0];
    addNewRide({
      pickup,
      destination,
      rideType: selectedVehicle.name,
      fare: estimatedFare,
      distanceKm: simulatedDistance,
      status: 'arriving',
      driver: matchedDriver,
      paymentMethod: 'UPI',
      emergencyContactsNotified: true,
    });
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-orange-50/50 via-[#FFFDFB] to-[#FFFDFB]">
      {/* Subtle background ambient warm glow */}
      <div
        className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-200/35 to-amber-100/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -left-48 w-[400px] h-[400px] bg-gradient-to-tr from-orange-100/40 to-transparent rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Trust Banner Kicker for Varanasi */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-orange-950 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/90 border border-orange-200/80 text-orange-900 font-bold">
            <Compass className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Exclusively in Varanasi (Kashi)</span>
          </span>
          <span className="text-slate-400">·</span>
          <span className="text-slate-600">100% Female Drivers & Female Riders</span>
          <span className="text-slate-400">·</span>
          <Link href="/women-safety" className="text-[#EA580C] hover:underline font-bold">
            UP 1090 & 112 Integrated
          </Link>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Booking Estimator */}
          <div className="lg:col-span-7 flex flex-col">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08] text-balance">
              Drive by Women.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#EA580C]">
                Ride by Women in Varanasi.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl text-balance">
              Varanasi’s dedicated women-only mobility network. Connecting female pilgrims, BHU scholars, local women, and
              travelers with 100% verified local women drivers. From morning Ganga Aarti at Assi Ghat to late-night train
              arrivals at Cantt Station, travel with total peace of mind.
            </p>

            {/* Quick Interactive Ride Estimator Card for Varanasi */}
            <div className="mt-8 bg-white rounded-2xl shadow-xl shadow-orange-500/5 border border-orange-100/80 p-5 sm:p-7">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Varanasi Ride Estimator
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-semibold">
                  <button
                    onClick={() => setRideTimeType('now')}
                    className={`px-3 py-1 rounded-md transition-all ${
                      rideTimeType === 'now'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Ride Now (~2 min)
                  </button>
                  <button
                    onClick={() => setRideTimeType('schedule')}
                    className={`px-3 py-1 rounded-md transition-all ${
                      rideTimeType === 'schedule'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Schedule Aarti / Airport
                  </button>
                </div>
              </div>

              {/* Locations Input */}
              <div className="mt-4 space-y-3">
                {/* Pickup */}
                <div className="relative flex items-center bg-slate-50/80 hover:bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 transition-colors focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-100">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mr-3 ring-4 ring-emerald-100" />
                  <div className="flex-1 min-w-0">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Varanasi Pickup Location
                    </label>
                    <select
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      aria-label="Varanasi Pickup Location"
                      className="w-full bg-transparent text-sm font-semibold text-slate-900 focus:outline-none truncate cursor-pointer"
                    >
                      {POPULAR_LOCATIONS.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Destination */}
                <div className="relative flex items-center bg-slate-50/80 hover:bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 transition-colors focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-100">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EA580C] shrink-0 mr-3 ring-4 ring-orange-100" />
                  <div className="flex-1 min-w-0">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Destination Drop in Kashi
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      aria-label="Destination Drop in Kashi"
                      className="w-full bg-transparent text-sm font-semibold text-slate-900 focus:outline-none truncate cursor-pointer"
                    >
                      {POPULAR_LOCATIONS.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Vehicle Options Horizontal Bar */}
              <div className="mt-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Select Fleet for Varanasi Roads
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {VEHICLE_FLEET.map((fleet) => {
                    const isSelected = fleet.id === selectedFleetId;
                    return (
                      <button
                        key={fleet.id}
                        type="button"
                        onClick={() => setSelectedFleetId(fleet.id)}
                        className={`p-2.5 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                          isSelected
                            ? 'bg-orange-50/70 border-orange-500 ring-2 ring-orange-500/20'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <p className="text-xs font-bold text-slate-900 truncate">{fleet.name}</p>
                          <p className="text-[10px] text-slate-500 truncate">{fleet.capacity.split(' ')[0]} Seats</p>
                        </div>
                        <div className="mt-2 flex items-baseline justify-between">
                          <span className="text-xs font-extrabold text-[#EA580C] tabular-nums">
                            ₹{Math.round(fleet.baseFare + simulatedDistance * fleet.ratePerKm)}
                          </span>
                          <span className="text-[10px] text-slate-500 tabular-nums">~{fleet.etaMins}m</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Estimate Summary & Instant Booking Button */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-slate-900 tabular-nums">₹{estimatedFare}</span>
                    <span className="text-xs text-slate-500 font-medium">approx. {simulatedDistance} km in Varanasi</span>
                  </div>
                  <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Fixed upfront meter fare · Zero surge pricing</span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleInstantBook}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#FF7A00] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white text-xs font-bold rounded-xl shadow-md shadow-orange-500/20 hover:shadow-lg transition-all active:scale-[0.98] whitespace-nowrap"
                  >
                    <span>Confirm Varanasi Ride</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Varanasi Social Trust Metrics */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200/70 pt-6">
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900 tabular-nums">100%</p>
                <p className="text-xs text-slate-500 mt-0.5">Banaras Female Drivers</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900 tabular-nums">4.98 ★</p>
                <p className="text-xs text-slate-500 mt-0.5">Pilgrim & Student Rating</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900 tabular-nums">1090 / 112</p>
                <p className="text-xs text-slate-500 mt-0.5">UP Police Live Sync</p>
              </div>
            </div>
          </div>

          {/* Right Column: Live Simulated Visual Carrier */}
          <div className="lg:col-span-5 relative">
            {/* Framed Visual Dashboard Card */}
            <div className="relative bg-slate-950 rounded-3xl p-6 text-white shadow-2xl border border-slate-800 overflow-hidden">
              {/* Top Bar inside card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-200">KASHI RIDE TELEMETRY</span>
                </div>
                <div className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-0.5 rounded-md">
                  Assi Pink Booth Synced
                </div>
              </div>

              {/* Stylized Vector Route Canvas: Cantt to Assi Ghat via Godowlia */}
              <div className="relative my-5 h-44 rounded-2xl bg-slate-950 border border-slate-800/80 overflow-hidden p-3">
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Curved Route Path SVG representing Varanasi Ghat corridor */}
                <svg className="w-full h-full" viewBox="0 0 320 140" fill="none">
                  {/* Road Base */}
                  <path
                    d="M 20 110 C 70 110, 110 30, 190 40 C 250 50, 260 100, 300 95"
                    stroke="#334155"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  {/* Active Route Glowing Polyline */}
                  <path
                    d="M 20 110 C 70 110, 110 30, 190 40 C 250 50, 260 100, 300 95"
                    stroke="#F97316"
                    strokeWidth="3.5"
                    strokeDasharray="6 4"
                    strokeLinecap="round"
                    className="animate-pulse"
                  />

                  {/* Cantt Pickup Marker */}
                  <g transform="translate(20, 110)">
                    <circle r="7" fill="#10B981" />
                    <circle r="3" fill="#FFFFFF" />
                  </g>

                  {/* Driver Position (Moving through Sigra / Godowlia) */}
                  <g transform="translate(180, 38)">
                    <circle r="12" fill="#EA580C" opacity="0.3" className="animate-ping" />
                    <circle r="8" fill="#F97316" />
                    <circle r="4" fill="#FFFFFF" />
                  </g>

                  {/* Assi Ghat Destination Marker */}
                  <g transform="translate(300, 95)">
                    <circle r="8" fill="#EA580C" />
                    <circle r="4" fill="#FFFFFF" />
                  </g>
                </svg>

                {/* Floating ETA Badge */}
                <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg px-2.5 py-1 text-[11px] font-bold text-orange-400">
                  Captain Shanti: ~2 mins away
                </div>

                <div className="absolute bottom-2 left-3 text-[10px] text-slate-400 font-mono">
                  Assi Ghat Corridor · UP 65 BT 1088
                </div>
              </div>

              {/* Matched Driver Preview Card */}
              <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700/80">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 text-white flex items-center justify-center font-black text-base shrink-0 shadow-md">
                    SD
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white truncate">Shanti Devi</h4>
                      <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                        ★ 4.99
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">Mahindra Treo EV Auto · Varanasi Green</p>
                    <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-400">
                      <span className="font-mono text-orange-300 font-bold">UP 65 BT 1088</span>
                      <span>·</span>
                      <span className="text-emerald-400 font-medium">Chowk Thana Verified</span>
                    </div>
                  </div>
                </div>

                {/* OTP & Safety Controls */}
                <div className="mt-4 pt-3 border-t border-slate-700/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Ride OTP</span>
                    <span className="text-base font-black tracking-widest text-emerald-400 font-mono">5812</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsSosModalOpen(true)}
                      className="px-3 py-1.5 bg-red-600/90 hover:bg-red-600 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Test SOS</span>
                    </button>
                    <Link
                      href="/rides"
                      className="px-3 py-1.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1"
                    >
                      <span>Track Live</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Safety Assurance Footer inside card */}
              <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>UP 1090 Women Power Line Synced</span>
                </span>
                <span className="text-slate-500">Zero Surge in Kashi</span>
              </div>
            </div>

            {/* Floating Varanasi Pink Booth Trust Card */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-orange-100 items-center gap-3 max-w-xs animate-in fade-in duration-300">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#EA580C] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">450+ Varanasi Women Captains</p>
                <p className="text-[11px] text-slate-500">Chowk, Sigra & Bhelupur Thana background cleared</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
