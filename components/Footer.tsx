'use client';

import React from 'react';
import { SakhiLogo } from './SakhiLogo';
import { useApp } from '@/context/AppContext';
import { ShieldCheck, Phone, Heart, GitBranch } from 'lucide-react';

export function Footer() {
  const { setCurrentView, setIsGitModalOpen, setIsSosModalOpen } = useApp();

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <SakhiLogo variant="full" size="md" theme="dark" />
            <p className="mt-4 text-xs text-slate-400 leading-relaxed max-w-sm">
              Sakhi Ride is India’s first safety-certified, women-only mobility network. Dedicated to connecting female
              passengers with 100% verified women drivers for secure, respectful, and dignified urban transit.
            </p>
            <div className="mt-4 flex items-center gap-2 text-slate-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Registered Under Ministry of Women & Child Safety Tech Initiative</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Explore</h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => {
                    setCurrentView('home');
                    document.getElementById('why-sakhi')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-orange-400 transition-colors"
                >
                  Why Sakhi
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('home');
                    document.getElementById('safety-protocol')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-orange-400 transition-colors"
                >
                  Safety Triple-Shield
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('home');
                    document.getElementById('verified-drivers')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-orange-400 transition-colors"
                >
                  Women Driver Fleet
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('home');
                    document.getElementById('fleet-pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-orange-400 transition-colors"
                >
                  Fleet & Fare Rates
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('home');
                    document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-orange-400 transition-colors"
                >
                  Safety FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Emergency & Support */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Emergency & Helpline</h4>
            <ul className="space-y-2.5 text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-[#F97316] font-bold">Women Helpline:</span>
                <span className="font-mono text-white font-bold">1091</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#F97316] font-bold">National Emergency:</span>
                <span className="font-mono text-white font-bold">112</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-400">Sakhi 24/7 Desk:</span>
                <span className="font-mono text-slate-200">1800-725-4422</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => setIsSosModalOpen(true)}
                  className="px-3 py-1.5 bg-red-950/80 border border-red-800 text-red-400 hover:text-white hover:bg-red-900 rounded-lg text-[11px] font-bold transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Launch Live SOS Simulator</span>
                </button>
              </li>
            </ul>
          </div>

          {/* GitHub / Version Control */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Version Control</h4>
            <p className="text-[11px] text-slate-400 mb-3">
              Git initialized on branch <code className="text-orange-400">main</code> for team collaboration.
            </p>
            <button
              onClick={() => setIsGitModalOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 rounded-lg text-xs font-semibold transition-colors"
            >
              <GitBranch className="w-3.5 h-3.5 text-orange-400" />
              <span>GitHub Repo Guide</span>
            </button>
          </div>
        </div>

        {/* Quiet Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Sakhi Ride Mobility Inc. Designed with care for women&apos;s safety & empowerment.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Charter</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Driver Code of Ethics</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Zero Discrimination Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
