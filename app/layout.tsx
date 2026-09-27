import type {Metadata} from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import './globals.css';

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
  title: 'Sakhi Ride - Safe Rides, Strong Women',
  description: 'Safe, dignified transportation connecting female passengers with 100% verified women drivers.',
  openGraph: {
    title: 'Sakhi Ride - Safe Rides, Strong Women',
    description: 'Safe, dignified transportation connecting female passengers with 100% verified women drivers.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sakhi Ride - Safe Rides, Strong Women',
    description: 'Safe, dignified transportation connecting female passengers with 100% verified women drivers.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-[#FFFDFB] text-slate-900 antialiased selection:bg-orange-500 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
