'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { X, ShieldCheck, Star, Award, CheckCircle2, Phone, Calendar, Heart } from 'lucide-react';

export function DriverDetailModal() {
  const { selectedDriver, setSelectedDriver, setIsBookingModalOpen } = useApp();

  if (!selectedDriver) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-150">
        <button
          onClick={() => setSelectedDriver(null)}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close driver profile dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Driver Header */}
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 text-white font-black text-2xl flex items-center justify-center shadow-lg shrink-0">
            {selectedDriver.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-900">{selectedDriver.name}</h2>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>Verified Pilot</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {selectedDriver.age} yrs · {selectedDriver.experienceYears} Years Driving Professional
            </p>
            <div className="flex items-center gap-2 mt-2 text-xs">
              <span className="font-bold text-amber-600 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                <span>{selectedDriver.rating}</span>
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600 font-semibold">
                {selectedDriver.totalRides.toLocaleString()} safe rides completed
              </span>
            </div>
          </div>
        </div>

        {/* Vehicle & Verification Card */}
        <div className="mt-6 bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-slate-500 font-medium">Assigned Fleet</span>
            <span className="font-bold text-slate-900">{selectedDriver.vehicleType}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500 font-medium">Car Model</span>
            <span className="font-semibold text-slate-900">{selectedDriver.vehicleModel}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500 font-medium">Registration</span>
            <span className="font-mono font-bold text-[#EA580C]">{selectedDriver.vehicleNumber}</span>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-slate-200/60">
            <span className="text-slate-500 font-medium">Police Clearance</span>
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{selectedDriver.policeClearanceDate}</span>
            </span>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">About Captain</h4>
          <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{selectedDriver.bio}</p>
        </div>

        {/* Badges & Specializations */}
        <div className="mt-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Safety Badges & Certifications
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {selectedDriver.badges.map((badge, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold text-orange-900 bg-orange-100/80 px-2.5 py-1 rounded-lg"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Verified Rider Review */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Recent Passenger Feedback</h4>
          <div className="p-3.5 bg-orange-50/50 rounded-xl border border-orange-100 text-xs">
            <div className="flex items-center justify-between text-slate-500 text-[11px] mb-1">
              <span className="font-bold text-slate-800">{selectedDriver.recentReview.author}</span>
              <span>{selectedDriver.recentReview.date}</span>
            </div>
            <p className="text-slate-700 italic">&ldquo;{selectedDriver.recentReview.text}&rdquo;</p>
          </div>
        </div>

        {/* Book Action */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
          <button
            onClick={() => setSelectedDriver(null)}
            className="flex-1 py-2.5 border border-slate-300 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-50"
          >
            Close
          </button>
          <button
            onClick={() => {
              setSelectedDriver(null);
              setIsBookingModalOpen(true);
            }}
            className="flex-1 py-2.5 bg-gradient-to-r from-[#FF7A00] to-[#EA580C] text-white text-xs font-bold rounded-xl shadow-md"
          >
            Request This Captain
          </button>
        </div>
      </div>
    </div>
  );
}
