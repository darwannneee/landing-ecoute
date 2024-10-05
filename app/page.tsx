"use client";
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Navbar from "@/components/Navbar";
import { OBJLoader } from 'three-stdlib';

import { Montserrat } from 'next/font/google';

const MonsterratFont = Montserrat({
  weight: '700',
  subsets: ['latin']
})

// Loading screen component
const LoadingScreen = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div className="text-center">
      <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mb-4"></div>
      <p className="text-xl font-semibold text-gray-700">Loading...</p>
    </div>
  </div>
);

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const objectRef = useRef<THREE.Object3D | null>(null); // Reference for the 3D object
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current!, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // First Spotlight - 2000 Watt, White
    const spotLight1 = new THREE.SpotLight(0xffffff, 800 ); // Equivalent intensity for 2000 watt
    spotLight1.position.set(0, 0, 9);  // Set position in front of the object (from the Z-axis)
    scene.add(spotLight1);

    // Create a new target object
    const targetObject = new THREE.Object3D();
    targetObject.position.set(0, 0, 0); // Assuming the 3D object is at the origin (0, 0, 0)
    scene.add(targetObject);

    // Set the spotlight to target the object
    spotLight1.target = targetObject;

    // Optional: Set the target to cast shadows if needed
    spotLight1.target.updateMatrixWorld();

    spotLight1.rotation.set(THREE.MathUtils.degToRad(90), 0, 0); // Set rotation in degrees
    spotLight1.distance = 10;
    spotLight1.castShadow = true;

    // Second Spotlight - 1000 Watt, White, 6m Radius
    const spotLight2 = new THREE.SpotLight(0xffffff, 30); // Equivalent intensity for 1000 watt
    spotLight2.position.set(6, 0, 0);  // Set position at (7, 0, 0)

    // Create a new target object
    const targetObject2 = new THREE.Object3D();
    targetObject2.position.set(0, 0, 0); // Assuming the 3D object is at the origin (0, 0, 0)
    scene.add(targetObject2);

    // Set the spotlight to target the object
    spotLight2.target = targetObject2;
    // Optional: Set the target to cast shadows if needed
    spotLight2.target.updateMatrixWorld();

    // Set the rotation in degrees and convert to radians
    spotLight2.rotation.set(
        THREE.MathUtils.degToRad(-67),   // X-axis rotation
        THREE.MathUtils.degToRad(-438),  // Y-axis rotation
        THREE.MathUtils.degToRad(247)    // Z-axis rotation
    );

    spotLight2.angle = THREE.MathUtils.degToRad(90); // Set angle to cover a larger area
    spotLight2.distance = 10; // Set the light radius to 6 meters
    spotLight2.castShadow = true;
    scene.add(spotLight2);

    // Third Spotlight - 2000 Watt, Cyan (#49d5ff), 3m Radius
    const spotLight3 = new THREE.SpotLight(0x49d5ff, 50); // Equivalent intensity for 2000 watt
    spotLight3.position.set(-6, 0, 0);  // Set position at (x = -7, y = 0, z = 0)

    // Create a new target object
    const targetObject3 = new THREE.Object3D();
    targetObject3.position.set(0, 0, 0); // Assuming the 3D object is at the origin (0, 0, 0)
    scene.add(targetObject3);

    // Set the spotlight to target the object
    spotLight3.target = targetObject3;

    // Optional: Set the target to cast shadows if needed
    spotLight3.target.updateMatrixWorld();

    spotLight3.angle = THREE.MathUtils.degToRad(90); // Set angle to cover a larger area
    spotLight3.distance = 8; // Set the light radius to 3 meters
    spotLight3.castShadow = true;

    scene.add(spotLight3);

    // 4 Spot from TOP
    const spotLight4 = new THREE.SpotLight(0xffffff, 80); // Equivalent intensity for 1000 watt
    spotLight4.position.set(0, 6, 0);  // Set position at (7, 0, 0)
  
    // Create a new target object
    const targetObject4 = new THREE.Object3D();
    targetObject4.position.set(0, 0, 0); // Assuming the 3D object is at the origin (0, 0, 0)
    scene.add(targetObject4);

    // Set the spotlight to target the object
    spotLight4.target = targetObject;

    // Optional: Set the target to cast shadows if needed
    spotLight4.target.updateMatrixWorld();

    spotLight4.angle = THREE.MathUtils.degToRad(90); // Set angle to cover a larger area
    spotLight4.distance = 10; // Set the light radius to 6 meters
    spotLight4.castShadow = true;
    scene.add(spotLight4);

    // Load 3D Object
    const loader = new OBJLoader();
    loader.load('/assets/img/Logo_Ecoute.obj', (object) => {
      object.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xC288F4, // Hex color #9986BD
            metalness: 1,    // Full metal
            roughness: 0.4,  // Smooth surface
            envMapIntensity: 1.0, // Increase reflection from the environment
          });
        }
      });
      objectRef.current = object;

      // Adjust object position to the left
      object.position.x = -0.1; // Move the object to the left (adjust value as needed)
      scene.add(object);
      setIsLoading(false); // Set loading to false when the object is loaded
    });

    // Adjust camera position based on screen size
    const adjustCameraPosition = () => {
      if (window.innerWidth < 768) {
        // Mobile screen: move camera closer (but keep it fixed in z-axis)
        camera.position.z = 6;  // Set a fixed z-distance for mobile
      } else {
        // Desktop screen: default camera position
        camera.position.z = 3;
      }
    };

    adjustCameraPosition(); // Call the function on initial render

    // Update camera position on window resize
    window.addEventListener('resize', adjustCameraPosition);

   // Animation loop with panning effect
  const panningSpeed = 0.0005;  // Speed of panning
  const panningRange = THREE.MathUtils.degToRad(45); // 45 degrees in radians

  const animate = () => {
    requestAnimationFrame(animate); // Continuously request new animation frames

    if (objectRef.current) {
      // Create a panning effect by oscillating the rotation on the Y-axis
      objectRef.current.rotation.y = panningRange * Math.sin(Date.now() * panningSpeed);
    }

    // Render the scene continuously
    renderer.render(scene, camera);
  };

  animate(); // Start the animation loop

    // Resize listener
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className={`${MonsterratFont.className} relative text-white min-h-screen bg-white`}>
      <Navbar />
      {isLoading && <LoadingScreen />}
      {/* Adjusted content container */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-80px)] pb-20 md:pb-0"> 
        {/* Added pb-20 for mobile to create space at the bottom, md:pb-0 to remove it on larger screens */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
          {/* 3D Object Section */}
          <div className="flex flex-col items-center justify-center relative h-[50vh] md:h-full">
            {/* Adjusted height for mobile */}
            <canvas ref={canvasRef} className="w-full h-full z-70"></canvas>
          </div>

          {/* Text Content Section */}
          <div className="flex flex-col justify-center space-y-2 text-center md:text-right pt-5 md:pt-40 md:mr-40 2xl:mr-[300px]">
            {/* Reduced top padding on mobile */}
            <div className='flex justify-center md:justify-end'>
              <h2 className="text-xl uppercase text-black font-bold">GET IN TOUCH</h2>
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.625 23.375L23.375 9.625M23.375 9.625H9.625M23.375 9.625V23.375" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="text-5xl md:text-7xl 2xl:text-8xl font-bold leading-tight md:leading-[90px] text-[#625598]">
              YOUR VOICE<br />
              IS OUR<br />
              <span className='text-5xl md:text-7xl 2xl:text-8xl'>PRIORITY</span>
            </h1>
            <p className="text-lg pt-3 font-light text-black">
              LISTEN - CONNECT - EVOLVE
            </p>

            {/* Social Media */}
            <div className="flex justify-center md:justify-end space-x-4 pt-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500 hover:text-[#625598] transition-colors duration-300"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.51a2.05 2.05 0 11.01-4.1 2.05 2.05 0 01-.01 4.1zM20.45 20.45h-3.56v-5.63c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.96v5.73h-3.56V9h3.42v1.56h.05c.48-.9 1.67-1.84 3.44-1.84 3.68 0 4.36 2.42 4.36 5.56v6.17z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>

  );
}
