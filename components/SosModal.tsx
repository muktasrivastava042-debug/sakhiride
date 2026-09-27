'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { X, AlertTriangle, ShieldCheck, Radio, Phone, CheckCircle2 } from 'lucide-react';

export function SosModal() {
  const { isSosModalOpen, setIsSosModalOpen, user, showToast } = useApp();
  const [sosTriggered, setSosTriggered] = useState(false);

  if (!isSosModalOpen) return null;

  const handleSimulateSos = () => {
    setSosTriggered(true);
    showToast('🚨 SIMULATION: Emergency SOS Dispatched to Women Police Helpline 1091 & Family!');
  };

  const handleResetSos = () => {
    setSosTriggered(false);
    setIsSosModalOpen(false);
    showToast('Emergency SOS simulation safely reset.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 animate-in fade-in duration-150">
      <div className="bg-slate-950 text-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-red-900/60 relative animate-in zoom-in-95 duration-150">
        <button
          onClick={() => setIsSosModalOpen(false)}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors"
          aria-label="Close SOS modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="w-14 h-14 rounded-2xl bg-red-600/20 border border-red-500/40 text-red-500 mx-auto flex items-center justify-center">
            <Radio className="w-7 h-7 animate-pulse" />
          </div>

          <h2 className="text-xl font-black mt-4 text-white">
            {sosTriggered ? '🚨 Emergency SOS Broadcast Active' : 'Live Women Police SOS Sandbox'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {sosTriggered
              ? 'Simulation: Real-time telemetry transmitting to Delhi Police Control Room'
              : 'Test the Sakhi emergency protocol. Zero false alarms sent to actual police.'}
          </p>
        </div>

        {/* Status Box */}
        <div className="mt-6 bg-slate-900 rounded-2xl p-4 border border-slate-800 space-y-3 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-slate-400">GPS Coordinates</span>
            <span className="font-mono text-emerald-400 font-bold">28.5355° N, 77.2090° E</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-400">Police PCR Proximity</span>
            <span className="text-orange-400 font-semibold">Van #14 (approx. 450m)</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-400">Emergency Contacts</span>
            <span className="text-slate-300">
              {user?.emergencyContacts?.length || 2} Guardians Linked
            </span>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[11px]">
            <span className="text-slate-400">Cabin Audio Recording</span>
            <span className="text-emerald-400 flex items-center gap-1 font-bold">
              <CheckCircle2 className="w-3 h-3" />
              <span>Armed & Encrypted</span>
            </span>
          </div>
        </div>

        {/* Main Action Trigger */}
        <div className="mt-6">
          {!sosTriggered ? (
            <button
              onClick={handleSimulateSos}
              className="w-full py-4 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-red-600/40 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <AlertTriangle className="w-5 h-5 animate-bounce" />
              <span>Simulate SOS One-Touch Dispatch</span>
            </button>
          ) : (
            <button
              onClick={handleResetSos}
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Resolve & Deactivate Simulation</span>
            </button>
          )}
        </div>

        <p className="mt-4 text-[10px] text-slate-500 text-center leading-normal">
          In actual emergencies, pressing SOS in the mobile app triggers an audible siren or silent beacon, and connects
          you instantly with the nearest police dispatcher.
        </p>
      </div>
    </div>
  );
}
