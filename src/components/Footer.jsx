import React from 'react';
import { Heart } from 'lucide-react';
import { WhatsAppLogo, InstagramLogo, TikTokLogo, TelegramLogo, PaymentLogos, CherryIcon } from './OfficialLogos';
import { STORE_PHONE_DISPLAY, createGeneralWhatsAppUrl } from '../utils/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-white via-[#FFF5F7] to-[#FFFDF5] border-t border-[#F8C8DA]/40 pt-16 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E95D96] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Brand & Description (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-[#E95D96] to-[#F8C8DA] overflow-hidden shadow-glow-pink group">
                <img
                  src="/anime.png"
                  alt="Kazuya Store"
                  className="w-full h-full object-cover object-top rounded-full hover:scale-110 transition-transform duration-300"
                  onError={(e) => { e.currentTarget.src = "anime.png"; }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl sm:text-lg font-bold tracking-tight text-[#A52E5D] flex items-center gap-1">
                  Kazuya Store
                  <span className="text-[10px] text-[#E95D96] font-semibold bg-[#FFEAF1]/90 px-1.5 py-0.2 rounded-full border border-[#F8C8DA]/60 backdrop-blur-sm shadow-sm">
                    公式
                  </span>
                </span>
                <span className="text-[10px] font-bold text-[#4A2E2B]/60 uppercase tracking-wider -mt-0.5">
                  Digital Boutique Store
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-[#4A2E2B]/85 leading-relaxed max-w-sm mb-5 animate-fade-in-up delay-100">
              Penyedia kebutuhan produk digital CapCut Premium dan Netflix dengan harga bersahabat, proses pemesanan praktis, dan garansi akun aktif.
            </p>

            <div className="mt-4 animate-fade-in-up delay-200">
              <p className="text-[10px] font-bold text-[#4A2E2B]/70 uppercase tracking-wider mb-2.5">
                Metode Pembayaran Resmi:
              </p>
              <PaymentLogos />
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-bold text-[#A52E5D] mb-4 flex items-center gap-1.5 animate-fade-in-up delay-100">
              <CherryIcon className="w-3.5 h-3.5" />
              <span>Navigasi Toko</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleNavClick(e, '#hero')}
                  className="text-[#4A2E2B]/80 hover:text-[#E95D96] transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#poster-katalog"
                  onClick={(e) => handleNavClick(e, '#poster-katalog')}
                  className="text-[#4A2E2B]/80 hover:text-[#E95D96] transition-colors"
                >
                  Pilihan Paket Populer
                </a>
              </li>
              <li>
                <a
                  href="#catalog"
                  onClick={(e) => handleNavClick(e, '#catalog')}
                  className="text-[#4A2E2B]/80 hover:text-[#E95D96] transition-colors"
                >
                  Daftar Lengkap Produk
                </a>
              </li>
              <li>
                <a
                  href="#keunggulan"
                  onClick={(e) => handleNavClick(e, '#keunggulan')}
                  className="text-[#4A2E2B]/80 hover:text-[#E95D96] transition-colors"
                >
                  Standar Pelayanan
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleNavClick(e, '#faq')}
                  className="text-[#4A2E2B]/80 hover:text-[#E95D96] transition-colors"
                >
                  FAQ & Bantuan
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Official Social Media (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-heading text-sm font-bold text-[#A52E5D] mb-4 flex items-center gap-1.5 animate-fade-in-up delay-100">
              <CherryIcon className="w-3.5 h-3.5" />
              <span>Hubungi Kami</span>
            </h4>
            
            <p className="text-xs text-[#4A2E2B]/80 mb-2.5">
              Jam Operasional: <strong>08:00 - 23:00 WIB</strong>
            </p>

            <a
              href={createGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="boutique-btn inline-flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#1abb4c] hover:from-[#1abb4c] hover:to-[#25D366] text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-lg hover:shadow-xl transition-all duration-300 mb-4 group relative overflow-hidden"
            >
              <WhatsAppLogo className="w-4 h-4 shrink-0" variant="white" />
              <span>WhatsApp: {STORE_PHONE_DISPLAY}</span>
            </a>

            {/* Official Social Media Logos */}
            <div>
              <p className="text-[10px] font-bold text-[#4A2E2B]/70 mb-2 uppercase tracking-wider">
                Sosial Media Resmi:
              </p>
              <div className="flex items-center gap-2.5">
                {/* Official Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boutique-btn p-1.5 rounded-xl bg-white border border-[#F8C8DA] hover:border-[#E95D96] shadow-sm hover:scale-105 transition-all flex items-center justify-center group"
                  title="Official Instagram Kazuya Store"
                >
                  <InstagramLogo className="w-6 h-6" />
                </a>

                {/* Official TikTok */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boutique-btn p-1.5 rounded-xl bg-white border border-[#F8C8DA] hover:border-[#E95D96] shadow-sm hover:scale-105 transition-all flex items-center justify-center group"
                  title="Official TikTok Kazuya Store"
                >
                  <TikTokLogo className="w-6 h-6" />
                </a>

                {/* Official Telegram */}
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boutique-btn p-1.5 rounded-xl bg-white border border-[#F8C8DA] hover:border-[#E95D96] shadow-sm hover:scale-105 transition-all flex items-center justify-center group"
                  title="Official Telegram Channel Kazuya Store"
                >
                  <TelegramLogo className="w-6 h-6" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-[#F8C8DA]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[10px] sm:text-sm text-[#4A2E2B]/75 relative z-10">
          <p>© {currentYear} Kazuya Store. All Rights Reserved.</p>
          <p className="flex items-center justify-center gap-1 font-semibold">
            Dibuat dengan <Heart className="w-3 h-3 text-[#E95D96] fill-[#E95D96]" /> untuk pencinta anime & kebutuhan digital.
          </p>
        </div>

      </div>
    </footer>
  );
}
