import React from 'react';
import { Star, MessageSquareQuote, Info } from 'lucide-react';
import { CherryIcon } from './OfficialLogos';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Nadhira S.',
      role: 'Pelanggan • Mahasiswi',
      avatarText: 'NS',
      avatarBg: 'bg-[#FFEAF1] text-[#E95D96]',
      product: 'CapCut 1 Bulan Sharing',
      rating: 5,
      comment: 'Prosesnya cepat banget! Langsung dibalas sama admin dan fitur pro CapCut langsung aktif tanpa kendala. Bikin tugas video reels jadi beres cepat.'
    },
    {
      id: 2,
      name: 'Fikri A.',
      role: 'Pelanggan • Freelancer',
      avatarText: 'FA',
      avatarBg: 'bg-[#FFF0F5] text-[#A52E5D]',
      product: 'Netflix 1 Bulan 1 User',
      rating: 5,
      comment: 'Harga Netflix-nya ramah banget di kantong mahasiswa. Profil pribadi pakai PIN jadi riwayat tontonan tetap rapi dan gak keacak sama orang lain.'
    },
    {
      id: 3,
      name: 'Sherly M.',
      role: 'Pelanggan • Content Creator',
      avatarText: 'SM',
      avatarBg: 'bg-[#FFF9F5] text-[#D18379]',
      product: 'CapCut 1 Bulan Privat',
      rating: 5,
      comment: 'Pelayanan admin ramah banget, diajarin login sampai bener-bener berhasil. Bakal langganan terus di Kazuya Store!'
    }
  ];

  return (
    <section id="testimoni" className="py-14 sm:py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E95D96] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFEAF1]/90 border border-[#F8C8DA]/80 shadow-glow-pink text-xs font-bold text-[#A52E5D] mb-4 animate-scale-in">
            <CherryIcon className="w-3.5 h-3.5" />
            <span>Ulasan Pelanggan</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#A52E5D] tracking-tight mb-2">
            Apa Kata Mereka?
          </h2>
          <p className="text-xs sm:text-sm text-[#4A2E2B]/80 max-w-lg mx-auto leading-relaxed">
            Kepuasan pembeli adalah prioritas utama Kazuya Store.
          </p>

          <div className="mt-3.5 inline-flex items-center gap-1.5 bg-[#FFF9F5] px-3 py-1 rounded-full border border-[#F2DCC9] text-[10px] text-[#4A2E2B]/75">
            <Info className="w-3 h-3 text-[#D18379] shrink-0" />
            <span>Bagian ini merupakan <strong>contoh data ulasan (placeholder)</strong> untuk tujuan ilustrasi antarmuka toko.</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="premium-glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden border border-white/60 group animate-fade-in-up"
            >
              <div className="z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-[#F8C8DA]" />
                </div>

                <p className="text-xs sm:text-sm text-[#4A2E2B]/90 italic leading-relaxed mb-5">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F8C8DA]/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shadow-sm group-hover:scale-105 transition-transform ${review.avatarBg}`}>
                    {review.avatarText}
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-[#4A2E2B]">
                      {review.name}
                    </h4>
                    <p className="text-[10px] text-[#4A2E2B]/60">
                      {review.role}
                    </p>
                  </div>
                </div>

                <span className="text-[9px] font-bold text-[#E95D96] bg-[#FFEAF1]/80 px-2.5 py-0.5 rounded-full border border-[#F8C8DA]/50 backdrop-blur-sm shadow-sm">
                  {review.product}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
