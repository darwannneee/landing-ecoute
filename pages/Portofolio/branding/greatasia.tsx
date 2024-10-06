import Navbar from "@/components/Navbar";
import "@/app/globals.css";

export default function Sostenuto() {
    const imageCount = 22;
    const imageBaseUrl = "https://rfvazcvvtrgdknkonewo.supabase.co/storage/v1/object/public/ecoute/branding/GREATASIA/";

    return (
        <main>
            <Navbar />

            <div className="flex-grow flex flex-col items-center p-4 pt-16 md:pt-52 2xl:pt-80 pb-24 md:pb-8 m-0">
                <h1 className="text-center">Great Asia Africa</h1>

                <div>
                    {Array.from({ length: imageCount }, (_, index) => (
                        <img 
                            key={index} 
                            src={`${imageBaseUrl}greatasia${index + 1}.jpg`} 
                            alt={`greatasia ${index + 1}`} 
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
