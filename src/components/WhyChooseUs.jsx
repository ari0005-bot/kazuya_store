import React from 'react';
import { Zap, HeartHandshake, Tag, ShieldCheck } from 'lucide-react';
import { CherryIcon } from './OfficialLogos';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Harap Sangat Bersabar Saat Order',
      desc: 'Pesanan kamu dikerjakan secara teliti satu per satu oleh admin untuk menjamin akun 100% fresh, stabil, dan langsung siap digunakan.',
      badge: 'Prioritas Kualitas',
      icon: HeartHandshake,
      iconColor: 'bg-[#FFEAF1] text-[#E95D96]'
    },
    {
      title: 'Fast Respon',
      desc: 'Admin aktif membalas pertanyaan dan memproses pesanan kamu dengan estimasi 5-15 menit pada jam operasional toko.',
      badge: 'Pelayanan Cepat',
      icon: Zap,
      iconColor: 'bg-[#FFF0F5] text-[#D13B76]'
    },
    {
      title: 'Informasi Harga Transparan',
      desc: 'Semua harga tercantum pasti dan jujur di katalog resmi. Bebas biaya tersembunyi, tanpa biaya admin tambahan.',
      badge: 'Harga Pas',
      icon: Tag,
      iconColor: 'bg-[#FFE8F0] text-[#A52E5D]'
    },
    {
      title: 'Panduan Login & Garansi Penuh',
      desc: 'Admin siap memandu step-by-step login di device kamu serta memberikan garansi akun aktif selama masa langganan.',
      badge: 'Garansi Aktif',
      icon: ShieldCheck,
      iconColor: 'bg-[#FFF5F7] text-[#4A2E2B]'
    }
  ];

  return (
    <section id="keunggulan" className="py-14 sm:py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E95D96] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFEAF1]/90 border border-[#F8C8DA]/80 shadow-glow-pink text-xs font-bold text-[#A52E5D] mb-4 animate-scale-in">
            <CherryIcon className="w-3.5 h-3.5" />
            <span>Standar Pelayanan Resmi</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#A52E5D] tracking-tight mb-2">
            Keunggulan Kazuya Store
          </h2>
          <p className="text-xs sm:text-sm text-[#4A2E2B]/80 max-w-lg mx-auto leading-relaxed">
            Komitmen kami untuk memberikan pengalaman belanja produk digital yang ramah, amanah, dan terpercaya.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="premium-glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden border border-white/60 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${item.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#FFEAF1]/80 text-[#A52E5D] border border-[#F8C8DA]/50 backdrop-blur-sm shadow-sm">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-bold text-[#A52E5D] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A2E2B]/85 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#F8C8DA]/40 flex items-center justify-between text-[10px] text-[#A52E5D] font-bold">
                  <span>Kazuya Store Service</span>
                  <span className="text-[#E95D96]">公式</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
