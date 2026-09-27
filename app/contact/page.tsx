'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Building2
} from 'lucide-react';

export default function ContactPage() {
  const { showToast } = useApp();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Lost & Found Item');
  const [rideId, setRideId] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) {
      showToast('Please fill in your name, phone number, and query details.');
      return;
    }

    const generatedTicket = `VNS-TK-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedTicket);
    setSubmitted(true);
    showToast(`Support Ticket #${generatedTicket} created! A Varanasi desk executive will call you.`);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setRideId('');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-slate-900 pb-24">
      {/* Header */}
      <section className="bg-gradient-to-b from-orange-50/70 to-[#FFFDFB] py-16 px-4 sm:px-6 lg:px-8 border-b border-orange-100/70">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              24/7 Dedicated Assistance in Varanasi
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 mt-2 tracking-tight">
              We&apos;re Here to Help You Travel Safely in Kashi
            </h1>
            <p className="mt-4 text-base text-slate-600 leading-relaxed text-balance">
              Need assistance with an active ride, lost belongings in an e-auto, pilgrimage packages, or driver onboarding?
              Connect directly with our local Varanasi Support Desk.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Cards & Form */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Local Varanasi Hub Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-950">Varanasi Mobility Command Center</h2>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#EA580C] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Physical Office & Command Hub</p>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      Sakhi Ride Hub, 2nd Floor, Mahmoorganj Chauraha, Opp. Sigra Stadium Complex, Varanasi, Uttar
                      Pradesh 221010
                    </p>
                    <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">
                      Open daily: 7:00 AM – 10:00 PM for in-person support
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">24/7 Varanasi Passenger Helpline</p>
                    <a href="tel:18007254422" className="text-sm font-mono font-bold text-[#EA580C] hover:underline mt-0.5 block">
                      1800-725-4422 (Toll-Free)
                    </a>
                    <p className="text-slate-500 text-[11px]">Direct Varanasi Desk: +91 542-278-9900</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Official Email</p>
                    <a href="mailto:varanasi@sakhiride.com" className="text-slate-600 hover:text-orange-600 block mt-0.5">
                      varanasi@sakhiride.com
                    </a>
                    <a href="mailto:support@sakhiride.com" className="text-slate-600 hover:text-orange-600 block text-[11px]">
                      support@sakhiride.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Emergency Police Notice */}
              <div className="p-4 bg-red-50 rounded-2xl border border-red-200 text-xs">
                <p className="font-bold text-red-950 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-red-600" />
                  <span>Immediate Life Safety or Distress</span>
                </p>
                <p className="text-red-900 mt-1 leading-relaxed">
                  For active emergencies or harassment, do not wait for email support. Immediately call UP Women Power
                  Line <strong className="font-mono">1090</strong> or UP Police <strong className="font-mono">112</strong>.
                </p>
              </div>
            </div>

            {/* Driver Partner Support Hub */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm text-xs space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Lanka BHU Driver Center</h3>
              <p className="text-slate-600 leading-relaxed">
                Women seeking training, EV auto leases, or police clearance documentation can walk into our partner kiosk
                near Malaviya Gate, Lanka (Mon–Sat, 10 AM – 5 PM).
              </p>
              <p className="text-[#EA580C] font-semibold">Contact Captain Mentor Shanti Devi: +91 94544 01645</p>
            </div>
          </div>

          {/* Right Column: Interactive Support Ticket Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
              {!submitted ? (
                <div>
                  <h2 className="text-xl font-bold text-slate-950">Send an Inquiry or Report an Issue</h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Average response time for Varanasi inquiries is under 15 minutes.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ananya Roy"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-orange-500 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98104 55912"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-orange-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          placeholder="ananya@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-orange-500 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                          Related Ride ID (If any)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. VNS-4491"
                          value={rideId}
                          onChange={(e) => setRideId(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-mono focus:outline-none focus:border-orange-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                        Topic / Category *
                      </label>
                      <select
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:border-orange-500 cursor-pointer"
                      >
                        <option value="Lost & Found Item">Lost & Found Item (Wallet, Phone, Bags in Cab)</option>
                        <option value="Pilgrimage & Airport Booking Help">Pilgrimage & Babatpur Airport Booking Help</option>
                        <option value="Driver Partner Registration">Driver Partner Registration & Training</option>
                        <option value="Fare & Billing Dispute">Fare & Billing Dispute</option>
                        <option value="Feedback & Praise for Driver">Feedback & Praise for Driver Partner</option>
                        <option value="BHU Student / Faculty Pass">BHU Student / Faculty Monthly Safe Pass</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                        Query / Description *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Please describe your experience, lost item details, or travel question..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-orange-500 focus:bg-white leading-relaxed"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-gradient-to-r from-[#FF7A00] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Varanasi Support Ticket</span>
                    </button>
                  </form>
                </div>
              ) : (
                <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-black text-slate-950">Support Ticket Logged!</h3>
                  <div className="inline-block p-3 bg-orange-50 rounded-xl border border-orange-200 font-mono text-sm font-bold text-[#EA580C]">
                    Ticket ID: #{ticketId}
                  </div>

                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, {name}. Your inquiry regarding &ldquo;{topic}&rdquo; has been routed to our Varanasi Mobility
                    Command Center. Our officer will call your phone at <strong className="text-slate-900">{phone}</strong>{' '}
                    shortly.
                  </p>

                  <button
                    onClick={handleReset}
                    className="mt-6 px-6 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

