"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";

export default function Home() {
  const { scrollY } = useScroll();
  const lockPoint = 160;

  const heroOpacity = useTransform(scrollY, [0, lockPoint], [1, 0]);
  const heroScale = useTransform(scrollY, [0, lockPoint], [1, 0.8]);
  const heroY = useTransform(scrollY, [0, lockPoint], [0, -80]);

  const navOpacity = useTransform(
    scrollY,
    [lockPoint - 20, lockPoint],
    [0, 1]
  );

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <main className="bg-[#0B0B0B] text-white overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between backdrop-blur-sm">
        <motion.div
          style={{ opacity: navOpacity }}
          className="text-lg font-bold text-[#F59E0B]"
        >
          RestoLux
        </motion.div>

        <button
          onClick={() => setOpenMenu(true)}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xl hover:bg-white/10 transition"
        >
          ☰
        </button>
      </nav>

     {/* ================= BURGER MENU ================= */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm"
            onClick={() => setOpenMenu(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute top-0 right-0 w-[80%] max-w-sm h-full bg-[#0B0B0B] p-8 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenMenu(false)}
                className="self-end text-2xl mb-12 hover:text-[#F59E0B]"
              >
                ✕
              </button>

              <nav className="flex flex-col gap-8 text-lg">
                <a href="#" onClick={() => setOpenMenu(false)} className="hover:text-[#F59E0B]">
                  Home
                </a>
                <a href="#menu" onClick={() => setOpenMenu(false)} className="hover:text-[#F59E0B]">
                  Menu
                </a>
                <a href="#gallery" onClick={() => setOpenMenu(false)} className="hover:text-[#F59E0B]">
                  Gallery
                </a>
                <a href="#reservasi" onClick={() => setOpenMenu(false)} className="hover:text-[#F59E0B]">
                  Reservasi
                </a>
              </nav>

              <div className="mt-auto text-sm text-gray-500">
                © {new Date().getFullYear()} RestoLux
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

         {/* ORBIT RAMADHAN */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
          className="absolute w-[360px] h-[360px] rounded-full border border-white/10"
        >

          {/* Mosque */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute -top-5 left-1/2 -translate-x-1/2 cursor-pointer"
          >
            <img src="/mosque.png" className="w-12 h-12" />
          </motion.div>

          {/* Ketupat */}
          <motion.div
            whileHover={{ rotate: -360, scale: 1.2 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            <img src="/ketupat.png" className="w-11 h-11" />
          </motion.div>

          {/* Lentera */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.25 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            <img src="/lentera.png" className="w-11 h-11" />
          </motion.div>

          {/* Hot Drink */}
          <motion.div
            whileHover={{ rotate: -360, scale: 1.2 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 cursor-pointer"
          >
            <img src="/hotdrink.png" className="w-11 h-11" />
          </motion.div>
        </motion.div>

        <div className="relative z-10 text-center max-w-xl">
          <motion.h1
            style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
            className="text-4xl font-bold mb-4"
          >
            Resto<span className="text-[#F59E0B]">Lux</span>
          </motion.h1>

          <p className="text-gray-300 mb-6">
            Sajian Hangat Penuh Makna <br />
            Spesial Bulan Ramadhan
          </p>

          <a
            href="#reservasi"
            className="inline-block border border-white/30 px-8 py-4 rounded-xl text-sm tracking-wide hover:bg-white hover:text-black transition"
          >
            Lihat Informasi Reservasi
          </a>
        </div>
      </section>

      {/* ================= RAMADHAN STORY ================= */}
      <section className="bg-[#0F0F0F] px-6 py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          <motion.div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Menyambut Hangatnya Ramadhan <br />
              <span className="text-[#F59E0B]">Bersama Kami</span>
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg">
              Di bulan penuh berkah ini, RestoLux menghadirkan sajian
              yang bukan sekadar mengenyangkan, tetapi menghangatkan.
            </p>
          </motion.div>

          <motion.div className="relative rounded-2xl overflow-visible shadow-xl">
            <img
              src="/salaman.png"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 bg-black/30 rounded-2xl" />

            <motion.img
              src="/ketupat-story.png"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 md:-top-14 md:-right-14 w-36 md:w-52 z-20 drop-shadow-[0_0_14px_rgba(34,197,94,0.6)]"
            />
          </motion.div>
        </div>
      </section>


 {/* ================= GALLERY PREVIEW ================= */}
<section 
id="gallery"
className="bg-[#0B0B0B] px-6 py-28">
  <div className="max-w-6xl mx-auto">

    <h3 className="text-3xl md:text-4xl font-semibold mb-10">
      Hangatkan <span className="text-[#F59E0B]">Ramadhan</span> dengan RestoLux
    </h3>

    {/* ================= MOBILE : AUTO SLIDE ================= */}
    <div className="md:hidden overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[
          "/galeri1.jpg",
          "/galeri2.jpg",
          "/galeri3.jpg",
          "/galeri4.jpg",
          "/galeri5.jpg",
          "/galeri1.jpg",
          "/galeri2.jpg",
          "/galeri3.jpg",
        ].map((img, i) => (
          <div
            key={i}
            className="min-w-[75%] h-[260px] rounded-2xl overflow-hidden flex-shrink-0"
          >
            <img
              src={img}
              className="w-full h-full object-cover"
              alt="Gallery RestoLux"
            />
          </div>
        ))}
      </motion.div>
    </div>

    {/* ================= DESKTOP : COLLAGE ================= */}
    <div className="hidden md:grid grid-cols-6 gap-4 mt-2">

      <div className="col-span-4 h-[520px] rounded-2xl overflow-hidden">
        <img
          src="/galeri1.jpg"
          className="w-full h-full object-cover"
          alt="Gallery 1"
        />
      </div>

      <div className="col-span-2 h-[520px] rounded-2xl overflow-hidden">
        <img
          src="/galeri2.jpg"
          className="w-full h-full object-cover"
          alt="Gallery 2"
        />
      </div>

      <div className="col-span-3 h-[260px] rounded-xl overflow-hidden">
        <img
          src="/galeri3.jpg"
          className="w-full h-full object-cover"
          alt="Gallery 3"
        />
      </div>

      <div className="col-span-3 h-[260px] rounded-xl overflow-hidden">
        <img
          src="/galeri4.jpg"
          className="w-full h-full object-cover"
          alt="Gallery 4"
        />
      </div>

      <div className="col-span-6 h-[320px] rounded-2xl overflow-hidden">
        <img
          src="/galeri5.jpg"
          className="w-full h-full object-cover"
          alt="Gallery 5"
        />
      </div>

    </div>

    {/* ================= BUTTON ================= */}
    <div className="flex justify-center mt-16">
      <a
        href="#gallery"
        className="border border-white/30 px-10 py-4 rounded-full text-sm tracking-widest hover:bg-white hover:text-black transition"
      >
        Selengkapnya
      </a>
    </div>

  </div>
</section>


{/* ================= MENU PREVIEW ================= */}
<section 
id="menu"
className="bg-[#0F0F0F] px-6 py-28">
  <div className="max-w-6xl mx-auto">

    {/* TITLE */}
    <h3 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
      Menu Spesial <span className="text-[#F59E0B]">Ramadhan</span>
    </h3>

    {/* TABS */}
    <div className="flex justify-center gap-6 mb-14">
      <button className="px-6 py-2 rounded-full border border-white/30 text-sm hover:bg-white hover:text-black transition">
         Makanan
      </button>
      <button className="px-6 py-2 rounded-full border border-white/10 text-sm text-gray-400 hover:bg-white hover:text-black transition">
         Minuman
      </button>
    </div>

    {/* MENU GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

      {/* CARD */}
      {[
        {
          img: "/menu1.jpg",
          title: "Nasi Kebuli RestoLux",
          desc: "Nasi berbumbu rempah khas Timur Tengah, disajikan hangat untuk berbuka."
        },
        {
          img: "/menu2.jpg",
          title: "Ayam Panggang Madu",
          desc: "Ayam panggang lembut dengan saus madu spesial Ramadhan."
        },
        {
          img: "/menu3.jpg",
          title: "Es campur Takjil",
          desc: "paket es campur beserta Kurma, kolak, dan camilan manis pilihan untuk berbuka."
        }
      ].map((item, i) => (
        <div
          key={i}
          className="bg-[#0B0B0B] rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition"
        >
          <div className="h-[220px] overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="p-5">
            <h4 className="text-lg font-semibold mb-2 text-white">
              {item.title}
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}

    </div>

    {/* BUTTON */}
    <div className="flex justify-center mt-16">
      <a
        href="/menu"
        className="border border-white/30 px-10 py-4 rounded-full text-sm tracking-widest hover:bg-white hover:text-black transition"
      >
        Lihat Menu Lengkap
      </a>
    </div>

  </div>
</section>


      {/* ================= DASHBOARD ALAMAT & JAM ================= */}
      <section
        id="reservasi"
        className="bg-[#0B0B0B] border-t border-white/10 px-6 py-20"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-300">

          {/* Lokasi */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
              Lokasi
            </p>
            <p className="text-lg text-white">
              Jl. Mawar No. 21 <br />
              Jakarta Selatan
            </p>
          </div>

          {/* Jam */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
              Jam Operasional
            </p>
            <p className="text-lg text-white">
              Setiap Hari <br />
              10.00 – 22.00
            </p>
          </div>

          {/* Reservasi (ICON SOSMED) */}
          <div>

          <div>
            <p className="text-sm text-gray-500 mb-4">Reservasi dan Informasi</p>
            <div className="flex gap-5">
              <img src="/wa.jpg" className="w-8 h-8" />
              <img src="/ig.jpg" className="w-8 h-8" />
              <img src="/fb.jpg" className="w-8 h-8" />
            </div>
          </div>
        </div>
          </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#080808] text-gray-500 text-sm py-6 text-center">
        © {new Date().getFullYear()} RestoLux. All rights reserved.
      </footer>

    </main>
  );
}
