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
        <div className="md:max-w-[1408px] w-full md:h-[676px] border-2 border-[#625598] rounded-[40px] md:rounded-[80px] flex items-center justify-center text-center md:text-right py-10 md:py-0">
          <div className="grid gap-y-10 w-full px-4 md:px-12">
            {/* Brand Digital */}
            <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-x-8">
              {/* Button for Brand Digital (will appear on top on mobile) */}
              <div className="flex justify-center items-center md:order-2 order-1 mb-4 md:mb-0">
                <div className="w-full max-w-[300px] md:max-w-[596px] md:h-[146px] h-[80px] flex items-center justify-center bg-[#625598] text-white rounded-full">
                  <h1 className={`${MonsterratFontBold.className} font-bold text-xl`}>BRAND DIGITAL</h1>
                </div>
              </div>
              {/* About Brand Digital (will appear below on mobile) */}
              <div className="flex items-center h-full order-2 md:order-1">
                <p className={`text-black text-xs md:text-sm ${MonsterratFont.className} `}>
                  Brand Digital adalah divisi yang bertanggung jawab untuk mengelola dan memperkuat kehadiran merek di ruang digital, melalui strategi yang terukur, inovatif, dan berfokus pada kebutuhan konsumen. Divisi ini memastikan bahwa setiap aspek dari identitas merek tercermin dengan konsisten di berbagai platform digital, baik itu melalui media sosial, website, maupun kampanye digital lainnya.
                </p>
              </div>
            </div>

            {/* Digital Agency */}
            <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-x-8">
              {/* Button for Digital Agency (will appear on top on mobile) */}
              <div className="flex justify-center items-center md:order-2 order-1 mb-4 md:mb-0">
                <div className="w-full max-w-[300px] md:max-w-[596px] md:h-[146px] h-[80px] flex items-center justify-center bg-[#625598] text-white rounded-full">
                  <h1 className={`${MonsterratFontBold.className} font-bold text-xl`}>DIGITAL AGENCY</h1>
                </div>
              </div>
              {/* About Digital Agency (will appear below on mobile) */}
              <div className="flex items-center h-full order-2 md:order-1">
                <p className={`text-black text-xs md:text-sm ${MonsterratFont.className} `}>
                  Brand Digital adalah divisi yang bertanggung jawab untuk mengelola dan memperkuat kehadiran merek di ruang digital, melalui strategi yang terukur, inovatif, dan berfokus pada kebutuhan konsumen. Divisi ini memastikan bahwa setiap aspek dari identitas merek tercermin dengan konsisten di berbagai platform digital, baik itu melalui media sosial, website, maupun kampanye digital lainnya.
                </p>
              </div>
            </div>

            {/* Model Agency */}
            <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-x-8">
              {/* Button for Model Agency (will appear on top on mobile) */}
              <div className="flex justify-center items-center md:order-2 order-1 mb-4 md:mb-0">
                <div className="w-full max-w-[300px] md:max-w-[596px] md:h-[146px] h-[80px] flex items-center justify-center bg-[#625598] text-white rounded-full">
                  <h1 className={`${MonsterratFontBold.className} font-bold text-xl`}>MODEL AGENCY</h1>
                </div>
              </div>
              {/* About Model Agency (will appear below on mobile) */}
              <div className="flex items-center h-full order-2 md:order-1">
                <p className={`text-black text-xs md:text-sm ${MonsterratFont.className} `}>
                  Brand Digital adalah divisi yang bertanggung jawab untuk mengelola dan memperkuat kehadiran merek di ruang digital, melalui strategi yang terukur, inovatif, dan berfokus pada kebutuhan konsumen. Divisi ini memastikan bahwa setiap aspek dari identitas merek tercermin dengan konsisten di berbagai platform digital, baik itu melalui media sosial, website, maupun kampanye digital lainnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}