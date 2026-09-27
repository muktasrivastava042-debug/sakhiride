import React from 'react';

interface SakhiLogoProps {
  variant?: 'full' | 'horizontal' | 'icon' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  theme?: 'light' | 'dark';
}

export function SakhiLogo({
  variant = 'full',
  size = 'md',
  className = '',
  theme = 'light',
}: SakhiLogoProps) {
  // Dimensions for the icon
  const iconSizes = {
    sm: { width: 34, height: 42 },
    md: { width: 44, height: 54 },
    lg: { width: 62, height: 76 },
    xl: { width: 90, height: 110 },
  };

  const { width, height } = iconSizes[size];

  // Vector Pin Art matching user's uploaded sakhi-logo.png
  const IconSVG = (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 hover:scale-105"
      aria-label="Sakhi Ride Pin Logo"
    >
      <defs>
        <linearGradient id="sakhiOrangeGrad" x1="20" y1="20" x2="140" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFA100" />
          <stop offset="35%" stopColor="#FF7A00" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>

        <linearGradient id="sakhiRoadGrad" x1="40" y1="120" x2="160" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>

        <filter id="sakhiDropShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#EA580C" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Main Location Pin Body with soft glowing shadow */}
      <path
        d="M80 12 C44 12 16 41 16 77 C16 112 56 156 75.5 178.5 C77.8 181.2 82.2 181.2 84.5 178.5 C104 156 144 112 144 77 C144 41 116 12 80 12 Z"
        fill="url(#sakhiOrangeGrad)"
        filter="url(#sakhiDropShadow)"
      />

      {/* Inner White Cutout Framing the Silhouette */}
      <path
        d="M80 22 C51 22 28 46 28 76 C28 106 60 144 78 165 C79 166.2 81 166.2 82 165 C100 144 132 106 132 76 C132 46 109 22 80 22 Z"
        fill="#FFFFFF"
      />

      {/* Woman Silhouette (Graceful Profile with flowing locks) */}
      <g id="womanSilhouette">
        {/* Hair and head silhouette */}
        <path
          d="M86 42 C72 42 62 50 56 61 C51 70 50 82 53 93 C55 101 60 108 67 114 C65 119 60 125 56 128 C64 129 74 124 80 118 C83 119 86 120 89 120 C92 113 93 103 91 95 C98 94 103 89 104 82 C105 78 103 74 100 72 C101 69 101 65 99 61 C98 52 94 45 86 42 Z"
          fill="#111827"
        />

        {/* Delicate Facial Profile Cutout & Features in light/orange contrast */}
        <path
          d="M84 52 C77 52 70 58 68 67 C66 76 68 85 73 92 C77 97 83 101 89 102 C90 98 89 93 88 89 C85 85 84 80 85 75 C85 71 87 67 90 64 C92 62 91 58 89 55 C88 53 86 52 84 52 Z"
          fill="#FFFFFF"
        />

        {/* Confident Nose & Lips Silhouette */}
        <path
          d="M93 63 C96 66 98 70 98 73 C95 73 94 76 96 78 C93 78 92 80 94 82 C91 83 89 88 88 93 C92 92 96 89 98 84 C100 79 99 70 95 65 Z"
          fill="#111827"
        />

        {/* Small Golden Earring Accent */}
        <circle cx="86" cy="80" r="2.2" fill="#FFA100" />
      </g>

      {/* Curving Dynamic Asphalt Road */}
      <path
        d="M58 152 C74 135 98 108 142 85 C149 81 154 84 153 91 C144 116 116 150 78 174 C70 179 60 174 58 165 Z"
        fill="url(#sakhiRoadGrad)"
      />

      {/* Road Dashed Markings (White Highway Dashes) */}
      <path
        d="M66 157 C82 140 106 114 146 90"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeDasharray="6 6"
        strokeLinecap="round"
      />
    </svg>
  );

  if (variant === 'icon') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{IconSVG}</div>;
  }

  const textColorClass = theme === 'dark' ? 'text-white' : 'text-slate-900';
  const taglineColorClass = theme === 'dark' ? 'text-slate-300' : 'text-slate-700';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {IconSVG}

      <div className="flex flex-col justify-center">
        <div className="flex items-baseline tracking-tight">
          <span
            className={`font-extrabold ${textColorClass}`}
            style={{
              fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
              fontSize: size === 'sm' ? '1.25rem' : size === 'md' ? '1.65rem' : size === 'lg' ? '2.25rem' : '3rem',
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            Sakhi
          </span>
          <span
            className="font-extrabold text-[#F97316] ml-1.5"
            style={{
              fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
              fontSize: size === 'sm' ? '1.25rem' : size === 'md' ? '1.65rem' : size === 'lg' ? '2.25rem' : '3rem',
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            Ride
          </span>
        </div>

        {variant === 'full' && (
          <div
            className={`flex items-center gap-1.5 font-bold tracking-[0.22em] uppercase mt-1 ${taglineColorClass}`}
            style={{
              fontSize: size === 'sm' ? '0.55rem' : size === 'md' ? '0.68rem' : size === 'lg' ? '0.85rem' : '1.05rem',
            }}
          >
            <span>Safe Rides</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] inline-block" />
            <span>Strong Women</span>
          </div>
        )}
      </div>
    </div>
  );
}
