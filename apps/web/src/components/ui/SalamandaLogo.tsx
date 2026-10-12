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
    <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} role="img" aria-label="Salamanda">
      <svg
        width={size}
        height={size * 1.22}
        viewBox="360 195 520 600"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <use href="/salamanda-logo.svg#emblem" />
      </svg>
      <svg
        width={size * 3.8}
        height={size * 0.48}
        viewBox="80 815 1100 140"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <use href="/salamanda-logo.svg#wordmark" />
      </svg>
    </span>
  );
}
