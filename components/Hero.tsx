"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/HeroHighlight";

export function HeroHighlightDemo() {
  return (
    <div id="hero" className="w-full">
      <HeroHighlight>
        <div className="relative h-screen w-full overflow-hidden">
          {/* Twitter handle badge */}
          <div className="absolute top-8 left-8 z-20">
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

          <div className="relative h-full w-full flex flex-col md:flex-row items-center">
            {/* Left side with minimal text */}
            <div className="w-full  h-full relative z-10 flex flex-col justify-center px-8 md:px-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Logo with Highlight */}
                <h1 className="text-7xl sm:text-8xl font-black tracking-tighter mb-3">
                  <Highlight>SHILLX:</Highlight>
                </h1>

                {/* Minimal subtitle */}
                <div className="mt-2">
                  <h2 className="text-lg font-medium uppercase tracking-widest text-neutral-900">
                    NIGERIA&apos;S WEB3 FUTURE
                  </h2>

                  {/* Minimal accent line */}
                  <div className="mt-6 h-px w-32 bg-sky-500"></div>
                </div>

                {/* Simplified feature section */}
                <div className="mt-10 grid grid-cols-2 gap-4 max-w-xs">
                  <FeatureItem label="Blockchain" value="Polygon" />
                  <FeatureItem label="Token" value="$SHX" />
                </div>

                {/* Simplified CTA Section */}
                <div className="mt-12 flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className=" px-4 md:px-8 py-3 bg-gradient-to-r from-sky-700 to-cyan-500 text-black font-medium rounded-full transition-all duration-300"
                  >
                    Join Waitlist
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 md:px-8 py-3 bg-transparent border border-neutral-700 text-neutral-900 font-medium rounded-full transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Right side with simplified eye visual */}
          </div>
        </div>
      </HeroHighlight>
    </div>
  );
}

// Feature item component
interface FeatureItemProps {
  label: string;
  value: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ label, value }) => {
  return (
    <div className="border border-white/10 rounded-lg p-3">
      <div className="text-xs text-neutral-800">{label}</div>
      <div className="text-black font-medium mt-1">{value}</div>
    </div>
  );
};
