/**
 * Utility untuk membuat WhatsApp link otomatis sesuai format resmi Kazuya Store
 * Nomor: 085724402538 -> 6285724402538
 */

export const STORE_PHONE = '6285724402538';
export const STORE_PHONE_DISPLAY = '085724402538';

/**
 * Format pesan order otomatis:
 * 
 * Halo Kazuya Store! ♡
 * 
 * Saya ingin memesan:
 * 
 * Produk: [Nama Produk]
 * Paket: [Nama Paket]
 * Harga: [Harga]
 * 
 * Mohon informasi ketersediaan dan cara pemesanannya.
 * 
 * Terima kasih!
 */
export function generateOrderMessage({ productName, packageName, price }) {
  return `Halo Kazuya Store! ♡

Saya ingin memesan:

Produk: ${productName}
Paket: ${packageName}
Harga: ${price}

Mohon informasi ketersediaan dan cara pemesanannya.

Terima kasih!`;
}

/**
 * Membuat direct URL WhatsApp dengan URL encoding yang tepat
 */
export function createWhatsAppOrderUrl({ productName, packageName, price }) {
  const message = generateOrderMessage({ productName, packageName, price });
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${STORE_PHONE}?text=${encoded}`;
}

/**
 * Membuat direct URL WhatsApp untuk konsultasi umum / tanya-tanya
 */
export function createGeneralWhatsAppUrl(customMessage) {
  const message = customMessage || `Halo Kazuya Store! ♡\n\nSaya ingin bertanya seputar produk digital yang tersedia.\n\nBisa dibantu? Terima kasih!`;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${STORE_PHONE}?text=${encoded}`;
}

/**
 * Helper format rupiah
 */
export function formatRupiah(amount) {
  if (typeof amount !== 'number') return amount;
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(amount).replace('IDR', 'Rp');
}
