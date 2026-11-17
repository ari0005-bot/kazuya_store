import React from 'react';

/**
 * Official Brand & Social Media Logos (WhatsApp, Instagram, TikTok, Telegram, CapCut, Netflix)
 * Created with official vector assets where possible.
 */

/** Official WhatsApp Logo (Colored Green Bubble with White Handset) */
export function WhatsAppLogo({ className = "w-5 h-5", variant = "colored" }) {
  if (variant === "white") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.67 20.16 9.32 19.8 8.14 19.11L7.84 18.93L4.72 19.75L5.55 16.71L5.35 16.39C4.59 15.18 4.19 13.56 4.19 11.91C4.19 7.37 7.89 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.4 7.87 7.65C7.65 7.9 7.02 8.49 7.02 9.7C7.02 10.91 7.9 12.08 8.02 12.24C8.15 12.41 9.72 14.83 12.13 15.87C12.7 16.12 13.15 16.27 13.49 16.38C14.07 16.56 14.59 16.54 15.01 16.47C15.48 16.4 16.45 15.88 16.65 15.31C16.86 14.74 16.86 14.25 16.79 14.15C16.73 14.05 16.57 13.98 16.32 13.86C16.07 13.73 14.84 13.13 14.61 13.05C14.39 12.96 14.22 12.92 14.06 13.17C13.89 13.41 13.42 13.98 13.27 14.15C13.13 14.31 12.98 14.33 12.74 14.21C12.49 14.08 11.69 13.82 10.74 12.98C10.01 12.32 9.51 11.51 9.37 11.27C9.22 11.02 9.35 10.89 9.48 10.76C9.59 10.65 9.72 10.47 9.85 10.33C9.97 10.18 10.01 10.08 10.09 9.92C10.18 9.75 10.14 9.61 10.07 9.49C10.01 9.37 9.53 8.19 9.33 7.71C9.13 7.23 8.93 7.29 8.78 7.29C8.63 7.29 8.46 7.29 8.53 7.33Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <circle cx="24" cy="24" r="24" fill="#25D366" />
      <path d="M24 8.5C15.44 8.5 8.5 15.44 8.5 24C8.5 26.86 9.27 29.54 10.61 31.86L8.5 39.5L16.36 37.44C18.6 38.69 21.2 39.5 24 39.5C32.56 39.5 39.5 32.56 39.5 24C39.5 15.44 32.56 8.5 24 8.5ZM31.87 29.89C31.54 30.82 30.15 31.63 29.41 31.74C28.75 31.84 27.91 31.88 26.97 31.58C26.4 31.4 25.66 31.15 24.69 30.73C20.61 28.98 17.95 24.84 17.75 24.57C17.54 24.3 16.12 22.42 16.12 20.48C16.12 18.53 17.11 17.58 17.47 17.18C17.83 16.78 18.26 16.67 18.52 16.67C18.78 16.67 19.04 16.68 19.26 16.69C19.5 16.7 19.81 16.6 20.08 17.26C20.36 17.94 21.04 19.61 21.13 19.79C21.22 19.97 21.29 20.19 21.16 20.45C21.03 20.71 20.94 20.84 20.74 21.07C20.54 21.3 20.32 21.57 20.14 21.75C19.93 21.96 19.7 22.18 19.94 22.6C20.18 23.01 21.01 24.37 22.23 25.46C23.8 26.85 25.07 27.3 25.5 27.48C25.93 27.66 26.18 27.62 26.42 27.34C26.66 27.06 27.45 26.14 27.73 25.75C28.01 25.36 28.3 25.42 28.69 25.56C29.08 25.7 31.13 26.71 31.54 26.92C31.95 27.13 32.22 27.23 32.32 27.4C32.42 27.57 32.42 28.4 32.09 29.33L31.87 29.89Z" fill="#FFFFFF" />
    </svg>
  );
}

/** Official Instagram Logo (uses SVG from public folder) */
export function InstagramLogo({ className = "w-6 h-6" }) {
  return (
    <a href="https://www.instagram.com/kazuyastoree?dlrf=MWFhdDE2eDl2aTlmdg==" target="_blank" rel="noopener noreferrer">
      <img src="/instagram.svg" alt="Instagram" className={className} />
    </a>
  );
}

/** Official TikTok Logo (uses SVG from public folder) */
export function TikTokLogo({ className = "w-6 h-6" }) {
  return (
    <a href="https://www.tiktok.com/@kazuya_storee00" target="_blank" rel="noopener noreferrer">
      <img src="/tiktok.svg" alt="TikTok" className={className} />
    </a>
  );
}

/** Official Telegram Logo with Authentic Blue Circle & Paper Plane */
export function TelegramLogo({ className = "w-6 h-6" }) {
  return (
    <a href="https://t.me/kazue666" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 48 48" className={className} fill="none">
        <defs>
          <linearGradient id="tgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2AABEE" />
            <stop offset="100%" stopColor="#229ED9" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="24" fill="url(#tgGrad)" />
        {/* Paper Airplane */}
        <path d="M10 23.5 L36 13.5 L31 35 C30.5 36.5 29 36.5 28 35.5 L21.5 30.5 L17.5 34.5 C17 35 16.5 35 16.3 34 L17.2 27.5 L29.5 16.5 C30 16 29.5 15.5 28.8 16 L13.5 25.5 L10 23.5 Z" fill="#FFFFFF" />
      </svg>
    </a>
  );
}

/** Official CapCut Logo (text-only, similar to Netflix wordmark) */
export function CapCutLogo({ className = "h-7 w-auto" }) {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <span className="font-sans font-black tracking-widest text-[#111111] text-xl sm:text-2xl uppercase" style={{ letterSpacing: '0.1em' }}>CapCut</span>
    </div>
  );
}

/** Official Netflix Logo (wordmark or icon) */
export function NetflixLogo({ className = "h-7 w-auto", variant = "wordmark" }) {
  if (variant === "icon") {
    return (
      <svg viewBox="0 0 100 100" className="w-7 h-7 shrink-0" fill="none">
        <rect width="100" height="100" rx="16" fill="#141414" />
        <path d="M28 20 L42 20 L42 80 L28 80 Z" fill="#E50914" />
        <path d="M58 20 L72 20 L72 80 L58 80 Z" fill="#E50914" />
        <path d="M28 20 L58 80 L72 80 L42 20 Z" fill="#B81D24" />
      </svg>
    );
  }
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <span className="font-sans font-black tracking-widest text-[#E50914] text-xl sm:text-2xl uppercase" style={{ letterSpacing: '0.1em' }}>NETFLIX</span>
    </div>
  );
}

/** Delicate Vector Accents */
export function CherryIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M12 4 C14 2 17 2 19 4 C18 6 15 6 12 4 Z" fill="#66B13D" />
      <path d="M12 4 C10 8 8 12 7.5 15" stroke="#4D7F28" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 4 C13.5 8 16 12 16.5 15" stroke="#4D7F28" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="7.5" cy="16.5" r="4.5" fill="#E92C5E" />
      <circle cx="16.5" cy="16.5" r="4.5" fill="#E92C5E" />
      <circle cx="6" cy="15" r="1.2" fill="#FFFFFF" opacity="0.8" />
      <circle cx="15" cy="15" r="1.2" fill="#FFFFFF" opacity="0.8" />
    </svg>
  );
}

export function SparkleIcon({ className = "w-4 h-4 text-amber-400" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 1 L14.5 9.5 L23 12 L14.5 14.5 L12 23 L9.5 14.5 L1 12 L9.5 9.5 Z" />
    </svg>
  );
}

export function RibbonBowIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M12 12 C9 7 4 8 4 12 C4 15 8 15 12 12 Z" fill="#E95D96" />
      <path d="M12 12 C15 7 20 8 20 12 C20 15 16 15 12 12 Z" fill="#E95D96" />
      <circle cx="12" cy="12" r="2.5" fill="#A52E5D" />
      <path d="M10 13 L7 20" stroke="#E95D96" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 13 L17 20" stroke="#E95D96" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Payment method badges */
export function PaymentLogos() {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="px-2 py-0.5 rounded-md bg-white border border-[#F8CDA] text-[9px] font-black tracking-wider text-[#A52E5D]">QRIS</span>
      <span className="px-2 py-0.5 rounded-md bg-[#005EAA] text-white text-[9px] font-black tracking-wider">BCA</span>
      <span className="px-2 py-0.5 rounded-md bg-[#108EE9] text-white text-[9px] font-bold tracking-wider">DANA</span>
      <span className="px-2 py-0.5 rounded-md bg-[#00AED6] text-white text-[9px] font-bold tracking-wider">GoPay</span>
      <span className="px-2 py-0.5 rounded-md bg-[#EE4D2D] text-white text-[9px] font-bold tracking-wider">ShopeePay</span>
      <span className="px-2 py-0.5 rounded-md bg-[#4C3494] text-white text-[9px] font-bold tracking-wider">OVO</span>
    </div>
  );
}
