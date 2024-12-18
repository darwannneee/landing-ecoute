import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";

import "@/app/globals.css";

const MonsterratFont = Montserrat({
  weight: '400',
  subsets: ['latin']
});

export default function AboutUs() {
  const [displayText1, setDisplayText1] = useState("");
  const [displayText2, setDisplayText2] = useState("");

  const paragraphs = [
    "\"Ecoute\" is derived from the French word meaning \"to listen.\" At Ecoute Agency, we believe in the importance of listening closely to our clients needs and desires. Our mission is to understand their unique visions and provide the best possible solutions to meet and exceed their expectations.",
    "Ecoute Agency operates under PT. Ecoute Kreativa Cemerlang, a legally registered company established in 2020. Our base is in Bandung, where we continuously strive to offer exceptional services to our valued clients."
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText1(paragraphs[0].slice(0, i));
      i++;
      if (i > paragraphs[0].length) {
        clearInterval(interval);
        setTimeout(() => {
          let j = 0;
          const interval2 = setInterval(() => {
            setDisplayText2(paragraphs[1].slice(0, j));
            j++;
            if (j > paragraphs[1].length) {
              clearInterval(interval2);
            }
          }, 5);
        }, 600);
      }
    }, 5);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={`${MonsterratFont.className} h-screen flex flex-col`}>
      <Navbar />

      <div className="flex-grow relative md:mt-44">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center max-w-3xl px-4">
            <h1 className="text-lg font-light leading-relaxed">
              {displayText1}
            </h1>
            <p className="mt-4">
              {displayText2}
            </p>
          </div>
        </div>
      </div>

      <div className="w-screen h-[40%] lg:h-[50%] relative">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="61 355 474.28 121.89"
          className="absolute bottom-0 left-0 w-full h-full object-fill opacity-50"
        >
          <defs>
            <style>
              {`.cls-1 { fill: #625598; stroke-width: 0px; }`}
            </style>
          </defs>
          <path className="cls-1" d="M202.58,480.26c17.66-1.78,27.29-17.48,30.15-22.48l1.07.54c-5.53,9.99-16.05,23.91-37.28,25.15-24.62,1.25-49.23-12.13-49.95-41.56-.89-30.86,27.11-45.31,46.74-45.31,10.17,0,24.44,4.64,33.72,9.45l-2.68,14.81h-1.07c-4.28-10.7-21.23-26.04-38-22.12-21.94,4.99-29.97,33.18-22.48,54.59,6.6,18.73,21.76,28.72,39.78,26.94Z"/>
          <path className="cls-1" d="M318.74,436.19c0,28.54-24.44,47.27-48.34,47.27s-44.6-14.63-44.6-39.6c0-29.43,24.44-47.27,48.34-47.27s44.6,14.98,44.6,39.6ZM303.76,430.49c-6.24-21.41-23.01-36.57-43.35-30.68-20.34,5.89-25.87,28.19-19.62,49.77,6.24,21.41,23.01,36.75,43.35,30.68,20.34-5.89,25.86-28.19,19.62-49.77Z"/>
          <path className="cls-1" d="M402.26,482.4h-18.2v-43.35c-2.32,20.16-8.38,44.42-31.57,44.42-16.41,0-29.44-10.35-29.44-31.4v-41.74c0-6.24-.53-8.03-3.92-8.56v-1.25l16.77-3.92h1.25v58.15c0,15.52,8.03,28.36,23.37,25.51,19.98-3.92,23.55-41.21,23.55-56.19v-13.74c0-6.24-.53-8.03-3.92-8.56v-1.25l16.77-3.92h1.25v74.03c0,6.24,1.25,8.92,4.1,10.52v1.25Z"/>
          <path className="cls-1" d="M462.85,451.18c-3.39,16.77-10.88,32.29-29.61,32.29-15.88,0-25.69-10.35-25.69-31.4v-54.05h-10.53v-1.43c15.16,0,16.41-15.88,16.41-24.44h14.09c0,13.74-13.56,23.9-24.26,24.44h39.42v1.43h-21.05v56.73c0,15.52,4.28,27.47,19.45,25.51,11.77-1.6,17.66-15.7,20.87-29.43l.89.36Z"/>
          <path className="cls-1" d="M534.85,454.03c-1.07,12.67-12.31,29.43-37.64,29.43s-48.34-12.13-49.06-41.56c-.89-30.86,27.11-44.24,46.74-45.31,15.16-.71,36.03,6.6,38.53,28.19h-16.59c10.17,2.68,19.44,13.02,18.02,29.26ZM509.52,424.78h-46.2c-2.32,9.45-1.78,19.98,1.25,28.54,6.6,18.73,19.98,26.94,38.17,26.22,15.34-.71,28.72-11.24,30.51-25.15,2.14-18.55-10.17-29.61-23.73-29.61ZM463.68,423.35h56.9c-2.32-15.52-16.23-28.01-33.71-24.62-12.13,2.32-19.98,12.49-23.19,24.62Z"/>
          <path className="cls-1" d="M147.49,454.03c-1.07,12.67-12.31,29.43-37.64,29.43s-48.34-12.13-49.06-41.56c-.89-30.86,27.11-44.24,46.74-45.31,15.16-.71,36.03,6.6,38.53,28.19h-16.59c10.17,2.68,19.44,13.02,18.02,29.26ZM122.16,424.78h-46.2c-2.32,9.45-1.78,19.98,1.25,28.54,6.6,18.73,19.98,26.94,38.17,26.22,15.34-.71,28.72-11.24,30.5-25.15,2.14-18.55-10.17-29.61-23.73-29.61ZM76.31,423.35h56.91c-2.32-15.52-16.23-28.01-33.72-24.62-12.13,2.32-19.98,12.49-23.19,24.62ZM121.09,366.8c-12.84,7.49-22.3,11.77-26.58,13.38l-1.07-1.61c3.39-3.21,10.7-10.17,21.76-19.98,3.57-3.21,6.78-2.14,8.38.18,1.61,2.14,1.78,5.53-2.5,8.03Z"/>
        </svg>
      </div>
    </main>
  );
}