"use client";

import React, { useState, useEffect } from "react";
import { missionsData } from "@/constants";
import { Calendar, Users, Clock, CheckCircle, Circle } from "@phosphor-icons/react";

export default function Missions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const featuredMission = missionsData[0];
  const otherMissions = missionsData.slice(1);

  const getStatusIcon = (status: string) => {
    return status === "Completed" ? 
      <CheckCircle className="text-green-400" size={20} weight="fill" /> : 
      <Circle className="text-yellow-400" size={20} weight="fill" />;
  };

  const getStatusColor = (status: string) => {
    return status === "Completed" ? "text-green-400" : "text-yellow-400";
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="h-full w-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url("/bg.jpg")' }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Recent Missions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our latest space exploration achievements and ongoing missions
          </p>
        </div>
        
        {/* Missions Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Featured Mission - Left */}
          <div
            className={`transform transition-all duration-1000 h-full ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="relative group h-full">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Mission Card */}
              <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-center">
                <div className="text-center">
                  {/* Mission Header */}
                  <div className="flex flex-col items-center mb-8">
                    <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-3">
                      {featuredMission.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(featuredMission.status)}
                      <span className={`text-sm font-medium ${getStatusColor(featuredMission.status)}`}>
                        {featuredMission.status}
                      </span>
                    </div>
                  </div>

                  {/* Mission Description */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md mx-auto">
                    {featuredMission.description}
                  </p>

                  {/* Mission Details */}
                  <div className="grid grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="flex justify-center mb-3">
                        <Calendar className="text-blue-400" size={28} weight="duotone" />
                      </div>
                      <p className="text-gray-400 text-sm mb-1">Launch Date</p>
                      <p className="text-white font-semibold">{featuredMission.date}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-3">
                        <Users className="text-blue-400" size={28} weight="duotone" />
                      </div>
                      <p className="text-gray-400 text-sm mb-1">Crew</p>
                      <p className="text-white font-semibold">{featuredMission.crew} members</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-3">
                        <Clock className="text-blue-400" size={28} weight="duotone" />
                      </div>
                      <p className="text-gray-400 text-sm mb-1">Duration</p>
                      <p className="text-white font-semibold">{featuredMission.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Missions - Right */}
          <div className="space-y-6">
            {otherMissions.map((mission, index) => (
              <div
                key={mission.id}
                className={`transform transition-all duration-1000 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Mission Row */}
                  <div className="relative bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-gray-700/30 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {mission.name}
                          </h4>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(mission.status)}
                            <span className={`text-xs font-medium ${getStatusColor(mission.status)}`}>
                              {mission.status}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {mission.description}
                        </p>
                        <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                          <span>{mission.date}</span>
                          <span> Crew: {mission.crew}</span>
                          <span> Duration: {mission.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
