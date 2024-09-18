import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";

const MonstserratFontBold = Montserrat({
    weight: '800',
    style: "italic",
    subsets: ['latin'],
});

export default function Portfolio() {
    return (
        <main className="min-h-screen bg-white flex flex-col p-0 m-0">
            <Navbar />
            {/* Flex container with grow and center alignment */}
            <div className={`flex-grow flex flex-col items-center justify-center p-4 pt-16 md:pt-20 pb-24 md:pb-8 m-0 ${MonstserratFontBold.className}`}>
                {/* Branding */}
                <div className="flex items-center justify-between w-full sm:w-[90%] md:w-[80%] border-b-2 border-[#625598]">
                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl text-[#625598] font-bold leading-none pb-2">BRANDING</h1>
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-[#625598] pb-2">→</span>
                </div>
                {/* Documentations */}
                <div className="flex items-center justify-between w-full sm:w-[90%] md:w-[80%] border-b-2 border-[#625598]">
                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl text-[#625598] font-bold leading-none pb-2">DOCUMENTATIONS</h1>
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-[#625598] pb-2">→</span>
                </div>
                {/* Music Video */}
                <div className="flex items-center justify-between w-full sm:w-[90%] md:w-[80%] border-b-2 border-[#625598]">
                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl text-[#625598] font-bold leading-none pb-2">MUSIC VIDEO</h1>
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-[#625598] pb-2">→</span>
                </div>
                {/* Product */}
                <div className="flex items-center justify-between w-full sm:w-[90%] md:w-[80%] border-b-2 border-[#625598]">
                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl text-[#625598] font-bold leading-none pb-2">PRODUCT</h1>
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-[#625598] pb-2">→</span>
                </div>
                {/* Properties */}
                <div className="flex items-center justify-between w-full sm:w-[90%] md:w-[80%] border-b-2 border-[#625598]">
                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl text-[#625598] font-bold leading-none pb-2">PROPERTIES</h1>
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-[#625598] pb-2">→</span>
                </div>
                {/* Photoshoot */}
                <div className="flex items-center justify-between w-full sm:w-[90%] md:w-[80%] border-b-2 border-[#625598]">
                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl text-[#625598] font-bold leading-none pb-2">PHOTOSHOOT</h1>
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-[#625598] pb-2">→</span>
                </div>
            </div>
        </main>
    );
}