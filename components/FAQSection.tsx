'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Who can ride with Sakhi Ride in Varanasi? Can male family members accompany for temple darshan?',
      a: 'Sakhi Ride is dedicated exclusively to women travelers, female pilgrims, students, and children (boys up to 12 years of age and girls of any age). To preserve the psychological sanctuary and dignity of our female driver partners, unaccompanied adult male passengers are not permitted on regular rides. For families traveling together with elderly parents from Babatpur Airport, specialized Family Pilgrimage vans can be booked in advance.',
    },
    {
      q: 'Can I pre-book for early morning 4:30 AM Subah-e-Banaras or 7:00 PM Ganga Aarti?',
      a: 'Yes! Early morning ghat rituals at Assi and evening aarti at Dashashwamedh are our most popular routes. You can schedule rides up to 7 days in advance. A verified local Banaras woman captain is confirmed 45 minutes prior, and stays in communication through masked calling.',
    },
    {
      q: 'Can Sakhi Ganga E-Autos navigate narrow alleys near Godowlia and Kashi Vishwanath?',
      a: 'Absolutely. Our compact electric green autos are specially chosen to maneuver through Varanasi’s historic market streets like Godowlia, Chowk, Maidagin, and Ravindrapuri, dropping you closer to temple entry gates where standard commercial cabs are often restricted.',
    },
    {
      q: 'How are female driver partners verified with Varanasi Police?',
      a: 'Every driver partner must complete local police character verification at their neighborhood thana (Chowk, Sigra, Bhelupur, or Dashashwamedh), Aadhaar biometric authentication, government commercial driving license verification, and physical route capability testing.',
    },
    {
      q: 'How does the UP 1090 Women Power Line & Pink Booth integration protect riders?',
      a: 'Sakhi Ride is digitally integrated with Varanasi Commissionerate’s safety protocols. Tapping the in-app SOS immediately broadcasts high-precision GPS coordinates to the nearest Pink Police Booth (at Assi, Dashashwamedh, Cantt, or BHU) and the nearest UP 112 PCR patrol van for an immediate response.',
    },
  ];

  return (
    <section id="faq-section" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-2 tracking-tight">
            Varanasi Travel & Safety FAQs
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Clear, transparent answers on ghat transit, late night Cantt arrivals, and women-only rider policies.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base font-bold text-slate-900 leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-orange-500' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
