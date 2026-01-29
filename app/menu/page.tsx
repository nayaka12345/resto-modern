"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MenuPage() {
  return (
    <main className="bg-[#0B0B0B] text-white min-h-screen px-6 py-24">

      {/* ================= HEADER ================= */}
      <section className="max-w-6xl mx-auto text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Menu <span className="text-[#F59E0B]">RestoLux</span>
        </motion.h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Sajian pilihan terbaik untuk menemani momen berbuka dan
          kebersamaan Anda di bulan Ramadhan.
        </p>
      </section>

      {/* ================= MENU SECTION ================= */}
      <section className="max-w-6xl mx-auto">

        {/* SUBTITLE */}
        <h2 className="text-3xl font-semibold mb-10">
          🍽️ Menu Unggulan
        </h2>

        {/* GRID MENU */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {[
            {
              img: "/menu1.jpg",
              name: "Nasi Kebuli RestoLux",
              desc: "Nasi berbumbu rempah khas Timur Tengah, disajikan hangat.",
              price: "45.000"
            },
            {
              img: "/menu2.jpg",
              name: "Ayam Panggang Madu",
              desc: "Ayam panggang empuk dengan saus madu spesial Ramadhan.",
              price: "38.000"
            },
            {
              img: "/menu3.jpg",
              name: "Es Campur Takjil",
              desc: "Es campur segar dengan kurma dan kolak pilihan.",
              price: "18.000"
            },
            {
              img: "/menu4.jpg",
              name: "Sate Ayam Premium",
              desc: "Sate ayam dengan bumbu kacang khas RestoLux.",
              price: "32.000"
            },
            {
              img: "/menu5.jpg",
              name: "Teh Tarik Hangat",
              desc: "Minuman hangat favorit untuk berbuka puasa.",
              price: "15.000"
            },
            {
              img: "/menu6.jpg",
              name: "Paket Berbuka Ramadhan",
              desc: "Paket lengkap berbuka untuk keluarga dan sahabat.",
              price: "75.000"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="bg-[#0F0F0F] rounded-2xl overflow-hidden border border-white/10 hover:border-[#F59E0B]/60 transition"
            >
              <div className="h-[220px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-400 mb-4">
                  {item.desc}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-[#F59E0B] font-semibold">
                    Rp {item.price}
                  </span>

                  <a
                    href="https://wa.me/6281234567890"
                    className="text-sm border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
                  >
                    Pesan
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-24">
          <Link
            href="/"
            className="border border-white/30 px-10 py-4 rounded-full text-sm tracking-widest hover:bg-white hover:text-black transition"
          >
            ← Kembali ke Beranda
          </Link>
        </div>

      </section>

    </main>
  );
}
