'use client';

import React from 'react';
import { AppProvider } from '@/context/AppContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AuthModal } from '@/components/AuthModal';
import { BookingModal } from '@/components/BookingModal';
import { DriverDetailModal } from '@/components/DriverDetailModal';
import { SosModal } from '@/components/SosModal';
import { GitInstructionsModal } from '@/components/GitInstructionsModal';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-[#FFFDFB]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Global Modals */}
        <AuthModal />
        <BookingModal />
        <DriverDetailModal />
        <SosModal />
        <GitInstructionsModal />
      </div>
    </AppProvider>
  );
}
