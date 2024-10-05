import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import { useState } from "react";

// Import Image Documentation
import imagesDocumentations from "@/utils/imagesPortofolio/imagesDocumentations"
import imagesBranding from "@/utils/imagesPortofolio/imagesBranding"
import imagesMusicVideo from "@/utils/imagesPortofolio/imagesMusicVideo"
import imagesProduct from "@/utils/imagesPortofolio/imagesProduct"
import imagesProperties from "@/utils/imagesPortofolio/imagesProperties"
import imagesWebsite from "@/utils/imagesPortofolio/imagesWebsite";

// Import Font
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
    // 
    const [showEventOrganizer, setEventOrganizer] = useState(false);
    const [showDigital, setDigital] = useState(false);
    const [showOfflineAdversiting, setOfflineAdversiting] = useState(false);

    const [showDocumentation, setShowDocumentation] = useState(false);
    const [showBranding, setShowBranding] = useState(false);
    const [showMusicVideo, setMusicVideo] = useState(false);
    const [showProduct, setProduct] = useState(false);
    const [showProperties, setProperties] = useState(false);
    const [showWebsite, setWebsite] = useState(false);
    
    const toggleEventOrganizer = () => {
        setEventOrganizer(!showEventOrganizer)
    }

    const toggleDigital = () => {
        setDigital(!showDigital)
    }

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

    const toggleWebsite = () => {
        setWebsite(!showWebsite)
    }

    const [hoveredBranding, setHoveredBranding] = useState<number | null>(null);
    const [hoveredDocumentation, setHoveredDocumentation] = useState<number | null>(null);
    const [hoveredMusicVideo, sethoveredMusicVideo] = useState<number | null>(null);
    const [hoveredProduct, sethoveredProduct] = useState<number | null>(null);
    const [hoveredProperties, setHoveredProperties] = useState<number | null>(null);
    
    return (
        <main className="bg-white flex flex-col p-0 m-0">
            <Navbar />
            <div className={`flex-grow flex flex-col items-center p-4 pt-16 md:pt-52 2xl:pt-80 pb-24 md:pb-8 m-0 ${MonstserratFontBoldItalic.className}`}>
                <div className="w-full sm:w-[90%] md:w-[80%] space-y-2">
                    {/* Event Organizer */}
                    <div className="flex items-center justify-between w-full border-b-2 border-[#625598]" onClick={toggleEventOrganizer}>
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">EVENT ORGANIZER</h1>
                        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    {showEventOrganizer && (
                        <div className="ml-10">
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
                        </div>
                    )}
                    {/* Digital */}
                    <div className="flex items-center justify-between w-full border-b-2 border-[#625598]" onClick={toggleDigital}>
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">DIGITAL</h1>
                        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    {showDigital && (
                        <div className="ml-10"> 
                            {/* Website */}
                            <div className="w-full">
                                <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none" onClick={toggleWebsite}>Website Design and Development</h1>
                                    <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                {showWebsite && (
                                    <div className="py-4">
                                    <div className="grid grid-cols-1 md:grid-cols-3">
                                    {imagesWebsite.map((image, index) => (
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
                                                <div className="bg-white bg-opacity-85 w-full h-full my-32 mx-10 text-center items-center justify-center flex flex-col gap-y-2">
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
                            {/* Analytics and Reporting */}
                            <div className="flex items-center justify-between w-full border-b-2 border-[#625598]" >
                                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">Analytics and Reporting</h1>
                                <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            {/* Branding */}
                            <div className="w-full">
                                <div className="flex items-center justify-between w-full border-b-2 border-[#625598]">
                                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none" onClick={toggleBranding}>Branding</h1>
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
                                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">Documentations</h1>
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
                                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none" onClick={toggleMusicVideo}>Music Video</h1>
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
                                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none" onClick={toggleProduct}>Product</h1>
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
                                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none" onClick={toggleProperties}>Properties</h1>
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
                                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">Photoshoot</h1>
                                <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    )}
                    {/* Offline Adversiting */}
                    <div className="flex items-center justify-between w-full border-b-2 border-[#625598]" onClick={toggleDigital}>
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">OFFLINE ADVERSITING</h1>
                        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    {/* Collateral Production */}
                    <div className="flex items-center justify-between w-full border-b-2 border-[#625598]" onClick={toggleDigital}>
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#625598] font-bold leading-none">COLLATERAL PRODUCTION</h1>
                        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#625598" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </main>
    );
}