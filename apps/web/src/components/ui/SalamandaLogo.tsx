import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * Clean institutional vector mark inspired by the Salamanda growth emblem:
 * Monogram 'S' holding industrial architecture, ascending growth pillars, and agricultural contours.
 */
export function SalamandaLogo({ className = '', size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Salamanda Emblem"
    >
      {/* Deep Forest Green 'S' Ribbon */}
      <path
        d="M68 25 C62 16, 48 14, 38 18 C26 23, 22 34, 27 45 C32 54, 45 58, 58 63 C72 68, 78 78, 73 88 C67 98, 49 100, 36 94 C26 89, 23 80, 24 75"
        stroke="#064E3B"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Upper Loop: Industrial City Skyline & Arable Land */}
      <path
        d="M42 36 V24 H47 V36 M50 36 V20 H55 V36 M58 36 V27 H62 V36"
        stroke="#047857"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M38 38 Q52 35 66 38"
        stroke="#D97706"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Ascending Economic Growth Bars (Right) */}
      <path
        d="M64 45 V40 M68 45 V36 M72 45 V32"
        stroke="#D97706"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Lower Loop: Geospatial Pin & Strategic Arrow */}
      <circle cx="50" cy="74" r="5" fill="#D97706" />
      <path
        d="M44 80 L50 68 L56 80 Z"
        fill="#047857"
      />
    </svg>
  );
}
