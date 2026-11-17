import React from 'react';

/**
 * Ilustrasi Karakter Anime Chibi Asli Kazuya Store
 * Sesuai foto referensi:
 * 1. ChibiCherryWink: Chibi perempuan rambut cokelat berklip cherry, sweater pink, mengedipkan mata (^_~)
 * 2. ChibiBunnyHug: Chibi memeluk boneka kelinci putih berklip cherry
 * 3. ChibiChef: Chibi bertopi koki bakery toko kue cokelat
 * 4. ChibiPopcorn: Chibi duduk memeluk popcorn bucket Netflix
 */

export function CherryPair({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <defs>
        <radialGradient id="cherryGlow" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF7597" />
          <stop offset="40%" stopColor="#E92C5E" />
          <stop offset="100%" stopColor="#9C0D37" />
        </radialGradient>
      </defs>
      {/* Leaves */}
      <path d="M50 32 C58 15 72 20 78 28 C74 36 60 38 50 32 Z" fill="#66B13D" />
      <path d="M50 32 C42 16 28 20 22 28 C26 36 40 38 50 32 Z" fill="#78C24A" />
      {/* Stems */}
      <path d="M50 32 C42 45 35 60 34 68" stroke="#4D7F28" strokeWidth="4" strokeLinecap="round" />
      <path d="M50 32 C56 45 64 60 66 68" stroke="#4D7F28" strokeWidth="4" strokeLinecap="round" />
      {/* Cherries */}
      <circle cx="34" cy="72" r="22" fill="url(#cherryGlow)" filter="drop-shadow(0 4px 6px rgba(156,13,55,0.4))" />
      <circle cx="66" cy="72" r="22" fill="url(#cherryGlow)" filter="drop-shadow(0 4px 6px rgba(156,13,55,0.4))" />
      {/* Highlights */}
      <ellipse cx="28" cy="64" rx="6" ry="3.5" fill="#FFFFFF" transform="rotate(-30 28 64)" opacity="0.8" />
      <ellipse cx="60" cy="64" rx="6" ry="3.5" fill="#FFFFFF" transform="rotate(-30 60 64)" opacity="0.8" />
      <circle cx="38" cy="78" r="2" fill="#FFFFFF" opacity="0.6" />
      <circle cx="70" cy="78" r="2" fill="#FFFFFF" opacity="0.6" />
    </svg>
  );
}

/**
 * Chibi Cherry Winking Girl (Top Right of CapCut Poster)
 */
export function ChibiCherryWink({ className = "w-36 h-36" }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-md">
        <defs>
          <linearGradient id="chibiHair" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6E3D30" />
            <stop offset="100%" stopColor="#4A261D" />
          </linearGradient>
          <linearGradient id="chibiPink" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA6C4" />
            <stop offset="100%" stopColor="#E95D96" />
          </linearGradient>
        </defs>

        {/* Back Hair */}
        <path d="M40 90 C30 150 45 190 70 200 C90 190 110 190 130 200 C155 190 170 150 160 90 Z" fill="url(#chibiHair)" />

        {/* Pink Oversized Sweater */}
        <path d="M60 140 C55 130 80 120 100 120 C120 120 145 130 140 140 L155 200 L45 200 Z" fill="url(#chibiPink)" />
        {/* Sweater Ribbing Collar */}
        <ellipse cx="100" cy="132" rx="22" ry="7" fill="#FFF0F5" stroke="#E95D96" strokeWidth="2" />

        {/* Face */}
        <path d="M55 95 C55 60 75 45 100 45 C125 45 145 60 145 95 C145 130 125 142 100 142 C75 142 55 130 55 95 Z" fill="#FFEFE8" />

        {/* Cherry Hairpins on Right */}
        <g transform="translate(136, 60)">
          <circle cx="5" cy="10" r="5" fill="#E92C5E" />
          <circle cx="12" cy="12" r="5" fill="#E92C5E" />
          <path d="M5 6 Q8 2 11 8" stroke="#4D7F28" strokeWidth="1.5" />
        </g>

        {/* Left Winking Eye (^_~) */}
        <path d="M72 90 Q80 82 88 90" stroke="#4A261D" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M70 92 L66 89" stroke="#4A261D" strokeWidth="2" strokeLinecap="round" />

        {/* Right Big Sparkle Eye */}
        <g>
          <ellipse cx="122" cy="92" rx="10" ry="12" fill="#5A2E25" />
          <ellipse cx="122" cy="96" rx="8" ry="7" fill="#9C3A50" />
          <circle cx="119" cy="88" r="4" fill="#FFFFFF" />
          <circle cx="125" cy="98" r="2" fill="#FFFFFF" />
          <path d="M112 84 C117 80 128 80 133 85" stroke="#4A261D" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Blushes with cute lines */}
        <ellipse cx="68" cy="104" rx="8" ry="4" fill="#FF8CA8" opacity="0.7" />
        <ellipse cx="132" cy="104" rx="8" ry="4" fill="#FF8CA8" opacity="0.7" />

        {/* Cute Open Smile */}
        <path d="M96 106 Q100 113 104 106" stroke="#4A261D" strokeWidth="2.5" strokeLinecap="round" fill="#FF7597" />

        {/* Front Hair Bangs */}
        <path d="M55 75 C65 50 85 45 100 45 C115 45 135 50 145 75 C138 65 125 65 118 75 C110 63 95 63 88 74 C80 64 65 65 55 75 Z" fill="url(#chibiHair)" />

        {/* Cute Hands resting on chin */}
        <circle cx="82" cy="130" r="8" fill="#FFEFE8" stroke="#FFA6C4" strokeWidth="1.5" />
        <circle cx="118" cy="130" r="8" fill="#FFEFE8" stroke="#FFA6C4" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

/**
 * Chibi Hugging Bunny Plushie (Bottom Left of CapCut Poster)
 */
export function ChibiBunnyHug({ className = "w-32 h-32" }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg viewBox="0 0 160 160" fill="none" className="w-full h-full drop-shadow-md">
        {/* Chibi Head & Bangs */}
        <path d="M30 65 C30 35 50 20 80 20 C110 20 130 35 130 65 C130 95 110 105 80 105 C50 105 30 95 30 65 Z" fill="#FFEFE8" />
        <path d="M25 60 C35 30 55 18 80 18 C105 18 125 30 135 60 C125 50 115 50 105 60 C95 48 85 48 78 58 C68 48 50 50 40 60 Z" fill="#5A2E25" />

        {/* Cute Happy Closed Eyes */}
        <path d="M55 60 Q65 68 72 60" stroke="#4A261D" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M88 60 Q95 68 105 60" stroke="#4A261D" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="50" cy="70" rx="6" ry="3" fill="#FF8CA8" opacity="0.7" />
        <ellipse cx="110" cy="70" rx="6" ry="3" fill="#FF8CA8" opacity="0.7" />

        {/* White Plush Bunny with Pink Ears in Front */}
        <g transform="translate(60, 75)">
          {/* Bunny Ears */}
          <path d="M12 0 C8 -25 18 -25 22 0" fill="#FFFFFF" stroke="#FFA6C4" strokeWidth="1.5" />
          <path d="M15 -5 C13 -18 17 -18 19 -5" fill="#FFCCD9" />
          <path d="M28 0 C24 -25 34 -25 38 0" fill="#FFFFFF" stroke="#FFA6C4" strokeWidth="1.5" />
          <path d="M30 -5 C28 -18 32 -18 35 -5" fill="#FFCCD9" />
          {/* Cherry hairpin on bunny ear */}
          <circle cx="12" cy="-12" r="3" fill="#E92C5E" />
          <circle cx="16" cy="-10" r="3" fill="#E92C5E" />
          {/* Bunny Head & Body */}
          <circle cx="25" cy="18" r="18" fill="#FFFFFF" stroke="#F8C8DA" strokeWidth="1.5" />
          {/* Bunny Face */}
          <circle cx="18" cy="16" r="2" fill="#4A261D" />
          <circle cx="32" cy="16" r="2" fill="#4A261D" />
          <path d="M23 20 L27 20 L25 23 Z" fill="#FFA6C4" />
          <ellipse cx="15" cy="22" rx="3" ry="1.5" fill="#FF8CA8" opacity="0.8" />
          <ellipse cx="35" cy="22" rx="3" ry="1.5" fill="#FF8CA8" opacity="0.8" />
        </g>

        {/* Chibi Arms Hugging Bunny */}
        <circle cx="62" cy="100" r="8" fill="#FFEFE8" stroke="#FFA6C4" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="8" fill="#FFEFE8" stroke="#FFA6C4" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

/**
 * Chibi Bakery Chef Girl (Top of Netflix Poster)
 */
export function ChibiChef({ className = "w-36 h-36" }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-md">
        {/* Baker Chef Hat */}
        <path
          d="M60 45 C40 45 40 10 70 10 C80 -5 120 -5 130 10 C160 10 160 45 140 45 Z"
          fill="#FFFDF7"
          stroke="#E5C7A3"
          strokeWidth="2.5"
        />
        <rect x="68" y="38" width="64" height="14" rx="6" fill="#F4EDE2" stroke="#E5C7A3" strokeWidth="2" />

        {/* Bear Cookie Hairpin on hat */}
        <g transform="translate(132, 38)">
          <circle cx="8" cy="8" r="7" fill="#C98B53" stroke="#8A5129" strokeWidth="1" />
          <circle cx="3" cy="3" r="3" fill="#C98B53" />
          <circle cx="13" cy="3" r="3" fill="#C98B53" />
          <circle cx="6" cy="7" r="1" fill="#4A261D" />
          <circle cx="10" cy="7" r="1" fill="#4A261D" />
        </g>

        {/* Hair */}
        <path d="M48 85 C40 135 50 180 75 190 C95 180 115 180 135 190 C160 180 170 135 162 85 Z" fill="#523126" />

        {/* Cozy Brown Sweater */}
        <path d="M60 145 C55 135 80 125 105 125 C130 125 150 135 145 145 L158 200 L48 200 Z" fill="#795348" />

        {/* Face */}
        <path d="M62 90 C62 60 80 50 105 50 C130 50 148 60 148 90 C148 125 130 138 105 138 C80 138 62 125 62 90 Z" fill="#FFF2E8" />

        {/* Eyes (Gentle Big Anime Eyes) */}
        <g>
          <ellipse cx="86" cy="88" rx="8" ry="11" fill="#523126" />
          <circle cx="84" cy="84" r="3.5" fill="#FFFFFF" />
          <circle cx="88" cy="94" r="1.5" fill="#FFFFFF" />
        </g>
        <g>
          <ellipse cx="124" cy="88" rx="8" ry="11" fill="#523126" />
          <circle cx="122" cy="84" r="3.5" fill="#FFFFFF" />
          <circle cx="126" cy="94" r="1.5" fill="#FFFFFF" />
        </g>

        {/* Blushes */}
        <ellipse cx="76" cy="98" rx="7" ry="3.5" fill="#F49E82" opacity="0.65" />
        <ellipse cx="134" cy="98" rx="7" ry="3.5" fill="#F49E82" opacity="0.65" />

        {/* Smile */}
        <path d="M101 102 Q105 107 109 102" stroke="#523126" strokeWidth="2.5" strokeLinecap="round" fill="#FFA6A6" />

        {/* Front Hair Bangs */}
        <path d="M62 70 C72 52 90 50 105 50 C120 50 138 52 148 70 C138 60 128 60 120 70 C112 58 98 58 90 70 C82 60 70 60 62 70 Z" fill="#523126" />

        {/* Hands resting on chin */}
        <circle cx="88" cy="128" r="7" fill="#FFF2E8" stroke="#E5C7A3" strokeWidth="1.5" />
        <circle cx="122" cy="128" r="7" fill="#FFF2E8" stroke="#E5C7A3" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

/**
 * Chibi with Netflix Popcorn Bucket (Bottom of Netflix Poster)
 */
export function ChibiPopcorn({ className = "w-32 h-32" }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg viewBox="0 0 160 160" fill="none" className="w-full h-full drop-shadow-md">
        {/* Head */}
        <path d="M35 55 C35 30 55 18 80 18 C105 18 125 30 125 55 C125 80 105 92 80 92 C55 92 35 80 35 55 Z" fill="#FFF2E8" />
        <path d="M30 50 C40 25 58 16 80 16 C102 16 120 25 130 50 C120 40 110 40 102 50 C94 38 84 38 78 48 C68 38 50 40 40 50 Z" fill="#523126" />

        {/* Eyes */}
        <ellipse cx="65" cy="56" rx="6" ry="8" fill="#523126" />
        <circle cx="63" cy="53" r="2.5" fill="#FFFFFF" />
        <ellipse cx="95" cy="56" rx="6" ry="8" fill="#523126" />
        <circle cx="93" cy="53" r="2.5" fill="#FFFFFF" />
        <ellipse cx="55" cy="64" rx="5" ry="2.5" fill="#F49E82" opacity="0.65" />
        <ellipse cx="105" cy="64" rx="5" ry="2.5" fill="#F49E82" opacity="0.65" />
        <path d="M78 65 Q80 69 82 65" stroke="#523126" strokeWidth="2" strokeLinecap="round" />

        {/* Popcorn Bucket (Red and white stripes with NETFLIX) */}
        <g transform="translate(60, 72)">
          {/* Fluffy Popcorn */}
          <circle cx="10" cy="4" r="7" fill="#FFF5D6" />
          <circle cx="20" cy="0" r="8" fill="#FFE8A3" />
          <circle cx="30" cy="4" r="7" fill="#FFF5D6" />
          <circle cx="15" cy="8" r="6" fill="#FFFFFF" />
          <circle cx="25" cy="8" r="6" fill="#FFF5D6" />
          {/* Bucket */}
          <path d="M5 12 L10 65 L30 65 L35 12 Z" fill="#E50914" />
          {/* White stripes */}
          <path d="M11 12 L14 65 L18 65 L15 12 Z" fill="#FFFFFF" />
          <path d="M25 12 L22 65 L26 65 L29 12 Z" fill="#FFFFFF" />
          <rect x="8" y="28" width="24" height="12" rx="2" fill="#FFFFFF" />
          <text x="20" y="37" textAnchor="middle" fill="#E50914" fontSize="7" fontWeight="bold" fontFamily="sans-serif">NETFLIX</text>
        </g>

        {/* Chibi hands holding popcorn */}
        <circle cx="62" cy="94" r="6" fill="#FFF2E8" stroke="#795348" strokeWidth="1" />
        <circle cx="98" cy="94" r="6" fill="#FFF2E8" stroke="#795348" strokeWidth="1" />
      </svg>
    </div>
  );
}
