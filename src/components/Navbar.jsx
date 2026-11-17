import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { WhatsAppLogo, CherryIcon, SparkleIcon } from './OfficialLogos';
import { STORE_PHONE_DISPLAY, createGeneralWhatsAppUrl } from '../utils/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Katalog Produk', href: '#catalog' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-xl shadow-sm border-b border-[#F8C8DA]/80 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group select-none"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-[#E95D96] to-[#F8C8DA] shadow-glow-pink group-hover:scale-110 transition-transform duration-500 overflow-hidden border border-white/40">
                <img
                  src="/anime.png"
                  alt="Kazuya Store Mascot"
                  className="w-full h-full object-cover object-top rounded-full"
                  onError={(e) => { e.currentTarget.src = "anime.png"; }}
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-[#E95D96] p-1 rounded-full ring-2 ring-white shadow-sm animate-bounce-gentle">
                <CherryIcon className="w-3 h-3 text-white" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#A52E5D] group-hover:text-[#E95D96] transition-colors flex items-center gap-1">
                Kazuya Store
                <span className="text-[10px] font-sans font-semibold text-[#E95D96] bg-[#FFEAF1] px-1.5 py-0.2 rounded-full border border-[#F8C8DA]/50 shadow-sm">
                  公式
                </span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#795348]/70 font-semibold -mt-1">
                カズヤストア • Digital Store
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-0.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-[#F8C8DA]/60 shadow-glow-pink">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 rounded-xl text-xs lg:text-sm font-bold text-[#4A2E2B]/90 hover:text-[#E95D96] hover:bg-[#FFF5F7]/80 transition-all duration-200 flex items-center gap-1.5 group"
              >
                <CherryIcon className="w-2.5 h-2.5 group-hover:text-[#E95D96] transition-colors shrink-0 opacity-0 group-hover:opacity-100" />
                {link.name}
              </a>
            ))}
          </nav>

          {/* WhatsApp Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={createGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="boutique-btn btn-shimmer inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1abb4c] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
            >
              <WhatsAppLogo className="w-4 h-4 shrink-0" variant="white" />
              <span>Order WhatsApp</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full font-mono backdrop-blur-sm">
                {STORE_PHONE_DISPLAY}
              </span>
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={createGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white shadow-sm flex items-center justify-center"
              title="Chat WhatsApp"
            >
              <WhatsAppLogo className="w-5 h-5" variant="white" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-[#F8C8DA] text-[#A52E5D] hover:bg-[#F8C8DA]/30 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-5 bg-white/98 backdrop-blur-xl rounded-[2rem] border border-[#F8C8DA] shadow-kawaii-lg animate-in fade-in duration-200 slide-in-from-top">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 rounded-2xl text-sm font-bold text-[#4A2E2B]/90 hover:text-[#E95D96] hover:bg-[#FFF5F7]/60 transition-all duration-200 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <CherryIcon className="w-3 h-3 group-hover:text-[#E95D96] transition-colors" />
                    <span>{link.name}</span>
                  </div>
                  <Zap className="w-3 h-3 text-[#E95D96]/40 group-hover:text-[#E95D96] transition-colors" />
                </a>
              ))}
              <div className="pt-4 border-t border-[#F8C8DA]/50 mt-3">
                <a
                  href={createGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#25D366] to-[#1abb4c] text-white py-3.5 rounded-[1.5rem] font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <WhatsAppLogo className="w-4 h-4 shrink-0" variant="white" />
                  <span>Order via WhatsApp ({STORE_PHONE_DISPLAY})</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
