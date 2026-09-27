'use client';

import React from 'react';
import { AppProvider, useApp } from '@/context/AppContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { SafetyShield } from '@/components/SafetyShield';
import { WhySakhi } from '@/components/WhySakhi';
import { DriverShowcase } from '@/components/DriverShowcase';
import { FleetSection } from '@/components/FleetSection';
import { DriverRecruitmentBanner } from '@/components/DriverRecruitmentBanner';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { DashboardView } from '@/components/DashboardView';
import { AuthModal } from '@/components/AuthModal';
import { BookingModal } from '@/components/BookingModal';
import { DriverDetailModal } from '@/components/DriverDetailModal';
import { SosModal } from '@/components/SosModal';
import { GitInstructionsModal } from '@/components/GitInstructionsModal';

function MainContent() {
  const { currentView } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDFB]">
      <Navbar />

      <main className="flex-1">
        {currentView === 'home' ? (
          <>
            <Hero />
            <SafetyShield />
            <WhySakhi />
            <DriverShowcase />
            <FleetSection />
            <DriverRecruitmentBanner />
            <FAQSection />
          </>
        ) : (
          <DashboardView />
        )}
      </main>

      <Footer />

      {/* Global Modals & Drawers */}
      <AuthModal />
      <BookingModal />
      <DriverDetailModal />
      <SosModal />
      <GitInstructionsModal />
    </div>
  );
}

export default function Page() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
