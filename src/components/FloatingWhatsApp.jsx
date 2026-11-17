import React, { useState } from 'react';
import { X } from 'lucide-react';
import { WhatsAppLogo, CherryIcon } from './OfficialLogos';
import { createGeneralWhatsAppUrl, STORE_PHONE_DISPLAY } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end select-none">
      
      {/* Speech Bubble Tooltip */}
      {showTooltip && (
        <div className="mb-2 relative bg-white/95 backdrop-blur-md border border-[#25D366]/50 rounded-2xl py-2 px-3.5 shadow-lg flex items-center gap-2.5 max-w-[220px] animate-bounce-gentle">
          <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-md">
            <CherryIcon className="w-3.5 h-3.5 text-white" />
          </div>
          <div className="text-left">
            <p className="text-xs font-bold text-[#128C7E] leading-tight">Order WhatsApp</p>
            <p className="text-[10px] text-[#4A2E2B] font-mono leading-tight">{STORE_PHONE_DISPLAY}</p>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#4A2E2B]/40 hover:text-[#E95D96] ml-1 p-0.5 rounded-full cursor-pointer"
            aria-label="Tutup pesan bantuan"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white/95 border-b border-r border-[#25D366]/50 transform rotate-45" />
        </div>
      )}

      {/* Floating Button */}
      <a
        href={createGeneralWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="boutique-btn relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#25D366] to-[#1abb4c] text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group relative overflow-hidden animate-pulse-glow"
        aria-label="Hubungi Kazuya Store via WhatsApp"
      >
        <WhatsAppLogo className="w-8 h-8 sm:w-9 sm:h-9" variant="white" />
      </a>

    </div>
  );
}
