"use client";

import React, { useState } from "react";
import { tourData } from "@/constants";
import { Star, Users, DollarSign, TrendingUp, Calculator } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function Tour() {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, boolean>>({});
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleOption = (option: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  const calculateTotal = () => {
    let total = tourData.pricing.basePrice;
    Object.entries(selectedOptions).forEach(([option, isSelected]) => {
      if (isSelected && option in tourData.pricing.options) {
        total += tourData.pricing.options[option as keyof typeof tourData.pricing.options];
      }
    });
    return total;
  };

  const maxVisitors = Math.max(...tourData.monthlyTours.map(m => m.visitors));

  const pieData = [
    { name: "Flights", value: tourData.revenueBreakdown.flights, color: "#3B82F6" },
    { name: "Accessories", value: tourData.revenueBreakdown.accessories, color: "#8B5CF6" },
    { name: "Training", value: tourData.revenueBreakdown.training, color: "#22C55E" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
      />
    ));
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="h-full w-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url("/tour.png")' }}
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Space Tourism Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join the exclusive club of space tourists and experience the adventure of a lifetime
          </p>
        </div>

        {/* Visitor Statistics Graph */}
        <div className={`mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Users className="text-blue-400 w-6 h-6 mr-3" />
                <h3 className="text-2xl font-bold text-white">Monthly Tour Visitors</h3>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={tourData.monthlyTours}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="month" 
                      stroke="#ffffff"
                      tick={{ fill: '#ffffff' }}
                    />
                    <YAxis 
                      stroke="#ffffff"
                      tick={{ fill: '#ffffff' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }}
                      labelStyle={{ color: '#ffffff' }}
                    />
                    <Bar 
                      dataKey="visitors" 
                      fill="url(#colorGradient)"
                      radius={[8, 8, 0, 0]}
                    />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity={1} />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity={1} />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Calculator and Revenue Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Price Calculator */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 h-full">
                <div className="flex items-center mb-6">
                  <Calculator className="text-blue-400 w-6 h-6 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Price Calculator</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Base Tour Price</span>
                    <span className="text-white font-semibold">${tourData.pricing.basePrice.toLocaleString()}</span>
                  </div>
                  
                  {Object.entries(tourData.pricing.options).map(([option, price]) => (
                    <div key={option} className="flex justify-between items-center">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedOptions[option] || false}
                          onChange={() => toggleOption(option)}
                          className="mr-3 w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-300 capitalize">
                          {option.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                      </label>
                      <span className="text-white font-semibold">+${price.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-700 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-xl text-white font-bold">Total Price</span>
                    <span className="text-2xl font-bold text-blue-400">
                      ${calculateTotal().toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Breakdown Pie Chart */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 h-full">
                <div className="flex items-center mb-6">
                  <TrendingUp className="text-blue-400 w-6 h-6 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Revenue Breakdown</h3>
                </div>
                
                <div className="flex items-center justify-center mb-6">
                  <div className="w-48 h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#1F2937', 
                            border: '1px solid #374151',
                            borderRadius: '8px'
                          }}
                          labelStyle={{ color: '#F3F4F6' }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
                      <span className="text-gray-300">Flights</span>
                    </div>
                    <span className="text-white font-semibold">{tourData.revenueBreakdown.flights}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-purple-500 rounded mr-3"></div>
                      <span className="text-gray-300">Accessories</span>
                    </div>
                    <span className="text-white font-semibold">{tourData.revenueBreakdown.accessories}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                      <span className="text-gray-300">Training</span>
                    </div>
                    <span className="text-white font-semibold">{tourData.revenueBreakdown.training}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className={`transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">What Our Tourists Say</h3>
            <p className="text-gray-400">Real experiences from our space tourists</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourData.testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="relative group"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-linear-to-br hover:from-gray-800/60 hover:to-gray-900/60 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
