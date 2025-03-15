"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/HeroHighlight";

export function HeroHighlightDemo() {
  return (
    <div id="hero" className="w-full">
      <HeroHighlight>
        <div className="relative h-screen w-full overflow-hidden">
          {/* Twitter handle badge with improved positioning */}
          <div className="absolute top-4 md:top-8 left-4 md:left-8 z-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 backdrop-blur-xl px-4 py-2 rounded-full border border-neutral-500/30"
            >
              <div className="h-6 w-6 rounded-full bg-sky-200 flex items-center justify-center">
                <span className="text-black font-bold text-xs">₦</span>
              </div>
              <span className="text-neutral-950 font-medium text-sm">
                @SHILLVERSE
              </span>
            </motion.div>
          </div>
          
          {/* Animated background grid for Web3 feel */}
          <div className="absolute inset-0 z-0">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1.2 }}
              className="h-full w-full grid grid-cols-8 md:grid-cols-16 grid-rows-8 md:grid-rows-16"
            >
              {Array(128).fill(0).map((_, i) => (
                <div key={i} className="border-[0.5px] border-neutral-500/10"></div>
              ))}
            </motion.div>
          </div>

          <div className="relative h-full w-full flex flex-col md:flex-row items-center">
            {/* Left side with minimal text - improved spacing for mobile */}
            <div className="w-full h-full relative z-10 flex flex-col justify-center px-6 sm:px-8 md:px-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Logo with Highlight - improved responsive sizing */}
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-3">
                  <Highlight>SHILLX:</Highlight>
                </h1>
                
                {/* Minimal subtitle */}
                <div className="mt-2">
                  <h2 className="text-base sm:text-lg font-medium uppercase tracking-widest text-neutral-900">
                    NIGERIA&apos;S WEB3 FUTURE
                  </h2>
                  
                  {/* Minimal accent line */}
                  <div className="mt-4 md:mt-6 h-px w-24 md:w-32 bg-sky-500"></div>
                </div>
                
                {/* Enhanced feature section with blockchain aesthetic */}
                <div className="mt-8 md:mt-10 grid grid-cols-2 gap-3 md:gap-4 max-w-xs">
                  <FeatureItem label="Blockchain" value="Solana" />
                  <FeatureItem label="Token" value="$SHILLX" />
                  <FeatureItem label="Launch" value="Q2 2025" />
                  <FeatureItem label="Supply" value="1B" />
                </div>
                
                {/* Simplified CTA Section with better mobile spacing */}
                <div className="mt-8 md:mt-12 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-2 md:px-4 py-2 bg-gradient-to-r from-sky-700 to-cyan-500 text-black font-medium rounded-full transition-all duration-300"
                  >
                    Join Waitlist
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-2 md:px-4 py-2 bg-transparent border border-neutral-700 text-neutral-900 font-medium rounded-full transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
                
                {/* Added blockchain network indicators */}
                <div className="mt-8 hidden md:flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-sky-500 animate-pulse"></div>
                  <span className="text-xs text-neutral-700">Network Active</span>
                </div>
              </motion.div>
            </div>
            
            {/* Right side with Web3 decoration - only visible on larger screens */}
            <div className="hidden md:block w-1/3 h-full relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute right-16 top-1/2 transform -translate-y-1/2"
              >
                <div className="relative">
                  {/* Hexagon Web3 decoration */}
                  <div className="h-64 w-64 relative">
                    <div className="absolute inset-0 border-2 border-sky-500/20 rounded-lg transform rotate-45"></div>
                    <div className="absolute inset-4 border border-neutral-700/30 rounded-lg transform rotate-12"></div>
                    <div className="absolute inset-8 border border-neutral-500/20 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Fixed position blockchain decorative elements */}
          <div className="absolute bottom-8 right-8 hidden md:block">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center space-x-2"
            >
              <div className="h-1 w-12 bg-sky-500/50"></div>
              <div className="h-3 w-3 rounded-full bg-sky-200"></div>
              <div className="h-1 w-8 bg-neutral-500/30"></div>
            </motion.div>
          </div>
        </div>
      </HeroHighlight>
    </div>
  );
}

interface FeatureItemProps {
  label: string;
  value: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ label, value }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      className="border border-neutral-600/10 backdrop-blur-sm rounded-lg p-3 transition-all duration-300"
    >
      <div className="text-xs text-neutral-800">{label}</div>
      <div className="text-black font-medium mt-1">{value}</div>
    </motion.div>
  );
};