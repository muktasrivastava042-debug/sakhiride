'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import {
  VEHICLE_FLEET,
  POPULAR_LOCATIONS,
  VERIFIED_DRIVERS,
  VARANASI_PILGRIMAGE_PACKAGES,
  DriverProfile,
  RideBooking,
} from '@/lib/data';
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
  ArrowRight,
  Sparkles,
  Compass
} from 'lucide-react';

export default function RidesPage() {
  const {
    user,
    rides,
    activeRideId,
    setActiveRideId,
    cancelRide,
    addNewRide,
    setIsBookingModalOpen,
    setSelectedDriver,
    setIsSosModalOpen,
    showToast,
  } = useApp();

  const [activeTab, setActiveTab] = useState<'track' | 'book' | 'packages' | 'history' | 'drivers'>('track');
  const [pickup, setPickup] = useState(POPULAR_LOCATIONS[1]); // Cantt Station
  const [destination, setDestination] = useState(POPULAR_LOCATIONS[3]); // Assi Ghat
  const [fleetId, setFleetId] = useState(VEHICLE_FLEET[0].id);
  const [driverFilter, setDriverFilter] = useState('all');

  const selectedVehicle = VEHICLE_FLEET.find((v) => v.id === fleetId) || VEHICLE_FLEET[0];
  const simulatedDist = 7.4;
  const estimatedFare = Math.round(selectedVehicle.baseFare + simulatedDist * selectedVehicle.ratePerKm);

  const currentTrackedRide = rides.find((r) => r.id === activeRideId) || rides[0];

  const handleShareTrip = () => {
    navigator?.clipboard?.writeText(
      `https://sakhiride.com/vns/track/${currentTrackedRide?.id}?token=kashi-safe-pass`
    );
    showToast('Varanasi Live GPS Tracking Link copied! Shared with emergency contacts.');
  };

  const handleMaskedCall = (driverName: string) => {
    showToast(`Connecting encrypted masked voice call to Captain ${driverName}... (Your phone number is hidden)`);
  };

  const handleQuickBookCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const matchedDriver = VERIFIED_DRIVERS[0];
    addNewRide({
      pickup,
      destination,
      rideType: selectedVehicle.name,
      fare: estimatedFare,
      distanceKm: simulatedDist,
      status: 'arriving',
      driver: matchedDriver,
      paymentMethod: 'UPI',
      emergencyContactsNotified: true,
    });
    setActiveTab('track');
  };

  const handleBookPackage = (pkg: (typeof VARANASI_PILGRIMAGE_PACKAGES)[0]) => {
    const matchedDriver = VERIFIED_DRIVERS[1];
    addNewRide({
      pickup: pkg.title.includes('Airport') ? POPULAR_LOCATIONS[0] : POPULAR_LOCATIONS[3],
      destination: pkg.title.includes('Airport') ? POPULAR_LOCATIONS[4] : 'Kashi Holy Ghats Circuit',
      rideType: pkg.title.includes('Airport') ? 'Sakhi Sangam Comfort' : 'Sakhi Ganga E-Auto',
      fare: pkg.title.includes('Airport') ? 680 : 349,
      distanceKm: 16.5,
      status: 'arriving',
      driver: matchedDriver,
      paymentMethod: 'UPI',
      emergencyContactsNotified: true,
    });
    setActiveTab('track');
    showToast(`Package "${pkg.title}" booked with Captain ${matchedDriver.name}!`);
  };

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-slate-900 pb-20">
      {/* Page Header */}
      <div className="bg-white border-b border-orange-100/90 shadow-sm sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black text-slate-950 tracking-tight">Varanasi Rides & Bookings Hub</h1>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>Kashi Safe Shield Active</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Track live active rides, schedule Babatpur Airport & Ghat darshan, and inspect verified Banaras women drivers.
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setIsSosModalOpen(true)}
                className="px-3.5 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-lg shadow-sm flex items-center gap-1.5 transition-colors"
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Instant Police SOS</span>
              </button>

              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-[#FF7A00] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white text-xs font-bold rounded-lg shadow-sm flex items-center gap-1.5 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Quick Book Ride</span>
              </button>
            </div>
          </div>

          {/* Sub-Tabs Selector */}
          <div className="flex items-center gap-1 overflow-x-auto py-2.5 mt-2 border-t border-slate-100 text-xs font-semibold scrollbar-none">
            <button
              onClick={() => setActiveTab('track')}
              className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'track'
                  ? 'bg-orange-50 text-[#EA580C] font-bold shadow-sm border border-orange-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Track Active Ride</span>
              {currentTrackedRide?.status === 'arriving' && (
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('book')}
              className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'book'
                  ? 'bg-orange-50 text-[#EA580C] font-bold shadow-sm border border-orange-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Car className="w-3.5 h-3.5" />
              <span>Book Varanasi Trip</span>
            </button>

            <button
              onClick={() => setActiveTab('packages')}
              className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'packages'
                  ? 'bg-orange-50 text-[#EA580C] font-bold shadow-sm border border-orange-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Pilgrimage Packages (3)</span>
            </button>

            <button
              onClick={() => setActiveTab('history')}
              className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'history'
                  ? 'bg-orange-50 text-[#EA580C] font-bold shadow-sm border border-orange-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Manage Bookings ({rides.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('drivers')}
              className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'drivers'
                  ? 'bg-orange-50 text-[#EA580C] font-bold shadow-sm border border-orange-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Varanasi Drivers Directory ({VERIFIED_DRIVERS.length})</span>
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* SUBTAB 1: TRACK ACTIVE RIDE */}
        {activeTab === 'track' && (
          <div className="space-y-6">
            {currentTrackedRide ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Vector Map Canvas */}
                <div className="lg:col-span-8 bg-slate-950 rounded-2xl p-6 text-white border border-slate-800 shadow-xl flex flex-col justify-between min-h-[460px] relative overflow-hidden">
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
                        Ride #{currentTrackedRide.id} · {currentTrackedRide.rideType} (Varanasi)
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleShareTrip}
                        className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-orange-300 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors border border-slate-700"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Share Live Yatra</span>
                      </button>
                    </div>
                  </div>

                  {/* Route Canvas: Cantt -> Godowlia -> Assi Ghat */}
                  <div className="relative z-10 my-8 flex-1 flex items-center justify-center">
                    <svg className="w-full max-h-[260px]" viewBox="0 0 600 240" fill="none">
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
                          Cantt Exit Gate
                        </text>
                      </g>

                      {/* Female Driver Marker */}
                      <g transform="translate(290, 68)">
                        <circle r="20" fill="#EA580C" opacity="0.25" className="animate-ping" />
                        <circle r="12" fill="#F97316" />
                        <circle r="6" fill="#FFFFFF" />
                        <text y="-20" x="0" textAnchor="middle" fill="#FDBA74" fontSize="12" fontWeight="bold">
                          Captain Shanti (~2 mins away)
                        </text>
                      </g>

                      {/* Destination Pin */}
                      <g transform="translate(550, 170)">
                        <circle r="10" fill="#EA580C" />
                        <circle r="5" fill="#FFFFFF" />
                        <text y="-18" x="0" textAnchor="middle" fill="#FED7AA" fontSize="11" fontWeight="bold">
                          Assi Ghat
                        </text>
                      </g>
                    </svg>
                  </div>

                  {/* Bottom Telemetry Strip */}
                  <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px] font-bold uppercase">Estimated Arrival</span>
                      <span className="text-emerald-400 font-extrabold text-sm font-mono">
                        {currentTrackedRide.status === 'arriving' ? '2 Minutes (1.1 km)' : 'Trip in progress'}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[10px] font-bold uppercase">Route Telemetry</span>
                      <span className="text-slate-200 font-mono">Sigra-Rathyatra Road · Smooth</span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[10px] font-bold uppercase">Security Protocol</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>UP 1090 & Assi Pink Booth Synced</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Driver Card, OTP, & Safety Controls */}
                <div className="lg:col-span-4 space-y-6">
                  {currentTrackedRide.driver && (
                    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Assigned Banaras Captain
                        </span>
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>Chowk Police Verified</span>
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
                        <p className="text-slate-500 text-[11px]">Clean cabin · Luggage net · Emergency SOS switch</p>
                      </div>

                      {/* OTP Box */}
                      <div className="mt-5 p-4 bg-orange-50/70 border border-orange-200 rounded-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-orange-950">
                            Give OTP to Captain
                          </p>
                          <p className="text-xs text-orange-900">Begins your safe ride</p>
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
                          Captain Profile
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Trip Details Card */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Varanasi Route Summary
                    </h4>

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
                        <span className="text-slate-500 block">Total Fixed Fare</span>
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
                          Cancel Ride (Zero Cancellation Fee)
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
                  Ready to travel across the holy city? Book a ride with a verified Varanasi female captain.
                </p>
                <button
                  onClick={() => setActiveTab('book')}
                  className="mt-5 px-5 py-2.5 bg-[#EA580C] text-white text-xs font-bold rounded-xl shadow"
                >
                  Book a Varanasi Ride
                </button>
              </div>
            )}
          </div>
        )}

        {/* SUBTAB 2: BOOK VARANASI TRIP */}
        {activeTab === 'book' && (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
                Fast Varanasi Booking
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-1">Book Your Safe Ride in Kashi</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                100% verified female drivers · Fixed upfront pricing · Emergency Police 1090/112 sync
              </p>
            </div>

            <form onSubmit={handleQuickBookCustom} className="mt-6 space-y-4">
              <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div>
                  <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                    Pickup Location in Varanasi
                  </label>
                  <select
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:border-orange-500 cursor-pointer"
                  >
                    {POPULAR_LOCATIONS.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                    Drop Destination in Varanasi
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:border-orange-500 cursor-pointer"
                  >
                    {POPULAR_LOCATIONS.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-500 mb-2">
                  Select Fleet for Varanasi Roads
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {VEHICLE_FLEET.map((fleet) => {
                    const isSelected = fleet.id === fleetId;
                    return (
                      <button
                        key={fleet.id}
                        type="button"
                        onClick={() => setFleetId(fleet.id)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'border-orange-500 bg-orange-50/70 ring-2 ring-orange-500/20'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900">{fleet.name}</span>
                          <span className="text-xs font-extrabold text-[#EA580C] tabular-nums">
                            ₹{Math.round(fleet.baseFare + simulatedDist * fleet.ratePerKm)}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-0.5">{fleet.category.split('(')[0]}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 block">Total Fixed Fare</span>
                  <span className="text-2xl font-black text-slate-900 tabular-nums">₹{estimatedFare}</span>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3.5 bg-gradient-to-r from-[#FF7A00] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white text-xs font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Confirm Varanasi Dispatch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* SUBTAB 3: PILGRIMAGE PACKAGES */}
        {activeTab === 'packages' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-950">Varanasi Spiritual & Pilgrimage Packages</h2>
              <p className="text-xs text-slate-500">
                Curated safe travel circuits for women pilgrims, families, and solo female explorers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {VARANASI_PILGRIMAGE_PACKAGES.map((pkg, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-orange-100 text-orange-800">
                      {pkg.tag}
                    </span>

                    <h3 className="text-lg font-bold text-slate-900 mt-3">{pkg.title}</h3>
                    <p className="text-xs font-semibold text-[#EA580C] mt-1">{pkg.timing}</p>

                    <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600">
                      <p className="font-semibold text-slate-900 mb-1">Route Highlights:</p>
                      <p className="leading-relaxed">{pkg.route}</p>
                    </div>

                    <p className="mt-3 text-xs text-emerald-700 font-medium">✓ {pkg.includes}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Package Rate</span>
                      <span className="text-xs font-black text-slate-900">{pkg.fare}</span>
                    </div>

                    <button
                      onClick={() => handleBookPackage(pkg)}
                      className="px-4 py-2 bg-gradient-to-r from-[#FF7A00] to-[#EA580C] text-white text-xs font-bold rounded-lg shadow-sm"
                    >
                      Book Package
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUBTAB 4: MANAGE BOOKINGS */}
        {activeTab === 'history' && (
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-950">Your Bookings in Varanasi</h2>
              <p className="text-xs text-slate-500">
                Track status of active rides, scheduled temple visits, and download past ride receipts.
              </p>
            </div>

            {rides.map((ride) => (
              <div
                key={ride.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#EA580C] flex items-center justify-center font-bold text-xs shrink-0">
                    {ride.rideType.split(' ')[1]?.[0] || 'V'}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-sm text-slate-900">#{ride.id}</span>
                      <span className="text-slate-400">·</span>
                      <span className="text-xs font-bold text-slate-700">{ride.rideType}</span>
                    </div>
                    <p className="text-[11px] text-slate-500">{ride.bookedAt}</p>
                  </div>
                </div>

                <div className="text-xs space-y-1">
                  <p className="text-slate-700">
                    <span className="text-emerald-600 font-bold">From:</span> {ride.pickup}
                  </p>
                  <p className="text-slate-700">
                    <span className="text-[#EA580C] font-bold">To:</span> {ride.destination}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        ride.status === 'arriving'
                          ? 'bg-emerald-100 text-emerald-800'
                          : ride.status === 'scheduled'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {ride.status}
                    </span>
                    <p className="text-base font-black text-slate-900 tabular-nums mt-0.5">₹{ride.fare}</p>
                  </div>

                  {ride.status === 'arriving' && (
                    <button
                      onClick={() => {
                        setActiveRideId(ride.id);
                        setActiveTab('track');
                      }}
                      className="px-3.5 py-1.5 bg-[#EA580C] text-white text-xs font-bold rounded-lg shadow-sm"
                    >
                      Track Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SUBTAB 5: DRIVERS DIRECTORY */}
        {activeTab === 'drivers' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-950">Varanasi Women Captains</h2>
                <p className="text-xs text-slate-500">
                  Inspect driver credentials, police certificates from local thanas, and book preferred captains.
                </p>
              </div>

              <select
                value={driverFilter}
                onChange={(e) => setDriverFilter(e.target.value)}
                className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-700"
              >
                <option value="all">All Fleets in Varanasi</option>
                <option value="Sakhi Ganga E-Auto">Ganga E-Auto</option>
                <option value="Sakhi Kashi City EV">Kashi City EV</option>
                <option value="Sakhi Sangam Comfort">Sangam Comfort</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {VERIFIED_DRIVERS.filter(
                (d) => driverFilter === 'all' || d.vehicleType.toLowerCase().includes(driverFilter.toLowerCase())
              ).map((driver) => (
                <div
                  key={driver.id}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
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
                          <h3 className="font-bold text-slate-900 text-sm">{driver.name}</h3>
                          <p className="text-[11px] text-slate-500">{driver.locationArea}</p>
                        </div>
                      </div>

                      <div className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        ★ {driver.rating}
                      </div>
                    </div>

                    <div className="mt-4 p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                      <p className="font-semibold text-slate-800">{driver.vehicleModel}</p>
                      <p className="font-mono text-slate-500 text-[11px]">{driver.vehicleNumber}</p>
                    </div>

                    <p className="mt-3 text-xs text-slate-600 line-clamp-3 leading-relaxed">{driver.bio}</p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedDriver(driver)}
                      className="flex-1 py-2 text-xs font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors border border-slate-200"
                    >
                      Dossier
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
      </main>
    </div>
  );
}
