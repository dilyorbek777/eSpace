"use client";

import React, { useState, useEffect, useRef } from "react";
import { vehiclesData } from "@/constants";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

export default function Vehicles() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % vehiclesData.length);
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? vehiclesData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vehiclesData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "text-green-400";
      case "Testing": return "text-yellow-400";
      case "Deploying": return "text-blue-400";
      default: return "text-gray-400";
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-primary to-foreground overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Fleet
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our advanced fleet of spacecraft and rockets designed for the future of space exploration
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative" ref={carouselRef}>
          <div className="overflow-hidden rounded-2xl">
            {/* Carousel Track */}
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {vehiclesData.map((vehicle) => (
                <div key={vehicle.id} className="w-full flex-shrink-0">
                  <div className="relative group">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Vehicle Card */}
                    <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Vehicle Image */}
                        <div className="relative h-64 lg:h-auto">
                          <img
                            src={vehicle.image}
                            alt={vehicle.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          <div className="absolute bottom-4 left-4">
                            <span className={`text-sm font-medium ${getStatusColor(vehicle.status)}`}>
                              {vehicle.status}
                            </span>
                          </div>
                        </div>

                        {/* Vehicle Info */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <div className="mb-4">
                            <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
                              {vehicle.type}
                            </span>
                            <h3 className="text-3xl lg:text-4xl font-bold text-white mt-2 mb-4 group-hover:text-blue-400 transition-colors duration-300">
                              {vehicle.name}
                            </h3>
                          </div>

                          <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            {vehicle.description}
                          </p>

                          {/* Specifications */}
                          <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-white mb-4">Specifications</h4>
                            <div className="grid grid-cols-2 gap-4">
                              {Object.entries(vehicle.specs).map(([key, value]) => (
                                <div key={key} className="bg-gray-800/50 rounded-lg p-3">
                                  <p className="text-gray-400 text-sm capitalize mb-1">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                  </p>
                                  <p className="text-white font-semibold">{value}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Mission Count */}
                          <div className="mt-8 flex items-center justify-between">
                            <div>
                              <p className="text-gray-400 text-sm">Missions Completed</p>
                              <p className="text-2xl font-bold text-white">{vehicle.missions}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-black/70 transition-colors duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-black/70 transition-colors duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Play/Pause Control */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-black/70 transition-colors duration-300 z-10"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white" />
            )}
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {vehiclesData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-400 w-8"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
