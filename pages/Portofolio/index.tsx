import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import { useState } from "react";

// Import Image Documentation
import IndahKusCiwalkSBM from "@/public/assets/img/documentations/IndahKus.jpg"
import Starbe from "@/public/assets/img/documentations/starbe.jpg"
import FTIsland from "@/public/assets/img/documentations/FT ISLAND.jpg"
import ANAYAKA from "@/public/assets/img/documentations/A NAYAKA.jpg"
import BBNO from "@/public/assets/img/documentations/BBNO.jpg"
import DavidBeat from "@/public/assets/img/documentations/DAVID BEAT.jpg"

const MonstserratFontBoldItalic = Montserrat({
    weight: '800',
    style: "italic",
    subsets: ['latin'],
});

const MonstserratFontBold = Montserrat({
    weight: '800',
    subsets: ['latin'],
});

export default function Portfolio() {
    const [showDocumentation, setShowDocumentation] = useState(false);

    const toggleDocumentation = () => {
        setShowDocumentation(!showDocumentation);
    };

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    { src: IndahKusCiwalkSBM.src, alt: "Documentation 1", text: "INDAHKUS CIWALK SBM", year: "2024" },
    { src: Starbe.src, alt: "STARBE", text: "STARBE", year: "2024" },
    { src: FTIsland.src, alt: "FT ISLAND", text: "FT ISLAND", year: "2024" },
    { src: ANAYAKA.src, alt: "A NAYAKA", text: "A NAYAKA", year: "2024" },
    { src: BBNO.src, alt: "BBNO$", text: "BBNO$", year: "2024" },
    { src: DavidBeat.src, alt: "DAVID BEAT", text: "DAVID BEAT", year: "2024" }
  ];

    return (
        <main className="bg-white flex flex-col p-0 m-0">
            <Navbar />
            <div className={`flex-grow flex flex-col items-center p-4 pt-16 md:pt-80 pb-24 md:pb-8 m-0 ${MonstserratFontBoldItalic.className}`}>
                <div className="w-full sm:w-[90%] md:w-[80%] space-y-2">
                    {/* Branding */}
                    <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">BRANDING</h1>
                        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    {/* Documentations */}
                    <div className="w-full">
                        <div className="flex items-center justify-between border-b-2 border-[#625598] cursor-pointer" onClick={toggleDocumentation}>
                            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">DOCUMENTATIONS</h1>
                            <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        {showDocumentation && (
                            <div className="py-4">
                                <div className="grid grid-cols-1 md:grid-cols-3">
                                {images.map((image, index) => (
                                    <div 
                                    key={index}
                                    className="relative cursor-pointer"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
                                    >
                                    <Image src={image.src} width={800} height={800} alt={image.alt} className="w-full h-auto" />
                                    {hoveredIndex === index && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-white bg-opacity-85 w-[500px] h-[520px] text-center items-center justify-center flex flex-col gap-y-2">
                                                <p className={`${MonstserratFontBold.className} text-slate-600 text-lg`}>2024</p>
                                                <p className={`text-black font-bold ${MonstserratFontBold.className} text-3xl`}>{image.text}</p>
                                            </div>
                                        </div>
                                    )}
                                    </div>
                                ))}
                                </div>
                          </div>
                        )}
                    </div>
                    {/* Music Video */}
                    <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">MUSIC VIDEO</h1>
                        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    {/* Product */}
                    <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">PRODUCT</h1>
                        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    {/* Properties */}
                    <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">PROPERTIES</h1>
                        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    {/* Photoshoot */}
                    <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">PHOTOSHOOT</h1>
                        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </main>
    );
}