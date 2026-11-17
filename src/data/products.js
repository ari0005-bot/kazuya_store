/**
 * Kazuya Store - Data Produk Digital Resmi
 * 100% Sesuai Data Foto Referensi Asli (CapCut Cherry Pink & Netflix Cozy Bakery)
 */

export const categories = [
  { id: 'all', name: 'Semua Produk', icon: 'Sparkles', count: 3 },
  { id: 'video-editing', name: 'Video Editing', icon: 'Scissors', count: 1 },
  { id: 'streaming', name: 'Streaming', icon: 'Tv', count: 1 },
  { id: 'other', name: 'Produk Lainnya', icon: 'Boxes', count: 1 }
];

export const products = [
  {
    id: 'capcut-premium',
    name: 'CapCut Premium',
    theme: 'cherry-pink',
    category: 'video-editing',
    categoryLabel: 'Video Editing',
    tagline: 'Katalog Harga CapCut — Edit Video Pro Tanpa Watermark!',
    posterTitle: 'Katalog Harga',
    shortDescription: 'Layanan CapCut Premium dengan beberapa pilihan paket Sharing dan Privat.',
    fullDescription: 'Nikmati editing konten tanpa batas dengan CapCut Premium! Akses penuh ke ratusan efek trending, transisi pro, penghapus latar belakang AI otomatis, filter eksklusif, serta export video kualitas 4K 60FPS jernih tanpa watermark.',
    imageType: 'capcut',
    badge: '🔥 Best Seller',
    minPrice: 5000,
    minPriceFormatted: 'Rp 5.000',
    rating: 4.9,
    totalOrders: '350+',
    officialNote: 'Order by Wa: 085724402538',
    keunggulan: [
      'Harap sangat bersabar saat order',
      'Fast Respon'
    ],
    features: [
      'Semua fitur PRO & AI CapCut terbuka',
      'Export video kualitas 4K 60FPS jernih',
      'Bebas watermark & tanpa iklan',
      'Akses ribuan template, efek & sound eksklusif',
      'Support Android, iOS & PC',
      'Proses aktivasi 5-15 menit'
    ],
    packageGroups: [
      {
        groupName: 'Paket Sharing',
        note: 'Akun digunakan bersama dengan aturan ketat agar stabil & aman.',
        packages: [
          {
            id: 'capcut-sharing-7d',
            name: '7 Hari Sharing',
            duration: '7 Hari',
            type: 'Sharing',
            price: 5000,
            priceFormatted: 'Rp 5.000',
            isPopular: false,
            description: 'Cocok untuk kebutuhan edit tugas mingguan atau deadline konten.'
          },
          {
            id: 'capcut-sharing-1m',
            name: '1 Bulan Sharing',
            duration: '1 Bulan',
            type: 'Sharing',
            price: 14000,
            priceFormatted: 'Rp 14.000',
            isPopular: true,
            description: 'Paling hemat untuk kreator konten harian.'
          }
        ]
      },
      {
        groupName: 'Paket Privat',
        note: 'Akun khusus untuk Anda sendiri, lebih fleksibel dan minim batasan.',
        packages: [
          {
            id: 'capcut-privat-7d',
            name: '7 Hari Privat',
            duration: '7 Hari',
            type: 'Privat',
            price: 7000,
            priceFormatted: 'Rp 7.000',
            isPopular: false,
            description: 'Akses privat mingguan penuh untuk proyek khusus.'
          },
          {
            id: 'capcut-privat-1m',
            name: '1 Bulan Privat',
            duration: '1 Bulan',
            type: 'Privat',
            price: 20000,
            priceFormatted: 'Rp 20.000',
            isPopular: true,
            description: 'Kenyamanan maksimal tanpa antre device dengan pengguna lain.'
          }
        ]
      }
    ]
  },
  {
    id: 'netflix-premium',
    name: 'Netflix Premium',
    theme: 'cozy-bakery',
    category: 'streaming',
    categoryLabel: 'Streaming',
    tagline: 'Movie Time ♡ Good Food, Good Mood — Resolusi 4K UHD!',
    posterTitle: 'Movie Time',
    shortDescription: 'Layanan Netflix dengan beberapa pilihan durasi dan jenis paket 1 User, 2 User, dan Semi Privat.',
    fullDescription: 'Streaming ribuan film blockbuster, serial original Netflix, drama Korea, dan anime seru tanpa jeda iklan. Kualitas video Ultra HD 4K didukung audio spatial sound yang memukau. Berbagai pilihan durasi fleksibel sesuai waktu luangmu.',
    imageType: 'netflix',
    badge: '🍒 Terfavorit',
    minPrice: 2000,
    minPriceFormatted: 'Rp 2.000',
    rating: 5.0,
    totalOrders: '600+',
    officialNote: 'Order by Wa: 085724402538',
    keunggulan: [
      'Harap sangat bersabar saat order',
      'Fast Respon'
    ],
    features: [
      'Kualitas Ultra HD 4K & Audio Spasial',
      'Bisa download film & tonton secara offline',
      'Bebas iklan tanpa jeda',
      'Support HP, Tablet, Laptop, Smart TV',
      'Akun legal, aman & bergaransi aktif',
      'Pilihan durasi harian hingga bulanan sangat hemat'
    ],
    packageGroups: [
      {
        groupName: '1 User',
        iconType: 'user',
        badge: 'Profil Pribadi (PIN)',
        note: '1 Profile khusus untuk 1 perangkat Anda dengan PIN pribadi.',
        packages: [
          {
            id: 'netflix-1u-1d',
            name: '1 Hari',
            duration: '1 Hari',
            type: '1 User',
            price: 2500,
            priceFormatted: 'Rp 2.500',
            isPopular: false,
            description: 'Solusi nonton maraton weekend hemat seharian.'
          },
          {
            id: 'netflix-1u-3d',
            name: '3 Hari',
            duration: '3 Hari',
            type: '1 User',
            price: 5500,
            priceFormatted: 'Rp 5.500',
            isPopular: false,
            description: 'Pas untuk libur panjang atau mini series.'
          },
          {
            id: 'netflix-1u-7d',
            name: '7 Hari',
            duration: '7 Hari',
            type: '1 User',
            price: 8900,
            priceFormatted: 'Rp 8.900',
            isPopular: false,
            description: 'Nonton santai selama satu minggu penuh.'
          },
          {
            id: 'netflix-1u-1m',
            name: '1 Bulan',
            duration: '1 Bulan',
            type: '1 User',
            price: 24000,
            priceFormatted: 'Rp 24.000',
            isPopular: true,
            description: 'Paling diminati! 1 bulan penuh profil pribadi.'
          }
        ]
      },
      {
        groupName: '2 User',
        iconType: 'users',
        badge: 'Hemat Bersama',
        note: 'Paket hemat ekonomis untuk kebutuhan nonton kasual.',
        packages: [
          {
            id: 'netflix-2u-1d',
            name: '1 Hari',
            duration: '1 Hari',
            type: '2 User',
            price: 2000,
            priceFormatted: 'Rp 2.000',
            isPopular: false,
            description: 'Paling terjangkau mulai Rp 2.000.'
          },
          {
            id: 'netflix-2u-3d',
            name: '3 Hari',
            duration: '3 Hari',
            type: '2 User',
            price: 4500,
            priceFormatted: 'Rp 4.500',
            isPopular: false,
            description: '3 hari streaming film hemat bersama kawan.'
          },
          {
            id: 'netflix-2u-7d',
            name: '7 Hari',
            duration: '7 Hari',
            type: '2 User',
            price: 8000,
            priceFormatted: 'Rp 8.000',
            isPopular: false,
            description: '1 minggu streaming dengan harga ramah kantong.'
          },
          {
            id: 'netflix-2u-1m',
            name: '1 Bulan',
            duration: '1 Bulan',
            type: '2 User',
            price: 16000,
            priceFormatted: 'Rp 16.000',
            isPopular: true,
            description: 'Super hemat sebulan penuh hanya Rp 16.000.'
          }
        ]
      },
      {
        groupName: 'Semi Privat',
        iconType: 'lock',
        badge: '👑 Eksklusif',
        note: 'Kualitas akun lebih eksklusif dengan stabilitas tinggi.',
        packages: [
          {
            id: 'netflix-semiprivat-1m',
            name: '1 Bulan',
            duration: '1 Bulan',
            type: 'Semi Privat',
            price: 26500,
            priceFormatted: 'Rp 26.500',
            isPopular: true,
            description: 'Pengalaman streaming optimal dengan kenyamanan premium.'
          }
        ]
      }
    ]
  },
  {
    id: 'request-custom',
    name: 'Request Produk Digital Lainnya',
    theme: 'pastel-star',
    category: 'other',
    categoryLabel: 'Produk Digital Lainnya',
    tagline: 'Butuh aplikasi atau langganan premium lainnya? Hubungi admin!',
    posterTitle: 'Custom Request',
    shortDescription: 'Tersedia request aplikasi lain seperti Spotify, YouTube Premium, Canva Pro, dan lainnya.',
    fullDescription: 'Punya kebutuhan produk digital lain yang belum tercantum di katalog? Kazuya Store juga melayani pemesanan khusus untuk berbagai langganan premium seperti Spotify Premium, YouTube Premium, Canva Pro, Disney+ Hotstar, dan lainnya. Tanyakan ketersediaan stok langsung ke admin via WhatsApp!',
    imageType: 'custom',
    badge: '✨ Request Ready',
    minPrice: 0,
    minPriceFormatted: 'Hubungi Admin',
    rating: 4.8,
    totalOrders: '120+',
    officialNote: 'Order by Wa: 085724402538',
    keunggulan: [
      'Harap sangat bersabar saat order',
      'Fast Respon'
    ],
    features: [
      'Bisa request berbagai aplikasi premium populer',
      'Harga transparan & bersahabat bagi pelajar/mahasiswa',
      'Konsultasi ketersediaan langsung dengan admin',
      'Garansi akun selama masa pemakaian aktif'
    ],
    packageGroups: [
      {
        groupName: 'Request Khusus',
        iconType: 'sparkles',
        badge: 'Custom Order',
        note: 'Silakan sampaikan nama aplikasi dan durasi yang kamu cari ke WhatsApp admin.',
        packages: [
          {
            id: 'req-custom-app',
            name: 'Request Aplikasi / Akun Lain',
            duration: 'Fleksibel',
            type: 'Custom Request',
            price: 0,
            priceFormatted: 'Sesuai Request',
            isPopular: true,
            description: 'Sebutkan aplikasi yang kamu cari di chat WhatsApp.'
          }
        ]
      }
    ]
  }
];

export const storeInfo = {
  name: 'Kazuya Store',
  tagline: 'Your Digital Needs, Made Cutely! 🌸',
  description: 'Temukan produk digital favoritmu dengan harga bersahabat dan proses pemesanan yang mudah.',
  whatsappNumber: '6285724402538',
  whatsappDisplay: '085724402538',
  operationalHours: '08:00 - 23:00 WIB',
  responseSpeed: '± 5 - 15 Menit',
  officialKeunggulan: [
    {
      title: 'Harap sangat bersabar saat order',
      desc: 'Pesanan diproses secara manual dan teliti oleh admin untuk memastikan akun 100% aman, fresh, dan langsung siap pakai.',
      icon: 'HeartHandshake',
      emoji: '🍒'
    },
    {
      title: 'Fast Respon',
      desc: 'Admin aktif dan responsif melayani tanya jawab serta mempercepat antrean pesanan kamu secepat mungkin.',
      icon: 'Zap',
      emoji: '⚡'
    },
    {
      title: 'Informasi Harga Transparan',
      desc: 'Harga pas sesuai daftar katalog, tanpa biaya tersembunyi atau biaya admin mengejutkan.',
      icon: 'Tag',
      emoji: '🌸'
    },
    {
      title: 'Panduan & Garansi Penuh',
      desc: 'Dipandu langkah login sampai berhasil dan didukung garansi akun aktif selama masa langganan.',
      icon: 'ShieldCheck',
      emoji: '👑'
    }
  ]
};
