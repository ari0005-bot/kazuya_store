import React from 'react';
import { ArrowDown, Zap, ShieldCheck } from 'lucide-react';
import { WhatsAppLogo, InstagramLogo, TikTokLogo, TelegramLogo, CherryIcon, SparkleIcon } from './OfficialLogos';
import { createGeneralWhatsAppUrl, STORE_PHONE_DISPLAY } from '../utils/whatsapp';

export default function Hero() {
  const scrollToCatalog = () => {
    const el = document.getElementById('poster-katalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-24 pb-14 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Gradient Mesh Blobs */}
      <div className="w-96 h-96 bg-pink-200/40 top-[-10%] left-[-10%] rounded-full mix-blend-multiply blur-xl animate-blob absolute" />
      <div className="w-96 h-96 bg-orange-200/30 bottom-[-10%] right-[-10%] rounded-full mix-blend-multiply blur-xl animate-blob absolute" style={{ animationDelay: '2s' }} />
      <div className="w-80 h-80 bg-pink-100/50 top-[20%] right-[20%] rounded-full mix-blend-screen blur-xl animate-blob absolute" style={{ animationDelay: '4s' }} />

      {/* Subtle Ambient Halo */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#F8C8DA]/25 via-[#FFF5F7]/30 to-transparent rounded-full blur-[60px] -z-10 pointer-events-none" />

      {/* Floating Cherry Blossom & Sparkle Accents */}
      <div className="absolute top-20 left-6 text-3xl select-none pointer-events-none animate-float opacity-80 z-10">🌸</div>
      <div className="absolute top-32 right-10 text-3xl select-none pointer-events-none animate-float-delayed opacity-80 z-10">🍒</div>
      <div className="absolute bottom-16 left-1/5 text-2xl select-none pointer-events-none opacity-70 z-10 animate-bounce-gentle">✨</div>
      <div className="absolute bottom-20 right-1/5 text-2xl select-none pointer-events-none opacity-70 z-10 animate-float">💖</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Japanese Top Announcement Pill */}
        <div className="flex justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#F8C8DA]/80 shadow-glow-pink text-xs font-bold text-[#A52E5D] animate-scale-in">
            <span className="flex h-2 w-2 rounded-full bg-[#E95D96] animate-pulse-glow" />
            <CherryIcon className="w-3.5 h-3.5" />
            <span className="tracking-tight">Kazuya Store Resmi</span>
            <span className="text-[10px] text-[#E95D96] bg-[#FFEAF1]/80 px-2 py-0.5 rounded-full font-mono border border-[#F8C8DA]/40">
              カズヤストア
            </span>
            <span className="hidden sm:inline text-[#4A2E2B]/60 ml-1">• Akun Fresh &amp; Fast Respon</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Order CTAs (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start animate-fade-in-up delay-100">
            
            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-[#A52E5D] leading-[1.1] tracking-tight mb-2">
              Your Digital Needs,{' '}
              <br />
              <span className="relative inline-block text-transparent bg-clip-text text-gradient">
                Made Cutely!
              </span>
              <span className="inline-block ml-3 text-3xl sm:text-4xl animate-bounce-gentle">🌸</span>
            </h1>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base text-[#4A2E2B]/85 max-w-xl leading-relaxed animate-fade-in-up delay-200">
              Pusat langganan produk digital terpercaya bertema kawaii anime. Dapatkan akun resmi{' '}
              <strong className="text-[#E95D96]">CapCut Premium</strong> dan{' '}
              <strong className="text-[#E95D96]">Netflix</strong> dengan durasi fleksibel mulai dari harian hingga bulanan!
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto animate-fade-in-up delay-300">
              <button
                type="button"
                onClick={scrollToCatalog}
                className="boutique-btn w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#E95D96] to-[#A52E5D] hover:from-[#D13B76] hover:to-[#795348] text-white font-heading font-bold text-sm shadow-glow-pink hover:shadow-[0_0_30px_rgba(233,93,150,0.5)] flex items-center justify-center gap-2.5 cursor-pointer btn-shimmer transition-all duration-300"
              >
                <span>Lihat Katalog Produk</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href={createGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="boutique-btn w-full sm:w-auto px-7 py-3.5 rounded-2xl glass-btn hover:bg-[#FFF5F7]/90 hover:border-[#E95D96] text-[#4A2E2B] font-bold text-sm shadow-sm flex items-center justify-center gap-2.5 transition-all duration-300"
              >
                <WhatsAppLogo className="w-4 h-4 shrink-0" />
                <span>Konsultasi WA: {STORE_PHONE_DISPLAY}</span>
              </a>
            </div>

            {/* Official Social Media Channels Quick Bar */}
            <div className="mt-8 flex items-center justify-center gap-3 text-xs animate-fade-in-up delay-400">
              <span className="text-[11px] font-bold text-[#4A2E2B]/70 uppercase tracking-wider select-none">
                Sosial Media Kami:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boutique-btn p-1.5 rounded-xl bg-white border border-[#F8C8DA] hover:bg-[#FFF5F7] hover:border-[#E95D96] hover:scale-110 transition-all duration-200 shadow-sm flex items-center justify-center group relative overflow-hidden"
                  title="Official Instagram"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#fdf497] via-[#fd5949] to-[#285AEB] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  <InstagramLogo className="w-5 h-5 relative z-10" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boutique-btn p-1.5 rounded-xl bg-white border border-[#F8C8DA] hover:bg-[#FFF5F7] hover:border-[#E95D96] hover:scale-110 transition-all duration-200 shadow-sm flex items-center justify-center group relative overflow-hidden"
                  title="Official TikTok"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#69C9D0] to-[#FF69C9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  <TikTokLogo className="w-5 h-5 relative z-10" />
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boutique-btn p-1.5 rounded-xl bg-white border border-[#F8C8DA] hover:bg-[#FFF5F7] hover:border-[#E95D96] hover:scale-110 transition-all duration-200 shadow-sm flex items-center justify-center group relative overflow-hidden"
                  title="Official Telegram"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0088CC] to-[#487FAA] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  <TelegramLogo className="w-5 h-5 relative z-10" />
                </a>
                <a
                  href={createGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boutique-btn p-1.5 rounded-xl bg-[#25D366] border border-[#25D366] text-white hover:bg-[#1abb4c] hover:scale-110 transition-all duration-200 shadow-md flex items-center justify-center group relative overflow-hidden"
                  title="Official WhatsApp"
                >
                  <WhatsAppLogo className="w-5 h-5 relative z-10" />
                </a>
              </div>
            </div>

            {/* Value Props Bar */}
            <div className="mt-8 pt-6 border-t border-[#F8C8DA]/50 grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg text-left animate-fade-in-up delay-500">
              <div className="premium-glass-card p-3 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FFF5F7] to-[#FFEAF1] flex items-center justify-center text-[#E95D96] shrink-0 shadow-sm border border-[#F8C8DA]/40">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#A52E5D] leading-tight">Fast Respon</p>
                  <p className="text-[10px] text-[#4A2E2B]/70">5–15 Menit</p>
                </div>
              </div>

              <div className="premium-glass-card p-3 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FFF5F7] to-[#FFEAF1] flex items-center justify-center text-[#E95D96] shrink-0 shadow-sm border border-[#F8C8DA]/40">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#A52E5D] leading-tight">Garansi Aktif</p>
                  <p className="text-[10px] text-[#4A2E2B]/70">100% Aman</p>
                </div>
              </div>

              <div className="premium-glass-card p-3 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FFF5F7] to-[#FFFDF5] flex items-center justify-center text-[#795348] shrink-0 shadow-sm border border-[#F8C8DA]/40">
                  <CherryIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#795348] leading-tight">Harga Pelajar</p>
                  <p className="text-[10px] text-[#4A2E2B]/70">Mulai Rp 2.000</p>
                </div>
              </div>

              </div>

          </div>

          
              
              {/* Subtle Ambient Halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E95D96]/20 via-[#F8C8DA]/30 to-[#FFEAF1] rounded-3xl blur-2xl transform scale-105 -z-10" />

          {/* Right Column: Anime Focal Point (5 cols) */}
          <div className="lg:col-span-5 flex justify-center relative animate-fade-in-up delay-300">
            <div className="relative">
              {/* Subtle Ambient Halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E95D96]/15 via-[#F8C8DA]/25 to-[#FFEAF1]/20 rounded-[3rem] blur-[50px] -z-10 animate-pulse-slow" />

              {/* Top Floating Badge */}
              <div className="absolute -top-3 -left-3 sm:-left-5 z-20 bg-white/95 px-3 py-1.5 rounded-xl border border-[#F8C8DA] shadow-sm flex items-center gap-2">
                <SparkleIcon className="w-3.5 h-3.5 text-amber-400" />
                <div>
                  <div className="flex items-center text-amber-500 text-[11px] font-bold">
                    ★★★★★ <span className="text-[#4A2E2B] ml-1">4.9/5</span>
                  </div>
                  <p className="text-[9px] text-[#4A2E2B]/60 font-semibold">900+ Pelanggan Puas</p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 -right-3 sm:-right-4 z-20 bg-white/95 px-3 py-1 rounded-full border border-emerald-300 shadow-sm flex items-center gap-1.5 text-[10px] font-bold text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Admin Online</span>
              </div>

                          {/* Status Badge */}
              <div className="absolute top-6 -right-4 sm:-right-5 z-20 glass-btn rounded-full px-3 py-1 flex items-center gap-1 text-[10px] font-bold text-emerald-700 shadow-sm border border-emerald-200/50">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-glow" />
                <span className="whitespace-nowrap">Admin Online</span>
              </div>

              {/* Bottom Floating Price Badge */}
              <div className="absolute -bottom-4 -right-4 sm:-right-5 z-20 premium-glass-card p-3 rounded-xl flex items-center gap-2 border border-[#E95D96]/40 animate-fade-in-up delay-200">
                <CherryIcon className="w-4 h-4" />
                <div className="text-left">
                  <p className="text-[9px] font-bold text-[#A52E5D] uppercase tracking-wider leading-tight">Harga Mulai</p>
                  <p className="text-xs font-heading font-bold text-[#E95D96]">Rp 2.000 / hari</p>
                </div>
              </div>

              {/* Anime Character Showcase Frame */}
              <div className="relative w-72 sm:w-80 md:w-96 rounded-[3rem] p-3 bg-white border border-[#F8C8DA] shadow-kawaii-lg overflow-hidden flex items-end justify-center animate-float">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#E95D96] to-[#A52E5D] rounded-[3rem] blur opacity-0 group-hover:opacity-40 transition-opacity duration-300 group" />
                <div className="relative w-full bg-gradient-to-b from-[#FFF5F7] via-[#FFF9F5] to-[#FDF8F5] rounded-[2.5rem] overflow-hidden flex items-end justify-center pt-2 group">
                  <img
                    src="/anime.png"
                    alt="Kazuya Store Character"
                    className="w-full h-auto max-h-[400px] sm:max-h-[460px] object-contain select-none hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => { e.currentTarget.src = "anime.png"; }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
