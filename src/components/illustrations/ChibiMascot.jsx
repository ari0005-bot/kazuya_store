import React from 'react';

/**
 * Ilustrasi Anime Chibi Kazuya-chan
 * Karakter anime chibi perempuan bertema pastel pink, cherry hairpins, dan digital store
 */
export default function ChibiMascot({ className = "w-72 h-72 sm:w-88 sm:h-88" }) {
  return (
    <div className={`relative select-none flex items-center justify-center ${className}`}>
      {/* Decorative Aura / Glowing Pastel Rings */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#F8C8DA] via-[#FFF5F7] to-[#F2DCC9] rounded-full blur-2xl opacity-60 animate-pulse-slow"></div>
      
      {/* Floating Sparkles & Cherry Blossoms */}
      <div className="absolute -top-3 left-4 text-2xl animate-float">🌸</div>
      <div className="absolute top-1/4 -right-2 text-2xl animate-bounce-gentle">✨</div>
      <div className="absolute bottom-6 -left-3 text-2xl animate-float-delayed">🍒</div>
      <div className="absolute top-2 right-8 text-xl animate-float">💖</div>
      
      {/* SVG Mascot Character */}
      <svg
        viewBox="0 0 400 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl relative z-10"
      >
        <defs>
          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFAEC9" />
            <stop offset="50%" stopColor="#F8C8DA" />
            <stop offset="100%" stopColor="#E95D96" />
          </linearGradient>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF9F5" />
            <stop offset="100%" stopColor="#FFEADF" />
          </linearGradient>
          <linearGradient id="sweaterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#FFF0F5" />
            <stop offset="100%" stopColor="#F8C8DA" />
          </linearGradient>
          <linearGradient id="cherryRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4B72" />
            <stop offset="100%" stopColor="#A52E5D" />
          </linearGradient>
          <linearGradient id="tabletGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F8C8DA" />
          </linearGradient>
          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#A52E5D" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* --- BACK HAIR (Twin Bun Pigtails) --- */}
        <circle cx="85" cy="150" r="42" fill="url(#hairGrad)" filter="url(#softShadow)" />
        <circle cx="315" cy="150" r="42" fill="url(#hairGrad)" filter="url(#softShadow)" />
        
        {/* Bun ribbony bows */}
        <ellipse cx="115" cy="140" rx="14" ry="10" fill="#E95D96" transform="rotate(-20 115 140)" />
        <ellipse cx="285" cy="140" rx="14" ry="10" fill="#E95D96" transform="rotate(20 285 140)" />

        {/* Cherry Hairpins on Left Bun */}
        <circle cx="115" cy="132" r="8" fill="url(#cherryRed)" />
        <circle cx="127" cy="136" r="7" fill="url(#cherryRed)" />
        <path d="M115 125 C118 116 123 118 126 123" stroke="#487B32" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="126" cy="120" rx="5" ry="3" fill="#66B13D" transform="rotate(-30 126 120)" />

        {/* Back flowing hair strands */}
        <path d="M75 160 C50 210 65 290 95 320 C105 280 100 230 105 180 Z" fill="url(#hairGrad)" opacity="0.95" />
        <path d="M325 160 C350 210 335 290 305 320 C295 280 300 230 295 180 Z" fill="url(#hairGrad)" opacity="0.95" />

        {/* --- BODY & SWEATER --- */}
        <path
          d="M140 270 C140 250 160 235 200 235 C240 235 260 250 260 270 L275 370 C275 385 260 395 200 395 C140 395 125 385 125 370 Z"
          fill="url(#sweaterGrad)"
          stroke="#F8C8DA"
          strokeWidth="3"
          filter="url(#softShadow)"
        />
        {/* Sweater Collar */}
        <path d="M165 240 C180 255 220 255 235 240 C220 270 180 270 165 240 Z" fill="#FFF5F7" stroke="#E95D96" strokeWidth="2.5" />
        {/* Cute Cherry brooch on sweater */}
        <circle cx="195" cy="285" r="5" fill="url(#cherryRed)" />
        <circle cx="205" cy="287" r="5" fill="url(#cherryRed)" />
        <path d="M195 280 Q200 273 203 277" stroke="#487B32" strokeWidth="1.8" fill="none" />

        {/* --- HEAD & FACE --- */}
        {/* Head Base */}
        <path
          d="M120 180 C120 125 155 95 200 95 C245 95 280 125 280 180 C280 235 245 255 200 255 C155 255 120 235 120 180 Z"
          fill="url(#skinGrad)"
          filter="url(#softShadow)"
        />

        {/* Cute Kawaii Ears */}
        <ellipse cx="120" cy="180" rx="9" ry="12" fill="#FFEADF" />
        <ellipse cx="280" cy="180" rx="9" ry="12" fill="#FFEADF" />

        {/* --- EYES --- */}
        {/* Left Eye */}
        <g>
          {/* Sclera & Iris */}
          <ellipse cx="165" cy="178" rx="19" ry="24" fill="#A52E5D" />
          <ellipse cx="165" cy="179" rx="17" ry="22" fill="#E95D96" />
          <ellipse cx="165" cy="186" rx="13" ry="13" fill="#FF8CB8" />
          {/* Big Light reflections (manga sparkles) */}
          <circle cx="158" cy="168" r="7" fill="#FFFFFF" />
          <circle cx="172" cy="188" r="4.5" fill="#FFFFFF" />
          <circle cx="160" cy="192" r="2.5" fill="#FFFFFF" />
          {/* Eyelashes & Eyelid */}
          <path d="M143 162 C152 153 175 153 186 163" stroke="#4E2436" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M142 160 L136 154" stroke="#4E2436" strokeWidth="3" strokeLinecap="round" />
          <path d="M185 160 L191 155" stroke="#4E2436" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Right Eye */}
        <g>
          {/* Sclera & Iris */}
          <ellipse cx="235" cy="178" rx="19" ry="24" fill="#A52E5D" />
          <ellipse cx="235" cy="179" rx="17" ry="22" fill="#E95D96" />
          <ellipse cx="235" cy="186" rx="13" ry="13" fill="#FF8CB8" />
          {/* Big Light reflections */}
          <circle cx="228" cy="168" r="7" fill="#FFFFFF" />
          <circle cx="242" cy="188" r="4.5" fill="#FFFFFF" />
          <circle cx="230" cy="192" r="2.5" fill="#FFFFFF" />
          {/* Eyelashes & Eyelid */}
          <path d="M214 163 C225 153 248 153 257 162" stroke="#4E2436" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M258 160 L264 154" stroke="#4E2436" strokeWidth="3" strokeLinecap="round" />
          <path d="M215 160 L209 155" stroke="#4E2436" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Cute Blushes */}
        <g opacity="0.65">
          <ellipse cx="145" cy="198" rx="14" ry="7" fill="#FF789F" />
          <ellipse cx="255" cy="198" rx="14" ry="7" fill="#FF789F" />
          {/* Blush hash marks */}
          <line x1="140" y1="196" x2="144" y2="200" stroke="#E95D96" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="145" y1="195" x2="149" y2="201" stroke="#E95D96" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="251" y1="196" x2="255" y2="200" stroke="#E95D96" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="256" y1="195" x2="260" y2="201" stroke="#E95D96" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Tiny Cute Nose */}
        <circle cx="200" cy="194" r="1.5" fill="#D18379" />

        {/* Cute Happy Mouth */}
        <path d="M193 206 Q200 216 207 206" stroke="#A52E5D" strokeWidth="3" strokeLinecap="round" fill="#FF789F" />

        {/* Cute Eyebrows */}
        <path d="M148 145 C155 140 168 142 173 146" stroke="#A52E5D" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M227 146 C232 142 245 140 252 145" stroke="#A52E5D" strokeWidth="2.5" strokeLinecap="round" />

        {/* --- FRONT HAIR & BANGS --- */}
        <path
          d="M120 160 C115 110 150 78 200 78 C250 78 285 110 280 160 C272 135 258 135 240 148 C230 128 210 126 195 145 C185 130 165 130 155 145 C145 132 130 135 120 160 Z"
          fill="url(#hairGrad)"
        />
        {/* Soft front hair highlights */}
        <path d="M140 120 C160 110 240 110 260 120" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.6" />

        {/* Side bang locks framing face */}
        <path d="M120 155 C125 185 132 210 130 225 C124 205 115 180 115 155 Z" fill="url(#hairGrad)" />
        <path d="M280 155 C275 185 268 210 270 225 C276 205 285 180 285 155 Z" fill="url(#hairGrad)" />

        {/* --- HANDS HOLDING DIGITAL TABLET --- */}
        {/* Glowing Digital Tablet */}
        <g transform="translate(140, 280)" filter="url(#softShadow)">
          <rect x="0" y="0" width="120" height="85" rx="12" fill="#FFFFFF" stroke="#E95D96" strokeWidth="3" />
          <rect x="6" y="6" width="108" height="73" rx="8" fill="#FFF5F7" />
          {/* Screen Content: Cherry & Kazuya Logo */}
          <circle cx="60" cy="38" r="18" fill="#F8C8DA" opacity="0.6" />
          <text x="60" y="38" textAnchor="middle" fontSize="16" dominantBaseline="central">🍒</text>
          <text x="60" y="58" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#A52E5D" fontFamily="Fredoka, sans-serif">KAZUYA STORE</text>
          <circle cx="20" cy="20" r="2" fill="#E95D96" />
          <circle cx="100" cy="20" r="2" fill="#E95D96" />
        </g>

        {/* Cute Hands holding tablet */}
        <circle cx="140" cy="325" r="13" fill="#FFEADF" stroke="#F8C8DA" strokeWidth="2" />
        <circle cx="260" cy="325" r="13" fill="#FFEADF" stroke="#F8C8DA" strokeWidth="2" />
      </svg>
    </div>
  );
}
