import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import { useState } from "react";

// Import Image Branding
import Sostenuto from "@/public/assets/img/branding/SOSTENUTO.jpg"
import GreatAsia from "@/public/assets/img/branding/GREATASIA.jpg"

// Import Image Documentation
import IndahKusCiwalkSBM from "@/public/assets/img/documentations/IndahKus.jpg"
import Starbe from "@/public/assets/img/documentations/starbe.jpg"
import FTIsland from "@/public/assets/img/documentations/FT ISLAND.jpg"
import ANAYAKA from "@/public/assets/img/documentations/A NAYAKA.jpg"
import BBNO from "@/public/assets/img/documentations/BBNO.jpg"
import DavidBeat from "@/public/assets/img/documentations/DAVID BEAT.jpg"
import RamenGVRL from "@/public/assets/img/documentations/RAMEN GVRL.jpg"
import LMAC from "@/public/assets/img/documentations/LMAC.jpg"
import PocariRun from "@/public/assets/img/documentations/POCARI RUN.png"
import Yabe from "@/public/assets/img/documentations/TOWN YABE.jpg"
import Talitha from "@/public/assets/img/documentations/TALITHA.jpg"
import Cosmo from "@/public/assets/img/documentations/COSMO.jpg"

// Import MusicVideo
import Phonetic from "@/public/assets/img/musicvideo/PHONETIC.png"
import PhoneticAllTheTime from "@/public/assets/img/musicvideo/PHONETIC - ALL THE TIME.png"
import PhoneticImFallingForLove from "@/public/assets/img/musicvideo/PHONETIC - IM FALLING OVER YOU.png"
import Rookie from "@/public/assets/img/musicvideo/ROOKIE.png"
import Syeqy from "@/public/assets/img/musicvideo/SYEQY.jpg"
import Zirius from "@/public/assets/img/musicvideo/ZIRIUS.png"

// Import Product
import Saturday from "@/public/assets/img/product/saturday.jpg"
import Sore from "@/public/assets/img/product/sore.jpg"
import Food from "@/public/assets/img/product/food.jpg"

// Import Properties
import Rosevile from "@/public/assets/img/properties/ROSEVILE.jpg"
import LandMark from "@/public/assets/img/properties/LANDMARK.jpg"
import Seion from "@/public/assets/img/properties/SEION.jpg"
import House from "@/public/assets/img/properties/107 HOUSE.jpg"

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
    const [showBranding, setShowBranding] = useState(false);
    const [showMusicVideo, setMusicVideo] = useState(false);
    const [showProduct, setProduct] = useState(false);
    const [showProperties, setProperties] = useState(false);

    const toggleBranding = () => {
        setShowBranding(!showBranding)
    }

    const toggleDocumentation = () => {
        setShowDocumentation(!showDocumentation);
    };

    const toggleMusicVideo = () => {
        setMusicVideo(!showMusicVideo);
    };

    const toggleProduct = () => {
        setProduct(!showProduct)
    }

    const toggleProperties = () => {
        setProperties(!showProperties)
    }

    const [hoveredBranding, setHoveredBranding] = useState<number | null>(null);
    const [hoveredDocumentation, setHoveredDocumentation] = useState<number | null>(null);
    const [hoveredMusicVideo, sethoveredMusicVideo] = useState<number | null>(null);
    const [hoveredProduct, sethoveredProduct] = useState<number | null>(null);
    const [hoveredProperties, setHoveredProperties] = useState<number | null>(null);

    const imagesBranding = [
        { src: Sostenuto.src, alt: "SOSTENUTO OFFICIAL | BRAND IDENTITY", text: "SOSTENUTO OFFICIAL | BRAND IDENTITY", year: "2024" },
        { src: GreatAsia.src, alt: "THE GREAT ASIA AFRICA | BRAND IDENTITY", text: "THE GREAT ASIA AFRICA | BRAND IDENTITY", year: "2024" },
    ]

    const imagesDocumentations = [
        { src: IndahKusCiwalkSBM.src, alt: "Documentation 1", text: "INDAHKUS CIWALK SBM", year: "2024" },
        { src: Starbe.src, alt: "STARBE", text: "STARBE", year: "2024" },
        { src: FTIsland.src, alt: "FT ISLAND", text: "FT ISLAND", year: "2024" },
        { src: ANAYAKA.src, alt: "A NAYAKA", text: "A NAYAKA", year: "2024" },
        { src: BBNO.src, alt: "BBNO$", text: "BBNO$", year: "2024" },
        { src: DavidBeat.src, alt: "DAVID BEAT", text: "DAVID BEAT", year: "2024" },
        { src: RamenGVRL.src, alt: "RAMEN GVRL", text: "RAMEN GVRLT", year: "2024" },
        { src: LMAC.src, alt: "MUSIC FOR ALL FEST @LIDO MUSIC & ART CENTER (LMAC)", text: "MUSIC FOR ALL FEST @LIDO MUSIC & ART CENTER (LMAC)", year: "2024" },
        { src: PocariRun.src, alt: "POCARI RUN 2023", text: "POCARI RUN 2023", year: "2024" },
        { src: Yabe.src, alt: "TOWN @YABE! IZAYAKA", text: "TOWN @YABE! IZAYAKA", year: "2024" },
        { src: Talitha.src, alt: "TALITHA @AOM SUNDWON", text: "TALITHA @AOM SUNDWON", year: "2024" },
        { src: Cosmo.src, alt: "COSMO PYKE @AOM SUNDOWN", text: "COSMO PYKE @AOM SUNDOWN", year: "2024" },
    ];

    const imagesMusicVideo = [
        { src: Phonetic.src, alt: "PHONETIC - ALIEN", text: "PHONETIC - ALIEN", year: "2024" },
        { src: PhoneticAllTheTime.src, alt: "PHONETIC - ALL THE TIME", text: "PHONETIC - ALL THE TIME", year: "2024" },
        { src: PhoneticImFallingForLove.src, alt: "PHONETIC - IM FALLING FOR LOVE", text: "PHONETIC - IM FALLING FOR LOVE", year: "2024" },
        { src: Rookie.src, alt: "ROOKIE - THREE WORDS FT. JEANRIANI", text: "PHONETIC - IM FALLING FOR LOVE", year: "2024" },
        { src: Syeqy.src, alt: "SYEQY - DRUNK IN LOVE", text: "SYEQY - DRUNK IN LOVE", year: "2024" },
        { src: Zirius.src, alt: "ZIRIUS - BAD BOY", text: "ZIRIUS - BAD BOY", year: "2024" },
    ]

    const imagesProduct = [
        { src: Saturday.src, alt: "SATURDAY X VOLIX", text: "SATURDAY X VOLIX", year: "2024" },
        { src: Sore.src, alt: "SORE COFFEE DRIPPER", text: "SORE COFFEE DRIPPER", year: "2024" },
        { src: Food.src, alt: "FOOD PHOTOGRAPHY", text: "FOOD PHOTOGRAPHY", year: "2024" },
    ]

    const imagesProperties = [
        { src: Rosevile.src, alt: "ROSEVILE", text: "ROSEVILE", year: "2024" },
        { src: LandMark.src, alt: "LANDMARK", text: "LANDMARK", year: "2024" },
        { src: Seion.src, alt: "SEION SERANG", text: "SEION SERANG", year: "2024" },
        { src: House.src, alt: "107 HOUSE SYARIAH", text: "107 HOUSE SYARIAH", year: "2024" },
    ]

    return (
        <main className="bg-white flex flex-col p-0 m-0">
            <Navbar />
            <div className={`flex-grow flex flex-col items-center p-4 pt-16 md:pt-52 2xl:pt-80 pb-24 md:pb-8 m-0 ${MonstserratFontBoldItalic.className}`}>
                <div className="w-full sm:w-[90%] md:w-[80%] space-y-2">
                    {/* Event Organizer */}
                    {/* Event Planning & Strategy */}
                    <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">Event Planning & Strategy</h1>
                        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    {/* Venue Selection and Management */}
                    <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">Venue Selection and Management</h1>
                        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    {/* Vendor Coordination */}
                    <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">Vendor Coordination</h1>
                        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    {/* Registration And Attendee Management*/}
                    <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">Registration And Attendee Management</h1>
                        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    {/* Logistics and Operations Management */}
                    <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">Logistics and Operations Management</h1>
                        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    {/* Entertainment and Programming */}
                    <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">Entertainment and Programming</h1>
                        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    {/* Audio-Visual and Tehcnical Support */}
                    <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">Audio-Visual and Tehcnical Support</h1>
                        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    {/* Design and Decor */}
                    <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">Design and Decor</h1>
                        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    {/* Digital */}
                    {/* Web Design and Development */}
                    <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">Web Design and Development</h1>
                        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    {/* Analytics and Reporting */}
                    <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">Web Design and Development</h1>
                        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    {/* Photo and Video Marketing */}
                    <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">Web Design and Development</h1>
                        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    {/* Display And */}
                    <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">Web Design and Development</h1>
                        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    {/* Branding */}
                    <div className="w-full">
                        <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none" onClick={toggleBranding}>BRANDING</h1>
                            <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        {showBranding && (
                            <div className="py-4">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                {imagesBranding.map((image, index) => (
                                    <div 
                                    key={index}
                                    className="relative cursor-pointer"
                                    onMouseEnter={() => setHoveredBranding(index)}
                                    onMouseLeave={() => setHoveredBranding(null)}
                                    onClick={() => setHoveredBranding(hoveredDocumentation === index ? null : index)}
                                    >
                                    <Image src={image.src} width={800} height={800} alt={image.alt} className="w-full h-auto" />
                                    {hoveredBranding === index && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-white bg-opacity-85 w-[300px] h-[300px] md:w-[330px] md:h-[340px] 2xl:w-[500px] 2xl:h-[520px] text-center items-center justify-center flex flex-col gap-y-2">
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
                                {imagesDocumentations.map((image, index) => (
                                    <div 
                                    key={index}
                                    className="relative cursor-pointer"
                                    onMouseEnter={() => setHoveredDocumentation(index)}
                                    onMouseLeave={() => setHoveredDocumentation(null)}
                                    onClick={() => setHoveredDocumentation(hoveredDocumentation === index ? null : index)}
                                    >
                                    <Image src={image.src} width={800} height={800} alt={image.alt} className="w-full h-auto" />
                                    {hoveredDocumentation === index && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-white bg-opacity-85 w-[300px] h-[300px] md:w-[330px] md:h-[340px] 2xl:w-[500px] 2xl:h-[520px] text-center items-center justify-center flex flex-col gap-y-2">
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
                    <div className="w-full">
                        <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none" onClick={toggleMusicVideo}>MUSIC VIDEO</h1>
                            <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        {showMusicVideo && (
                            <div className="py-4">
                                <div className="grid grid-cols-1 md:grid-cols-3">
                                {imagesMusicVideo.map((image, index) => (
                                    <div 
                                    key={index}
                                    className="relative cursor-pointer"
                                    onMouseEnter={() => sethoveredMusicVideo(index)}
                                    onMouseLeave={() => sethoveredMusicVideo(null)}
                                    onClick={() => sethoveredMusicVideo(hoveredMusicVideo === index ? null : index)}
                                    >
                                    <Image src={image.src} width={800} height={800} alt={image.alt} className="w-full h-auto" />
                                    {hoveredMusicVideo === index && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-white bg-opacity-85 w-[300px] h-[300px] md:w-[330px] md:h-[340px] 2xl:w-[500px] 2xl:h-[520px] text-center items-center justify-center flex flex-col gap-y-2">
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
                    {/* Product */}
                    <div className="w-full">
                        <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none" onClick={toggleProduct}>PRODUCT</h1>
                            <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        {showProduct && (
                            <div className="py-4">
                                <div className="grid grid-cols-1 md:grid-cols-3">
                                {imagesProduct.map((image, index) => (
                                    <div 
                                    key={index}
                                    className="relative cursor-pointer"
                                    onMouseEnter={() => sethoveredProduct(index)}
                                    onMouseLeave={() => sethoveredProduct(null)}
                                    onClick={() => sethoveredProduct(hoveredProduct === index ? null : index)}
                                    >
                                    <Image src={image.src} width={800} height={800} alt={image.alt} className="w-full h-auto" />
                                    {hoveredProduct === index && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-white bg-opacity-85 w-[300px] h-[300px] md:w-[330px] md:h-[340px] 2xl:w-[500px] 2xl:h-[520px] text-center items-center justify-center flex flex-col gap-y-2">
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
                    {/* Properties */}
                    <div className="w-full">
                        <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none" onClick={toggleProperties}>PROPERTIES</h1>
                            <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        {showProperties && (
                            <div className="py-4">
                            <div className="grid grid-cols-1 md:grid-cols-3">
                            {imagesProperties.map((image, index) => (
                                <div 
                                key={index}
                                className="relative cursor-pointer"
                                onMouseEnter={() => setHoveredProperties(index)}
                                onMouseLeave={() => setHoveredProperties(null)}
                                onClick={() => setHoveredProperties(hoveredProperties === index ? null : index)}
                                >
                                <Image src={image.src} width={800} height={800} alt={image.alt} className="w-full h-auto" />
                                {hoveredProperties === index && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-white bg-opacity-85 w-[300px] h-[300px] md:w-[330px] md:h-[340px] 2xl:w-[500px] 2xl:h-[520px] text-center items-center justify-center flex flex-col gap-y-2">
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