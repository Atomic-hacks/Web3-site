"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  phase?: string; // Optional phase indicator (e.g., "Genesis", "Expansion")
  status?: "completed" | "in-progress" | "upcoming"; // Status indicator
  icon?: React.ReactNode; // Custom icon for each entry
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Color gradients for web3 aesthetic
  const getStatusColor = (status?: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500";
      case "in-progress":
        return "bg-blue-500";
      case "upcoming":
        return "bg-purple-500";
      default:
        return "bg-neutral-400 dark:bg-neutral-600";
    }
  };

  return (
    <div
      className="relative w-full md:px-10  bg-opacity-95 text-white"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <div className="inline-block px-4 py-2 mb-6 border border-sky-400 rounded-full backdrop-blur-xl bg-opacity-20">
          <span className="text-cyan-700 uppercase tracking-wider text-xs font-bold">Roadmap v1.0</span>
        </div>
        <h2 className="text-2xl md:text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 via-sky-700 to-cyan-600 font-bold max-w-4xl">
          Project Evolution Timeline
        </h2>
        <p className="text-neutral-800 text-sm md:text-base max-w-lg">
          Our decentralized journey through the metaverse. From concept to
          full ecosystem deployment.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className={`h-12 absolute left-3 md:left-2.5 w-12 rounded-full bg-blue-950 flex items-center justify-center border-2 border-sky-400 shadow-lg shadow-cyan-500`}>
                <div className={`h-6 w-6 rounded-full ${getStatusColor(item.status)} p-2 blur-[1px] animate-pulse`} />
              </div>
              <div className="hidden md:block md:pl-20">
                {item.phase && (
                  <div className="text-xs uppercase tracking-widest text-cyan-400 mb-1 font-bold">
                    {item.phase}
                  </div>
                )}
                <h3 className="text-xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-cyan-400 to-sky-700">
                  {item.title}
                </h3>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="md:hidden block mb-4 text-left">
                {item.phase && (
                  <div className="text-xs uppercase tracking-widest text-cyan-400 mb-1 font-bold">
                    {item.phase}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {item.title}
                </h3>
              </div>
              <div className="backdrop-blur-xl bg-cyan-900 bg-opacity-50 p-6 rounded-lg border border-opacity-50 border-cyan-950  hover:border-sky-700 transition-all duration-300">
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-blue-500/30 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-sky-500 via-cyan-300 to-sky-300 from-[0%] via-[50%] rounded-full shadow-lg shadow-cyan-500/50"
          />
        </div>
      </div>
    </div>
  );
};