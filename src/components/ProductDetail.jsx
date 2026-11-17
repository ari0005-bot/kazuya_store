import React, { useState, useEffect } from 'react';
import { X, Check, Copy, CheckCheck, Sparkles } from 'lucide-react';
import { WhatsAppLogo, CapCutLogo, NetflixLogo, PaymentLogos } from './OfficialLogos';
import ProductIllustration from './illustrations/ProductIllustration';
import { createWhatsAppOrderUrl, generateOrderMessage, STORE_PHONE_DISPLAY } from '../utils/whatsapp';

export default function ProductDetail({ product, onClose }) {
  const allPackages = product
    ? product.packageGroups.flatMap((group) =>
      group.packages.map((pkg) => ({
        ...pkg,
        groupName: group.groupName
      }))
    )
    : [];

  const [selectedPackage, setSelectedPackage] = useState(() => {
    const popular = allPackages.find((p) => p.isPopular);
    return popular || allPackages[0] || null;
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!product || !selectedPackage) return null;

  const currentWhatsAppUrl = createWhatsAppOrderUrl({
    productName: product.name,
    packageName: selectedPackage.name,
    price: selectedPackage.priceFormatted
  });

  const currentMessageText = generateOrderMessage({
    productName: product.name,
    packageName: selectedPackage.name,
    price: selectedPackage.priceFormatted
  });

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(currentMessageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">

      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#4E2436]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full border-2 border-[#F8C8DA] shadow-kawaii-lg overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col">

        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#F8C8DA]/60 bg-[#FFF5F7]">
          <div className="flex items-center gap-2">
            <span className="text-xl">🍒</span>
            <div>
              <h2 className="font-heading text-lg sm:text-xl font-bold text-[#A52E5D]">
                Detail & Pemesanan Resmi
              </h2>
              <p className="text-[11px] text-[#795348]/70">Pilih paket dan pesan otomatis via WhatsApp Admin</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-white border border-[#F8C8DA] text-[#795348] hover:text-[#E95D96] hover:bg-[#FFEAF1] transition-colors cursor-pointer"
            aria-label="Tutup Detail"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">

          {/* Product Header Card with Official Logo */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-[#FFF9F5] p-4 rounded-2xl border border-[#F2DCC9]">
            <div className="sm:col-span-5">
              <ProductIllustration type={product.imageType} className="w-full h-36" />
            </div>
            <div className="sm:col-span-7">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold text-[#E95D96] bg-[#FFEAF1] px-2.5 py-0.5 rounded-full">
                  {product.categoryLabel}
                </span>
                <span className="text-xs text-amber-500 font-bold">★ {product.rating}</span>
              </div>

              {/* Official Logo Banner */}
              <div className="my-1">
                {product.imageType === 'capcut' ? (
                  <CapCutLogo className="h-8" showWordmark={false} />
                ) : product.imageType === 'netflix' ? (
                  <NetflixLogo className="h-8" />
                ) : (
                  <h3 className="font-heading text-2xl font-bold text-[#795348]">
                    {product.name}
                  </h3>
                )}
              </div>

              <p className="text-xs text-[#795348]/80 mt-1 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Official Keunggulan from Photos */}
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#A52E5D] bg-[#FFEAF1] px-2.5 py-1 rounded-full border border-[#F8C8DA]">
                  <span>🍒</span>
                  <span>Harap sangat bersabar saat order</span>
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E95D96] bg-white px-2.5 py-1 rounded-full border border-[#F8C8DA]">
                  <span>⚡</span>
                  <span>Fast Respon</span>
                </span>
              </div>
            </div>
          </div>

          {/* Package Selection Groups */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-heading text-base font-bold text-[#795348] flex items-center gap-1.5">
                <span>🌸</span>
                Pilih Paket & Durasi
              </h4>
              <span className="text-xs text-[#E95D96] font-semibold bg-[#FFEAF1] px-2.5 py-0.5 rounded-full">
                Klik salah satu untuk memesan
              </span>
            </div>

            <div className="space-y-4">
              {product.packageGroups.map((group, gIdx) => (
                <div key={gIdx} className="bg-white rounded-2xl border-2 border-[#F8C8DA] p-3.5 sm:p-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <h5 className="font-heading text-sm font-bold text-[#A52E5D] flex items-center gap-1.5">
                      <span>{group.iconType === 'users' ? '👥' : group.iconType === 'lock' ? '🔒' : group.iconType === 'user' ? '👤' : '🍒'}</span>
                      <span>{group.groupName}</span>
                    </h5>
                    {group.badge && (
                      <span className="text-[10px] font-bold bg-[#FFEAF1] text-[#E95D96] px-2 py-0.5 rounded-full">
                        {group.badge}
                      </span>
                    )}
                  </div>
                  {group.note && (
                    <p className="text-[11px] text-[#795348]/70 mb-3">
                      {group.note}
                    </p>
                  )}

                  {/* Packages inside this group */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {group.packages.map((pkg) => {
                      const isSelected = selectedPackage.id === pkg.id;

                      return (
                        <div
                          key={pkg.id}
                          onClick={() => setSelectedPackage({ ...pkg, groupName: group.groupName })}
                          className={`btn-kawaii relative p-3 rounded-2xl border-2 cursor-pointer transition-all ${isSelected
                            ? 'bg-[#FFF5F7] border-[#E95D96] shadow-kawaii-sm ring-2 ring-[#E95D96]/20'
                            : 'bg-white border-[#F8C8DA]/70 hover:border-[#E95D96]/50 hover:bg-[#FFF5F7]/40'
                            }`}
                        >
                          {pkg.isPopular && (
                            <span className="absolute -top-2 right-3 bg-[#E95D96] text-white text-[9px] font-bold px-2 py-0.2 rounded-full uppercase tracking-wider">
                              Populer
                            </span>
                          )}

                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <div className="flex items-center gap-1.5">
                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-[#E95D96] bg-[#E95D96]' : 'border-[#795348]/40'
                                  }`}>
                                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                                </div>
                                <span className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-[#A52E5D]' : 'text-[#795348]'
                                  }`}>
                                  {pkg.name}
                                </span>
                              </div>
                              {pkg.description && (
                                <p className="text-[10px] text-[#795348]/70 mt-1 pl-5">
                                  {pkg.description}
                                </p>
                              )}
                            </div>

                            <span className="font-heading text-sm sm:text-base font-extrabold text-[#E95D96] shrink-0">
                              {pkg.priceFormatted}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Summary & Official WhatsApp Order Button */}
          <div className="bg-gradient-to-br from-[#FFEAF1] to-[#FFF5F7] p-4 rounded-3xl border-2 border-[#E95D96]/40 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#A52E5D] uppercase tracking-wider">
                Ringkasan Pesanan Kamu
              </span>
              <span className="text-xs text-[#E95D96] font-bold">Kazuya Store ♡</span>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border border-[#F8C8DA] mb-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-[#795348]/60 block text-[10px]">Produk:</span>
                  <span className="font-bold text-[#795348]">{product.name}</span>
                </div>
                <div>
                  <span className="text-[#795348]/60 block text-[10px]">Paket:</span>
                  <span className="font-bold text-[#795348]">{selectedPackage.name}</span>
                </div>
              </div>
              <div className="mt-2.5 pt-2 border-t border-[#F8C8DA]/60 flex items-center justify-between">
                <span className="text-xs font-bold text-[#795348]">Total Harga:</span>
                <span className="font-heading text-xl font-extrabold text-[#E95D96]">
                  {selectedPackage.priceFormatted}
                </span>
              </div>
            </div>

            {/* Official WhatsApp Button */}
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href={currentWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-kawaii flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-4 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all"
              >
                <WhatsAppLogo className="w-5 h-5 shrink-0" variant="white" />
                <span>Pesan Sekarang via WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleCopyMessage}
                title="Salin Teks Format Pesanan"
                className="btn-kawaii px-4 py-3 bg-white hover:bg-[#FFF5F7] text-[#795348] border-2 border-[#F8C8DA] rounded-2xl font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <CheckCheck className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#E95D96]" />
                    <span>Salin Format</span>
                  </>
                )}
              </button>
            </div>

            {/* Payment Logos Preview */}
            <div className="mt-3.5 pt-3 border-t border-[#F8C8DA]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-[10px] text-[#795348]/70 font-bold uppercase tracking-wider">
                Metode Pembayaran:
              </span>
              <PaymentLogos />
            </div>

            <p className="text-[11px] text-center text-[#795348]/70 mt-2.5">
              Nomor WhatsApp Toko: <strong className="text-[#A52E5D]">{STORE_PHONE_DISPLAY}</strong> • Pesanan diproses otomatis
            </p>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-3 bg-[#FFF5F7] border-t border-[#F8C8DA]/60 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="btn-kawaii px-5 py-2 rounded-xl text-xs font-bold text-[#795348] hover:text-[#A52E5D] bg-white border border-[#F8C8DA] hover:bg-[#FFEAF1] transition-colors"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
}
