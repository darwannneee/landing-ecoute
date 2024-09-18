import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import EcouteLogo from "@/public/assets/img/logo3d.png";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const MonsterratFontBold = Montserrat({
    weight: '900',
    subsets: ['latin']
})

const MonsterratFontMedium = Montserrat({
    weight: '600',
    subsets: ['latin']
})

export default function Contact() {
    return (
        <main className="min-h-screen bg-gray-100 flex flex-col">
            <Navbar />
            {/* Flex container with grow and center alignment */}
            <div className="flex-grow flex flex-col md:flex-row items-center justify-center px-4 py-8 md:p-0 pt-20 md:pt-0 pb-24 md:pb-0">
                {/* Logo Section */}
                <Image src={EcouteLogo} alt="Ecoute Logo" className="w-48 md:w-96 mb-6 md:mb-0" />

                {/* Contact Info Section */}
                <div className="md:pl-20 w-full md:w-auto text-center md:text-left">
                    <h1 className={`text-[#625598] ${MonsterratFontBold.className} font-bold text-xl md:text-5xl mb-2 md:mb-0`}>ECOUTE OFFICE</h1>

                    {/* Alamat */}
                    <div className="pt-2 md:pt-5">
                        <h2 className={`text-black text-lg md:text-3xl font-semibold ${MonsterratFontMedium.className}`}>JL. SRIAYU NO. 3</h2>
                        <p className={`text-black text-xs md:text-base pb-4 md:pb-10 ${MonsterratFontMedium.className}`}>Ancol, Kec. Regol, Kota Bandung, Jawa Barat 40254</p>
                    </div>
                    
                    {/* Contact Details */}
                    <div className="grid grid-cols-2 gap-3 md:gap-2">
                        <div className="space-y-3 md:space-y-2">
                            {/* Email */}
                            <div className="flex items-center justify-center md:justify-start space-x-2">
                                <svg width="16" height="16" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.9167 6.25008C22.9167 5.10425 21.9792 4.16675 20.8334 4.16675H4.16671C3.02087 4.16675 2.08337 5.10425 2.08337 6.25008M22.9167 6.25008V18.7501C22.9167 19.8959 21.9792 20.8334 20.8334 20.8334H4.16671C3.02087 20.8334 2.08337 19.8959 2.08337 18.7501V6.25008M22.9167 6.25008L12.5 13.5417L2.08337 6.25008" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p className="text-xs md:text-lg">info@ecoute.id</p>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center justify-center md:justify-start space-x-2">
                                <svg width="16" height="16" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6666 2.08341V8.33342M16.6666 8.33342H22.9166M16.6666 8.33342L23.9583 1.04175M22.9166 17.6251V20.7501C22.9178 21.0402 22.8584 21.3273 22.7421 21.5932C22.6259 21.859 22.4555 22.0976 22.2417 22.2937C22.0279 22.4898 21.7755 22.6391 21.5007 22.7321C21.2259 22.825 20.9347 22.8595 20.6458 22.8334C17.4404 22.4851 14.3614 21.3898 11.6562 19.6355C9.13935 18.0362 7.00551 15.9023 5.4062 13.3855C3.64576 10.668 2.5502 7.57403 2.20828 4.35425C2.18225 4.06619 2.21649 3.77587 2.30881 3.50177C2.40112 3.22767 2.5495 2.9758 2.7445 2.76219C2.93949 2.54857 3.17683 2.3779 3.4414 2.26104C3.70597 2.14418 3.99197 2.08369 4.2812 2.08341H7.4062C7.91173 2.07844 8.40182 2.25745 8.78512 2.58709C9.16842 2.91673 9.41878 3.37451 9.48953 3.87508C9.62143 4.87515 9.86604 5.85709 10.2187 6.80217C10.3588 7.175 10.3892 7.5802 10.3061 7.96975C10.223 8.3593 10.03 8.71686 9.74995 9.00008L8.42703 10.323C9.9099 12.9309 12.0692 15.0901 14.677 16.573L15.9999 15.2501C16.2832 14.97 16.6407 14.777 17.0303 14.6939C17.4198 14.6109 17.825 14.6412 18.1979 14.7813C19.1429 15.134 20.1249 15.3786 21.125 15.5105C21.631 15.5819 22.0931 15.8368 22.4234 16.2266C22.7538 16.6165 22.9293 17.1142 22.9166 17.6251Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p className="text-xs md:text-lg">+62 811 223 9196</p>
                            </div>
                        </div>
                       
                        <div className="space-y-3 md:space-y-2">
                            {/* LinkedIn */}
                            <div className="flex items-center justify-center md:justify-start space-x-2">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M6 9H2V21H6V9Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p className="text-xs md:text-lg">ecoute.id</p>
                            </div>

                            {/* Instagram */}
                            <div className="flex items-center justify-center md:justify-start space-x-2">
                                <svg width="16" height="16" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.2292 6.77075H18.2396M7.29171 2.08325H17.7084C20.5849 2.08325 22.9167 4.4151 22.9167 7.29159V17.7083C22.9167 20.5847 20.5849 22.9166 17.7084 22.9166H7.29171C4.41522 22.9166 2.08337 20.5847 2.08337 17.7083V7.29159C2.08337 4.4151 4.41522 2.08325 7.29171 2.08325ZM16.6667 11.8437C16.7953 12.7106 16.6472 13.596 16.2435 14.3739C15.8399 15.1518 15.2012 15.7826 14.4184 16.1767C13.6356 16.5707 12.7484 16.7078 11.8832 16.5686C11.0179 16.4294 10.2185 16.0208 9.59883 15.4011C8.97912 14.7814 8.57059 13.9821 8.43136 13.1168C8.29213 12.2515 8.42928 11.3644 8.8233 10.5816C9.21732 9.79872 9.84815 9.16006 10.6261 8.75642C11.404 8.35277 12.2894 8.2047 13.1563 8.33325C14.0406 8.46438 14.8593 8.87644 15.4914 9.50857C16.1235 10.1407 16.5356 10.9594 16.6667 11.8437Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p className="text-xs md:text-lg">@ecoute.id</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}