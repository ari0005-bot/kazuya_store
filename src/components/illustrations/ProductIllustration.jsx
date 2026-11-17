import React from 'react';

/**
 * Ilustrasi Kawaii untuk Product Cards
 * Dibuat khusus dengan SVG vector responsif, tidak membebani loading dan tajam di semua layar
 */
export default function ProductIllustration({ type, className = "w-full h-44 sm:h-52" }) {
  if (type === 'capcut') {
    return (
      <div className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFEAF1] via-[#FFF5F7] to-[#F8C8DA] p-4 ${className}`}>
        {/* Floating kawaii dots & sparkles */}
        <div className="absolute top-3 left-4 text-xs font-bold text-[#E95D96] bg-white/80 px-2 py-0.5 rounded-full shadow-sm">
          ✂️ PRO TOOLS
        </div>
        <div className="absolute bottom-3 right-4 text-lg animate-bounce-gentle">🍒</div>
        <div className="absolute top-2 right-3 text-base">✨</div>

        {/* Center CapCut Themed Kawaii Card */}
        <div className="relative flex flex-col items-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white shadow-kawaii flex items-center justify-center border-2 border-[#F8C8DA] group-hover:scale-105 transition-transform duration-300">
            {/* Stylized CapCut Bowtie / Scissors Kawaii Logo */}
            <div className="relative flex items-center justify-center">
                <img src="/capcut-illustration.png" alt="CapCut" className="w-14 h-14" />
              {/* Cute mini cherry pin */}
              <span className="absolute -top-2 -right-2 text-sm">🌸</span>
            </div>
          </div>

          <div className="mt-2.5 flex items-center gap-1.5 bg-white/90 px-3 py-1 rounded-full border border-[#F8C8DA] text-[11px] font-bold text-[#A52E5D]">
            <span>4K 60FPS</span>
            <span>•</span>
            <span>No Watermark</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'netflix') {
    return (
      <div className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFE8F0] via-[#FFF5F7] to-[#FCE1EB] p-4 ${className}`}>
        <div className="absolute top-3 left-4 text-xs font-bold text-[#A52E5D] bg-white/80 px-2 py-0.5 rounded-full shadow-sm">
          🍿 4K UHD
        </div>
        <div className="absolute bottom-3 right-4 text-lg animate-bounce-gentle">✨</div>
        <div className="absolute top-2 right-3 text-base">🌸</div>

        {/* Center Netflix Themed Kawaii Card */}
        <div className="relative flex flex-col items-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[#141414] shadow-kawaii flex items-center justify-center border-2 border-[#E95D96] group-hover:scale-105 transition-transform duration-300">
            {/* Stylized Netflix Kawaii N */}
            <div className="relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-14 h-14" fill="none">
                {/* Netflix Iconic Red Ribbon Ribbon N */}
                <path d="M30 20 L44 20 L44 80 L30 80 Z" fill="#E50914" />
                <path d="M56 20 L70 20 L70 80 L56 80 Z" fill="#E50914" />
                <path d="M30 20 L56 80 L70 80 L44 20 Z" fill="#B81D24" />
              </svg>
              {/* Cute cherry badge */}
              <span className="absolute -bottom-2 -right-2 text-sm">🍒</span>
            </div>
          </div>

          <div className="mt-2.5 flex items-center gap-1.5 bg-white/90 px-3 py-1 rounded-full border border-[#F8C8DA] text-[11px] font-bold text-[#E95D96]">
            <span>1 User & 2 User</span>
            <span>•</span>
            <span>Garansi Aktif</span>
          </div>
        </div>
      </div>
    );
  }

  // Default / Other Custom Apps (Spotify, YouTube, Canva, etc.)
  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFF0E6] via-[#FFF5F7] to-[#F8C8DA] p-4 ${className}`}>
      <div className="absolute top-3 left-4 text-xs font-bold text-[#795348] bg-white/80 px-2 py-0.5 rounded-full shadow-sm">
        🎁 REQUEST APP
      </div>
      <div className="absolute bottom-3 right-4 text-lg animate-bounce-gentle">🍒</div>
      <div className="absolute top-2 right-3 text-base">💖</div>

      <div className="relative flex flex-col items-center">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white shadow-kawaii flex items-center justify-center border-2 border-[#F8C8DA] group-hover:scale-105 transition-transform duration-300">
          <img src="/canva.svg" alt="Canva" className="w-10 h-10" />
        </div>

        <div className="mt-2.5 flex items-center gap-1.5 bg-white/90 px-3 py-1 rounded-full border border-[#F8C8DA] text-[11px] font-bold text-[#A52E5D]">
          <span>Spotify • Canva • YT</span>
          <span>•</span>
          <span>Chat Admin</span>
        </div>
      </div>
    </div>
  );
}
