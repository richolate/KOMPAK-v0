import React from "react";
import bpsLogo from "./assets/bpslogo.webp";

const sectors = [
  { number: "01", name: "Pemerintahan", detail: "Tata kelola dan administrasi daerah" },
  { number: "02", name: "Pendidikan", detail: "Akses dan kualitas pendidikan" },
  { number: "03", name: "Kesehatan", detail: "Layanan dan indikator kesehatan" },
  { number: "04", name: "Ekonomi", detail: "Pertumbuhan dan kesejahteraan" },
  { number: "05", name: "Infrastruktur", detail: "Pembangunan sarana daerah" },
  { number: "06", name: "Sosial", detail: "Kondisi dan perlindungan sosial" },
];

const news = [
  { tag: "INFORMASI BPS", date: "Informasi Statistik", title: "Informasi dan Publikasi Statistik Daerah", tone: "from-[#004499] to-[#0192C6]" },
  { tag: "DATA SEKTORAL", date: "Informasi OPD", title: "Penguatan Pengelolaan Data Sektoral Daerah", tone: "from-[#112358] to-[#004499]" },
  { tag: "KOMPAK GIMS", date: "Informasi Platform", title: "Mewujudkan Integrasi Data dalam Satu Platform", tone: "from-[#0192C6] to-[#3F4F5F]" },
];

function MiniBars() {
  return (
    <div className="flex h-32 items-end gap-2">
      {[38, 56, 47, 74, 62, 92, 78, 100, 83].map((height, index) => (
        <div key={index} className="flex-1 rounded-t-lg bg-[#F1FF62]" style={{ height: `${height}%` }} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#112358]">
      {/* NAVBAR */}
      <header className="relative z-20 px-4 pt-4 sm:px-6 lg:px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-100 bg-white/95 px-5 py-3 shadow-[0_8px_30px_rgba(17,35,88,0.07)] backdrop-blur-md sm:px-7">
          <a href="#beranda" className="flex shrink-0 items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#112358] text-lg font-black text-[#F1FF62]">K</span>
            <span>
              <span className="block text-sm font-extrabold tracking-wide text-[#112358]">KOMPAK GIMS</span>
              <span className="block text-[10px] text-[#3F4F5F]">Portal Data Statistik Daerah</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-xs font-semibold text-[#3F4F5F] lg:flex">
            <a className="rounded-full bg-[#D4EAFF]/60 px-4 py-2 text-[#004499]" href="#beranda">Beranda</a>
            <a className="transition hover:text-[#0192C6]" href="#tentang">Tentang</a>
            <a className="transition hover:text-[#0192C6]" href="#statistik">Statistik BPS</a>
            <a className="transition hover:text-[#0192C6]" href="#opd">Data OPD</a>
            <a className="transition hover:text-[#0192C6]" href="#berita">Informasi</a>
          </div>

          <a href="#masuk" className="rounded-full bg-[#004499] px-5 py-3 text-xs font-bold text-white shadow-md shadow-blue-900/10 transition hover:bg-[#0192C6]">
            Masuk <span aria-hidden="true" className="ml-1">↗</span>
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="beranda" className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-12 pt-16 sm:px-10 lg:min-h-[610px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-12 lg:pt-14">
          <div className="pointer-events-none absolute left-1/2 top-10 -z-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-[#D4EAFF]/70 lg:left-[58%]" />
          <div className="pointer-events-none absolute left-[48%] top-24 -z-0 h-[390px] w-[390px] rounded-full border border-dashed border-[#0192C6]/20" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4EAFF] bg-[#D4EAFF]/50 px-4 py-2 text-[10px] font-extrabold tracking-[.16em] text-[#004499]">
              <span className="h-2 w-2 rounded-full bg-[#0192C6]" /> PLATFORM DATA STATISTIK TERPADU
            </span>
            <p className="mt-8 text-base font-semibold text-[#112358] sm:text-lg">Selamat Datang di <span className="text-[#0192C6]">KOMPAK GIMS!</span></p>
            <h1 className="mt-4 max-w-2xl text-[2.65rem] font-extrabold leading-[1.08] tracking-[-0.055em] text-[#112358] sm:text-5xl lg:text-[3.8rem]">
              Satu Data untuk
              <span className="block">Pembangunan</span>
              <span className="block text-[#004499]">Daerah Terintegrasi.</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#3F4F5F] sm:text-base sm:leading-8">
              KOMPAK GIMS menghubungkan informasi statistik BPS dan data sektoral OPD dalam satu platform yang terpadu, informatif, dan mudah diakses untuk mendukung pembangunan daerah.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#statistik" className="rounded-full bg-[#004499] px-7 py-3.5 text-xs font-bold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-[#0192C6]">
                Jelajahi Data <span aria-hidden="true" className="ml-2">→</span>
              </a>
              <a href="#tentang" className="rounded-full border border-slate-200 bg-white px-7 py-3.5 text-xs font-bold text-[#112358] shadow-sm transition hover:border-[#0192C6] hover:bg-[#D4EAFF]/40">
                Pelajari Lebih Lanjut <span aria-hidden="true" className="ml-1">›</span>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-medium text-[#3F4F5F]">
              <span className="flex items-center gap-2"><span className="text-[#0192C6]">✓</span> Data BPS dan OPD</span>
              <span className="flex items-center gap-2"><span className="text-[#0192C6]">✓</span> Informasi terstruktur</span>
              <span className="flex items-center gap-2"><span className="text-[#0192C6]">✓</span> Satu platform</span>
            </div>
          </div>

          {/* FOTO BPS */}
          <div className="relative z-10 mx-auto flex w-full max-w-[570px] items-center justify-center lg:ml-auto">
            <div className="absolute -right-3 top-8 h-24 w-24 rounded-3xl bg-[#F1FF62]" />
            <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-full bg-[#D4EAFF]" />
            <div className="relative flex min-h-[390px] w-full items-center justify-center overflow-hidden rounded-[2rem] border border-[#D4EAFF] bg-white p-6 shadow-[0_25px_70px_rgba(17,35,88,0.12)] sm:min-h-[480px] sm:p-9">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#0192C6]/10 blur-2xl" />
              <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#D4EAFF]/70 blur-2xl" />
              <img
                src={bpsLogo}
                alt="Logo Badan Pusat Statistik"
                className="relative z-10 h-auto max-h-[390px] w-full max-w-[430px] object-contain"
              />
            </div>
            <div className="absolute -left-7 top-1/4 hidden rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:block">
              <p className="text-[9px] font-semibold text-[#3F4F5F]">SUMBER DATA</p>
              <p className="mt-1 text-sm font-extrabold text-[#004499]">BPS + OPD</p>
            </div>
          </div>
        </section>

        {/* HIGHLIGHT BAR */}

{/* STATISTIK RINGKAS */}
<section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
  <div className="rounded-[2rem] border border-slate-100 bg-white px-6 py-8 shadow-[0_15px_50px_rgba(17,35,88,0.06)] sm:px-10 sm:py-10">

    <div className="mb-8">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0192C6]">
        Sekilas Data Daerah
      </p>
      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#112358]">
        Data dalam Angka
      </h2>
      <p className="mt-2 text-sm text-[#64748b]">
        Ringkasan informasi statistik daerah dalam satu platform.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:gap-0">
      {[
        ["156", "Data Statistik", "Indikator terhimpun"],
        ["24", "Instansi OPD", "Sumber data daerah"],
        ["6", "Sektor Data", "Bidang informasi"],
        ["2", "Sumber Data", "BPS dan OPD"],
      ].map(([number, title, desc], index) => (
        <div
          key={title}
          className={`flex flex-col gap-2 ${
            index % 2 !== 0 ? "border-l border-slate-100 pl-5 sm:pl-8" : ""
          } ${
            index >= 2 ? "lg:border-t-0" : ""
          } ${
            index > 0 ? "lg:border-l lg:border-slate-100 lg:pl-8" : ""
          }`}
        >
          <span className="text-3xl font-extrabold tracking-tight text-[#004499] sm:text-4xl">
            {number}
          </span>
          <p className="text-sm font-bold text-[#112358] sm:text-base">
            {title}
          </p>
          <p className="text-xs text-[#64748b]">
            {desc}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-8 border-t border-slate-100 pt-4">
      <p className="text-[10px] text-slate-400">
        *Angka yang ditampilkan merupakan ilustrasi sementara.
      </p>
    </div>

  </div>
</section>

        {/* STATISTICS */}
        <section id="statistik" className="bg-[#D4EAFF]/45 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div><span className="text-[10px] font-extrabold tracking-[.22em] text-[#0192C6]">PUSAT INFORMASI</span><h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#112358] sm:text-4xl">Data Statistik dalam<br className="hidden sm:block" /> Satu Akses.</h2></div>
              <p className="max-w-sm text-sm leading-7 text-[#3F4F5F]">Temukan berbagai informasi statistik yang tersedia dalam platform KOMPAK GIMS.</p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                ["▥", "Statistik BPS", "Akses informasi statistik resmi dari Badan Pusat Statistik sebagai referensi pembangunan daerah.", "Jelajahi Statistik"],
                ["▦", "Data Sektoral OPD", "Temukan data sektoral dari berbagai perangkat daerah dalam satu platform terintegrasi.", "Jelajahi Data OPD"],
                ["▤", "Visualisasi Data", "Pahami informasi melalui penyajian data yang sistematis dan mudah dipahami.", "Lihat Visualisasi"],
              ].map(([icon, title, desc, link], i) => (
                <article key={title} className="group rounded-3xl border border-white bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#D4EAFF] text-xl font-bold text-[#004499]">{icon}</div>
                  <h3 className="mt-7 text-xl font-bold text-[#112358]">{title}</h3>
                  <p className="mt-3 min-h-[76px] text-sm leading-6 text-[#3F4F5F]">{desc}</p>
                  <a href={i === 1 ? "#opd" : "#statistik"} className="mt-6 inline-flex text-xs font-extrabold text-[#004499]">{link} <span className="ml-2 transition group-hover:translate-x-1">↗</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* OPD SECTORS */}
        <section id="opd" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><span className="text-[10px] font-extrabold tracking-[.22em] text-[#0192C6]">KOLABORASI DATA</span><h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#112358] sm:text-4xl">Data dari Berbagai Sektor.</h2></div>
            <p className="max-w-sm text-sm leading-7 text-[#3F4F5F]">Mendukung keterpaduan data dari berbagai bidang pembangunan daerah.</p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <a href="#statistik" key={sector.number} className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[#0192C6]/50 hover:bg-[#D4EAFF]/35">
                <div className="flex items-center gap-5"><span className="text-xs font-extrabold text-[#0192C6]">{sector.number}</span><div><h3 className="font-bold text-[#112358]">{sector.name}</h3><p className="mt-1 text-xs text-[#3F4F5F]">{sector.detail}</p></div></div>
                <span className="text-lg text-[#3F4F5F]/50 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#004499]">↗</span>
              </a>
            ))}
          </div>
        </section>

{/* NEWS */}
<section id="berita" className="relative overflow-hidden bg-[#D4EAFF]/35 py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-10">

    {/* HEADER */}
    <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div>
        <span className="text-[10px] font-extrabold tracking-[.25em] text-[#0192C6]">
          INFORMASI TERKINI
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#112358] sm:text-4xl">
          Berita dan Informasi.
        </h2>
      </div>

      <p className="max-w-sm text-sm leading-7 text-[#3F4F5F]">
        Ikuti informasi dan perkembangan terbaru seputar kegiatan serta data statistik daerah.
      </p>
    </div>

    {/* NEWS CARDS */}
    <div className="grid gap-7 md:grid-cols-3">
      {news.map((item, index) => (
        <article
          key={item.title}
          style={{ animationDelay: `${index * 150}ms` }}
          className="group animate-[fadeUp_.7s_ease-out_both] overflow-hidden rounded-[26px] border border-white/80 bg-white shadow-[0_8px_30px_rgba(17,35,88,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,68,153,0.13)]"
        >

          {/* IMAGE / DECORATIVE AREA */}
          <div className="relative flex h-52 items-end overflow-hidden bg-gradient-to-br from-[#0192C6] via-[#006BB3] to-[#004499] p-6">

            {/* Decorative circles */}
            <div className="absolute -right-12 -top-16 h-56 w-56 rounded-full border-[28px] border-white/[0.09] transition-transform duration-700 group-hover:scale-110" />

            <div className="absolute right-12 top-8 h-24 w-24 rotate-12 rounded-3xl border border-white/20 bg-white/[0.08] backdrop-blur-sm transition-transform duration-700 group-hover:rotate-45" />

            <div className="absolute -bottom-12 left-20 h-36 w-36 rounded-full bg-[#D4EAFF]/10 blur-2xl" />

            {/* Decorative lines */}
            <div className="absolute right-8 top-8 flex gap-2 opacity-40">
              <span className="h-1 w-8 rounded-full bg-white" />
              <span className="h-1 w-3 rounded-full bg-white" />
              <span className="h-1 w-1 rounded-full bg-white" />
            </div>

            {/* Small decorative circles */}
            <div className="absolute left-8 top-9 h-3 w-3 rounded-full bg-[#F1FF62] shadow-[0_0_18px_rgba(241,255,98,0.7)]" />

            <div className="absolute bottom-16 right-16 h-2 w-2 rounded-full bg-white/70" />

            {/* Tag */}
            <span className="relative z-10 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-[9px] font-extrabold tracking-[.18em] text-white shadow-sm backdrop-blur-md">
              {item.tag}
            </span>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#112358]/25 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
          </div>

          {/* CONTENT */}
          <div className="p-6">
            <p className="text-[10px] font-extrabold uppercase tracking-[.15em] text-[#0192C6]">
              {item.date}
            </p>

            <h3 className="mt-3 min-h-[60px] text-lg font-extrabold leading-snug text-[#112358] transition-colors duration-300 group-hover:text-[#0192C6]">
              {item.title}
            </h3>

            {/* INSET READ MORE */}
            <a
              href="#"
              className="mt-6 flex w-full items-center justify-between rounded-xl border border-[#D4EAFF] bg-[#D4EAFF]/50 px-5 py-3.5 text-xs font-extrabold text-[#004499] shadow-[inset_0_2px_5px_rgba(0,68,153,0.09)] transition-all duration-300 hover:border-[#0192C6] hover:bg-[#0192C6] hover:text-white hover:shadow-[inset_0_3px_7px_rgba(0,30,80,0.2)]"
            >
              <span>Baca Selengkapnya</span>
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </div>
        </article>
      ))}
    </div>
  </div>

  {/* ANIMATION */}
  <style>{`
    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(25px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
</section>


        {/* CTA */}
        <section id="masuk" className="mx-auto max-w-7xl px-3 py-5 lg:px-5">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#112358] px-7 py-14 text-center text-white sm:px-12">
            <div className="absolute -left-20 -top-32 h-72 w-72 rounded-full bg-[#0192C6]/30 blur-2xl" />
            <div className="absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-[#004499]/50 blur-2xl" />
            <div className="relative mx-auto max-w-2xl">
              <span className="text-[10px] font-extrabold tracking-[.22em] text-[#F1FF62]">KOMPAK GIMS</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Mulai Jelajahi Informasi Data Daerah.</h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/65">Dapatkan akses informasi statistik yang terintegrasi untuk mendukung pembangunan daerah.</p>
              <a href="#" className="mt-7 inline-flex rounded-full bg-[#F1FF62] px-6 py-3 text-xs font-extrabold text-[#112358] transition hover:-translate-y-0.5 hover:bg-white">Masuk ke Platform <span className="ml-2">↗</span></a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mt-12 bg-[#112358] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:px-10">
          <div><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#F1FF62] font-black text-[#112358]">K</span><h2 className="font-extrabold tracking-wide">KOMPAK GIMS</h2></div><p className="mt-4 max-w-xs text-xs leading-6 text-white/60">Platform integrasi dan penyajian data statistik untuk mendukung pembangunan daerah.</p></div>
          <div><h3 className="text-xs font-bold text-[#F1FF62]">Navigasi</h3><div className="mt-4 flex flex-col gap-3 text-xs text-white/60"><a href="#beranda" className="hover:text-white">Beranda</a><a href="#tentang" className="hover:text-white">Tentang</a><a href="#statistik" className="hover:text-white">Statistik BPS</a><a href="#opd" className="hover:text-white">Data OPD</a></div></div>
          <div><h3 className="text-xs font-bold text-[#F1FF62]">Informasi</h3><div className="mt-4 flex flex-col gap-3 text-xs text-white/60"><a href="#berita" className="hover:text-white">Berita</a><a href="#" className="hover:text-white">Pusat Bantuan</a><a href="#" className="hover:text-white">Kontak</a></div></div>
          <div><h3 className="text-xs font-bold text-[#F1FF62]">Kontak</h3><p className="mt-4 text-xs leading-6 text-white/60">Badan Pusat Statistik<br />Informasi dan layanan statistik daerah</p></div>
        </div>
        <div className="border-t border-white/10"><div className="mx-auto max-w-7xl px-6 py-5 text-[10px] text-white/45 lg:px-10">© 2026 KOMPAK GIMS. Seluruh hak cipta dilindungi.</div></div>
      </footer>
    </div>
  );
}

export default App;
