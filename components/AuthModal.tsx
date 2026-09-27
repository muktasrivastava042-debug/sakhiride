'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { SakhiLogo } from './SakhiLogo';
import { ShieldCheck, Phone, User, Mail, ArrowRight, X, CheckCircle2, Lock } from 'lucide-react';

export function AuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, authModalMode, setAuthModalMode, loginUser } = useApp();

  const [role, setRole] = useState<'passenger' | 'driver'>(
    authModalMode === 'driver-partner' ? 'driver' : 'passenger'
  );
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [step, setStep] = useState<'details' | 'otp'>('details');
  const [otp, setOtp] = useState('');
  const [safetyConsent, setSafetyConsent] = useState(true);

  if (!isAuthModalOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setStep('otp');
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    loginUser({
      name: name || (role === 'driver' ? 'Sunita Devi' : 'Priya Sharma'),
      phone: phone || '+91 98104 55912',
      email: email || 'user@sakhiride.com',
      role,
      isVerified: true,
    });
  };

  const handleQuickDemoLogin = (userType: 'passenger' | 'driver') => {
    if (userType === 'passenger') {
      loginUser({
        name: 'Priya Sharma',
        phone: '+91 98104 55912',
        email: 'priya.sharma@example.com',
        role: 'passenger',
        isVerified: true,
      });
    } else {
      loginUser({
        name: 'Sunita Devi',
        phone: '+91 98765 11092',
        email: 'sunita.devi@sakhiride.com',
        role: 'driver',
        isVerified: true,
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-150">
        {/* Close Button */}
        <button
          onClick={() => setIsAuthModalOpen(false)}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close auth dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center">
          <SakhiLogo variant="full" size="sm" className="mx-auto justify-center" />
          <h2 className="text-xl font-bold text-slate-900 mt-4">
            {step === 'details'
              ? role === 'driver'
                ? 'Join as Sakhi Driver Partner'
                : 'Welcome to Sakhi Ride'
              : 'Enter Verification Code'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {step === 'details'
              ? 'Safe, verified transportation exclusively by women, for women.'
              : `We sent a 4-digit security code to ${phone || '+91 98104 55912'}`}
          </p>
        </div>

        {/* Role Segmented Selector */}
        {step === 'details' && (
          <div className="mt-5 p-1 bg-slate-100 rounded-xl flex items-center gap-1 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setRole('passenger')}
              className={`flex-1 py-2 rounded-lg transition-all ${
                role === 'passenger' ? 'bg-white text-slate-900 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Female Passenger
            </button>
            <button
              type="button"
              onClick={() => setRole('driver')}
              className={`flex-1 py-2 rounded-lg transition-all ${
                role === 'driver' ? 'bg-white text-slate-900 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Female Driver Partner
            </button>
          </div>
        )}

        {/* Details Form Step */}
        {step === 'details' && (
          <form onSubmit={handleSendOtp} className="mt-5 space-y-3.5">
            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                Your Full Name
              </label>
              <div className="relative flex items-center">
                <User className="w-4 h-4 text-slate-400 absolute left-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-orange-500 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                Mobile Number (for Safety OTP)
              </label>
              <div className="relative flex items-center">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3" />
                <input
                  type="tel"
                  required
                  placeholder="+91 98104 55912"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-orange-500 focus:bg-white"
                />
              </div>
            </div>

            {role === 'driver' && (
              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                  Driving License Number
                </label>
                <input
                  type="text"
                  placeholder="DL-0420190012345"
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-orange-500 focus:bg-white"
                />
              </div>
            )}

            {/* Safety Declaration */}
            <div className="pt-1 flex items-start gap-2 text-[11px] text-slate-600">
              <input
                type="checkbox"
                id="safetyConsent"
                checked={safetyConsent}
                onChange={(e) => setSafetyConsent(e.target.checked)}
                className="mt-0.5 rounded text-orange-600 focus:ring-orange-500"
              />
              <label htmlFor="safetyConsent" className="leading-snug cursor-pointer">
                I verify that I am a female rider / applying female driver, and agree to the Sakhi Safety & Police Sync Charter.
              </label>
            </div>

            <button
              type="submit"
              disabled={!safetyConsent}
              className="w-full mt-4 py-3 bg-gradient-to-r from-[#FF7A00] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white text-xs font-bold rounded-xl shadow-md transition-all disabled:opacity-50"
            >
              Continue with OTP
            </button>
          </form>
        )}

        {/* OTP Step */}
        {step === 'otp' && (
          <form onSubmit={handleVerifyOtp} className="mt-5 space-y-4">
            <div className="p-4 bg-orange-50 rounded-xl border border-orange-200 text-center">
              <span className="text-[10px] uppercase font-bold text-orange-950 block">Testing Demo OTP</span>
              <span className="text-xl font-black tracking-widest text-[#EA580C] font-mono">4821</span>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                Enter 4-Digit Code
              </label>
              <input
                type="text"
                maxLength={4}
                required
                placeholder="4821"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full text-center text-lg tracking-widest font-mono py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#FF7A00] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white text-xs font-bold rounded-xl shadow-md transition-all"
            >
              Verify & Enter Dashboard
            </button>

            <button
              type="button"
              onClick={() => setStep('details')}
              className="w-full text-center text-xs text-slate-500 hover:text-slate-800"
            >
              Change Mobile Number
            </button>
          </form>
        )}

        {/* Quick Demo Login Helpers */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center mb-2.5">
            Instant 1-Click Demo Login
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              type="button"
              onClick={() => handleQuickDemoLogin('passenger')}
              className="p-2 text-center bg-slate-50 hover:bg-orange-50 hover:text-orange-700 border border-slate-200 rounded-xl transition-colors font-semibold"
            >
              Rider Priya
            </button>
            <button
              type="button"
              onClick={() => handleQuickDemoLogin('driver')}
              className="p-2 text-center bg-slate-50 hover:bg-orange-50 hover:text-orange-700 border border-slate-200 rounded-xl transition-colors font-semibold"
            >
              Driver Sunita
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
