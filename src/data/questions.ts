import {
  AvatarDefinition,
  BuildingCode,
  BuildingMeta,
  CanteenItem,
  LevelDefinition,
  QuestionItem,
} from '../types/edublox';

export const AVATARS: AvatarDefinition[] = [
  { id: 'raja', name: 'Raja Blox', icon: '👑', desc: 'Mahkota Emas', color: '#facc15' },
  { id: 'neko', name: 'Neko Pink', icon: '🐱', desc: 'Telinga Kucing', color: '#ec4899' },
  { id: 'kapten', name: 'Kapten Bintang', icon: '🛸', desc: 'Antena Angkasa', color: '#38bdf8' },
  { id: 'knight', name: 'Emerald Knight', icon: '🛡️', desc: 'Kostum Hijau', color: '#10b981' },
  { id: 'wizard', name: 'Rainbow Wizard', icon: '🧙', desc: 'Topi Penyihir', color: '#8b5cf6' },
  { id: 'noob', name: 'Classic Noob', icon: '🧱', desc: 'Blocky Klasik', color: '#f97316' },
];

export const OUTFIT_COLORS = [
  '#38bdf8',
  '#10b981',
  '#8b5cf6',
  '#f97316',
  '#facc15',
  '#ec4899',
];

export const LEVELS: LevelDefinition[] = [
  { level: 1, title: 'New Explorer', minXP: 0 },
  { level: 2, title: 'Data Beginner', minXP: 150 },
  { level: 3, title: 'Set Strategist', minXP: 350 },
  { level: 4, title: 'Formula Master', minXP: 600 },
  { level: 5, title: 'Binary & Stack Pro', minXP: 900 },
  { level: 6, title: 'Informatics Champion', minXP: 1250 },
];

export const CANTEEN_ITEMS: CanteenItem[] = [
  { id: 'esteh', name: 'Es Teh Manis', icon: '🧋', price: 20, xp: 15, desc: 'Segar setelah mikir rumus!' },
  { id: 'burger', name: 'Burger Blox', icon: '🍔', price: 50, xp: 45, desc: 'Energi ekstra menjelajah kota!' },
  { id: 'pizza', name: 'Pizza Voxel', icon: '🍕', price: 70, xp: 65, desc: 'Lezatnya bikin fokus kuis!' },
  { id: 'donat', name: 'Donat Pelangi', icon: '🍩', price: 30, xp: 25, desc: 'Manis ceria ala Edublox!' },
  { id: 'eskrim', name: 'Es Krim Sundae', icon: '🍨', price: 35, xp: 30, desc: 'Dingin menyegarkan pikiran!' },
  { id: 'bakso', name: 'Bakso Spesial', icon: '🍜', price: 60, xp: 55, desc: 'Hangat & mengenyangkan!' },
];

export const BUILDINGS_META: Record<BuildingCode, BuildingMeta> = {
  A: {
    name: 'Gedung A – Fungsi & Pemrograman',
    short: 'Gedung A: Fungsi & Pemrograman',
    color: 0xf97316,
    hex: '#f97316',
    pos: { x: -65, z: -65 },
    icon: '🧠',
    desc: 'Alur Input–Proses–Output, Fungsi & Dekomposisi',
  },
  B: {
    name: 'Gedung B – Analisis Data & Grafik',
    short: 'Gedung B: Analisis Data & Grafik',
    color: 0x38bdf8,
    hex: '#38bdf8',
    pos: { x: 65, z: -65 },
    icon: '📊',
    desc: 'Grafik Garis, Lingkaran, Batang, Sebar & Data Terstruktur',
  },
  C: {
    name: 'Gedung C – Spreadsheet & Formula Lab',
    short: 'Gedung C: Spreadsheet & Formula',
    color: 0x10b981,
    hex: '#10b981',
    pos: { x: -75, z: 45 },
    icon: '📗',
    desc: 'Filter, Find All, SUM, AVERAGE, MAX, COUNT & COUNTIF',
  },
  D: {
    name: 'Gedung D – Himpunan & Logika Data',
    short: 'Gedung D: Himpunan & Logika',
    color: 0x8b5cf6,
    hex: '#8b5cf6',
    pos: { x: 75, z: 45 },
    icon: '🧩',
    desc: 'Kriteria Himpunan, Irisan, Gabungan, Selisih & Komplemen',
  },
  E: {
    name: 'Gedung E – Sistem Bilangan & Stack',
    short: 'Gedung E: Bilangan, Modulo & Stack',
    color: 0xec4899,
    hex: '#ec4899',
    pos: { x: 0, z: 85 },
    icon: '🔢',
    desc: 'Biner, Oktal, Heksadesimal, Modulo, Stack LIFO & Postfix',
  },
};

export const DEFAULT_QUESTIONS: QuestionItem[] = [
  // =========================================================================
  // 38 SOAL DARI PSAS INFORMATIKA KELAS VIII (NO. 1–38)
  // =========================================================================

  // --- Bagian A: Pilihan Ganda PSAS (9 soal: PSAS No. 2–10) ---
  {
    id: 1,
    building: 'C',
    category: 'Filter Data Spreadsheet',
    source: 'PSAS',
    type: 'single',
    visualId: 'tabel1_koperasi',
    question:
      'Perhatikan Tabel 1! Pak Hadi menerapkan dua filter sekaligus, yaitu Kategori = Minuman dan Stok > 25. Barang yang masih ditampilkan setelah kedua filter diterapkan adalah ....',
    options: {
      A: 'Teh Botol saja',
      B: 'Air Mineral dan Teh Botol',
      C: 'Air Mineral dan Jus Jeruk',
      D: 'Air Mineral, Teh Botol, dan Jus Jeruk',
    },
    answer: 'C',
    explanation:
      'Barang kategori Minuman adalah Air Mineral (stok 120), Teh Botol (stok 8), dan Jus Jeruk (stok 30). Yang memiliki stok > 25 hanya Air Mineral dan Jus Jeruk.',
  },
  {
    id: 2,
    building: 'B',
    category: 'Visualisasi Data & Grafik',
    source: 'PSAS',
    type: 'single',
    question:
      'A school wants to present the percentage of students in each extracurricular club: Scouts 35%, Futsal 25%, Quran Recitation 20%, and IT Club 20%. Which chart is the most appropriate to show the proportion of each club to the whole?',
    options: {
      A: 'Line chart',
      B: 'Scatter plot',
      C: 'Area chart',
      D: 'Pie chart',
    },
    answer: 'D',
    explanation:
      'Pie chart (grafik lingkaran) paling tepat untuk menunjukkan proporsi atau persentase tiap bagian terhadap keseluruhan (total 100%).',
  },
  {
    id: 3,
    building: 'B',
    category: 'Interpretasi Grafik',
    source: 'PSAS',
    type: 'single',
    visualId: 'gambar1_buku',
    question:
      'Perhatikan Gambar 1! Pernyataan yang sesuai dengan data pada grafik tersebut adalah ....',
    options: {
      A: 'Peminjaman buku turun hanya pada bulan Oktober dan mencapai puncak pada bulan November.',
      B: 'Peminjaman buku menurun setiap bulan sejak bulan Juli.',
      C: 'Peminjaman buku tertinggi terjadi pada bulan September.',
      D: 'Peminjaman buku pada bulan Oktober adalah yang terendah.',
    },
    answer: 'A',
    explanation:
      'Data grafik: Juli (80), Agustus (95), September (130), Oktober (110), November (150). Penurunan hanya terjadi di Oktober dan puncak tertinggi di November.',
  },
  {
    id: 4,
    building: 'C',
    category: 'Formula Spreadsheet',
    source: 'PSAS',
    type: 'single',
    question:
      'Bu Siti menyimpan nilai ulangan 30 siswa pada sel B2 sampai B31 di lembar kerja. Untuk mengetahui nilai tertinggi di kelas tersebut, formula yang tepat adalah ....',
    options: {
      A: '=MIN(B2:B31)',
      B: '=MAX(B2:B31)',
      C: '=AVERAGE(B2:B31)',
      D: '=SUM(B2:B31)',
    },
    answer: 'B',
    explanation:
      'Fungsi MAX digunakan untuk mencari nilai terbesar (tertinggi) dari suatu rentang sel, yaitu =MAX(B2:B31).',
  },
  {
    id: 5,
    building: 'C',
    category: 'Formula Spreadsheet',
    source: 'PSAS',
    type: 'single',
    visualId: 'nilai_ulangan_1',
    question:
      'Perhatikan potongan lembar kerja nilai ulangan tersebut! Jika sel D2 diisi formula =COUNTIF(B2:B9,">=75"), angka yang ditampilkan pada sel D2 adalah ....',
    options: {
      A: '4',
      B: '5',
      C: '6',
      D: '8',
    },
    answer: 'B',
    explanation:
      'Nilai pada B2:B9 yang >= 75 adalah Budi (85), Citra (90), Eka (80), Fani (95), dan Hana (75), berjumlah 5 siswa.',
  },
  {
    id: 6,
    building: 'A',
    category: 'Fungsi & Pemrograman',
    source: 'PSAS',
    type: 'single',
    visualId: 'kode_program_1',
    question:
      'Look at Program Code 1! The program above is run, and the user types 12 for the first number and 8 for the second number. What is displayed on the screen?',
    options: {
      A: 'Hasil Penjumlahan: 12',
      B: 'Hasil Penjumlahan: 8',
      C: 'Hasil Penjumlahan: 20',
      D: 'Hasil Penjumlahan: 96',
    },
    answer: 'C',
    explanation:
      'Fungsi int() mengubah input "12" dan "8" menjadi bilangan bulat lalu menjumlahkannya (12 + 8 = 20), sehingga tampil "Hasil Penjumlahan: 20".',
  },
  {
    id: 7,
    building: 'D',
    category: 'Operasi Himpunan',
    source: 'PSAS',
    type: 'single',
    visualId: 'tabel2_ekskul',
    question:
      'Perhatikan Tabel 2! Himpunan siswa yang mengikuti Futsal tetapi tidak mengikuti Pramuka beserta notasi yang tepat adalah ....',
    options: {
      A: 'A − B = {Andi, Citra}',
      B: 'A ∩ B = {Bima, Dewi}',
      C: 'B − A = {Eko, Fajar}',
      D: 'A ∪ B = {Andi, Bima, Citra, Dewi, Eko, Fajar}',
    },
    answer: 'A',
    explanation:
      'Selisih himpunan A − B berisi anggota A (Futsal) yang bukan anggota B (Pramuka), yaitu Andi dan Citra.',
  },
  {
    id: 8,
    building: 'E',
    category: 'Sistem Bilangan',
    source: 'PSAS',
    type: 'single',
    question:
      'Dika converts the decimal number 29 into binary by repeatedly dividing it by 2. The remainders in the order they are obtained are 1, 0, 1, 1, 1. Dika writes the remainders from the first to the last as his answer: 10111. Which statement is correct?',
    options: {
      A: 'His answer is correct because remainders are always written in the order they are obtained.',
      B: 'His answer is incorrect; the correct binary number is 11011.',
      C: 'His answer is incorrect; the correct binary number is 10101.',
      D: 'His answer is incorrect; the remainders must be arranged from the last to the first, so the correct binary number is 11101.',
    },
    answer: 'D',
    explanation:
      'Sisa pembagian berulang harus disusun dari sisa terakhir ke sisa pertama (bawah ke atas): 11101₂ (16 + 8 + 4 + 0 + 1 = 29).',
  },
  {
    id: 9,
    building: 'E',
    category: 'Struktur Data Stack',
    source: 'PSAS',
    type: 'single',
    question:
      'Sebuah aplikasi menyimpan data menggunakan stack yang awalnya kosong. Operasi berikut dijalankan secara berurutan: push(2), push(4), push(6), pop(), push(9), push(5), pop(). Elemen yang berada di posisi paling atas (top) setelah semua operasi selesai adalah ....',
    options: {
      A: '4',
      B: '5',
      C: '6',
      D: '9',
    },
    answer: 'D',
    explanation:
      'Urutan isi stack: [2] → [2,4] → [2,4,6] → pop() jadi [2,4] → [2,4,9] → [2,4,9,5] → pop() jadi [2,4,9]. Elemen teratas adalah 9.',
  },

  // --- Bagian B: Pilihan Ganda Kompleks PSAS (10 soal: PSAS No. 11–20, pilih 2) ---
  {
    id: 10,
    building: 'C',
    category: 'Filter Data Spreadsheet',
    source: 'PSAS',
    type: 'complex',
    visualId: 'tabel3_lomba',
    question:
      'Perhatikan Tabel 3! Pak Rahmat menerapkan filter Lomba = Coding dan Nilai > 85. Pilihlah dua siswa yang masih ditampilkan setelah kedua filter diterapkan!',
    options: {
      A: 'Adit',
      B: 'Bella',
      C: 'Dimas',
      D: 'Fikri',
    },
    complexAnswers: ['A', 'C'],
    explanation:
      'Peserta lomba Coding adalah Adit (88), Dimas (95), Elsa (70), dan Fikri (82). Yang nilainya > 85 adalah Adit (88) dan Dimas (95).',
  },
  {
    id: 11,
    building: 'B',
    category: 'Visualisasi Data & Grafik',
    source: 'PSAS',
    type: 'complex',
    question:
      'Rina is learning to choose charts in a spreadsheet application. Select the TWO correct pairs of a chart type and its best use!',
    options: {
      A: 'Line chart – showing changes (trends) in data over time',
      B: 'Scatter plot – showing the percentage of each part of a whole',
      C: 'Line chart – comparing the proportion of five snack types sold in one day',
      D: 'Pie chart – showing the proportion of each category to the whole',
    },
    complexAnswers: ['A', 'D'],
    explanation:
      'Line chart cocok untuk melihat tren perubahan dari waktu ke waktu (A), sedangkan Pie chart cocok untuk melihat proporsi tiap kategori terhadap keseluruhan (D).',
  },
  {
    id: 12,
    building: 'C',
    category: 'Formula Spreadsheet',
    source: 'PSAS',
    type: 'complex',
    visualId: 'nilai_ulangan_2',
    question:
      'Perhatikan lembar kerja nilai ulangan berikut! Pilihlah dua formula yang menghasilkan angka 80!',
    options: {
      A: '=SUM(B2:B6)/2',
      B: '=AVERAGE(B2:B6)',
      C: '=MAX(B2:B6)-MIN(B2:B6)',
      D: '=SUM(B2:B6)/COUNT(B2:B6)',
    },
    complexAnswers: ['B', 'D'],
    explanation:
      'Jumlah nilai 85+70+90+60+95 = 400 dengan 5 data. Rata-rata =AVERAGE(B2:B6) menghasilkan 80, dan =SUM(B2:B6)/COUNT(B2:B6) = 400/5 = 80.',
  },
  {
    id: 13,
    building: 'A',
    category: 'Fungsi & Pemrograman',
    source: 'PSAS',
    type: 'complex',
    visualId: 'kode_program_1',
    question:
      'Perhatikan Kode Program 1! Pilihlah dua pernyataan yang benar tentang alur input-proses-output pada program tersebut!',
    options: {
      A: 'Baris print() merupakan proses penjumlahan dua angka.',
      B: 'Fungsi input() menerima data yang diketik pengguna sebagai input.',
      C: 'Ekspresi int(angka1) + int(angka2) merupakan proses yang mengolah input.',
      D: 'Nilai yang tersimpan di variabel angka1 sudah bertipe bilangan bulat (integer).',
    },
    complexAnswers: ['B', 'C'],
    explanation:
      'Fungsi input() berperan menerima masukan pengguna bertipe string (B), dan ekspresi int(angka1) + int(angka2) adalah tahap proses pengolahan (C).',
  },
  {
    id: 14,
    building: 'D',
    category: 'Pengertian Himpunan',
    source: 'PSAS',
    type: 'complex',
    question:
      'Sebuah kumpulan baru dapat disebut himpunan jika kriteria keanggotaannya objektif dan jelas. Pilihlah dua kumpulan berikut yang dapat disebut himpunan!',
    options: {
      A: 'Kumpulan siswa pintar di kelas VIII',
      B: 'Kumpulan makanan lezat di kantin sekolah',
      C: 'Kumpulan bilangan prima yang kurang dari 10',
      D: 'Kumpulan siswa kelas VIII yang nilai rata-rata semua mata pelajarannya di atas 85',
    },
    complexAnswers: ['C', 'D'],
    explanation:
      'Kumpulan bilangan prima < 10 (C) dan siswa bernilai rata-rata > 85 (D) memiliki batasan objektif dan pasti, sedangkan "pintar" dan "lezat" bersifat subjektif.',
  },
  {
    id: 15,
    building: 'D',
    category: 'Operasi Himpunan',
    source: 'PSAS',
    type: 'complex',
    visualId: 'tabel4_lomba',
    question: 'Perhatikan Tabel 4! Pilihlah dua pernyataan yang benar!',
    options: {
      A: 'A − B = {Ali, Budi, Dedi}',
      B: 'Himpunan A ∪ B memiliki 7 anggota',
      C: 'B − A = {Cici, Evi, Fani, Gita}',
      D: 'Himpunan A ∪ B memiliki 9 anggota',
    },
    complexAnswers: ['A', 'B'],
    explanation:
      'A − B = {Ali, Budi, Dedi} (A benar). Gabungan A ∪ B = {Ali, Budi, Cici, Dedi, Evi, Fani, Gita} berisi 7 anggota unik (B benar).',
  },
  {
    id: 16,
    building: 'E',
    category: 'Sistem Bilangan',
    source: 'PSAS',
    type: 'complex',
    question: 'Select the TWO correct statements about number systems!',
    options: {
      A: 'The octal number 745₈ equals 485 in decimal.',
      B: 'The binary system uses three digits: 0, 1, and 2.',
      C: 'The hexadecimal system uses the digits 0–9 and the letters A–F.',
      D: 'The hexadecimal digit F represents the decimal number 16.',
    },
    complexAnswers: ['A', 'C'],
    explanation:
      '745₈ = 7×64 + 4×8 + 5 = 448 + 32 + 5 = 485 (A benar). Heksadesimal memakai digit 0–9 dan huruf A–F yang bernilai 10–15 (C benar).',
  },
  {
    id: 17,
    building: 'E',
    category: 'Aritmetika Modulo',
    source: 'PSAS',
    type: 'complex',
    question:
      'Operasi modulo (mod) menghasilkan sisa pembagian dari dua bilangan. Contohnya, 10 mod 3 = 1 karena 10 dibagi 3 bersisa 1. Pilihlah dua pernyataan berikut yang benar!',
    options: {
      A: '15 mod 4 = 4',
      B: '17 mod 5 = 2',
      C: '9 mod 3 = 3',
      D: '7 mod 10 = 7',
    },
    complexAnswers: ['B', 'D'],
    explanation:
      '17 dibagi 5 hasil 3 sisa 2 (17 mod 5 = 2), dan 7 dibagi 10 hasil 0 sisa 7 (7 mod 10 = 7). Sedangkan 15 mod 4 = 3 dan 9 mod 3 = 0.',
  },
  {
    id: 18,
    building: 'E',
    category: 'Struktur Data Stack',
    source: 'PSAS',
    type: 'complex',
    question:
      'A stack is a data structure that stores data in a certain order. Select the TWO correct statements about stack!',
    options: {
      A: 'A stack follows the FIFO (First In First Out) principle.',
      B: 'The pop operation removes the element at the bottom of the stack.',
      C: 'The push operation adds a new element to the top of the stack.',
      D: 'A stack follows the LIFO (Last In First Out) principle.',
    },
    complexAnswers: ['C', 'D'],
    explanation:
      'Stack menggunakan prinsip LIFO (Last In First Out) dan operasi push menambahkan elemen baru ke bagian paling atas (top).',
  },
  {
    id: 19,
    building: 'E',
    category: 'Notasi Postfix & Stack',
    source: 'PSAS',
    type: 'complex',
    question:
      'Ekspresi postfix: 6 2 3 + * 4 -. Ekspresi tersebut dihitung menggunakan stack dari kiri ke kanan. Angka dimasukkan ke stack (push). Ketika bertemu operator, dua angka teratas diambil (pop), dihitung, lalu hasilnya dimasukkan kembali ke stack. Pilihlah dua pernyataan yang benar!',
    options: {
      A: 'Setelah operator + diproses, isi stack dari bawah ke atas adalah 6 dan 5.',
      B: 'Operator + yang pertama menjumlahkan angka 6 dan 2.',
      C: 'Hasil akhir ekspresi postfix tersebut adalah 26.',
      D: 'Bentuk infix yang setara dengan ekspresi tersebut adalah 6 × 2 + 3 − 4.',
    },
    complexAnswers: ['A', 'C'],
    explanation:
      'Push 6, 2, 3 → "+" menjumlahkan 2+3=5 sehingga isi stack [6, 5] (A benar) → "*" menghitung 6×5=30 → push 4 → "−" menghitung 30−4=26 (C benar). Bentuk infix setaranya adalah 6 × (2 + 3) − 4.',
  },

  // --- Bagian C: Benar - Salah PSAS (10 soal: PSAS No. 21–30) ---
  {
    id: 20,
    building: 'C',
    category: 'Filter & Pencarian Data',
    source: 'PSAS',
    type: 'truefalse',
    visualId: 'tabel5_perpustakaan',
    question: 'Perhatikan Tabel 5! Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      'Filter Kategori = Novel menampilkan 2 judul buku, yaitu Laskar Pelangi dan Bumi.',
      'Filter Eksemplar > 5 tetap menampilkan Atomic Habits karena jumlah eksemplarnya 5.',
      'Fitur pencarian (Find) dengan kata kunci "Bumi" membantu menemukan data tersebut tanpa menyembunyikan baris-baris lainnya.',
    ],
    tfAnswers: ['Benar', 'Salah', 'Benar'],
    tfLabels: ['Benar', 'Salah'],
    explanation:
      'Kategori Novel berjumlah 2 buku (Benar). Syarat Eksemplar > 5 tidak mencakup angka 5 sehingga Atomic Habits tidak tampil (Salah). Fitur Find menyorot data tanpa menyembunyikan baris lain (Benar).',
  },
  {
    id: 21,
    building: 'B',
    category: 'Interpretasi Grafik',
    source: 'PSAS',
    type: 'truefalse',
    visualId: 'figure2_ekskul',
    question: 'Look at Figure 2! Decide whether each statement is True or False!',
    statements: [
      'The Scouts has the highest number of participants.',
      'The number of Futsal participants is twice the number of IT Club participants.',
      'The difference between Recitation and Flag Team participants is 10 students.',
    ],
    tfAnswers: ['Benar', 'Benar', 'Salah'],
    tfLabels: ['True', 'False'],
    explanation:
      'Scouts = 40 tertinggi (True). Futsal = 30 adalah 2 × IT Club (15) (True). Selisih Recitation (25) dan Flag Team (20) adalah 5 siswa, bukan 10 (False).',
  },
  {
    id: 22,
    building: 'B',
    category: 'Visualisasi Data & Grafik',
    source: 'PSAS',
    type: 'truefalse',
    question:
      'Rani ingin menunjukkan perubahan jumlah pengunjung perpustakaan dari hari Senin sampai Jumat. Ia menyajikan data tersebut dalam grafik lingkaran tanpa judul dan tanpa label. Gurunya menilai grafik itu kurang tepat dan kurang informatif. Tentukan Benar atau Salah untuk setiap saran berikut!',
    statements: [
      'Grafik lingkaran sudah tepat karena dapat menunjukkan tren kenaikan dan penurunan pengunjung dari hari ke hari.',
      'Grafik garis lebih sesuai untuk menampilkan tren kenaikan dan penurunan jumlah pengunjung setiap hari.',
      'Menambahkan judul grafik dan label sumbu membuat grafik lebih informatif dan mudah dipahami.',
    ],
    tfAnswers: ['Salah', 'Benar', 'Benar'],
    tfLabels: ['Benar', 'Salah'],
    explanation:
      'Grafik lingkaran bukan untuk tren harian (Salah). Grafik garis cocok untuk tren waktu (Benar), dan judul serta label sumbu memperjelas informasi grafik (Benar).',
  },
  {
    id: 23,
    building: 'C',
    category: 'Formula Spreadsheet',
    source: 'PSAS',
    type: 'truefalse',
    visualId: 'penjualan_esteh',
    question:
      'Perhatikan lembar kerja penjualan es teh berikut! Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      'Formula =SUM(B2:B6) menghasilkan angka 600.',
      'Formula =AVERAGE(B2:B6) menghasilkan angka 125.',
      'Formula =COUNTIF(B2:B6,">120") menghasilkan angka 3.',
    ],
    tfAnswers: ['Benar', 'Salah', 'Salah'],
    tfLabels: ['Benar', 'Salah'],
    explanation:
      '120+95+150+110+125 = 600 (Benar). Rata-rata = 600/5 = 120 bukan 125 (Salah). Nilai > 120 hanya Rabu (150) dan Jumat (125), yaitu 2 hari bukan 3 (Salah).',
  },
  {
    id: 24,
    building: 'A',
    category: 'Fungsi & Pemrograman',
    source: 'PSAS',
    type: 'truefalse',
    visualId: 'kode_program_1',
    question:
      'Perhatikan Kode Program 1! Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      'Teks "Hasil Penjumlahan: ..." yang tampil di layar merupakan proses dari program tersebut.',
      'Angka yang diketik pengguna pada input() merupakan input dari program tersebut.',
      'Jika pengguna mengetik 5 dan 7, prosesnya tetap penjumlahan sehingga output yang tampil adalah 12.',
    ],
    tfAnswers: ['Salah', 'Benar', 'Benar'],
    tfLabels: ['Benar', 'Salah'],
    explanation:
      'Teks yang tampil di layar lewat print() adalah output, bukan proses (Salah). Masukan dari input() adalah input (Benar), dan 5 + 7 menghasilkan output 12 (Benar).',
  },
  {
    id: 25,
    building: 'B',
    category: 'Data Terstruktur',
    source: 'PSAS',
    type: 'truefalse',
    visualId: 'data_ab',
    question:
      'Perhatikan dua bentuk penyajian data tersebut! Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      'Data B termasuk data terstruktur karena memuat angka.',
      'Data A termasuk data terstruktur karena disusun dalam kolom dan baris dengan format yang teratur.',
      'Agar Data B mudah diolah komputer, data tersebut dapat diubah terlebih dahulu ke bentuk tabel.',
    ],
    tfAnswers: ['Salah', 'Benar', 'Benar'],
    tfLabels: ['Benar', 'Salah'],
    explanation:
      'Data B berbentuk paragraf teks sehingga merupakan data tidak terstruktur meskipun memuat angka (Salah). Data A berupa tabel teratur (Benar), dan Data B perlu distrukturkan ke tabel agar mudah diolah (Benar).',
  },
  {
    id: 26,
    building: 'D',
    category: 'Operasi Himpunan',
    source: 'PSAS',
    type: 'truefalse',
    visualId: 'tabel6_kelas8a',
    question:
      'Perhatikan Tabel 6! Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      "A' (komplemen A) = {Budi, Dina, Eko}.",
      "A ∪ A' = A.",
      "A ∩ A' memiliki 5 anggota.",
    ],
    tfAnswers: ['Benar', 'Salah', 'Salah'],
    tfLabels: ['Benar', 'Salah'],
    explanation:
      "Komplemen A adalah anggota S selain Ani dan Citra, yaitu {Budi, Dina, Eko} (Benar). A ∪ A' = S bukan A (Salah), dan A ∩ A' adalah himpunan kosong (0 anggota) (Salah).",
  },
  {
    id: 27,
    building: 'E',
    category: 'Sistem Bilangan',
    source: 'PSAS',
    type: 'truefalse',
    question: 'Decide whether each conversion is True or False!',
    statements: [
      'The decimal number 12 equals 1010 in binary.',
      'The binary number 1101 equals 13 in decimal.',
      'The hexadecimal number 2F equals 41 in decimal.',
    ],
    tfAnswers: ['Salah', 'Benar', 'Salah'],
    tfLabels: ['True', 'False'],
    explanation:
      '12 desimal = 1100 biner, bukan 1010 (False). 1101₂ = 8+4+0+1 = 13 (True). 2F₁₆ = 2×16 + 15 = 47, bukan 41 (False).',
  },
  {
    id: 28,
    building: 'E',
    category: 'Aritmetika Modulo',
    source: 'PSAS',
    type: 'truefalse',
    question:
      'Jam digital menggunakan format 24 jam (0–23). Untuk menentukan jam setelah penambahan waktu, digunakan operasi modulo 24. Sekarang pukul 20.00. Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      'Sembilan jam lagi menunjukkan pukul 03.00 karena (20 + 9) mod 24 = 3.',
      'Tiga puluh jam lagi menunjukkan pukul 02.00 karena (20 + 30) mod 24 = 2.',
      'Hasil operasi 24 mod 24 adalah 24.',
    ],
    tfAnswers: ['Salah', 'Benar', 'Salah'],
    tfLabels: ['Benar', 'Salah'],
    explanation:
      '(20+9) mod 24 = 29 mod 24 = 5 (pukul 05.00), bukan 3 (Salah). (20+30) mod 24 = 50 mod 24 = 2 (Benar). 24 habis dibagi 24 sehingga 24 mod 24 = 0 (Salah).',
  },
  {
    id: 29,
    building: 'E',
    category: 'Struktur Data Stack',
    source: 'PSAS',
    type: 'truefalse',
    question:
      'Riwayat halaman pada tombol "Kembali" (Back) di peramban disimpan menggunakan stack. Raka membuka halaman secara berurutan: Beranda, Berita, Olahraga (push). Setelah itu ia menekan tombol Kembali satu kali (pop), lalu membuka halaman Cuaca (push). Halaman yang sedang tampil adalah elemen teratas (top) stack. Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      'Halaman yang sedang tampil adalah Cuaca.',
      'Halaman Olahraga masih tersimpan di dalam stack.',
      'Jika Raka menekan tombol Kembali lagi (pop), halaman yang tampil adalah Berita.',
    ],
    tfAnswers: ['Benar', 'Salah', 'Benar'],
    tfLabels: ['Benar', 'Salah'],
    explanation:
      'Isi stack: [Beranda, Berita, Olahraga] → pop() jadi [Beranda, Berita] → push(Cuaca) jadi [Beranda, Berita, Cuaca]. Jadi tampil Cuaca (Benar), Olahraga sudah terhapus saat pop pertama (Salah), dan jika pop lagi tampil Berita (Benar).',
  },

  // --- Bagian D: Isian Singkat PSAS (9 soal: PSAS No. 31–34, 36–40) ---
  {
    id: 30,
    building: 'C',
    category: 'Filter & Pencarian Data',
    source: 'PSAS',
    type: 'short',
    question:
      'Dina mencari kata kunci "Peralatan Kantor" pada tabel inventaris yang sangat besar menggunakan kotak dialog Find and Replace. Tombol yang digunakan untuk menampilkan semua data yang sesuai dengan kata kunci sekaligus adalah tombol ....',
    acceptedAnswers: ['find all', 'findall', 'temukan semua'],
    displayAnswer: 'Find All',
    explanation:
      'Pada kotak dialog Find and Replace, tombol Find All menampilkan seluruh daftar sel yang cocok dengan kata kunci sekaligus.',
  },
  {
    id: 31,
    building: 'B',
    category: 'Visualisasi Data & Grafik',
    source: 'PSAS',
    type: 'short',
    question:
      'Rina mengumpulkan data lama belajar (dalam jam) dan nilai ulangan Informatika dari 30 temannya. Ia ingin melihat apakah ada hubungan antara kedua variabel tersebut. Jenis grafik yang paling sesuai adalah grafik ....',
    acceptedAnswers: ['sebar', 'grafik sebar', 'scatter', 'scatter plot', 'pencar', 'diagram pencar', 'xy scatter'],
    displayAnswer: 'scatter plot (grafik sebar)',
    explanation:
      'Grafik sebar (scatter plot) digunakan untuk mengamati hubungan atau korelasi antara dua variabel numerik.',
  },
  {
    id: 32,
    building: 'C',
    category: 'Formula Spreadsheet',
    source: 'PSAS',
    type: 'short',
    question:
      'The exam scores of 10 students are stored in cells B2 to B11. Write the spreadsheet formula to count how many students got a score greater than 80.',
    acceptedAnswers: [
      '=countif(b2:b11,">80")',
      '=countif(b2:b11;">80")',
      '=countif(b2:b11, ">80")',
      '=countif(b2:b11; ">80")',
    ],
    displayAnswer: '=COUNTIF(B2:B11,">80")',
    explanation:
      'Fungsi COUNTIF dengan kriteria ">80" pada rentang B2:B11 ditulis =COUNTIF(B2:B11,">80") atau memakai pemisah titik koma (;).',
  },
  {
    id: 33,
    building: 'C',
    category: 'Formula Spreadsheet',
    source: 'PSAS',
    type: 'short',
    visualId: 'nilai_a2_a11',
    question:
      'Perhatikan data nilai ulangan pada sel A2 sampai A11! Jika sel C1 diisi formula =COUNTIF(A2:A11,">=80")/COUNT(A2:A11)*100, angka yang ditampilkan pada sel C1 adalah ....',
    acceptedAnswers: ['50', '50%'],
    displayAnswer: '50',
    explanation:
      'Nilai >= 80 ada 5 data (85, 90, 80, 100, 95) dari total 10 data. Maka (5 / 10) × 100 = 50.',
  },
  {
    id: 34,
    building: 'A',
    category: 'Fungsi & Pemrograman',
    source: 'PSAS',
    type: 'short',
    visualId: 'kode_program_1',
    question:
      'Perhatikan Kode Program 1! Jika bagian int() dihapus sehingga barisnya menjadi hasil = angka1 + angka2, lalu pengguna mengetik 3 dan 4, nilai hasil yang ditampilkan adalah ....',
    acceptedAnswers: ['34'],
    displayAnswer: '34',
    explanation:
      'Tanpa int(), fungsi input() menghasilkan teks (string). Operator + pada string "3" + "4" menggabungkan teks menjadi "34".',
  },
  {
    id: 35,
    building: 'E',
    category: 'Sistem Bilangan',
    source: 'PSAS',
    type: 'short',
    question:
      'Komputer bekerja menggunakan dua kondisi sinyal listrik, yaitu nyala (on) dan mati (off), yang dilambangkan dengan angka 1 dan 0. Sistem bilangan yang hanya menggunakan digit 0 dan 1 disebut sistem bilangan ....',
    acceptedAnswers: ['biner', 'binary', 'basis 2', 'sistem bilangan biner'],
    displayAnswer: 'biner',
    explanation:
      'Sistem bilangan berbasis 2 yang hanya menggunakan dua digit (0 dan 1) disebut sistem bilangan biner.',
  },
  {
    id: 36,
    building: 'E',
    category: 'Sistem Bilangan',
    source: 'PSAS',
    type: 'short',
    question:
      'Convert the decimal number 52 into binary using repeated division by 2. The binary number is ....',
    acceptedAnswers: ['110100'],
    displayAnswer: '110100',
    explanation:
      '52 ÷ 2 = 26 sisa 0; 26 ÷ 2 = 13 sisa 0; 13 ÷ 2 = 6 sisa 1; 6 ÷ 2 = 3 sisa 0; 3 ÷ 2 = 1 sisa 1; 1 ÷ 2 = 0 sisa 1. Disusun dari bawah ke atas: 110100.',
  },
  {
    id: 37,
    building: 'D',
    category: 'Operasi Himpunan',
    source: 'PSAS',
    type: 'short',
    visualId: 'tabel8_lomba',
    question:
      'Perhatikan Tabel 8! Banyak siswa yang mengikuti paling sedikit satu dari kedua lomba, yaitu banyak anggota A ∪ B, adalah ... siswa.',
    acceptedAnswers: ['5', 'lima'],
    displayAnswer: '5',
    explanation:
      'A ∪ B = {Adit, Dimas, Fikri, Bella, Cahya} (Dimas dihitung satu kali), sehingga totalnya 5 siswa.',
  },
  {
    id: 38,
    building: 'E',
    category: 'Notasi Postfix & Stack',
    source: 'PSAS',
    type: 'short',
    question:
      'Operasi perhitungan menggunakan notasi postfix: 12 4 - 3 *. Dengan memanfaatkan stack, hasil perhitungan notasi postfix tersebut adalah ....',
    acceptedAnswers: ['24'],
    displayAnswer: '24',
    explanation:
      'Push 12, push 4 → operator "−" menghitung 12 − 4 = 8 → push 3 → operator "*" menghitung 8 × 3 = 24.',
  },

  // =========================================================================
  // 12 SOAL DARI BANK SOAL BAB 2 BERPIKIR KOMPUTASIONAL (NO. 39–50)
  // =========================================================================
  {
    id: 39,
    building: 'A',
    category: 'Definisi Fungsi',
    source: 'Bank Soal',
    type: 'single',
    question:
      'Mesin ATM menerima kartu dan PIN, memeriksa kecocokan data, lalu menampilkan saldo. Proses dalam contoh tersebut adalah ....',
    options: {
      A: 'menerima kartu dan PIN',
      B: 'memeriksa kecocokan data',
      C: 'menampilkan saldo',
      D: 'mengambil kartu',
    },
    answer: 'B',
    explanation:
      'Memeriksa kecocokan data merupakan tahap proses; kartu dan PIN adalah input, sedangkan saldo yang tampil adalah output.',
  },
  {
    id: 40,
    building: 'A',
    category: 'Fungsi dalam Matematika',
    source: 'Bank Soal',
    type: 'single',
    question: 'Perhatikan fungsi f(x) = 2x + 3. Nilai f(4) adalah ....',
    options: {
      A: '8',
      B: '9',
      C: '11',
      D: '14',
    },
    answer: 'C',
    explanation: 'Substitusikan x = 4 ke dalam fungsi: f(4) = 2(4) + 3 = 8 + 3 = 11.',
  },
  {
    id: 41,
    building: 'A',
    category: 'Fungsi dalam Komputasi',
    source: 'Bank Soal',
    type: 'single',
    question:
      'Diagram alur (flowchart) fungsi perkalian dengan 2 yang inputnya angka 5 memiliki urutan ....',
    options: {
      A: 'Mulai → Output 10 → Proses kali 2 → Input 5 → Selesai',
      B: 'Mulai → Proses → Selesai → Input → Output',
      C: 'Mulai → Input 5 → Proses kali 2 → Output 10 → Selesai',
      D: 'Selesai → Output → Proses → Input → Mulai',
    },
    answer: 'C',
    explanation:
      'Alur fungsi berjalan berurutan: Mulai → Input 5 → Proses kali 2 → Output 10 → Selesai.',
  },
  {
    id: 42,
    building: 'A',
    category: 'Dekomposisi Fungsi',
    source: 'Bank Soal',
    type: 'single',
    question:
      'Rata-rata tugas = 80, rata-rata ujian = 90. Jika nilai akhir = 40% tugas + 60% ujian, maka nilai akhirnya adalah ....',
    options: {
      A: '84',
      B: '85',
      C: '86',
      D: '88',
    },
    answer: 'C',
    explanation: '0,4 × 80 + 0,6 × 90 = 32 + 54 = 86.',
  },
  {
    id: 43,
    building: 'D',
    category: 'Pengertian Himpunan',
    source: 'Bank Soal',
    type: 'single',
    question: 'Himpunan bilangan prima kurang dari 10 adalah ....',
    options: {
      A: '{1, 2, 3, 5, 7}',
      B: '{2, 3, 5, 7, 9}',
      C: '{2, 3, 5, 7}',
      D: '{3, 5, 7}',
    },
    answer: 'C',
    explanation: 'Bilangan prima kurang dari 10 adalah 2, 3, 5, dan 7 (1 dan 9 bukan bilangan prima).',
  },
  {
    id: 44,
    building: 'D',
    category: 'Notasi Himpunan',
    source: 'Bank Soal',
    type: 'single',
    question: 'Himpunan siswa berusia 100 tahun di sebuah kelas SMP adalah himpunan ....',
    options: {
      A: 'semesta',
      B: 'tak hingga',
      C: 'bagian',
      D: 'kosong',
    },
    answer: 'D',
    explanation: 'Tidak ada siswa SMP yang berusia 100 tahun, sehingga himpunan tersebut tidak memiliki anggota (himpunan kosong / ∅).',
  },
  {
    id: 45,
    building: 'B',
    category: 'Data Terstruktur',
    source: 'Bank Soal',
    type: 'single',
    question: 'Berikut yang merupakan contoh data tidak terstruktur adalah ....',
    options: {
      A: 'tabel nilai di lembar kerja',
      B: 'data di basis data',
      C: 'daftar siswa dalam kolom',
      D: 'teks, gambar, video, atau suara',
    },
    answer: 'D',
    explanation: 'Teks bebas, gambar, video, dan suara tidak mengikuti skema kolom-baris tetap sehingga termasuk data tidak terstruktur.',
  },
  {
    id: 46,
    building: 'D',
    category: 'Operasi Himpunan',
    source: 'Bank Soal',
    type: 'single',
    question: 'Diketahui A = {1, 2, 3, 4} dan B = {3, 4, 5}. A ∩ B adalah ....',
    options: {
      A: '{1, 2}',
      B: '{1, 2, 3, 4, 5}',
      C: '{5}',
      D: '{3, 4}',
    },
    answer: 'D',
    explanation: 'Irisan (A ∩ B) berisi elemen yang sama-sama ada di himpunan A dan B, yaitu 3 dan 4.',
  },
  {
    id: 47,
    building: 'E',
    category: 'Sistem Bilangan',
    source: 'Bank Soal',
    type: 'single',
    question: 'Penemu sistem bilangan basis 2 adalah ....',
    options: {
      A: 'Gottfried Wilhelm Leibniz',
      B: 'Blaise Pascal',
      C: 'Isaac Newton',
      D: 'Alan Turing',
    },
    answer: 'A',
    explanation: 'Sistem bilangan biner (basis 2) ditemukan oleh matematikawan Jerman Gottfried Wilhelm Leibniz pada tahun 1679.',
  },
  {
    id: 48,
    building: 'E',
    category: 'Sistem Bilangan',
    source: 'Bank Soal',
    type: 'single',
    question: 'Nilai bilangan heksadesimal 2F3₁₆ dalam desimal adalah ....',
    options: {
      A: '665',
      B: '755',
      C: '765',
      D: '815',
    },
    answer: 'B',
    explanation: '2 × 16² + 15 × 16¹ + 3 × 16⁰ = 2×256 + 15×16 + 3 = 512 + 240 + 3 = 755.',
  },
  {
    id: 49,
    building: 'E',
    category: 'Struktur Data Stack',
    source: 'Bank Soal',
    type: 'single',
    question:
      'Setelah Push(5), Push(8), Push(2), lalu dilakukan satu kali Pop, elemen teratas stack adalah ....',
    options: {
      A: '2',
      B: '8',
      C: '5',
      D: 'kosong',
    },
    answer: 'B',
    explanation: 'Setelah Push(5), Push(8), Push(2), isi stack [5, 8, 2]. Satu kali Pop menghapus 2 sehingga elemen teratas menjadi 8.',
  },
  {
    id: 50,
    building: 'E',
    category: 'Notasi Postfix & Stack',
    source: 'Bank Soal',
    type: 'single',
    question: 'Hasil perhitungan postfix 10 2 1 + × adalah ....',
    options: {
      A: '12',
      B: '13',
      C: '30',
      D: '21',
    },
    answer: 'C',
    explanation: 'Push 10, 2, 1 → "+" menghitung 2 + 1 = 3 → "×" menghitung 10 × 3 = 30.',
  },
];
