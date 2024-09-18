"use client"

import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Briefcase, Image, Mail } from 'lucide-react';

const MonsterratFont = Montserrat({
    weight: '800',
    subsets: ['latin']
});

export default function Navbar() {
    const pathname = usePathname();

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="hidden fixed w-[350px] md:w-[900px] 2xl:w-[1090px] h-[70px] 2xl:h-[80px] left-1/2 -translate-x-1/2 md:px-[6px] border-2 border-[#625598] bg-[#F2F2F7] backdrop-blur-sm bg-opacity-50 mt-7 2xl:mt-10 rounded-full md:flex items-center justify-between px-2 z-50 text-[#625598]">
            <div className={`flex-1 flex justify-between items-center ${MonsterratFont.className} font-bold`}>
                <Link href="/" className={`relative font-bold text-xs md:text-[20px] px-4 md:py-2 2xl:py-3 ${pathname === '/' ? 'bg-[#625598] text-white rounded-full' : ''}`}>
                    <span className="inline-block px-6 py-3">Home</span>
                </Link>

                <Link href="/AboutUs" className={`relative font-bold text-xs md:text-[20px] px-4 md:py-3 2xl:py-4 ${pathname === '/AboutUs' ? 'bg-[#625598] text-white rounded-full' : ''}`}>
                    <span className="inline-block px-4 py-2">About Us</span>
                </Link>

                <Link href="/WhatWeDo" className={`relative font-bold text-xs md:text-[20px] px-4 md:py-3 2xl:py-4 ${pathname === '/WhatWeDo' ? 'bg-[#625598] text-white rounded-full' : ''}`}>
                    <span className="inline-block px-4 py-2">What We Do</span>
                </Link>

                <Link href="/Portofolio" className={`relative font-bold text-xs md:text-[20px] px-4 md:py-3 2xl:py-4 ${pathname === '/Portofolio' ? 'bg-[#625598] text-white rounded-full' : ''}`}>
                    <span className="inline-block px-4 py-2">Portfolio</span>
                </Link>

                <Link href="/Contact" className={`relative font-bold text-xs md:text-[20px] px-4 md:py-3 2xl:py-4 ${pathname === '/Contact' ? 'bg-[#625598] text-white rounded-full' : ''}`}>
                    <span className="inline-block px-4 py-2">Contact</span>
                </Link>
            </div>
        </nav>

            {/* Mobile Navbar */}
            <nav className={`md:hidden fixed bottom-0 left-0 right-0 bg-[#F2F2F7] backdrop-blur-sm bg-opacity-50 border-t-2 border-[#625598] z-50 ${MonsterratFont.className}`}>
                <ul className="flex justify-around items-center h-16">
                    <li>
                        <Link href="/" className={`flex flex-col items-center ${pathname === '/' ? 'text-[#625598]' : 'text-gray-500'}`}>
                            <Home size={24} />
                            <span className="text-xs mt-1">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/AboutUs" className={`flex flex-col items-center ${pathname === '/AboutUs' ? 'text-[#625598]' : 'text-gray-500'}`}>
                            <Users size={24} />
                            <span className="text-xs mt-1">About Us</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/WhatWeDo" className={`flex flex-col items-center ${pathname === '/WhatWeDo' ? 'text-[#625598]' : 'text-gray-500'}`}>
                            <Briefcase size={24} />
                            <span className="text-xs mt-1">What We Do</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Portofolio" className={`flex flex-col items-center ${pathname === '/Portofolio' ? 'text-[#625598]' : 'text-gray-500'}`}>
                            <Image size={24} />
                            <span className="text-xs mt-1">Portfolio</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Contact" className={`flex flex-col items-center ${pathname === '/Contact' ? 'text-[#625598]' : 'text-gray-500'}`}>
                            <Mail size={24} />
                            <span className="text-xs mt-1">Contact</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}