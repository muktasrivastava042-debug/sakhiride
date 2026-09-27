'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SakhiLogo } from './SakhiLogo';
import { useApp } from '@/context/AppContext';
import { ShieldCheck, PhoneCall, User, Menu, X, ArrowRight, LayoutDashboard, GitBranch } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const {
    user,
    setIsAuthModalOpen,
    setAuthModalMode,
    setIsBookingModalOpen,
    setIsSosModalOpen,
    setIsGitModalOpen,
    logoutUser,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/rides', label: 'Rides & Packages' },
    { href: '/women-safety', label: 'Women Safety & Helplines', isSpecial: true },
    { href: '/blog', label: 'Kashi Stories & Blog' },
    { href: '/contact', label: 'Contact Support' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-[0_2px_12px_rgba(249,115,22,0.04)]">
      {/* Emergency Hotline Ticker / Varanasi Trust Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-orange-400">Varanasi (Kashi) Safe Mobility</span>
            <span className="hidden md:inline text-slate-600">·</span>
            <span className="hidden md:inline text-slate-400">
              Ghats, Babatpur Airport, Cantt, BHU & Sarnath Safe Transit
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-medium">
            <Link
              href="/women-safety"
              className="flex items-center gap-1.5 text-orange-400 hover:text-orange-300 font-bold transition-colors"
            >
              <span>UP 1090 / 112 Active</span>
            </Link>
            <button
              onClick={() => setIsSosModalOpen(true)}
              className="flex items-center gap-1 text-red-400 hover:text-red-300 font-bold transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
              <span>Live Police SOS</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 zones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Single element brand wordmark */}
        <Link
          href="/"
          className="text-left focus:outline-none group focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg p-1"
          aria-label="Sakhi Ride Varanasi Home"
        >
          <SakhiLogo variant="full" size="md" />
        </Link>

        {/* Zone 2: Clean 5 page navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? 'text-[#EA580C] font-extrabold border-b-2 border-[#EA580C]'
                    : link.isSpecial
                    ? 'text-orange-950 font-bold hover:text-[#EA580C] flex items-center gap-1.5'
                    : 'hover:text-[#EA580C] hover:underline underline-offset-8'
                }`}
              >
                <span>{link.label}</span>
                {link.isSpecial && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Primary actions */}
        <div className="flex items-center gap-3">
          {/* Quick Rides Link */}
          <Link
            href="/rides"
            className="hidden md:flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#EA580C] bg-orange-50 hover:bg-orange-100 rounded-lg border border-orange-200 transition-colors whitespace-nowrap"
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Track & Manage</span>
          </Link>

          {/* User Profile / Auth Button */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2 p-1.5 rounded-lg border border-slate-200 hover:border-orange-300 text-xs font-semibold text-slate-800 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 text-white flex items-center justify-center font-bold text-xs">
                  {user.name.charAt(0)}
                </div>
                <span className="hidden sm:inline max-w-[90px] truncate">{user.name.split(' ')[0]}</span>
              </button>

              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-xs font-bold text-slate-900">{user.name}</p>
                    <p className="text-[11px] text-slate-500 truncate">{user.phone}</p>
                    <div className="mt-1 flex items-center gap-1 text-[10px] text-emerald-700 font-semibold">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>Kashi Verified Rider</span>
                    </div>
                  </div>
                  <Link
                    href="/rides"
                    onClick={() => setProfileDropdownOpen(false)}
                    className="block px-4 py-2 text-xs text-slate-700 hover:bg-orange-50 hover:text-orange-700 font-medium"
                  >
                    Track Rides & Bookings
                  </Link>
                  <Link
                    href="/women-safety"
                    onClick={() => setProfileDropdownOpen(false)}
                    className="block px-4 py-2 text-xs text-slate-700 hover:bg-orange-50 hover:text-orange-700 font-medium"
                  >
                    Safety Shield & Helplines
                  </Link>
                  <button
                    onClick={() => {
                      setIsGitModalOpen(true);
                      setProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-orange-50 hover:text-orange-700 font-medium flex items-center gap-2"
                  >
                    <GitBranch className="w-3.5 h-3.5 text-slate-500" />
                    <span>GitHub Repo Guide</span>
                  </button>
                  <button
                    onClick={() => {
                      logoutUser();
                      setProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-red-600 hover:bg-red-50 font-medium border-t border-slate-100"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => {
                setAuthModalMode('login');
                setIsAuthModalOpen(true);
              }}
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors whitespace-nowrap"
            >
              Sign In
            </button>
          )}

          {/* Primary CTA */}
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#FF7A00] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] rounded-lg shadow-sm hover:shadow-md transition-all active:scale-[0.98] whitespace-nowrap"
          >
            <span>Book Kashi Ride</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-orange-100 px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-4 text-sm font-semibold text-slate-800">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1 ${pathname === link.href ? 'text-[#EA580C] font-bold' : 'hover:text-orange-600'}`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsBookingModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 text-center text-xs font-bold text-white bg-gradient-to-r from-[#FF7A00] to-[#EA580C] rounded-lg shadow"
              >
                Book a Varanasi Ride
              </button>
              {!user && (
                <button
                  onClick={() => {
                    setAuthModalMode('login');
                    setIsAuthModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 text-center text-xs font-semibold text-slate-700 border border-slate-300 rounded-lg"
                >
                  Sign In / Register
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
