import type {Metadata} from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import './globals.css';
import { ClientProviders } from '@/components/ClientProviders';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sakhi Ride Varanasi - Safe Rides, Strong Women | Kashi',
  description:
    'Varanasi’s premier safe transportation platform connecting female passengers with 100% verified women drivers. Holy Ghats, BHU, Cantt Station, and Babatpur Airport safe transit.',
  openGraph: {
    title: 'Sakhi Ride Varanasi - Safe Rides, Strong Women | Kashi',
    description:
      'Varanasi’s premier safe transportation platform connecting female passengers with 100% verified women drivers.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sakhi Ride Varanasi - Safe Rides, Strong Women | Kashi',
    description:
      'Varanasi’s premier safe transportation platform connecting female passengers with 100% verified women drivers.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-[#FFFDFB] text-slate-900 antialiased selection:bg-orange-500 selection:text-white" suppressHydrationWarning>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
