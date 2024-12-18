import Navbar from "@/components/Navbar";
import "@/app/globals.css";
import { Montserrat } from "next/font/google";

const MonsterratFont = Montserrat({
    weight: '400',
    subsets: ['latin']
})

const MonsterratFontBold = Montserrat({
    weight: '900',
    subsets: ['latin']
})

export default function WhatWeDo() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar at the top */}
      <Navbar />

      {/* Content div centered horizontally and vertically */}
      <div className="flex-grow flex justify-center items-center pt-10 pb-20 md:pb-0 md:pt-0 px-4 md:px-8 lg:px-16">
        <div className="md:max-w-[1408px] w-full md:h-full border-2 border-[#625598] rounded-[40px] md:rounded-[80px] flex items-center justify-center text-center md:text-right py-10 md:py-0">
          <div className="grid gap-y-10 w-full px-4 md:px-12 py-20">
            <h1 className={`text-center text-3xl text-[#625598] ${MonsterratFontBold.className}`}>LAYANAN KAMI</h1>
            {/* Brand Digital */}
            <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-x-8">
              {/* Button for Brand Digital (will appear on top on mobile) */}
              <div className="flex justify-center items-center md:order-2 order-1 mb-4 md:mb-0">
                <div className="w-full max-w-[300px] md:max-w-[596px] md:h-[146px] h-[80px] flex items-center justify-center bg-[#625598] text-white rounded-full">
                  <h1 className={`${MonsterratFontBold.className} font-bold text-xl`}>KAMPANYE DIGITAL</h1>
                </div>
              </div>
              {/* About Brand Digital (will appear below on mobile) */}
              <div className="flex items-center h-full order-2 md:order-1">
                <p className={`text-black text-xs md:text-sm ${MonsterratFont.className} `}>
                  Kami merancang strategi pemasaran digital yang disesuaikan, termasuk pembuatan konten, SEO, dan iklan berbayar untuk meningkatkan visibilitas dan interaksi merek.
                </p>
              </div>
            </div>

            {/* Digital Agency */}
            <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-x-8">
              {/* Button for Digital Agency (will appear on top on mobile) */}
              <div className="flex justify-center items-center md:order-2 order-1 mb-4 md:mb-0">
                <div className="w-full max-w-[300px] md:max-w-[596px] md:h-[146px] h-[80px] flex items-center justify-center bg-[#625598] text-white rounded-full">
                  <h1 className={`${MonsterratFontBold.className} font-bold text-xl`}>DESAIN KREATIF</h1>
                </div>
              </div>
              {/* About Digital Agency (will appear below on mobile) */}
              <div className="flex items-center h-full order-2 md:order-1">
                <p className={`text-black text-xs md:text-sm ${MonsterratFont.className} `}>
                  Tim desain kami menghasilkan visual yang menarik yang sesuai dengan identitas merek Anda, memastikan pesan yang kohesif dan berkesan di semua platform.
                </p>
              </div>
            </div>

            {/* Model Agency */}
            <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-x-8">
              {/* Button for Model Agency (will appear on top on mobile) */}
              <div className="flex justify-center items-center md:order-2 order-1 mb-4 md:mb-0">
                <div className="w-full max-w-[300px] md:max-w-[596px] md:h-[146px] h-[80px] flex items-center justify-center bg-[#625598] text-white rounded-full">
                  <h1 className={`${MonsterratFontBold.className} font-bold text-xl`}>BRANDING</h1>
                </div>
              </div>
              {/* About Model Agency (will appear below on mobile) */}
              <div className="flex items-center h-full order-2 md:order-1">
                <p className={`text-black text-xs md:text-sm ${MonsterratFont.className} `}>
                  Kami membantu membangun merek yang kuat dan mudah dikenali melalui perencanaan strategis, pembuatan logo, serta pemetaan posisi merek di pasar.
                </p>
              </div>
            </div>

            <h1 className={`text-center text-3xl text-[#625598] ${MonsterratFontBold.className}`}>EVENT ORGANIZER</h1>
            {/* Acara Korporat */}
            <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-x-8">
              {/* Button for Digital Agency (will appear on top on mobile) */}
              <div className="flex justify-center items-center md:order-2 order-1 mb-4 md:mb-0">
                <div className="w-full max-w-[300px] md:max-w-[596px] md:h-[146px] h-[80px] flex items-center justify-center bg-[#625598] text-white rounded-full">
                  <h1 className={`${MonsterratFontBold.className} font-bold text-xl`}>ACARA KORPORAT</h1>
                </div>
              </div>
              {/* About Digital Agency (will appear below on mobile) */}
              <div className="flex items-center h-full order-2 md:order-1">
                <p className={`text-black text-xs md:text-sm ${MonsterratFont.className} `}>
                Mulai dari peluncuran produk hingga perayaan ulang tahun perusahaan, kami
                menyelenggarakan acara dengan mulus yang
                mencerminkan profesionalisme dan kreativitas.
                </p>
              </div>
            </div>

            {/* PAMERAN & EXPO */}
            <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-x-8">
              {/* Button for Model Agency (will appear on top on mobile) */}
              <div className="flex justify-center items-center md:order-2 order-1 mb-4 md:mb-0">
                <div className="w-full max-w-[300px] md:max-w-[596px] md:h-[146px] h-[80px] flex items-center justify-center bg-[#625598] text-white rounded-full">
                  <h1 className={`${MonsterratFontBold.className} font-bold text-xl`}>PAMERAN & EXPO</h1>
                </div>
              </div>
              {/* About Model Agency (will appear below on mobile) */}
              <div className="flex items-center h-full order-2 md:order-1">
                <p className={`text-black text-xs md:text-sm ${MonsterratFont.className} `}>
                Kami mengelola pameran dan expo dengan perencanaan
                dan eksekusi yang terperinci, memastikan peserta dan pengunjung
                mendapatkan pengalaman yang menarik.
                </p>
              </div>
            </div>

            {/* Brand Digital */}
            <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-x-8">
              {/* Button for Brand Digital (will appear on top on mobile) */}
              <div className="flex justify-center items-center md:order-2 order-1 mb-4 md:mb-0">
                <div className="w-full max-w-[300px] md:max-w-[596px] md:h-[146px] h-[80px] flex items-center justify-center bg-[#625598] text-white rounded-full">
                  <h1 className={`${MonsterratFontBold.className} font-bold text-xl`}>ACARA PRIBADI</h1>
                </div>
              </div>
              {/* About Brand Digital (will appear below on mobile) */}
              <div className="flex items-center h-full order-2 md:order-1">
                <p className={`text-black text-xs md:text-sm ${MonsterratFont.className} `}>
                Baik itu perayaan pribadi maupun pertemuan eksklusif, tim
                kami memastikan setiap detail diatur dengan presisi untuk membuat acara
                menjadi sangat istimewa.
                </p>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </main>
  );
}