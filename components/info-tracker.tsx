"use client";

import React, { useState, useEffect } from "react";
import { statsData } from "@/constants";
import { Rocket, Airplane, User, Diamond } from "@phosphor-icons/react";

const iconMap = {
  Rocket,
  Airplane,
  User,
  Diamond
};

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

function AnimatedCounter({ value, duration = 2000, shouldAnimate = false }: AnimatedCounterProps & { shouldAnimate?: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const numericValue = parseInt(value.replace(/,/g, ""));

  useEffect(() => {
    if (!shouldAnimate || hasAnimated) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setDisplayValue(Math.floor(progress * numericValue));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setHasAnimated(true);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [numericValue, duration, shouldAnimate, hasAnimated]);

  return <>{numericValue > 999 ? displayValue.toLocaleString() : displayValue}</>;
}

export default function InfoTracker() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-foreground to-primary overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Mission Statistics
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Track our progress in exploring the cosmos and pushing the boundaries of human achievement
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
            
            return (
              <div
                key={index}
                className={`group relative transform transition-all duration-700 h-full ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Main card */}
                <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 flex flex-col">
                  {/* Icon container */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-20"></div>
                    <div className="relative bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-4 flex justify-center items-center">
                      {IconComponent && (
                        <IconComponent 
                          size={48} 
                          weight="duotone" 
                          className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300"
                        />
                      )}
                    </div>
                  </div>
                  
                  {/* Value */}
                  <div className="text-center mb-4">
                    <div className="text-4xl md:text-5xl font-bold text-white tabular-nums">
                      <AnimatedCounter value={stat.value} shouldAnimate={isVisible} />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-300 text-center mb-2 group-hover:text-white transition-colors duration-300">
                    {stat.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-500 text-center group-hover:text-gray-400 transition-colors duration-300 flex-grow">
                    {stat.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
