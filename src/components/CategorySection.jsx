import React from 'react';
import { Scissors, Tv, Boxes, Sparkles } from 'lucide-react';
import { CapCutLogo, CherryIcon } from './OfficialLogos';

export default function CategorySection({ activeCategory, onSelectCategory }) {
  const categories = [
    {
      id: 'all',
      name: 'Semua Produk',
      katakana: 'すべて',
      icon: Sparkles,
      count: '3 Produk'
    },
    {
      id: 'video-editing',
      name: 'Video Editing',
      katakana: '編集アプリ',
      icon: Scissors,
      count: 'CapCut Pro'
    },
    {
      id: 'streaming',
      name: 'Streaming Film',
      katakana: '動画配信',
      icon: Tv,
      count: 'Netflix 4K'
    },
    {
      id: 'other',
      name: 'Request Lainnya',
      katakana: 'カスタム',
      icon: Boxes,
      count: 'Spotify & Canva'
    }
  ];

  return (
    <section className="py-6 sm:py-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E95D96] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="animate-fade-in-up">
        
        {/* Category Filter Pills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`boutique-btn text-left p-3.5 sm:p-4 rounded-[1.5rem] border transition-all relative overflow-hidden cursor-pointer group ${
                  isActive
                    ? 'bg-white border-[#E95D96] shadow-glow-pink ring-2 ring-[#E95D96]/20'
                    : 'bg-white/80 hover:bg-white border-[#F8C8DA]/60 hover:border-[#E95D96]/40 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      isActive ? 'bg-gradient-to-r from-[#E95D96] to-[#A52E5D] text-white shadow-glow-pink' : 'bg-[#FFF5F7] text-[#A52E5D] border border-[#F8C8DA]/40'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] text-[#795348]/60 font-mono">
                    {cat.katakana}
                  </span>
                </div>

                <h3 className={`font-heading text-sm sm:text-base font-bold transition-colors ${
                  isActive ? 'text-[#E95D96]' : 'text-[#4A2E2B]'
                }`}>
                  {cat.name}
                </h3>
                
                <p className="text-[11px] text-[#4A2E2B]/70 mt-0.5">
                  {cat.count}
                </p>
              </button>
            );
          })}
                </div>
        </div>

      </div>
    </section>
  );
}
