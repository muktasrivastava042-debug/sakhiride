'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { RideBooking, DriverProfile, INITIAL_RIDES, VERIFIED_DRIVERS } from '@/lib/data';

export interface UserProfile {
  name: string;
  phone: string;
  email: string;
  role: 'passenger' | 'driver';
  emergencyContacts: { name: string; relation: string; phone: string }[];
  isVerified: boolean;
}

interface AppContextType {
  // Navigation & Views
  currentView: 'home' | 'dashboard';
  setCurrentView: (view: 'home' | 'dashboard') => void;
  dashboardTab: 'track' | 'bookings' | 'drivers' | 'safety';
  setDashboardTab: (tab: 'track' | 'bookings' | 'drivers' | 'safety') => void;

  // User & Auth
  user: UserProfile | null;
  loginUser: (profile: Partial<UserProfile>) => void;
  logoutUser: () => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  authModalMode: 'login' | 'signup' | 'driver-partner';
  setAuthModalMode: (mode: 'login' | 'signup' | 'driver-partner') => void;

  // Bookings & Rides
  rides: RideBooking[];
  activeRideId: string;
  setActiveRideId: (id: string) => void;
  addNewRide: (ride: Omit<RideBooking, 'id' | 'otp' | 'bookedAt'>) => string;
  cancelRide: (id: string) => void;

  // Modals & Panels
  isBookingModalOpen: boolean;
  setIsBookingModalOpen: (open: boolean) => void;
  selectedDriver: DriverProfile | null;
  setSelectedDriver: (driver: DriverProfile | null) => void;
  isSosModalOpen: boolean;
  setIsSosModalOpen: (open: boolean) => void;
  isGitModalOpen: boolean;
  setIsGitModalOpen: (open: boolean) => void;

  // Notification Toast
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [currentView, setCurrentView] = useState<'home' | 'dashboard'>('home');
  const [dashboardTab, setDashboardTab] = useState<'track' | 'bookings' | 'drivers' | 'safety'>('track');
  
  // Default logged-in user for effortless preview testing
  const [user, setUser] = useState<UserProfile | null>({
    name: 'Priya Sharma',
    phone: '+91 98104 55912',
    email: 'priya.sharma@example.com',
    role: 'passenger',
    isVerified: true,
    emergencyContacts: [
      { name: 'Kavita Sharma (Mother)', relation: 'Mother', phone: '+91 98112 34567' },
      { name: 'Ritu V. (Sister)', relation: 'Sister', phone: '+91 99201 98765' },
    ],
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup' | 'driver-partner'>('login');
  
  const [rides, setRides] = useState<RideBooking[]>(INITIAL_RIDES);
  const [activeRideId, setActiveRideId] = useState<string>(INITIAL_RIDES[0]?.id || '');
  
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState<DriverProfile | null>(null);
  const [isSosModalOpen, setIsSosModalOpen] = useState(false);
  const [isGitModalOpen, setIsGitModalOpen] = useState(false);
  
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 4000);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const loginUser = (profile: Partial<UserProfile>) => {
    setUser({
      name: profile.name || 'Priya Sharma',
      phone: profile.phone || '+91 98104 55912',
      email: profile.email || 'priya@example.com',
      role: profile.role || 'passenger',
      isVerified: true,
      emergencyContacts: profile.emergencyContacts || [
        { name: 'Mother', relation: 'Mother', phone: '+91 98112 34567' },
      ],
    });
    setIsAuthModalOpen(false);
    showToast(`Welcome back, ${profile.name || 'Priya'}! Your safety shield is active.`);
  };

  const logoutUser = () => {
    setUser(null);
    showToast('You have been safely signed out.');
  };

  const addNewRide = (rideData: Omit<RideBooking, 'id' | 'otp' | 'bookedAt'>) => {
    const randomId = `SKH-${Math.floor(1000 + Math.random() * 9000)}`;
    const randomOtp = `${Math.floor(1000 + Math.random() * 9000)}`;
    const matchedDriver = rideData.driver || VERIFIED_DRIVERS[Math.floor(Math.random() * VERIFIED_DRIVERS.length)];

    const newRide: RideBooking = {
      ...rideData,
      id: randomId,
      otp: randomOtp,
      bookedAt: 'Just now',
      driver: matchedDriver,
    };

    setRides((prev) => [newRide, ...prev]);
    setActiveRideId(randomId);
    setDashboardTab('track');
    setCurrentView('dashboard');
    showToast(`Ride ${randomId} confirmed with Driver ${matchedDriver.name}! OTP is ${randomOtp}.`);
    return randomId;
  };

  const cancelRide = (id: string) => {
    setRides((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: 'cancelled' } : r))
    );
    showToast(`Ride ${id} has been cancelled without penalty fee.`);
  };

  return (
    <AppContext.Provider
      value={{
        currentView,
        setCurrentView,
        dashboardTab,
        setDashboardTab,
        user,
        loginUser,
        logoutUser,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authModalMode,
        setAuthModalMode,
        rides,
        activeRideId,
        setActiveRideId,
        addNewRide,
        cancelRide,
        isBookingModalOpen,
        setIsBookingModalOpen,
        selectedDriver,
        setSelectedDriver,
        isSosModalOpen,
        setIsSosModalOpen,
        isGitModalOpen,
        setIsGitModalOpen,
        toastMessage,
        showToast,
      }}
    >
      {children}
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-slate-900 text-white px-5 py-3.5 rounded-xl shadow-2xl border border-slate-700/60 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F97316] shrink-0 animate-ping" />
          <p className="text-sm font-medium leading-snug">{toastMessage}</p>
        </div>
      )}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
