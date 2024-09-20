"use client"

import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
            <nav className={`md:hidden fixed bottom-0 left-0 right-0 bg-[#F2F2F7] mx-6 mb-2 rounded-full backdrop-blur-sm bg-opacity-50 border-2 border-[#625598] z-50 ${MonsterratFont.className}`}>
                <ul className="flex justify-around items-center h-16">
                    <li>
                        <Link href="/" className={`flex flex-col items-center ${pathname === '/' ? 'bg-[#625598] px-3 py-2 rounded-full' : ''}`}>
                        <svg width="30" height="30" viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.125 67.8334V37.0001H46.875V67.8334M9.375 27.7501L37.5 6.16675L65.625 27.7501V61.6668C65.625 63.3023 64.9665 64.8708 63.7944 66.0272C62.6223 67.1837 61.0326 67.8334 59.375 67.8334H15.625C13.9674 67.8334 12.3777 67.1837 11.2056 66.0272C10.0335 64.8708 9.375 63.3023 9.375 61.6668V27.7501Z" stroke={`${pathname === '/' ? 'white' : '#625598'}`} stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        </Link>
                    </li>
                    <li>
                        <Link href="/AboutUs" className={`flex flex-col items-center ${pathname === '/AboutUs' ? 'bg-[#625598] px-3 py-2 rounded-full' : ''}`}>
                        <svg width="30" height="30" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.9998 49.3334V37.0001M36.9998 24.6667H37.0307M67.8332 37.0001C67.8332 54.0289 54.0286 67.8334 36.9998 67.8334C19.9711 67.8334 6.1665 54.0289 6.1665 37.0001C6.1665 19.9713 19.9711 6.16675 36.9998 6.16675C54.0286 6.16675 67.8332 19.9713 67.8332 37.0001Z" stroke={`${pathname === '/AboutUs' ? 'white' : '#625598'}`} stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="/WhatWeDo" className={`flex flex-col items-center ${pathname === '/WhatWeDo' ? 'bg-[#625598] px-3 py-2 rounded-full' : ''}`}>
                        <svg width="30" height="30" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M43.1668 6.16675H18.5002C16.8647 6.16675 15.2961 6.81645 14.1397 7.97292C12.9832 9.1294 12.3335 10.6979 12.3335 12.3334V61.6668C12.3335 63.3023 12.9832 64.8708 14.1397 66.0272C15.2961 67.1837 16.8647 67.8334 18.5002 67.8334H55.5002C57.1357 67.8334 58.7042 67.1837 59.8607 66.0272C61.0171 64.8708 61.6668 63.3023 61.6668 61.6668V24.6667M43.1668 6.16675L61.6668 24.6667M43.1668 6.16675V24.6667H61.6668M49.3335 40.0834H24.6668M49.3335 52.4168H24.6668M30.8335 27.7501H24.6668" stroke={`${pathname === '/WhatWeDo' ? 'white' : '#625598'}`} stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Portofolio" className={`flex flex-col items-center ${pathname === '/Portofolio' ? 'bg-[#625598] px-3 py-2 rounded-full' : ''}`}>
                        <svg width="30" height="30" viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M68.75 58.5833C68.75 60.2188 68.0915 61.7873 66.9194 62.9438C65.7473 64.1003 64.1576 64.75 62.5 64.75H12.5C10.8424 64.75 9.25268 64.1003 8.08058 62.9438C6.90848 61.7873 6.25 60.2188 6.25 58.5833V15.4167C6.25 13.7812 6.90848 12.2126 8.08058 11.0562C9.25268 9.8997 10.8424 9.25 12.5 9.25H28.125L34.375 18.5H62.5C64.1576 18.5 65.7473 19.1497 66.9194 20.3062C68.0915 21.4626 68.75 23.0312 68.75 24.6667V58.5833Z" stroke={`${pathname === '/Portofolio' ? 'white' : '#625598'}`} stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Contact" className={`flex flex-col items-center ${pathname === '/Contact' ? 'bg-[#625598] px-3 py-2 rounded-full' : ''}`}>
                        <svg width="30" height="30" viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 43.1667C25 43.1667 29.6875 49.3334 37.5 49.3334C45.3125 49.3334 50 43.1667 50 43.1667M28.125 27.7501H28.1563M46.875 27.7501H46.9063M68.75 37.0001C68.75 54.0289 54.7589 67.8334 37.5 67.8334C20.2411 67.8334 6.25 54.0289 6.25 37.0001C6.25 19.9713 20.2411 6.16675 37.5 6.16675C54.7589 6.16675 68.75 19.9713 68.75 37.0001Z" stroke={`${pathname === '/Contact' ? 'white' : '#625598'}`} stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}