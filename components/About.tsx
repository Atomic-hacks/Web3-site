/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaTelegram } from "react-icons/fa";
import { ShillXRoadmapTimeline } from "./RoadMap";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  social?: {
    name: ReactNode;
    url: string;
  }[];
}

interface StatSet {
  stats: {
    value: string;
    label: string;
    color: string;
  }[];
}

interface AboutSectionProps {
  teamMembers?: TeamMember[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  teamMembers = [
    {
      name: "Alex Zhang",
      role: "Founder & CEO",
      social: [
        { name: <FaTwitter/>, url: "https://twitter.com" },
        { name: <FaTelegram/>, url: "https://t.me" },
        { name: <FaLinkedin/>, url: "https://linkedin.com" },
      ],
      image: "/api/placeholder/400/400",
    },
    { 
      name: "Maya Johnson",  
      role: "CTO",  
      social: [
        { name: <FaTwitter/>, url: "https://twitter.com" },
        { name: <FaTelegram/>, url: "https://t.me" },
        { name: <FaLinkedin/>, url: "https://linkedin.com" },
      ], 
      image: "/api/placeholder/400/400" 
    },
    {
      name: "David Chen",
      role: "Lead Developer",
      social: [
        { name: <FaTwitter/>, url: "https://twitter.com" },
        { name: <FaTelegram/>, url: "https://t.me" },
        { name: <FaLinkedin/>, url: "https://linkedin.com" },
      ],
      image: "/api/placeholder/400/400",
    },
    {
      name: "Sophia Williams",
      role: "Head of Community",
      social: [
        { name: <FaTwitter/>, url: "https://twitter.com" },
        { name: <FaTelegram/>, url: "https://t.me" },
        { name: <FaLinkedin/>, url: "https://linkedin.com" },
      ],
      image: "/api/placeholder/400/400",
    },
  ],
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Multiple sets of stats that will rotate
  const statSets: StatSet[] = [
    {
      stats: [
        {
          value: "5B+",
          label: "Total Supply",
          color: "from-sky-600 to-blue-600",
        },
        {
          value: "75%",
          label: "Locked Liquidity",
          color: "from-sky-600 to-blue-600",
        },
        {
          value: "10K+",
          label: "Community Members",
          color: "from-sky-600 to-blue-600",
        },
      ],
    },
    {
      stats: [
        {
          value: "10%",
          label: "Marketing & Community",
          color: "from-blue-600 to-indigo-600",
        },
        {
          value: "10%",
          label: "Team & Development",
          color: "from-blue-600 to-indigo-600",
        },
        {
          value: "5%",
          label: "Dev Allocation",
          color: "from-blue-600 to-indigo-600",
        },
      ],
    },
    {
      stats: [
        {
          value: "100%",
          label: "Community Driven",
          color: "from-emerald-500 to-teal-700",
        },
        {
          value: "24/7",
          label: "Support & Engagement",
          color: "from-emerald-500 to-teal-700",
        },
        {
          value: "∞",
          label: "Long-Term Vision",
          color: "from-emerald-500 to-teal-700",
        },
      ],
    },
    {
      stats: [
        {
          value: "Daily",
          label: "Community Updates",
          color: "from-amber-500 to-orange-600",
        },
        {
          value: "Weekly",
          label: "Development Progress",
          color: "from-amber-500 to-orange-600",
        },
        {
          value: "Monthly",
          label: "Roadmap Milestones",
          color: "from-amber-500 to-orange-600",
        },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Stats change timing
    const interval = setInterval(() => {
      setIsVisible(false); // Trigger exit animation

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % statSets.length);
        setIsVisible(true); // Trigger entry animation
      }, 800); // Time to wait for exit animation
    }, 4000); // Total time each set of stats stays

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative text-gray-800 overflow-hidden" ref={containerRef} id="about">
      {/* Hero section - improved padding for mobile */}
      <section className="relative py-12 md:py-16 lg:py-24 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-900 via-sky-500 to-cyan-800"
            animate={{
              backgroundPosition: ["0% center", "100% center"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            $SHILLX
          </motion.h1>

          <motion.p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-700 font-normal mt-4 md:mt-6 px-2">
            A community-driven memecoin movement built for the long-term.
            Join the $SHILLX Army and help shape the future of decentralized communities.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission section - improved spacing and grid layout */}
      <section className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-700 to-cyan-500">
                Our Vision
              </motion.h2>

              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                Unlike short-lived memecoins, $SHILLX is designed with a long-term perspective. 
                We&apos;re committed to fostering a sustainable community and exploring evolving 
                avenues for growth and utility over time, establishing a lasting presence in the 
                cryptocurrency space.
              </p>

              <div className="flex flex-wrap gap-2 md:gap-3">
                <div className="px-3 py-1.5 md:px-4 md:py-2 bg-sky-600/10 backdrop-blur-xl rounded-full border border-neutral-600/30">
                  <span className="text-sm md:text-base text-sky-600 font-medium">
                    Community-Driven
                  </span>
                </div>
                <div className="px-3 py-1.5 md:px-4 md:py-2 bg-sky-600/10 backdrop-blur-xl rounded-full border border-neutral-600/30">
                  <span className="text-sm md:text-base text-sky-700 font-medium">
                    Long-Term
                  </span>
                </div>
                <div className="px-3 py-1.5 md:px-4 md:py-2 bg-sky-600/10 backdrop-blur-xl rounded-full border border-neutral-600/30">
                  <span className="text-sm md:text-base text-cyan-600 font-medium">
                    Transparency
                  </span>
                </div>
                <div className="px-3 py-1.5 md:px-4 md:py-2 bg-sky-600/10 backdrop-blur-xl rounded-full border border-neutral-600/30">
                  <span className="text-sm md:text-base text-sky-700 font-medium">
                    Evolution
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              className="relative h-56 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-xl mt-6 lg:mt-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-indigo-600/30 to-purple-600/30 z-10" />

              <motion.div
                className="h-full w-full absolute z-0"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tokenomics section */}
      <section className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-900 via-cyan-500 to-cyan-900">
              Tokenomics
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto px-2">
              Designed for sustainable growth and community benefit
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="bg-white/40 backdrop-blur-xl rounded-xl p-4 md:p-6 border border-indigo-200 relative overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br from-sky-600 to-blue-600 opacity-30 blur-3xl" />
              <h3 className="text-3xl md:text-4xl font-bold mb-1 md:mb-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-blue-600">
                5B
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                Total Token Supply
              </p>
            </motion.div>

            <motion.div
              className="bg-white/40 backdrop-blur-xl rounded-xl p-4 md:p-6 border border-indigo-200 relative overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 opacity-30 blur-3xl" />
              <h3 className="text-3xl md:text-4xl font-bold mb-1 md:mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                75%
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                Liquidity (Locked Forever)
              </p>
            </motion.div>

            <motion.div
              className="bg-white/40 backdrop-blur-xl rounded-xl p-4 md:p-6 border border-indigo-200 relative overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 opacity-30 blur-3xl" />
              <h3 className="text-3xl md:text-4xl font-bold mb-1 md:mb-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-700">
                10%
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                Marketing & Community
              </p>
            </motion.div>

            <motion.div
              className="bg-white/40 backdrop-blur-xl rounded-xl p-4 md:p-6 border border-indigo-200 relative overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 opacity-30 blur-3xl" />
              <h3 className="text-3xl md:text-4xl font-bold mb-1 md:mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
                15%
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                Team, Dev & Development
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats section - improved responsiveness for small screens */}
      <section className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-900 via-cyan-500 to-cyan-900">
              $SHILLX Metrics
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto px-2">
              Track our growing community and ecosystem
            </p>
          </motion.div>
          
          <div className="min-h-32 flex items-center justify-center mb-8 md:mb-12">
            <AnimatePresence mode="wait">
              {isVisible && (
                <motion.div
                  key={currentIndex}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {statSets[currentIndex].stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/40 backdrop-blur-xl rounded-xl p-4 md:p-6 border border-indigo-200 relative overflow-hidden shadow-lg"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div
                        className={`absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br ${stat.color} opacity-30 blur-3xl`}
                      />

                      <motion.h3
                        className={`text-3xl md:text-4xl font-bold mb-1 md:mb-2 bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}
                        layout
                      >
                        {stat.value}
                      </motion.h3>

                      <motion.p
                        className="text-sm md:text-base text-gray-700"
                        layout
                      >
                        {stat.label}
                      </motion.p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Community section */}
      <section className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="relative h-56 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-xl mt-6 lg:mt-0 order-2 lg:order-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-blue-600/30 to-sky-600/30 z-10" />

              <motion.div
                className="h-full w-full absolute z-0"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>

            <div className="order-1 lg:order-2">
              <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-500">
                Community Focus
              </motion.h2>

              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                The $SHILLX community is the cornerstone of our long-term vision. We actively 
                encourage sustained participation and collaborative development through our 
                Twitter and Telegram communities. We prioritize transparency and open communication, 
                ensuring the community is involved in the project&apos;s evolution.
              </p>

              <div className="flex flex-wrap gap-2 md:gap-3">
                <a href="https://t.me/ShillVersePro1" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 md:px-4 md:py-2 bg-indigo-600/10 backdrop-blur-xl rounded-full border border-neutral-600/30 flex items-center hover:bg-indigo-600/20 transition-colors">
                  <FaTelegram className="mr-2 text-indigo-600" />
                  <span className="text-sm md:text-base text-indigo-600 font-medium">
                    Join Telegram
                  </span>
                </a>
                <a href="https://x.com/ShillversePro?t=PwvAdl5RuBoG8JrKE4EuCA&s=09" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 md:px-4 md:py-2 bg-sky-600/10 backdrop-blur-xl rounded-full border border-neutral-600/30 flex items-center hover:bg-sky-600/20 transition-colors">
                  <FaTwitter className="mr-2 text-sky-600" />
                  <span className="text-sm md:text-base text-sky-600 font-medium">
                    Follow Twitter
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

     <ShillXRoadmapTimeline />

      {/* Team section */}
      <section className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-900 via-cyan-500 to-cyan-900">
              Meet Our Team
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto px-2">
              The passionate individuals behind $SHILLX
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white/40 backdrop-blur-xl rounded-xl p-4 md:p-6 border border-indigo-200 relative overflow-hidden shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-gradient-to-br from-sky-600 to-blue-600 opacity-20 blur-3xl" />
                
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-sky-300 relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-1 text-sky-900">
                  {member.name}
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-3">
                  {member.role}
                </p>

                {member.social && (
                  <div className="flex justify-center gap-3">
                    {member.social.map((social, idx) => (
                      <a 
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-sky-700 transition-colors"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-900 via-cyan-500 to-cyan-900">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto px-2">
              Common questions about $SHILLX
            </p>
          </motion.div>

          <motion.div
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="bg-white/40 backdrop-blur-xl rounded-xl p-4 md:p-6 border border-indigo-200 relative overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br from-sky-600 to-blue-600 opacity-20 blur-3xl" />
              <h3 className="text-lg md:text-xl font-bold mb-2 text-sky-900">
                What makes $SHILLX different?
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                Unlike temporary hype-driven tokens, $SHILLX focuses on building a sustainable community with long-term growth potential. We prioritize transparency, community governance, and continuous development toward real utility.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/40 backdrop-blur-xl rounded-xl p-4 md:p-6 border border-indigo-200 relative overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 opacity-20 blur-3xl" />
              <h3 className="text-lg md:text-xl font-bold mb-2 text-sky-900">
                How can I purchase $SHILLX?
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                $SHILLX is available on major DEXs. Simply connect your wallet, swap ETH for $SHILLX, and set slippage to 5%. Check our Telegram or Twitter for the official contract address to avoid scams.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/40 backdrop-blur-xl rounded-xl p-4 md:p-6 border border-indigo-200 relative overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 opacity-20 blur-3xl" />
              <h3 className="text-lg md:text-xl font-bold mb-2 text-sky-900">
                Is liquidity locked?
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                Yes, 75% of the total supply is locked in liquidity pools forever. This demonstrates our long-term commitment and protects against rug pulls, ensuring stability for the community.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-r from-sky-900 to-sky-200 rounded-2xl p-6 md:p-10 border border-sky-200 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute -right-20 -bottom-20 w-60 h-60 rounded-full bg-gradient-to-br from-sky-600 to-blue-600 opacity-20 blur-3xl" />
            <div className="absolute -left-20 -top-20 w-60 h-60 rounded-full bg-gradient-to-br from-indigo-600 to-sky-600 opacity-20 blur-3xl" />
            
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join the $SHILLX Movement
            </motion.h2>
            
            <motion.p 
              className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Be part of our growing community and help shape the future of decentralized finance. Together, we&apos;re building something that lasts.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a href="https://t.me/ShillVersePro1" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:from-sky-700 hover:to-blue-800 transition-all">
                Join Telegram
              </a>
              <a href="https://x.com/ShillversePro?t=PwvAdl5RuBoG8JrKE4EuCA&s=09" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-sky-700 font-medium rounded-full shadow-lg hover:shadow-xl hover:bg-sky-50 transition-all border border-sky-200">
                Follow Twitter
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 md:py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#c3e5f5] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center md:items-start">
                <Image src='/logo.jpg' alt="logo" width={40} height={40} className="rounded-full"/>
              <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-700 to-cyan-500">
                $SHILLX
              </h3>
              <p className="text-sm text-gray-600 text-center md:text-left">
                A community-driven memecoin movement built for the long-term.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Connect</h3>
              <div className="flex gap-4">
                <a href="https://x.com/ShillversePro?t=PwvAdl5RuBoG8JrKE4EuCA&s=09" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sky-700 transition-colors">
                  <FaTwitter size={20} />
                </a>
                <a href="https://t.me/ShillVersePro1" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sky-700 transition-colors">
                  <FaTelegram size={20} />
                </a>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Disclaimer</h3>
              <p className="text-sm text-gray-600 text-center md:text-right">
                $SHILLX is a community project. Always DYOR before investing.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} $SHILLX. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutSection;