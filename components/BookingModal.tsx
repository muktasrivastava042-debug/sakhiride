'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { VEHICLE_FLEET, POPULAR_LOCATIONS, VERIFIED_DRIVERS } from '@/lib/data';
import { X, MapPin, ShieldCheck, Car, Clock, CreditCard, ArrowRight, CheckCircle2 } from 'lucide-react';

export function BookingModal() {
  const { isBookingModalOpen, setIsBookingModalOpen, addNewRide } = useApp();

  const [pickup, setPickup] = useState(POPULAR_LOCATIONS[0]);
  const [destination, setDestination] = useState(POPULAR_LOCATIONS[1]);
  const [fleetId, setFleetId] = useState(VEHICLE_FLEET[0].id);
  const [scheduleTime, setScheduleTime] = useState('Immediate Dispatch (~3 mins)');
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Card' | 'Sakhi Wallet' | 'Cash on Arrival'>('UPI');
  const [notifyEmergency, setNotifyEmergency] = useState(true);

  if (!isBookingModalOpen) return null;

  const selectedFleet = VEHICLE_FLEET.find((f) => f.id === fleetId) || VEHICLE_FLEET[0];
  const distanceKm = 18.2;
  const fare = Math.round(selectedFleet.baseFare + distanceKm * selectedFleet.ratePerKm);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNewRide({
      pickup,
      destination,
      rideType: selectedFleet.name,
      fare,
      distanceKm,
      status: 'arriving',
      paymentMethod,
      emergencyContactsNotified: notifyEmergency,
    });
    setIsBookingModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-150">
        <button
          onClick={() => setIsBookingModalOpen(false)}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">
            Women-Exclusive Safe Mobility
          </span>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Book Your Sakhi Ride</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Guaranteed 100% verified female driver · Real-time police sync · Fixed fare
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Pickup & Drop */}
          <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div>
              <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                Pickup Point
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
                Drop Destination
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

          {/* Vehicle Fleet Selection */}
          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 mb-2">
              Select Fleet
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
                        ₹{Math.round(fleet.baseFare + distanceKm * fleet.ratePerKm)}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-0.5">{fleet.category.split('/')[0]}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 mb-2">
              Payment Method
            </label>
            <div className="grid grid-cols-4 gap-2 text-xs">
              {(['UPI', 'Card', 'Sakhi Wallet', 'Cash on Arrival'] as const).map((method) => (
                <button
                  key={method}
                  type="button"
                  onClick={() => setPaymentMethod(method)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    paymentMethod === method
                      ? 'border-slate-900 bg-slate-900 text-white font-bold'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>

          {/* Safety Checkbox */}
          <div className="pt-2 flex items-center gap-2 text-xs text-slate-700">
            <input
              type="checkbox"
              id="notifyEmergency"
              checked={notifyEmergency}
              onChange={(e) => setNotifyEmergency(e.target.checked)}
              className="rounded text-orange-600 focus:ring-orange-500"
            />
            <label htmlFor="notifyEmergency" className="cursor-pointer">
              Automatically broadcast live GPS ride link to my emergency contacts
            </label>
          </div>

          {/* Fare Breakdown & Submit */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 block">Total Fare</span>
              <span className="text-2xl font-black text-slate-900 tabular-nums">₹{fare}</span>
            </div>

            <button
              type="submit"
              className="px-6 py-3.5 bg-gradient-to-r from-[#FF7A00] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white text-xs font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <span>Confirm & Dispatch Driver</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
