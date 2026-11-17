import React from 'react';
import { ChevronRight, Check } from 'lucide-react';
import { CapCutLogo, NetflixLogo, CherryIcon, SparkleIcon } from './OfficialLogos';
import ProductIllustration from './illustrations/ProductIllustration';

export default function ProductCard({ product, onViewDetail }) {
  return (
    <div className="premium-glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden border border-white/60 group">

      {/* Top Floating Badge if any */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="badge-glow inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
            <CherryIcon className="w-3 h-3 shrink-0" />
            {product.badge}
          </span>
        </div>
      )}

      <div>
        {/* Product Visual Illustration Banner */}
        <div className="relative mb-5 cursor-pointer overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-500" onClick={() => onViewDetail(product)}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <ProductIllustration type={product.imageType} className="w-full h-44 sm:h-52" />
        </div>

        {/* Category & Rating */}
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-bold text-[#E95D96] bg-[#FFEAF1]/80 px-2.5 py-0.5 rounded-full border border-[#F8C8DA]/50 backdrop-blur-sm shadow-sm">
            {product.categoryLabel}
          </span>
          <div className="flex items-center gap-1.5 text-[#4A2E2B] font-bold">
            <span className="text-amber-400">★</span>
            <span className="text-[#E95D96]">{product.rating}</span>
            <span className="text-[#4A2E2B]/50 font-normal text-[10px]">({product.totalOrders})</span>
          </div>
        </div>

        {/* Product Logo / Title */}
        <div className="cursor-pointer mb-1.5" onClick={() => onViewDetail(product)}>
          {product.imageType === 'capcut' ? (
            <div className="my-1">
              <CapCutLogo className="h-6" showWordmark={false} />
            </div>
          ) : product.imageType === 'netflix' ? (
            <div className="my-1">
              <NetflixLogo className="h-6" />
            </div>
          ) : (
            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#A52E5D] group-hover:text-[#E95D96] transition-colors leading-snug">
              {product.name}
            </h3>
          )}
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#4A2E2B]/85 leading-relaxed line-clamp-2 mb-3">
          {product.shortDescription}
        </p>

        {/* Features Preview */}
        <div className="mt-4 space-y-2 pt-3 border-t border-[#F8C8DA]/40">
          {product.features.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4A2E2B]/90">
              <div className="w-5 h-5 rounded-full bg-[#FFEAF1]/60 text-[#E95D96] flex items-center justify-center shrink-0 border border-white/40 backdrop-blur-sm shadow-sm">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer: Starting Price & Action Button */}
      <div className="mt-5 pt-4 border-t border-[#F8C8DA]/40 flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-[#4A2E2B]/60 block font-bold">
            Mulai dari
          </span>
          <span className="font-heading text-lg sm:text-xl font-bold text-[#E95D96]">
            {product.minPriceFormatted}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onViewDetail(product)}
          className="boutique-btn inline-flex items-center gap-1.5 bg-gradient-to-r from-[#FFF5F7] to-[#FFEAF1] hover:from-[#E95D96] hover:to-[#A52E5D] text-[#A52E5D] hover:text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group relative overflow-hidden"
        >
          <span className="relative z-10">Pilih Paket</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

    </div>
  );
}
