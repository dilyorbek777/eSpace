"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // Make video 2x faster
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/bg-loop.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            EXPLORE THE
            <br />
            <span 
              className="inline-block bg-clip-text text-transparent bg-cover bg-center"
              style={{
                backgroundImage: 'url("/txt.jpg")',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}
            >
              FINAL FRONTIER
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us on an extraordinary journey beyond Earth's boundaries. 
            Experience the future of space exploration and discover what lies among the stars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-background hover:shadow-lg hover:shadow-white transition-all duration-200 font-semibold rounded-lg">
              Launch Mission
            </button>
            <button className="px-8 py-4 border-2 border-white hover:bg-white hover:text-black text-white font-semibold rounded-lg transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
