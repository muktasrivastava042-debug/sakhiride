'use client';

import React from 'react';
import Link from 'next/link';
import { SakhiLogo } from './SakhiLogo';
import { useApp } from '@/context/AppContext';
import { ShieldCheck, Phone, Heart, GitBranch, MapPin } from 'lucide-react';

export function Footer() {
  const { setIsGitModalOpen, setIsSosModalOpen } = useApp();

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <SakhiLogo variant="full" size="md" theme="dark" />
            </Link>
            <p className="mt-4 text-xs text-slate-400 leading-relaxed max-w-sm">
              Sakhi Ride Varanasi is Kashi’s premier safety-certified, women-only mobility network. Exclusively connecting
              female passengers with 100% verified Banaras women drivers for secure, respectful, and dignified pilgrimage and
              city transit.
            </p>
            <div className="mt-4 flex items-center gap-2 text-slate-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Varanasi Police Commissionerate & Pink Booth Integrated</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-slate-400 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Mahmoorganj Road, Opp. Sigra Stadium, Varanasi, UP 221010</span>
            </div>
          </div>

          {/* Quick Nav across all 5 pages */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">5 Dedicated Portals</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="hover:text-orange-400 transition-colors">
                  1. Home Page
                </Link>
              </li>
              <li>
                <Link href="/rides" className="hover:text-orange-400 transition-colors">
                  2. Rides, Bookings & Yatra Hub
                </Link>
              </li>
              <li>
                <Link href="/women-safety" className="text-orange-400 font-bold hover:underline transition-colors">
                  3. Women Safety & Helplines (1090/112)
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-orange-400 transition-colors">
                  4. Kashi Stories & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition-colors">
                  5. Contact & Support Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Emergency & Support */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Varanasi Women Emergency Helplines
            </h4>
            <ul className="space-y-2.5 text-slate-300">
              <li className="flex items-center justify-between">
                <span className="text-slate-400">UP Women Power Line:</span>
                <a href="tel:1090" className="font-mono text-[#F97316] font-bold hover:underline">
                  1090 (Toll-Free)
                </a>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-slate-400">UP Police Emergency (ERSS):</span>
                <a href="tel:112" className="font-mono text-white font-bold hover:underline">
                  112
                </a>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-slate-400">Varanasi Mahila Thana:</span>
                <a href="tel:05422508100" className="font-mono text-slate-200 hover:underline">
                  0542-2508100
                </a>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-slate-400">24/7 Sakhi Passenger Desk:</span>
                <a href="tel:18007254422" className="font-mono text-orange-400 font-bold hover:underline">
                  1800-725-4422
                </a>
              </li>
              <li className="pt-2 flex items-center gap-2">
                <button
                  onClick={() => setIsSosModalOpen(true)}
                  className="px-3 py-1.5 bg-red-950/80 border border-red-800 text-red-400 hover:text-white hover:bg-red-900 rounded-lg text-[11px] font-bold transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Launch Live SOS Simulator</span>
                </button>
                <button
                  onClick={() => setIsGitModalOpen(true)}
                  className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 rounded-lg text-[11px] font-medium transition-colors flex items-center gap-1.5"
                >
                  <GitBranch className="w-3.5 h-3.5 text-orange-400" />
                  <span>Git Repo</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} Sakhi Ride Varanasi Mobility Inc. Dedicated to women&apos;s safety & empowerment in Kashi.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/women-safety" className="hover:text-slate-400">
              Women Safety Charter
            </Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-slate-400">
              Pink Booth Locations
            </Link>
            <span>·</span>
            <Link href="/blog" className="hover:text-slate-400">
              Banaras Stories
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
