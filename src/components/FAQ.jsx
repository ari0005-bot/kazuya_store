import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { WhatsAppLogo, CherryIcon } from './OfficialLogos';
import { STORE_PHONE_DISPLAY, createGeneralWhatsAppUrl } from '../utils/whatsapp';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Bagaimana cara melakukan pemesanan?',
      a: 'Pilih produk yang kamu butuhkan pada katalog Kazuya Store, tentukan paket yang diinginkan, lalu klik tombol "Pesan Sekarang via WhatsApp". Sistem kami akan otomatis menyiapkan format pesan pemesanan resmi sehingga kamu tinggal mengirimkannya ke admin.'
    },
    {
      q: 'Bagaimana cara pembayaran?',
      a: 'Pembayaran dapat dilakukan melalui transfer Bank Nasional dan E-Wallet resmi (seperti BCA, Mandiri, BRI, BNI, Dana, GoPay, OVO, ShopeePay, atau QRIS). Nomor rekening dan barcode QRIS akan diberikan langsung oleh admin saat percakapan WhatsApp berlangsung.'
    },
    {
      q: 'Berapa lama proses pesanan?',
      a: 'Setelah bukti transfer pembayaran kamu diverifikasi oleh admin, pesanan diproses dalam estimasi waktu 5 hingga 15 menit pada jam operasional toko kami (08:00 - 23:00 WIB).'
    },
    {
      q: 'Apakah harga sudah termasuk semua biaya?',
      a: 'Ya, semua nominal yang tertera di website Kazuya Store adalah harga pasti yang transparan. Tidak ada biaya tersembunyi atau biaya admin tambahan dari toko kami.'
    },
    {
      q: 'Bagaimana jika terjadi kendala?',
      a: 'Jika kamu mengalami kendala login, verifikasi perangkat, atau pertanyaan pemakaian, segera hubungi admin kami melalui WhatsApp dengan menyertakan screenshot kendala dan detail pesanan. Admin akan dengan senang hati membantu memberikan solusi.'
    },
    {
      q: 'Bagaimana cara menghubungi admin?',
      a: `Kamu dapat menghubungi admin resmi Kazuya Store melalui tombol WhatsApp di website ini (nomor resmi: ${STORE_PHONE_DISPLAY}) atau klik tombol chat mengambang di pojok kanan bawah layar kapan saja.`
    }
  ];

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E95D96] to-transparent" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFEAF1]/90 border border-[#F8C8DA]/80 shadow-glow-pink text-xs font-bold text-[#A52E5D] mb-4 animate-scale-in">
            <CherryIcon className="w-3.5 h-3.5" />
            <span>Tanya Jawab Seputar Layanan</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#A52E5D] tracking-tight mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#4A2E2B]/80 max-w-lg mx-auto leading-relaxed">
            Pertanyaan yang sering diajukan seputar pemesanan akun di Kazuya Store.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`premium-glass-card rounded-2xl overflow-hidden transition-all duration-300 group ${
                  isOpen ? 'border-[#E95D96] shadow-glow-pink' : 'border-white/60 bg-white/90'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-4.5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-sm sm:text-base font-bold text-[#4A2E2B] flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E95D96]" />
                    <span>{item.q}</span>
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#E95D96] text-white' : 'bg-[#FFF5F7] text-[#A52E5D]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-[#4A2E2B]/85 leading-relaxed border-t border-[#F8C8DA]/40 animate-in fade-in duration-150">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Banner */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-[#F8C8DA]/60 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFEAF1] flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5 text-[#E95D96]" />
            </div>
            <div>
              <h4 className="font-heading text-sm font-bold text-[#A52E5D]">
                Punya pertanyaan lain seputar produk?
              </h4>
              <p className="text-[11px] text-[#4A2E2B]/75">
                Admin siap membantu konsultasi langsung via WhatsApp.
              </p>
            </div>
          </div>

          <a
            href={createGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="boutique-btn inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2 rounded-xl font-bold text-xs shadow-sm shrink-0"
          >
            <WhatsAppLogo className="w-4 h-4 shrink-0" variant="white" />
            <span>Chat Admin WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
