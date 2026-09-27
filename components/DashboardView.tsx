'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { VERIFIED_DRIVERS, DriverProfile, RideBooking } from '@/lib/data';
import {
  Navigation,
  ShieldCheck,
  PhoneCall,
  Share2,
  Clock,
  MapPin,
  Car,
  AlertTriangle,
  Star,
  CheckCircle2,
  Calendar,
  CreditCard,
  UserCheck,
  Search,
  Plus,
  X,
  ChevronRight,
  ArrowLeft
} from 'lucide-react';

export function DashboardView() {
  const {
    user,
    rides,
    activeRideId,
    setActiveRideId,
    cancelRide,
    dashboardTab,
    setDashboardTab,
    setCurrentView,
    setIsBookingModalOpen,
    setSelectedDriver,
    setIsSosModalOpen,
    showToast,
  } = useApp();

  const [contactSearch, setContactSearch] = useState('');
  const [driverFilter, setDriverFilter] = useState('all');
  const [newContactName, setNewContactName] = useState('');
  const [newContactPhone, setNewContactPhone] = useState('');
  const [newContactRelation, setNewContactRelation] = useState('Sister');

  // Currently tracked ride
  const currentTrackedRide = rides.find((r) => r.id === activeRideId) || rides[0];

  const handleShareTrip = () => {
    navigator?.clipboard?.writeText(
      `https://sakhiride.com/track/${currentTrackedRide?.id}?token=live-gps-secure`
    );
    showToast('Secure tracking link copied! Live location shared with your emergency contacts.');
  };

  const handleMaskedCall = (driverName: string) => {
    showToast(`Connecting encrypted masked voice call to Captain ${driverName}... (Your phone number is hidden)`);
  };

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-slate-900 pb-24">
      {/* Dashboard Top Navigation Bar */}
      <div className="bg-white border-b border-orange-100/90 shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrentView('home')}
                className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                title="Return to Home Preview"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-extrabold text-slate-950 tracking-tight">Rider Safety Dashboard</h1>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>Verified Rider</span>
                  </span>
                </div>
                <p className="text-xs text-slate-500">Welcome, {user?.name || 'Priya Sharma'} · Safe Rides Portal</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setIsSosModalOpen(true)}
                className="px-3.5 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-lg shadow-sm flex items-center gap-1.5 transition-colors"
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Instant SOS</span>
              </button>

              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-[#FF7A00] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white text-xs font-bold rounded-lg shadow-sm flex items-center gap-1.5 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Book New Ride</span>
              </button>
            </div>
          </div>

          {/* Segmented Tab Controls (Strict anti-slop functional buttons) */}
          <div className="flex items-center gap-1 overflow-x-auto py-2 border-t border-slate-100 text-xs font-semibold scrollbar-none">
            <button
              onClick={() => setDashboardTab('track')}
              className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
                dashboardTab === 'track'
                  ? 'bg-orange-50 text-[#EA580C] font-bold shadow-sm border border-orange-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Track Live Ride</span>
              {currentTrackedRide?.status === 'arriving' && (
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              )}
            </button>

            <button
              onClick={() => setDashboardTab('bookings')}
              className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
                dashboardTab === 'bookings'
                  ? 'bg-orange-50 text-[#EA580C] font-bold shadow-sm border border-orange-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Manage Bookings ({rides.length})</span>
            </button>

            <button
              onClick={() => setDashboardTab('drivers')}
              className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
                dashboardTab === 'drivers'
                  ? 'bg-orange-50 text-[#EA580C] font-bold shadow-sm border border-orange-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Driver Profiles ({VERIFIED_DRIVERS.length})</span>
            </button>

            <button
              onClick={() => setDashboardTab('safety')}
              className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
                dashboardTab === 'safety'
                  ? 'bg-orange-50 text-[#EA580C] font-bold shadow-sm border border-orange-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Emergency Contacts & Shield</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Dashboard Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* TAB 1: TRACK ACTIVE RIDE */}
        {dashboardTab === 'track' && (
          <div className="space-y-6">
            {currentTrackedRide ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Interactive Live Vector Map Canvas */}
                <div className="lg:col-span-8 bg-slate-950 rounded-2xl p-6 text-white border border-slate-800 shadow-xl flex flex-col justify-between min-h-[460px] relative overflow-hidden">
                  {/* Subtle animated grid background */}
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />

                  {/* Top Overlay Bar */}
                  <div className="relative z-10 flex items-center justify-between bg-slate-900/80 backdrop-blur-md p-3.5 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-bold text-slate-200">
                        Ride #{currentTrackedRide.id} · {currentTrackedRide.rideType}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleShareTrip}
                        className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-orange-300 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors border border-slate-700"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Share Live Trip</span>
                      </button>
                    </div>
                  </div>

                  {/* Visual Map SVG with Active Route & Moving Driver */}
                  <div className="relative z-10 my-8 flex-1 flex items-center justify-center">
                    <svg className="w-full max-h-[260px]" viewBox="0 0 600 240" fill="none">
                      {/* Stylized Street Grid Lines */}
                      <path d="M 0 60 L 600 60" stroke="#1e293b" strokeWidth="2" strokeDasharray="6 6" />
                      <path d="M 0 180 L 600 180" stroke="#1e293b" strokeWidth="2" strokeDasharray="6 6" />
                      <path d="M 150 0 L 150 240" stroke="#1e293b" strokeWidth="2" strokeDasharray="6 6" />
                      <path d="M 450 0 L 450 240" stroke="#1e293b" strokeWidth="2" strokeDasharray="6 6" />

                      {/* Main Road Highway */}
                      <path
                        d="M 50 190 C 140 190, 180 50, 320 70 C 460 90, 480 180, 550 170"
                        stroke="#334155"
                        strokeWidth="12"
                        strokeLinecap="round"
                      />
                      {/* Active Trajectory Line */}
                      <path
                        d="M 50 190 C 140 190, 180 50, 320 70 C 460 90, 480 180, 550 170"
                        stroke="#EA580C"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="8 6"
                      />

                      {/* Pickup Pin */}
                      <g transform="translate(50, 190)">
                        <circle r="14" fill="#059669" opacity="0.3" className="animate-ping" />
                        <circle r="9" fill="#10B981" />
                        <circle r="4" fill="#FFFFFF" />
                        <text y="-18" x="0" textAnchor="middle" fill="#A7F3D0" fontSize="11" fontWeight="bold">
                          Pickup Point
                        </text>
                      </g>

                      {/* Female Driver Car Marker */}
                      <g transform="translate(290, 68)">
                        <circle r="20" fill="#EA580C" opacity="0.25" className="animate-ping" />
                        <circle r="12" fill="#F97316" />
                        <circle r="6" fill="#FFFFFF" />
                        <text y="-20" x="0" textAnchor="middle" fill="#FDBA74" fontSize="12" fontWeight="bold">
                          Captain Sunita (3 mins away)
                        </text>
                      </g>

                      {/* Destination Pin */}
                      <g transform="translate(550, 170)">
                        <circle r="10" fill="#EA580C" />
                        <circle r="5" fill="#FFFFFF" />
                        <text y="-18" x="0" textAnchor="middle" fill="#FED7AA" fontSize="11" fontWeight="bold">
                          Destination
                        </text>
                      </g>
                    </svg>
                  </div>

                  {/* Bottom Map Telemetry Strip */}
                  <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px] font-bold uppercase">Estimated Arrival</span>
                      <span className="text-emerald-400 font-extrabold text-sm font-mono">
                        {currentTrackedRide.status === 'arriving' ? '3 Minutes (1.4 km)' : 'Trip in progress'}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[10px] font-bold uppercase">Trip Telemetry</span>
                      <span className="text-slate-200 font-mono">Speed 38 km/h · No Detour</span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[10px] font-bold uppercase">Security Protocol</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Women Police 1091 Synced</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Driver Card, OTP, & Safety Controls */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Driver Partner Dossier */}
                  {currentTrackedRide.driver && (
                    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Assigned Driver Partner
                        </span>
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>Police Verified</span>
                        </span>
                      </div>

                      <div className="mt-4 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 text-white flex items-center justify-center font-black text-xl shadow-md shrink-0">
                          {currentTrackedRide.driver.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-bold text-slate-900 truncate">
                            {currentTrackedRide.driver.name}
                          </h3>
                          <div className="flex items-center gap-1 text-xs font-bold text-amber-900 mt-0.5">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                            <span>{currentTrackedRide.driver.rating}</span>
                            <span className="text-slate-400 font-normal">
                              · {currentTrackedRide.driver.totalRides.toLocaleString()} rides
                            </span>
                          </div>
                          <p className="text-xs text-[#EA580C] font-semibold mt-1">
                            {currentTrackedRide.driver.badges[0]}
                          </p>
                        </div>
                      </div>

                      {/* Vehicle Details */}
                      <div className="mt-5 p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1 text-xs">
                        <div className="flex items-center justify-between font-bold text-slate-900">
                          <span>{currentTrackedRide.driver.vehicleModel}</span>
                          <span className="font-mono text-[#EA580C] bg-white px-2 py-0.5 rounded border border-slate-200">
                            {currentTrackedRide.driver.vehicleNumber}
                          </span>
                        </div>
                        <p className="text-slate-500 text-[11px]">Clean electric AC cabin · Dual dashcam equipped</p>
                      </div>

                      {/* OTP Box */}
                      <div className="mt-5 p-4 bg-orange-50/70 border border-orange-200 rounded-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-orange-950">
                            Give this OTP to Captain
                          </p>
                          <p className="text-xs text-orange-900">Starts your safe trip</p>
                        </div>
                        <div className="text-2xl font-black tracking-widest text-[#EA580C] font-mono bg-white px-3 py-1 rounded-lg border border-orange-200 shadow-sm">
                          {currentTrackedRide.otp}
                        </div>
                      </div>

                      {/* Masked Contact & Controls */}
                      <div className="mt-5 grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleMaskedCall(currentTrackedRide.driver?.name || 'Captain')}
                          className="py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                        >
                          <PhoneCall className="w-3.5 h-3.5" />
                          <span>Masked Call</span>
                        </button>

                        <button
                          onClick={() => setSelectedDriver(currentTrackedRide.driver || null)}
                          className="py-2.5 px-3 bg-orange-100 hover:bg-orange-200 text-[#EA580C] text-xs font-bold rounded-xl transition-colors text-center"
                        >
                          Driver Profile
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Trip Details Card */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Route & Fare Summary</h4>

                    <div className="space-y-3 text-xs">
                      <div className="flex items-start gap-2.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1 shrink-0" />
                        <div>
                          <p className="font-bold text-slate-900">Pickup</p>
                          <p className="text-slate-600 text-[11px] leading-snug">{currentTrackedRide.pickup}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#EA580C] mt-1 shrink-0" />
                        <div>
                          <p className="font-bold text-slate-900">Destination</p>
                          <p className="text-slate-600 text-[11px] leading-snug">{currentTrackedRide.destination}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-slate-500 block">Total Upfront Fare</span>
                        <span className="text-base font-black text-slate-900 tabular-nums">
                          ₹{currentTrackedRide.fare}
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-slate-500 block">Payment Mode</span>
                        <span className="font-semibold text-slate-800">{currentTrackedRide.paymentMethod}</span>
                      </div>
                    </div>

                    {currentTrackedRide.status === 'arriving' && (
                      <div className="pt-2">
                        <button
                          onClick={() => cancelRide(currentTrackedRide.id)}
                          className="w-full text-center py-2 text-xs font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          Cancel Ride (Zero Fee)
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                <Car className="w-12 h-12 text-orange-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-900">No Active Ride Selected</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  You don’t have an active ride being tracked right now. Book an instant safe ride with a verified woman
                  driver.
                </p>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="mt-5 px-5 py-2.5 bg-[#EA580C] text-white text-xs font-bold rounded-xl shadow"
                >
                  Book a Sakhi Ride
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: MANAGE BOOKINGS */}
        {dashboardTab === 'bookings' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <h2 className="text-xl font-bold text-slate-950">Manage Your Rides & Bookings</h2>
                <p className="text-xs text-slate-500">
                  Review upcoming scheduled trips, active rides, and past completed journeys with receipts.
                </p>
              </div>

              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="px-4 py-2 bg-[#EA580C] text-white text-xs font-bold rounded-lg shadow-sm flex items-center gap-1.5 self-start"
              >
                <Plus className="w-4 h-4" />
                <span>New Booking</span>
              </button>
            </div>

            <div className="space-y-4">
              {rides.map((ride) => {
                const isCurrent = ride.id === activeRideId;
                return (
                  <div
                    key={ride.id}
                    className={`bg-white rounded-2xl p-5 border transition-all ${
                      isCurrent
                        ? 'border-orange-500 ring-2 ring-orange-500/10 shadow-md'
                        : 'border-slate-200 hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#EA580C] flex items-center justify-center font-bold text-xs shrink-0">
                          {ride.rideType.split(' ')[1]?.[0] || 'S'}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-extrabold text-sm text-slate-900 font-mono">#{ride.id}</span>
                            <span className="text-slate-400">·</span>
                            <span className="text-xs font-bold text-slate-700">{ride.rideType}</span>
                          </div>
                          <p className="text-[11px] text-slate-500">{ride.bookedAt}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                            ride.status === 'arriving'
                              ? 'bg-emerald-100 text-emerald-800'
                              : ride.status === 'scheduled'
                              ? 'bg-blue-100 text-blue-800'
                              : ride.status === 'completed'
                              ? 'bg-slate-100 text-slate-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {ride.status}
                        </span>

                        <span className="text-base font-black text-slate-900 tabular-nums">₹{ride.fare}</span>
                      </div>
                    </div>

                    {/* Route Details */}
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0" />
                          <span className="text-slate-700 leading-snug">{ride.pickup}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#EA580C] mt-1 shrink-0" />
                          <span className="text-slate-700 leading-snug">{ride.destination}</span>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between">
                        {ride.driver && (
                          <div className="flex items-center gap-3 text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                            <div className="w-7 h-7 rounded-lg bg-orange-200 text-orange-800 font-bold flex items-center justify-center text-xs">
                              {ride.driver.name.charAt(0)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="font-bold text-slate-900 block truncate">{ride.driver.name}</span>
                              <span className="text-[11px] text-slate-500 font-mono">
                                {ride.driver.vehicleNumber}
                              </span>
                            </div>
                            <span className="text-xs font-bold text-amber-600">★ {ride.driver.rating}</span>
                          </div>
                        )}

                        <div className="mt-3 flex items-center justify-end gap-2">
                          {ride.status === 'arriving' && (
                            <button
                              onClick={() => {
                                setActiveRideId(ride.id);
                                setDashboardTab('track');
                              }}
                              className="px-3.5 py-1.5 bg-[#EA580C] text-white text-xs font-bold rounded-lg shadow-sm"
                            >
                              Track Real-Time
                            </button>
                          )}

                          {ride.status === 'completed' && (
                            <button
                              onClick={() => showToast(`Invoice PDF downloaded for Ride #${ride.id}`)}
                              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg"
                            >
                              Download Receipt
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: DRIVER PROFILES DIRECTORY */}
        {dashboardTab === 'drivers' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <h2 className="text-xl font-bold text-slate-950">Verified Women Driver Directory</h2>
                <p className="text-xs text-slate-500">
                  Inspect driver credentials, police certificates, passenger reviews, and request preferred captains.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={driverFilter}
                  onChange={(e) => setDriverFilter(e.target.value)}
                  className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-700"
                >
                  <option value="all">All Vehicle Fleets</option>
                  <option value="Sakhi Comfort">Sakhi Comfort</option>
                  <option value="Sakhi Night Guardian">Night Guardian</option>
                  <option value="Sakhi Shakti Auto">Shakti Auto</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VERIFIED_DRIVERS.filter(
                (d) => driverFilter === 'all' || d.vehicleType.toLowerCase().includes(driverFilter.toLowerCase())
              ).map((driver) => (
                <div
                  key={driver.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 text-white font-black text-lg flex items-center justify-center shadow">
                          {driver.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900">{driver.name}</h3>
                          <p className="text-xs text-slate-500">{driver.vehicleType}</p>
                        </div>
                      </div>

                      <div className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        ★ {driver.rating}
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-1">
                      <p className="font-semibold text-slate-800">{driver.vehicleModel}</p>
                      <p className="font-mono text-slate-500">{driver.vehicleNumber}</p>
                    </div>

                    <p className="mt-3 text-xs text-slate-600 line-clamp-3 leading-relaxed">{driver.bio}</p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {driver.badges.slice(0, 2).map((b, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-bold text-orange-800 bg-orange-50 px-2 py-0.5 rounded-md"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedDriver(driver)}
                      className="flex-1 py-2 text-xs font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors border border-slate-200"
                    >
                      Full Dossier
                    </button>
                    <button
                      onClick={() => {
                        setIsBookingModalOpen(true);
                      }}
                      className="flex-1 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
                    >
                      Book Captain
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: SAFETY & EMERGENCY CONTACTS */}
        {dashboardTab === 'safety' && (
          <div className="space-y-6 max-w-4xl">
            <div className="pb-4 border-b border-slate-200">
              <h2 className="text-xl font-bold text-slate-950">Safety Shield & Emergency Circle</h2>
              <p className="text-xs text-slate-500">
                Configure trusted family and friends who automatically receive live GPS tracking links when you board.
              </p>
            </div>

            {/* Emergency Contacts List */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">Trusted Emergency Contacts</h3>
                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Auto-SMS Alert Active</span>
                </span>
              </div>

              <div className="space-y-3">
                {user?.emergencyContacts?.map((contact, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs"
                  >
                    <div>
                      <p className="font-bold text-slate-900">{contact.name}</p>
                      <p className="text-slate-500 font-mono mt-0.5">{contact.phone}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="bg-orange-100 text-orange-800 font-bold px-2 py-0.5 rounded text-[10px]">
                        {contact.relation}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add New Contact Row */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-700 mb-3">Add Another Guardian Contact</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="Full Name (e.g. Sister Aarti)"
                    value={newContactName}
                    onChange={(e) => setNewContactName(e.target.value)}
                    className="p-2.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                  <input
                    type="tel"
                    placeholder="+91 Phone Number"
                    value={newContactPhone}
                    onChange={(e) => setNewContactPhone(e.target.value)}
                    className="p-2.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                  <button
                    onClick={() => {
                      if (!newContactName || !newContactPhone) {
                        showToast('Please enter both contact name and phone.');
                        return;
                      }
                      showToast(`Added ${newContactName} to your emergency circle!`);
                      setNewContactName('');
                      setNewContactPhone('');
                    }}
                    className="py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    Add Guardian
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Police SOS Sync Card */}
            <div className="bg-red-50/70 border border-red-200 rounded-2xl p-6 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-red-950 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span>Direct Women Police Control Room Integration</span>
                </h4>
                <p className="text-red-900 mt-1 leading-relaxed">
                  In case of immediate threat, pressing the in-app SOS immediately broadcasts high-precision coordinates,
                  vehicle number, driver details, and cabin live audio to Delhi Police 112 / Women Helpline 1091.
                </p>
              </div>

              <button
                onClick={() => setIsSosModalOpen(true)}
                className="px-4 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl whitespace-nowrap shadow-sm shrink-0"
              >
                Test Emergency SOS
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
