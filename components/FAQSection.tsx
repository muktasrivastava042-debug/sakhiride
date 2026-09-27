'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Who can ride with Sakhi Ride? Can male family members accompany?',
      a: 'Sakhi Ride is dedicated exclusively to women travelers and their children (boys up to 12 years of age and girls of any age). To preserve the sanctuary and psychological safety of our women driver partners, adult male passengers are not permitted on regular rides. For family airport transfers, specialized family-certified rides may be booked in advance.',
    },
    {
      q: 'How are female driver partners verified before joining?',
      a: 'Every driver partner must complete our 7-step onboarding process: Aadhaar biometric KYC, government driving license authenticity check, local police station character clearance certificate, commercial driving proficiency test, background address verification, and gender sensitization training.',
    },
    {
      q: 'What happens if my driver takes an unexpected detour or I feel unsafe?',
      a: 'Our algorithmic telemetry monitors live routes 24/7. An unannounced detour of more than 500 meters or an unscheduled stationary stop of over 3 minutes triggers an automatic priority notification to our 24/7 Safety Command Center. You can also tap the In-Ride SOS button to initiate an instant two-way audio bridge with our emergency desk and dispatch local PCR response.',
    },
    {
      q: 'Can I book a Sakhi Ride in advance for late night or early morning flights?',
      a: 'Yes! You can schedule trips up to 7 days in advance. Our algorithm assigns a verified Sakhi Night Guardian driver 45 minutes ahead of schedule and provides her live tracking link, contact proxy, and car registration well in advance.',
    },
    {
      q: 'How do I join as a female driver partner and what are the typical earnings?',
      a: 'Women drivers with a valid commercial/private LMV license can register directly through our Driver Partner portal. We provide vehicle EV financing assistance, self-defense workshops, flexible shifts, and driver partners earn between ₹32,000 to ₹48,000 per month with daily payouts.',
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
            Everything you need to know about Sakhi Ride
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Clear, transparent answers on safety protocols, passenger policies, and booking procedures.
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
