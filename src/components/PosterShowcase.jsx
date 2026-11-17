import React from 'react';
import { WhatsAppLogo, CapCutLogo, NetflixLogo, CherryIcon, SparkleIcon } from './OfficialLogos';
import { createWhatsAppOrderUrl, STORE_PHONE_DISPLAY } from '../utils/whatsapp';

export default function PosterShowcase() {
  const capcutPackages = [
    { name: '7 Hari Sharing', price: 'Rp 5.000', badge: 'Tugas Singkat', type: 'Sharing' },
    { name: '1 Bulan Sharing', price: 'Rp 14.000', badge: 'Terlaris', isPopular: true, type: 'Sharing' },
    { name: '7 Hari Privat', price: 'Rp 7.000', badge: 'Privat Akses', type: 'Privat' },
    { name: '1 Bulan Privat', price: 'Rp 20.000', badge: 'Bebas Antre', isPopular: true, type: 'Privat' },
  ];

  const netflix1User = [
    { dur: '1 Hari', price: 'Rp 2.500', name: '1 Hari — 1 User' },
    { dur: '3 Hari', price: 'Rp 5.500', name: '3 Hari — 1 User' },
    { dur: '7 Hari', price: 'Rp 8.900', name: '7 Hari — 1 User' },
    { dur: '1 Bulan', price: 'Rp 24.000', name: '1 Bulan — 1 User', isPopular: true },
  ];

  const netflix2User = [
    { dur: '1 Hari', price: 'Rp 2.000', name: '1 Hari — 2 User' },
    { dur: '3 Hari', price: 'Rp 4.500', name: '3 Hari — 2 User' },
    { dur: '7 Hari', price: 'Rp 8.000', name: '7 Hari — 2 User' },
    { dur: '1 Bulan', price: 'Rp 16.000', name: '1 Bulan — 2 User', isPopular: true },
  ];

  const netflixSemiPrivat = [
    { dur: '1 Bulan', price: 'Rp 26.500', name: '1 Bulan — Semi Privat' }
  ];

  const handleOrder = (productName, packageName, price) => {
    const url = createWhatsAppOrderUrl({ productName, packageName, price });
    window.open(url, '_blank');
  };

  return (
    <section id="poster-katalog" className="py-12 sm:py-20 relative overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-72 h-72 bg-pink-200/30 rounded-full blur-xl animate-blob" />
      <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-orange-200/25 rounded-full blur-xl animate-blob" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFEAF1]/90 border border-[#F8C8DA]/80 shadow-glow-pink text-xs font-bold text-[#A52E5D] mb-4 animate-scale-in">
            <CherryIcon className="w-3.5 h-3.5" />
            <span className="tracking-tight">Katalog Resmi Sesuai Data Toko</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#A52E5D] tracking-tight mb-2">
            Pilihan Paket Populer Kazuya Store
          </h2>
          <p className="text-xs sm:text-sm text-[#4A2E2B]/80 max-w-lg mx-auto leading-relaxed">
            Klik pada paket manapun untuk langsung mengisi format pemesanan resmi ke WhatsApp admin.
          </p>
        </div>

        {/* Dual Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* ========================================================= */}
          {/* CARD 1: CAPCUT PREMIUM (CHERRY PASTEL THEME) */}
          {/* ========================================================= */}
          <div className="premium-glass-card rounded-2xl p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden border border-white/60 group">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#F8C8DA]/60 mb-5">
                <div className="flex items-center gap-2.5">
                  <CapCutLogo className="h-7" showWordmark={false} />
                  <span className="text-[11px] font-bold text-[#A52E5D] bg-[#FFEAF1] px-2.5 py-0.5 rounded-full border border-[#F8C8DA]">
                    Katalog Harga
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-[#E95D96]">
                  <SparkleIcon className="w-3.5 h-3.5" />
                  <span>Pro Video Editor</span>
                </div>
              </div>

              {/* Package Grid (4 Cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {capcutPackages.map((pkg, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleOrder('CapCut Premium', pkg.name, pkg.price)}
                    className={`boutique-btn p-3.5 rounded-xl border cursor-pointer transition-all ${
                      pkg.isPopular
                        ? 'bg-[#FFF5F7] border-[#E95D96] shadow-sm hover:border-[#D13B76]'
                        : 'bg-white border-[#F8C8DA] hover:border-[#E95D96]/60 hover:bg-[#FFF5F7]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-[#4A2E2B]">
                        {pkg.name}
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        pkg.isPopular ? 'bg-[#E95D96] text-white' : 'bg-[#FFEAF1] text-[#A52E5D]'
                      }`}>
                        {pkg.badge}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F8C8DA]/50">
                      <span className="text-[10px] text-[#4A2E2B]/70 font-semibold">Harga Pas</span>
                      <span className="font-heading text-lg font-bold text-[#E95D96]">
                        {pkg.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="pt-4 border-t border-[#F8C8DA]/60 bg-[#FFF5F7]/60 -mx-5 -mb-5 sm:-mx-7 sm:-mb-7 p-4 sm:p-5 rounded-b-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <p className="font-bold text-[#A52E5D] flex items-center gap-1.5">
                    <CherryIcon className="w-3.5 h-3.5" />
                    <span>Harap sangat bersabar saat order</span>
                  </p>
                  <p className="text-[11px] text-[#4A2E2B]/70 mt-0.5">
                    Akun fresh diproses manual • Fast Respon
                  </p>
                </div>

                <a
                  href={createWhatsAppOrderUrl({ productName: 'CapCut Premium', packageName: 'Konsultasi Paket', price: 'Mulai Rp 5.000' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boutique-btn inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2 rounded-xl font-bold text-xs shadow-sm shrink-0"
                >
                  <WhatsAppLogo className="w-4 h-4 shrink-0" variant="white" />
                  <span>Pesan via WA ({STORE_PHONE_DISPLAY})</span>
                </a>
              </div>
            </div>
          </div>


          {/* ========================================================= */}
          {/* CARD 2: NETFLIX PREMIUM (COZY STREAMING THEME) */}
          {/* ========================================================= */}
          <div className="premium-glass-card rounded-2xl p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden border border-white/60 group">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E5C7A3]/60 mb-5">
                <div className="flex items-center gap-2.5">
                  <NetflixLogo className="h-6" />
                  <span className="text-[11px] font-bold text-[#8A241D] bg-[#FFF2E6] px-2.5 py-0.5 rounded-full border border-[#E5C7A3]">
                    Movie Time
                  </span>
                </div>
                <div className="text-[11px] font-bold text-[#795348]">
                  Ultra HD 4K Streaming
                </div>
              </div>

              {/* Grouped Table */}
              <div className="space-y-3.5 mb-5">
                {/* 1 User */}
                <div className="bg-[#FFFDF7] rounded-xl border border-[#E5C7A3] p-3">
                  <div className="flex items-center justify-between text-xs font-bold text-[#6B4423] mb-2 pb-1 border-b border-[#E5C7A3]/40">
                    <span>Paket 1 User (Profil Pribadi & PIN)</span>
                    <span className="text-[10px] text-[#8A5129]/75 font-normal">1 Device</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {netflix1User.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleOrder('Netflix Premium', item.name, item.price)}
                        className="p-2 rounded-lg bg-white border border-[#E5C7A3] text-center hover:border-[#8A241D] cursor-pointer transition-colors"
                      >
                        <p className="text-[11px] text-[#4A2E2B]/75 font-semibold">{item.dur}</p>
                        <p className="font-heading text-xs font-bold text-[#8A241D] mt-0.5">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2 User */}
                <div className="bg-[#FFFDF7] rounded-xl border border-[#E5C7A3] p-3">
                  <div className="flex items-center justify-between text-xs font-bold text-[#6B4423] mb-2 pb-1 border-b border-[#E5C7A3]/40">
                    <span>Paket 2 User (Paling Ekonomis)</span>
                    <span className="text-[10px] text-[#8A5129]/75 font-normal">Mulai Rp 2.000</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {netflix2User.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleOrder('Netflix Premium', item.name, item.price)}
                        className="p-2 rounded-lg bg-white border border-[#E5C7A3] text-center hover:border-[#8A241D] cursor-pointer transition-colors"
                      >
                        <p className="text-[11px] text-[#4A2E2B]/75 font-semibold">{item.dur}</p>
                        <p className="font-heading text-xs font-bold text-[#8A241D] mt-0.5">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Semi Privat */}
                <div
                  onClick={() => handleOrder('Netflix Premium', '1 Bulan — Semi Privat', 'Rp 26.500')}
                  className="bg-[#FFFDF7] rounded-xl border border-[#E5C7A3] p-3 flex items-center justify-between hover:border-[#8A241D] cursor-pointer transition-colors"
                >
                  <div>
                    <span className="text-xs font-bold text-[#6B4423]">Paket Semi Privat (1 Bulan)</span>
                    <span className="text-[10px] text-[#8A5129]/70 block">Kenyamanan maksimal & minim batasan</span>
                  </div>
                  <span className="font-heading text-sm font-bold text-[#8A241D] bg-[#FFF2E6] px-3 py-1 rounded-lg border border-[#E5C7A3]">
                    Rp 26.500
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="pt-4 border-t border-[#E5C7A3]/60 bg-[#FFFDF7] -mx-5 -mb-5 sm:-mx-7 sm:-mb-7 p-4 sm:p-5 rounded-b-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <p className="font-bold text-[#6B4423]">
                    Harap sangat bersabar saat order • Fast Respon
                  </p>
                  <p className="text-[11px] text-[#6B4423]/70 mt-0.5">
                    Dipandu langkah login sampai berhasil nonton
                  </p>
                </div>

                <a
                  href={createWhatsAppOrderUrl({ productName: 'Netflix Premium', packageName: 'Konsultasi Paket', price: 'Mulai Rp 2.000' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boutique-btn inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2 rounded-xl font-bold text-xs shadow-sm shrink-0"
                >
                  <WhatsAppLogo className="w-4 h-4 shrink-0" variant="white" />
                  <span>Pesan via WA ({STORE_PHONE_DISPLAY})</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
