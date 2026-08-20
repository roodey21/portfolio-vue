const portfolios = [
    {
        id: 1,
        slug: 'guruinovatif',
        platform: 'website',
        name: 'Guruinovatif',
        description: 'E-Learning Platform for Teachers',
        techStack: 'Laravel, Bootstrap, Tailwind CSS, Livewire, Alpine JS, jQuery, MySQL',
        cover: '/images/guruinovatif.png',
        features: [
            'E-learning platform',
            'Manajemen event',
            'Katalog Produk',
            'Blog',
            'Dll'
        ],
        role: 'Fullstack Developer',
        images: [
            '/images/guruinovatif.png',
            '/images/guruinovatif.png',
        ],
        source: 'https://guruinovatif.id/',
        category: 'work'
    },
    {
        id: 2,
        slug: 'ndoroarum',
        platform: 'website',
        name: 'NdoroArum',
        description: 'Booking Ticketing',
        techStack: 'Laravel, Bootstrap, jQuery, MySQL',
        cover: '/images/ndoroarum.png',
        features: [
            'Booking system',
            'Report pendaftaran',
            'Tracking pendaftaran',
            'Notifikasi email'
        ],
        role: 'Fullstack Developer',
        images: [
            '/images/ndoroarum.png',
            '/images/ndoroarum_02.png',
        ],
        source: '',
        category: 'freelance'
    },
    {
        id: 3,
        slug: 'baktibersama',
        platform: 'website',
        name: 'Bakti Bersama',
        description: 'Unit Pengumpul Zakat',
        techStack: 'Laravel, Bootstrap, jQuery, MySQL',
        cover: '/images/baktibersama.png',
        features: [],
        role: 'Frontend Developer',
        images: [
            '/images/baktibersama.png',
        ],
        source: 'https://baktibersama.id/',
        category: 'work'
    },
    {
        id: 4,
        slug: 'lpphotel',
        platform: 'website',
        name: 'LPP Hotel Group',
        description: 'Landing Page for LPP Hotel Group',
        techStack: 'Laravel, Bootstrap, jQuery, MySQL',
        cover: '/images/lpphotel.png',
        features: [
            'Support multi tenant',
            'Katalog & preview kamar',
            'Integrasi sistem booking',
            'Blog',
            'Dll',
        ],
        role: 'Fullstack Developer, Team Lead',
        images: [
            '/images/lpphotel.png',
            '/images/lpphotel_02.png',
            '/images/lpphotel_03.png',
            '/images/lpphotel_04.png',
        ],
        source: 'https://lpphotelyogya.com/',
        category: 'freelance'
    },
    {
        id: 5,
        slug: 'siskubis',
        platform: 'website',
        name: 'Siskubis',
        description: 'Sistem Inkubasi Bisnis UNY (Prototype)',
        techStack: 'Laravel, Bootstrap, jQuery, MySQL, Livewire, Alpine JS',
        cover: '/images/siskubis.png',
        features: [
            'E-catalog produk UMKM',
            'Manajemen event',
            'Report penjualan',
            'Sistem persuratan',
        ],
        role: 'Fullstack Developer',
        images: [
            '/images/siskubis.png',
            '/images/siskubis_02.png',
        ],
        source: '',
        category: 'work'
    },
    {
        id: 6,
        slug: 'auliya',
        platform: 'website',
        name: 'Sekolah Auliya',
        description: 'Backoffice App',
        techStack: 'Laravel, Bootstrap, jQuery, MySQL',
        features: [
            'Sistem PSB',
            'Report Flow arus kas',
            'Integrasi pembayaran (bank BSI)',
            'Sistem kantin',
            'Sistem ekstrakurikuler',
            'Dll'
        ],
        role: 'Fullstack Developer',
        cover: '/images/auliya.png',
        images: [
            '/images/siskubis.png',
            '/images/siskubis_02.png',
        ],
        source: 'https://sekolahauliya.sch.id/',
        category: 'freelance'
    },
    {
        id: 8,
        slug: 'arsenik',
        platform: 'website',
        name: 'Arsenik - Online Shop',
        description: "Toko Online UMKM Gerabah",
        techStack: 'Laravel, Bootstrap, jQuery',
        features: [
            'Katalog produk',
            'Laporan penjualan',
            'Integrasi Payment Gateway',
            'Integrasi Cek Ongkir',
            'Blog',
        ],
        role: 'Fullstack Developer, Team Lead',
        cover: '/images/arsenik.png',
        images: [
            '/images/siskubis.png',
            '/images/siskubis_02.png',
        ],
        source: '',
        category: 'freelance'
    },
    {
        id: 9,
        slug: 'lppagro',
        platform: 'website',
        name: 'LPP Agro Nusantara',
        description: "Landing Page",
        techStack: 'Wordpress, JQuery',
        features: [],
        role: 'Fullstack Developer',
        cover: '/images/lppagro.png',
        images: [
            '/images/siskubis.png',
            '/images/siskubis_02.png',
        ],
        source: 'https://lpp.co.id',
        category: 'freelance'
    },
    {
        id: 10,
        slug: 'siera',
        platform: 'website',
        name: 'Siera App',
        description: "Mailing System App",
        techStack: 'Laravel, JQuery, Bootstrap, React, Inertia',
        features: [
            'Surat masuk',
            'Surat keluar',
            'Disposisi surat',
            'Integrasi Google Drive',
            'Mail & Whatsapp Notification',
        ],
        role: 'Fullstack Developer',
        cover: '/images/siera.png',
        images: [
            '/images/siskubis.png',
            '/images/siskubis_02.png',
        ],
        source: '',
        category: 'freelance'
    },
    {
        id: 11,
        slug: 'smkmisbah',
        platform: 'website',
        name: 'SMK Misabahul Aulad',
        description: "School Website",
        techStack: 'Laravel, Livewire, Bootstrap, Jquery, Tailwind',
        cover: '/images/smkmisbah.png',
        features: [
            'Landing Page',
            'Blog',
            'PSB'
        ],
        role: 'Fullstack Developer',
        images: [
            '/images/siskubis.png',
            '/images/siskubis_02.png',
        ],
        source: 'https://smkmisbah.sch.id/',
        category: 'freelance'
    },
    {
        id: 12,
        slug: 'pomovue',
        platform: 'website',
        name: 'Pomodoro App',
        description: "Re-Create from pomofocus.io",
        techStack: 'Vue.js, TailwindCSS',
        cover: '/images/pomovue.png',
        features: [],
        role: 'Fullstack Developer',
        images: [
            '/images/siskubis.png',
            '/images/siskubis_02.png',
        ],
        source: 'https://smkmisbah.sch.id/',
        category: 'personal'
    },
    {
        id: 13,
        slug: 'arsikarta',
        platform: 'website',
        name: 'Arsikarta',
        description: "Architech Company",
        techStack: 'wordpress',
        cover: '/images/arsikarta.png',
        features: [],
        role: 'Fullstack Developer',
        images: [
            '/images/siskubis.png',
            '/images/siskubis_02.png',
        ],
        source: 'https://arsikarta.com/',
        category: 'freelance'
    },
    {
        id: 14,
        slug: 'narasena',
        platform: 'website',
        name: 'Narasena Co-Living',
        description: 'Landing Page & Booking System Narasena Co-Living',
        techStack: 'Laravel, Bootstrap, jQuery, MySQL',
        cover: '/images/narasena.png',
        features: [
            'Landing page & room showcase',
            'List kamar & harga',
            'Testimoni & review tamu',
            'Integrasi booking engine'
        ],
        role: 'Fullstack Developer',
        images: [
            '/images/narasena.png',
            '/images/narasena_02.png',
        ],
        source: 'https://narasenacoliving.com/',
        category: 'freelance'
    },
    {
        id: 15,
        slug: 'mantravana',
        platform: 'website',
        name: 'Mantravana Co-Living',
        description: 'Landing Page & Booking System Mantravana Co-Living',
        techStack: 'Laravel, Bootstrap, jQuery, MySQL',
        cover: '/images/mantravana.png',
        features: [
            'Landing page & room showcase',
            'List kamar & harga',
            'Testimoni & review tamu',
            'Integrasi booking engine'
        ],
        role: 'Fullstack Developer',
        images: [
            '/images/mantravana.png',
            '/images/mantravana_02.png',
        ],
        source: 'https://mantravanacoliving.com/',
        category: 'freelance'
    },
    {
        id: 16,
        slug: 'javasentosa',
        platform: 'website',
        name: 'Java Sentosa Indonesia',
        description: 'Trip & Tour Magelang Jogja',
        techStack: 'Laravel, Bootstrap, jQuery, MySQL',
        cover: '/images/javasentosa.png',
        features: [
            'Landing page Trip & Tour Magelang - Jogja',
            'Support multi destinasi wisata dalam satu aplikasi',
            'Katalog paket tour & harga',
            'Form reservasi / booking tour'
        ],
        role: 'Fullstack Developer',
        images: [
            '/images/javasentosa.png',
            '/images/javasentosa_02.png',
        ],
        source: 'https://javasentosaindonesia.com/',
        category: 'freelance'
    },
    {
        id: 17,
        slug: 'kartoharjourney',
        platform: 'website',
        name: 'Kartoharjourney',
        description: 'Website Desa & Jurnal Kegiatan KKN',
        techStack: 'Laravel, Bootstrap, Tailwind CSS, MySQL',
        cover: '/images/kartoharjourney.png',
        features: [
            'Profil & informasi desa',
            'Jurnaling & dokumentasi kegiatan KKN',
            'Galeri foto kegiatan',
            'Artikel & publikasi program kerja'
        ],
        role: 'Fullstack Developer',
        images: [
            '/images/kartoharjourney.png',
            '/images/kartoharjourney_02.png',
        ],
        source: 'https://kartoharjourney.my.id/',
        category: 'freelance'
    },
]

export default portfolios