import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PosterShowcase from '../components/PosterShowcase';
import CategorySection from '../components/CategorySection';
import ProductCard from '../components/ProductCard';
import ProductDetail from '../components/ProductDetail';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { CherryIcon, SparkleIcon } from '../components/OfficialLogos';
import { products } from '../data/products';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      const matchCategory =
        activeCategory === 'all' || prod.category === activeCategory;
      const matchSearch =
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-[#F8C8DA] selection:text-[#A52E5D]">
      {/* Sticky Modern Boutique Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section with Anime Focal Point */}
        <Hero />

        {/* Pilihan Paket Populer (Sesuai Foto Resmi Toko) */}
        <PosterShowcase />

        {/* Category Filter Section */}
        <CategorySection
          activeCategory={activeCategory}
          onSelectCategory={(catId) => setActiveCategory(catId)}
        />

        {/* Product Catalog Section */}
        <section id="catalog" className="py-10 sm:py-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E95D96] to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Catalog Section Header & Search Bar */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFEAF1]/90 border border-[#F8C8DA]/80 shadow-glow-pink text-xs font-bold text-[#A52E5D] mb-3 animate-scale-in">
                  <CherryIcon className="w-3.5 h-3.5" />
                  <span>Daftar Katalog Lengkap</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#A52E5D] tracking-tight">
                  Koleksi Akun Digital Kazuya
                </h2>
                <p className="text-xs sm:text-sm text-[#4A2E2B]/75 mt-1">
                  Pilih produk dan sesuaikan durasi pemakaian yang kamu inginkan.
                </p>
              </div>

              {/* Search Bar Input */}
              <div className="w-full md:w-76">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari produk (CapCut, Netflix)..."
                    className="w-full pl-9 pr-8 py-2 rounded-xl bg-white border border-[#F8C8DA] focus:border-[#E95D96] focus:outline-none focus:ring-2 focus:ring-[#E95D96]/15 text-xs text-[#4A2E2B] placeholder-[#4A2E2B]/40 shadow-sm transition-all"
                  />
                  <Search className="w-4 h-4 text-[#E95D96] absolute left-3 top-1/2 -translate-y-1/2" />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#4A2E2B]/50 hover:text-[#E95D96] cursor-pointer"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <>
                  {/* Desktop grid */}
                  <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onViewDetail={(prod) => setActiveModalProduct(prod)}
                      />
                    ))}
                  </div>
                  {/* Mobile horizontal scroll */}
                  <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory py-2 px-2 -mx-2">
                    {filteredProducts.map((product) => (
                      <div key={product.id} className="snap-start min-w-[80%]">
                        <ProductCard
                          product={product}
                          onViewDetail={(prod) => setActiveModalProduct(prod)}
                        />
                      </div>
                    ))}
                  </div>
                </>
            ) : (
              /* Empty Search State */
              <div className="text-center py-14 bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-dashed border-[#F8C8DA]/50 p-6 group relative overflow-hidden">
                <CherryIcon className="w-8 h-8 mx-auto mb-2 opacity-60" />
                <h3 className="font-heading text-base font-bold text-[#A52E5D] mb-1">
                  Produk tidak ditemukan
                </h3>
                <p className="text-xs text-[#4A2E2B]/70 max-w-sm mx-auto mb-4">
                  Tidak ada produk yang cocok dengan pencarian "{searchQuery}".
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="boutique-btn px-4 py-2 rounded-xl bg-[#E95D96] text-white font-bold text-xs shadow-sm"
                >
                  Tampilkan Semua Produk
                </button>
              </div>
            )}

            {/* Guarantee Bar */}
            <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#F8C8DA]/60 shadow-lg flex items-center justify-between text-xs sm:text-sm text-[#4A2E2B]/80 gap-3">
              <span className="flex items-center gap-2">
                <SparkleIcon className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Seluruh harga tertera adalah harga pasti tanpa biaya tersembunyi.</span>
              </span>
              <span className="font-bold text-[#A52E5D] hidden sm:inline">100% Bergaransi Aktif</span>
            </div>

          </div>
        </section>

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Customer Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <ProductDetail
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
        />
      )}
    </div>
  );
}
