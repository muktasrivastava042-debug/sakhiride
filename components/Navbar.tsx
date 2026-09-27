'use client';

import React, { useState } from 'react';
import { SakhiLogo } from './SakhiLogo';
import { useApp } from '@/context/AppContext';
import { ShieldCheck, PhoneCall, User, Menu, X, ArrowRight, LayoutDashboard, GitBranch } from 'lucide-react';

export function Navbar() {
  const {
    currentView,
    setCurrentView,
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

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-[0_2px_12px_rgba(249,115,22,0.04)]">
      {/* Emergency Hotline Ticker / Trust Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-slate-200">100% Drive by Women · Ride by Women</span>
            <span className="hidden md:inline text-slate-500">·</span>
            <span className="hidden md:inline text-slate-400">Delhi NCR, Bengaluru, Mumbai & Pune Safe Transit</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-medium">
            <button
              onClick={() => setIsGitModalOpen(true)}
              className="hidden sm:flex items-center gap-1.5 text-orange-400 hover:text-orange-300 transition-colors"
              title="GitHub Repository & Version Control Status"
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>Git Repo: Initialized</span>
            </button>
            <button
              onClick={() => setIsSosModalOpen(true)}
              className="flex items-center gap-1 text-red-400 hover:text-red-300 font-semibold transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
              <span>24/7 Police SOS Sync</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 zones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Single element brand wordmark */}
        <button
          onClick={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-left focus:outline-none group focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg p-1"
          aria-label="Sakhi Ride Home"
        >
          <SakhiLogo variant="full" size="md" />
        </button>

        {/* Zone 2: Clean 4-6 text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <button
            onClick={() => {
              setCurrentView('home');
              const el = document.getElementById('why-sakhi');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-[#EA580C] transition-colors hover:underline underline-offset-8"
          >
            Why Sakhi
          </button>
          <button
            onClick={() => {
              setCurrentView('home');
              const el = document.getElementById('safety-protocol');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-[#EA580C] transition-colors hover:underline underline-offset-8"
          >
            Safety Shield
          </button>
          <button
            onClick={() => {
              setCurrentView('home');
              const el = document.getElementById('verified-drivers');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-[#EA580C] transition-colors hover:underline underline-offset-8"
          >
            Women Drivers
          </button>
          <button
            onClick={() => {
              setCurrentView('home');
              const el = document.getElementById('fleet-pricing');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-[#EA580C] transition-colors hover:underline underline-offset-8"
          >
            Fleet & Fare
          </button>
          <button
            onClick={() => {
              setCurrentView('home');
              const el = document.getElementById('faq-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-[#EA580C] transition-colors hover:underline underline-offset-8"
          >
            FAQ
          </button>
        </nav>

        {/* Zone 3: Primary actions */}
        <div className="flex items-center gap-3">
          {/* Dashboard Toggle Button */}
          <button
            onClick={() => setCurrentView(currentView === 'dashboard' ? 'home' : 'dashboard')}
            className={`px-3.5 py-2 text-xs font-bold rounded-lg border transition-all flex items-center gap-1.5 whitespace-nowrap ${
              currentView === 'dashboard'
                ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                : 'bg-orange-50 text-[#EA580C] border-orange-200 hover:bg-orange-100'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>{currentView === 'dashboard' ? 'Back to Home' : 'Live Dashboard'}</span>
          </button>

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
                      <span>Female Verified Rider</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setCurrentView('dashboard');
                      setProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-orange-50 hover:text-orange-700 font-medium"
                  >
                    Track Rides & Bookings
                  </button>
                  <button
                    onClick={() => {
                      setIsGitModalOpen(true);
                      setProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-orange-50 hover:text-orange-700 font-medium flex items-center gap-2"
                  >
                    <GitBranch className="w-3.5 h-3.5 text-slate-500" />
                    <span>GitHub Repository</span>
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
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#FF7A00] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] rounded-lg shadow-sm hover:shadow-md transition-all active:scale-[0.98] whitespace-nowrap"
          >
            <span>Book a Ride</span>
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
            <button
              onClick={() => {
                setCurrentView('home');
                setMobileMenuOpen(false);
                document.getElementById('why-sakhi')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-left py-1 hover:text-orange-600"
            >
              Why Sakhi
            </button>
            <button
              onClick={() => {
                setCurrentView('home');
                setMobileMenuOpen(false);
                document.getElementById('safety-protocol')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-left py-1 hover:text-orange-600"
            >
              Safety Shield
            </button>
            <button
              onClick={() => {
                setCurrentView('home');
                setMobileMenuOpen(false);
                document.getElementById('verified-drivers')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-left py-1 hover:text-orange-600"
            >
              Women Drivers
            </button>
            <button
              onClick={() => {
                setCurrentView('home');
                setMobileMenuOpen(false);
                document.getElementById('fleet-pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-left py-1 hover:text-orange-600"
            >
              Fleet & Fare
            </button>
            <button
              onClick={() => {
                setCurrentView('dashboard');
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 text-[#EA580C] font-bold flex items-center gap-2"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Open Rider Dashboard</span>
            </button>
            <button
              onClick={() => {
                setIsGitModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 text-slate-600 font-medium flex items-center gap-2"
            >
              <GitBranch className="w-4 h-4 text-orange-500" />
              <span>GitHub Repository Guide</span>
            </button>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsBookingModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 text-center text-xs font-bold text-white bg-gradient-to-r from-[#FF7A00] to-[#EA580C] rounded-lg shadow"
              >
                Book a Ride Now
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
