import { QuestionVisualId } from '../types/edublox';

interface QuestionVisualProps {
  visualId: QuestionVisualId;
}

export function QuestionVisual({ visualId }: QuestionVisualProps) {
  if (visualId === 'tabel1_koperasi') {
    const rows = [
      ['K01', 'Roti Cokelat', 'Makanan', '3.000', '40'],
      ['K02', 'Air Mineral', 'Minuman', '2.500', '120'],
      ['K03', 'Buku Tulis', 'Alat Tulis', '5.000', '60'],
      ['K04', 'Pulpen Hitam', 'Alat Tulis', '3.500', '15'],
      ['K05', 'Teh Botol', 'Minuman', '4.000', '8'],
      ['K06', 'Keripik Singkong', 'Makanan', '6.000', '25'],
      ['K07', 'Penggaris', 'Alat Tulis', '2.000', '70'],
      ['K08', 'Jus Jeruk', 'Minuman', '5.000', '30'],
    ];
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs overflow-x-auto">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Tabel 1. Data Koperasi Sekolah
        </div>
        <table className="min-w-[400px] max-w-lg mx-auto border-collapse bg-white text-[11px] tabular-nums">
          <thead>
            <tr className="bg-slate-200 text-slate-900 font-bold">
              <th className="border border-slate-300 px-2.5 py-1 text-center">ID</th>
              <th className="border border-slate-300 px-2.5 py-1 text-left">Nama Barang</th>
              <th className="border border-slate-300 px-2.5 py-1 text-left">Kategori</th>
              <th className="border border-slate-300 px-2.5 py-1 text-right">Harga (Rp)</th>
              <th className="border border-slate-300 px-2.5 py-1 text-right">Stok</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([id, name, cat, price, stock]) => (
              <tr key={id}>
                <td className="border border-slate-300 px-2.5 py-0.5 text-center font-semibold">{id}</td>
                <td className="border border-slate-300 px-2.5 py-0.5">{name}</td>
                <td className="border border-slate-300 px-2.5 py-0.5">{cat}</td>
                <td className="border border-slate-300 px-2.5 py-0.5 text-right">{price}</td>
                <td className="border border-slate-300 px-2.5 py-0.5 text-right font-semibold">{stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (visualId === 'gambar1_buku') {
    const pts = [
      { label: 'Juli', val: 80, x: 75 },
      { label: 'Agustus', val: 95, x: 165 },
      { label: 'September', val: 130, x: 255 },
      { label: 'Oktober', val: 110, x: 345 },
      { label: 'November', val: 150, x: 435 },
    ];
    // Map value 60..165 to y 180..30
    const mapY = (v: number) => 180 - ((v - 60) / (165 - 60)) * 150;
    const polyPoints = pts.map((p) => `${p.x},${mapY(p.val)}`).join(' ');

    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs overflow-x-auto">
        <div className="font-bold text-slate-700 mb-1 text-center">
          Gambar 1. Grafik jumlah buku yang dipinjam di Perpustakaan Sekolah
        </div>
        <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-lg p-2">
          <svg viewBox="0 0 490 225" className="w-full h-auto" role="img" aria-label="Grafik jumlah buku yang dipinjam">
            {/* Horizontal grid lines */}
            {[80, 100, 120, 140, 160].map((tick) => {
              const y = mapY(tick);
              return (
                <g key={tick}>
                  <line x1="50" y1={y} x2="465" y2={y} stroke="#e2e8f0" strokeDasharray="3 3" />
                  <text x="42" y={y + 4} textAnchor="end" fontSize="10" fill="#475569">
                    {tick}
                  </text>
                </g>
              );
            })}
            {/* Axes */}
            <line x1="50" y1="22" x2="50" y2="185" stroke="#64748b" strokeWidth="1.2" />
            <line x1="50" y1="185" x2="465" y2="185" stroke="#64748b" strokeWidth="1.2" />
            <text x="16" y="108" textAnchor="middle" fontSize="10" fill="#334155" transform="rotate(-90 16 108)" fontWeight="bold">
              Jumlah Buku
            </text>
            <text x="255" y="218" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="bold">
              Bulan
            </text>

            {/* Line */}
            <polyline fill="none" stroke="#1d4ed8" strokeWidth="2.5" points={polyPoints} />

            {/* Points & Labels */}
            {pts.map((p) => {
              const y = mapY(p.val);
              return (
                <g key={p.label}>
                  <circle cx={p.x} cy={y} r="4.5" fill="#1d4ed8" stroke="#ffffff" strokeWidth="1.5" />
                  <text x={p.x} y={y - 10} textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#0f172a">
                    {p.val}
                  </text>
                  <text x={p.x} y="200" textAnchor="middle" fontSize="10" fill="#334155">
                    {p.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    );
  }

  if (visualId === 'nilai_ulangan_1') {
    const rows = [
      ['2', 'Ani', '70'],
      ['3', 'Budi', '85'],
      ['4', 'Citra', '90'],
      ['5', 'Dedi', '65'],
      ['6', 'Eka', '80'],
      ['7', 'Fani', '95'],
      ['8', 'Gilang', '60'],
      ['9', 'Hana', '75'],
    ];
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs overflow-x-auto">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Tampilan lembar kerja nilai ulangan
        </div>
        <table className="min-w-[240px] max-w-xs mx-auto border-collapse bg-white text-[11px] tabular-nums">
          <thead>
            <tr className="bg-slate-200 text-slate-700">
              <th className="border border-slate-300 px-2 py-1 w-8"></th>
              <th className="border border-slate-300 px-3 py-1">A</th>
              <th className="border border-slate-300 px-3 py-1">B</th>
            </tr>
            <tr className="bg-slate-100 font-bold text-slate-900">
              <td className="border border-slate-300 bg-slate-200 px-2 py-0.5 text-center">1</td>
              <td className="border border-slate-300 px-3 py-0.5">Nama</td>
              <td className="border border-slate-300 px-3 py-0.5 text-center">Nilai</td>
            </tr>
          </thead>
          <tbody>
            {rows.map(([r, name, score]) => (
              <tr key={r}>
                <td className="border border-slate-300 bg-slate-200 px-2 py-0.5 text-center font-bold">
                  {r}
                </td>
                <td className="border border-slate-300 px-3 py-0.5">{name}</td>
                <td className="border border-slate-300 px-3 py-0.5 text-center font-semibold">{score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (visualId === 'kode_program_1') {
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Kode Program 1. Penjumlahan dua angka (Adding two numbers)
        </div>
        <pre className="max-w-lg mx-auto bg-slate-900 text-emerald-300 font-mono text-[11px] sm:text-xs p-3.5 rounded-xl overflow-x-auto leading-relaxed border border-slate-700">
{`angka1 = input('Tulis angka pertama: ')
angka2 = input('Tulis angka kedua: ')

# Konversi string ke integer lalu jumlahkan
hasil = int(angka1) + int(angka2)
print('Hasil Penjumlahan:', hasil)`}
        </pre>
      </div>
    );
  }

  if (visualId === 'tabel2_ekskul') {
    const rows = [
      ['Andi', 'Bima'],
      ['Bima', 'Eko'],
      ['Citra', 'Dewi'],
      ['Dewi', 'Fajar'],
    ];
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs overflow-x-auto">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Tabel 2. Data peserta ekstrakurikuler
        </div>
        <table className="min-w-[320px] max-w-md mx-auto border-collapse bg-white text-[11px]">
          <thead>
            <tr className="bg-slate-200 text-slate-900 font-bold">
              <th className="border border-slate-300 px-3 py-1 text-left">Himpunan A (peserta Futsal)</th>
              <th className="border border-slate-300 px-3 py-1 text-left">Himpunan B (peserta Pramuka)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([a, b], idx) => (
              <tr key={idx}>
                <td className="border border-slate-300 px-3 py-1">{a}</td>
                <td className="border border-slate-300 px-3 py-1">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (visualId === 'tabel3_lomba') {
    const rows = [
      ['Adit', '8A', 'Coding', '88'],
      ['Bella', '8B', 'Desain', '92'],
      ['Cahya', '8A', 'Desain', '75'],
      ['Dimas', '8C', 'Coding', '95'],
      ['Elsa', '8B', 'Coding', '70'],
      ['Fikri', '8A', 'Coding', '82'],
    ];
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs overflow-x-auto">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Tabel 3. Hasil Lomba Siswa Kelas VIII
        </div>
        <table className="min-w-[320px] max-w-md mx-auto border-collapse bg-white text-[11px] tabular-nums">
          <thead>
            <tr className="bg-slate-200 text-slate-900 font-bold">
              <th className="border border-slate-300 px-3 py-1 text-left">Nama</th>
              <th className="border border-slate-300 px-3 py-1 text-center">Kelas</th>
              <th className="border border-slate-300 px-3 py-1 text-left">Lomba</th>
              <th className="border border-slate-300 px-3 py-1 text-right">Nilai</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([name, cls, comp, score]) => (
              <tr key={name}>
                <td className="border border-slate-300 px-3 py-0.5">{name}</td>
                <td className="border border-slate-300 px-3 py-0.5 text-center">{cls}</td>
                <td className="border border-slate-300 px-3 py-0.5">{comp}</td>
                <td className="border border-slate-300 px-3 py-0.5 text-right font-semibold">{score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (visualId === 'nilai_ulangan_2') {
    const rows = [
      ['2', 'Raka', '85'],
      ['3', 'Sinta', '70'],
      ['4', 'Tono', '90'],
      ['5', 'Umi', '60'],
      ['6', 'Vina', '95'],
    ];
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs overflow-x-auto">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Tampilan lembar kerja nilai ulangan
        </div>
        <table className="min-w-[240px] max-w-xs mx-auto border-collapse bg-white text-[11px] tabular-nums">
          <thead>
            <tr className="bg-slate-200 text-slate-700">
              <th className="border border-slate-300 px-2 py-1 w-8"></th>
              <th className="border border-slate-300 px-3 py-1">A</th>
              <th className="border border-slate-300 px-3 py-1">B</th>
            </tr>
            <tr className="bg-slate-100 font-bold text-slate-900">
              <td className="border border-slate-300 bg-slate-200 px-2 py-0.5 text-center">1</td>
              <td className="border border-slate-300 px-3 py-0.5">Nama</td>
              <td className="border border-slate-300 px-3 py-0.5 text-center">Nilai</td>
            </tr>
          </thead>
          <tbody>
            {rows.map(([r, name, score]) => (
              <tr key={r}>
                <td className="border border-slate-300 bg-slate-200 px-2 py-0.5 text-center font-bold">
                  {r}
                </td>
                <td className="border border-slate-300 px-3 py-0.5">{name}</td>
                <td className="border border-slate-300 px-3 py-0.5 text-center font-semibold">{score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (visualId === 'tabel4_lomba') {
    const rows = [
      ['Ali', 'Cici'],
      ['Budi', 'Evi'],
      ['Cici', 'Fani'],
      ['Dedi', 'Gita'],
      ['Evi', ''],
    ];
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs overflow-x-auto">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Tabel 4. Peserta lomba antarkelas
        </div>
        <table className="min-w-[320px] max-w-md mx-auto border-collapse bg-white text-[11px]">
          <thead>
            <tr className="bg-slate-200 text-slate-900 font-bold">
              <th className="border border-slate-300 px-3 py-1 text-left">Himpunan A (Lomba Coding)</th>
              <th className="border border-slate-300 px-3 py-1 text-left">Himpunan B (Lomba Desain)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([a, b], idx) => (
              <tr key={idx}>
                <td className="border border-slate-300 px-3 py-0.5">{a}</td>
                <td className="border border-slate-300 px-3 py-0.5">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (visualId === 'tabel5_perpustakaan') {
    const rows = [
      ['Laskar Pelangi', 'Novel', '2005', '8'],
      ['Atomic Habits', 'Pengembangan Diri', '2018', '5'],
      ['Dasar Python', 'Teknologi', '2020', '12'],
      ['Bumi', 'Novel', '2014', '3'],
      ['Cerdas Digital', 'Teknologi', '2022', '6'],
    ];
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs overflow-x-auto">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Tabel 5. Data Koleksi Perpustakaan
        </div>
        <table className="min-w-[380px] max-w-lg mx-auto border-collapse bg-white text-[11px] tabular-nums">
          <thead>
            <tr className="bg-slate-200 text-slate-900 font-bold">
              <th className="border border-slate-300 px-2.5 py-1 text-left">Judul</th>
              <th className="border border-slate-300 px-2.5 py-1 text-left">Kategori</th>
              <th className="border border-slate-300 px-2.5 py-1 text-right">Tahun</th>
              <th className="border border-slate-300 px-2.5 py-1 text-right">Eksemplar</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([title, cat, year, qty]) => (
              <tr key={title}>
                <td className="border border-slate-300 px-2.5 py-0.5">{title}</td>
                <td className="border border-slate-300 px-2.5 py-0.5">{cat}</td>
                <td className="border border-slate-300 px-2.5 py-0.5 text-right">{year}</td>
                <td className="border border-slate-300 px-2.5 py-0.5 text-right font-semibold">{qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (visualId === 'figure2_ekskul') {
    const bars = [
      { label: 'Scouts', val: 40, x: 78 },
      { label: 'Futsal', val: 30, x: 158 },
      { label: 'Recitation', val: 25, x: 238 },
      { label: 'Flag Team', val: 20, x: 318 },
      { label: 'IT Club', val: 15, x: 398 },
    ];
    const baseY = 180;
    const maxH = 140;
    const mapH = (v: number) => (v / 45) * maxH;

    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs overflow-x-auto">
        <div className="font-bold text-slate-700 mb-1 text-center">
          Figure 2. Number of Participants in Each Extracurricular Activity
        </div>
        <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-lg p-2">
          <svg viewBox="0 0 470 220" className="w-full h-auto" role="img" aria-label="Participants bar chart">
            {[0, 10, 20, 30, 40].map((tick) => {
              const y = baseY - mapH(tick);
              return (
                <g key={tick}>
                  <line x1="48" y1={y} x2="450" y2={y} stroke="#e2e8f0" strokeDasharray="3 3" />
                  <text x="40" y={y + 4} textAnchor="end" fontSize="10" fill="#475569">
                    {tick}
                  </text>
                </g>
              );
            })}
            <line x1="48" y1="25" x2="48" y2={baseY} stroke="#64748b" strokeWidth="1.2" />
            <line x1="48" y1={baseY} x2="450" y2={baseY} stroke="#64748b" strokeWidth="1.2" />
            <text x="15" y="105" textAnchor="middle" fontSize="10" fill="#334155" transform="rotate(-90 15 105)" fontWeight="bold">
              Number of students
            </text>
            <text x="248" y="212" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="bold">
              Extracurricular activity
            </text>

            {bars.map((b) => {
              const h = mapH(b.val);
              const y = baseY - h;
              return (
                <g key={b.label}>
                  <rect x={b.x - 22} y={y} width="44" height={h} fill="#1e3a8a" rx="2" />
                  <text x={b.x} y={y - 6} textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#0f172a">
                    {b.val}
                  </text>
                  <text x={b.x} y="196" textAnchor="middle" fontSize="10" fill="#334155">
                    {b.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    );
  }

  if (visualId === 'penjualan_esteh') {
    const rows = [
      ['2', 'Senin', '120'],
      ['3', 'Selasa', '95'],
      ['4', 'Rabu', '150'],
      ['5', 'Kamis', '110'],
      ['6', 'Jumat', '125'],
    ];
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs overflow-x-auto">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Tampilan lembar kerja penjualan es teh
        </div>
        <table className="min-w-[260px] max-w-xs mx-auto border-collapse bg-white text-[11px] tabular-nums">
          <thead>
            <tr className="bg-slate-200 text-slate-700">
              <th className="border border-slate-300 px-2 py-1 w-8"></th>
              <th className="border border-slate-300 px-3 py-1">A</th>
              <th className="border border-slate-300 px-3 py-1">B</th>
            </tr>
            <tr className="bg-slate-100 font-bold text-slate-900">
              <td className="border border-slate-300 bg-slate-200 px-2 py-0.5 text-center">1</td>
              <td className="border border-slate-300 px-3 py-0.5">Hari</td>
              <td className="border border-slate-300 px-3 py-0.5 text-center">Penjualan (gelas)</td>
            </tr>
          </thead>
          <tbody>
            {rows.map(([r, day, val]) => (
              <tr key={r}>
                <td className="border border-slate-300 bg-slate-200 px-2 py-0.5 text-center font-bold">
                  {r}
                </td>
                <td className="border border-slate-300 px-3 py-0.5">{day}</td>
                <td className="border border-slate-300 px-3 py-0.5 text-center font-semibold">{val}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (visualId === 'data_ab') {
    const rows = [
      ['Ani', '8B', '90'],
      ['Budi', '8A', '85'],
      ['Citra', '8C', '92'],
    ];
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs space-y-2.5">
        <div>
          <div className="font-bold text-slate-800 mb-1.5 text-center">
            Data A: Nilai akhir siswa
          </div>
          <table className="min-w-[260px] max-w-sm mx-auto border-collapse bg-white text-[11px] tabular-nums">
            <thead>
              <tr className="bg-slate-200 text-slate-900 font-bold">
                <th className="border border-slate-300 px-3 py-1 text-left">Nama</th>
                <th className="border border-slate-300 px-3 py-1 text-center">Kelas</th>
                <th className="border border-slate-300 px-3 py-1 text-right">Nilai Akhir</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([n, c, v]) => (
                <tr key={n}>
                  <td className="border border-slate-300 px-3 py-0.5">{n}</td>
                  <td className="border border-slate-300 px-3 py-0.5 text-center">{c}</td>
                  <td className="border border-slate-300 px-3 py-0.5 text-right font-semibold">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="max-w-lg mx-auto bg-white border border-slate-300 rounded-lg p-2.5 text-[11px] sm:text-xs text-slate-800">
          <b>Data B:</b> &ldquo;Konsumen berumur 16–25 tahun berjumlah 44,08%, disusul konsumen berumur
          26–35 tahun sebesar 21,71%, dan konsumen berumur 36–45 tahun sebesar 19,74%.&rdquo;
        </div>
      </div>
    );
  }

  if (visualId === 'tabel6_kelas8a') {
    const rows = [
      ['Ani', 'Ani'],
      ['Budi', 'Citra'],
      ['Citra', ''],
      ['Dina', ''],
      ['Eko', ''],
    ];
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs overflow-x-auto">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Tabel 6. Data siswa kelas 8A
        </div>
        <table className="min-w-[340px] max-w-md mx-auto border-collapse bg-white text-[11px]">
          <thead>
            <tr className="bg-slate-200 text-slate-900 font-bold">
              <th className="border border-slate-300 px-3 py-1 text-left">
                Himpunan semesta S (seluruh siswa)
              </th>
              <th className="border border-slate-300 px-3 py-1 text-left">
                Himpunan A (anggota paduan suara)
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([s, a], idx) => (
              <tr key={idx}>
                <td className="border border-slate-300 px-3 py-0.5">{s}</td>
                <td className="border border-slate-300 px-3 py-0.5">{a}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (visualId === 'nilai_a2_a11') {
    const cells = [
      ['A2', '70'],
      ['A3', '85'],
      ['A4', '90'],
      ['A5', '65'],
      ['A6', '80'],
      ['A7', '100'],
      ['A8', '55'],
      ['A9', '95'],
      ['A10', '75'],
      ['A11', '60'],
    ];
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs overflow-x-auto">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Nilai ulangan pada sel A2 sampai A11
        </div>
        <table className="min-w-[440px] max-w-xl mx-auto border-collapse bg-white text-[11px] tabular-nums">
          <tbody>
            <tr className="bg-slate-200 font-bold text-slate-900">
              <th className="border border-slate-300 px-2 py-1">Sel</th>
              {cells.map(([col]) => (
                <th key={col} className="border border-slate-300 px-2 py-1 text-center">
                  {col}
                </th>
              ))}
            </tr>
            <tr>
              <td className="border border-slate-300 bg-slate-100 px-2 py-1 font-bold">Nilai</td>
              {cells.map(([col, val]) => (
                <td key={col} className="border border-slate-300 px-2 py-1 text-center font-semibold">
                  {val}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  if (visualId === 'tabel8_lomba') {
    const rows = [
      ['Adit', 'Bella'],
      ['Dimas', 'Cahya'],
      ['Fikri', 'Dimas'],
    ];
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs overflow-x-auto">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Tabel 8. Peserta lomba
        </div>
        <table className="min-w-[320px] max-w-md mx-auto border-collapse bg-white text-[11px]">
          <thead>
            <tr className="bg-slate-200 text-slate-900 font-bold">
              <th className="border border-slate-300 px-3 py-1 text-left">Himpunan A (Lomba Coding)</th>
              <th className="border border-slate-300 px-3 py-1 text-left">Himpunan B (Lomba Desain)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([a, b], idx) => (
              <tr key={idx}>
                <td className="border border-slate-300 px-3 py-0.5">{a}</td>
                <td className="border border-slate-300 px-3 py-0.5">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
}
