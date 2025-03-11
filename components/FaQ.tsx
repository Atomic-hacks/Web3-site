'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

// Define TypeScript interfaces
interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title?: string;
  subtitle?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}

const ShillixFaqSection: React.FC<FaqSectionProps> = ({
  title = "SHiLLiX FAQ",
  subtitle = "Everything you need to know about the most innovative meme coin in the crypto space",
  ctaTitle = "Ready to join the SHiLLix revolution?",
  ctaDescription = "Don't miss out on the next generation of meme coins with real utility",
  primaryButtonText = "Join the Waitlist",
  secondaryButtonText = "Join Community",
  onPrimaryButtonClick = () => console.log("Primary button clicked"),
  onSecondaryButtonClick = () => console.log("Secondary button clicked"),
}) => {
  // FAQ data specific to SHiLLix
  const faqData: FaqItem[] = [
    {
      id: 1,
      question: "What is SHiLLix?",
      answer: "SHiLLix is a community-driven meme coin built on blockchain technology that combines the fun aspects of meme culture with actual utility. Unlike traditional meme coins, SHiLLix offers staking rewards, governance rights, and access to exclusive community features."
    },
    {
      id: 2,
      question: "How can I purchase SHiLLix tokens?",
      answer: "SHiLLix tokens can be purchased on major decentralized exchanges like Uniswap, PancakeSwap, and SushiSwap. Simply connect your Web3 wallet, swap ETH or BNB for SHiLLix, and ensure you set an appropriate slippage tolerance. Always verify the contract address before swapping to avoid scams."
    },
    {
      id: 3,
      question: "What makes SHiLLix different from other meme coins?",
      answer: "SHiLLix stands out with its innovative tokenomics model that includes automated liquidity acquisition, deflationary mechanics, and community governance. Additionally, SHiLLix has implemented a unique 'Shill-to-Earn' program where community members are rewarded for promoting legitimate project growth."
    },
    {
      id: 4,
      question: "How does SHiLLix staking work?",
      answer: "SHiLLix staking allows token holders to lock their tokens in smart contracts to earn additional rewards. The longer you stake, the higher the APY. Our tiered staking system offers between 8-25% APY depending on the lock period, with rewards distributed daily and automatically compounded for maximum returns."
    },
    {
      id: 5,
      question: "What is the SHiLLix DAO and how can I participate?",
      answer: "The SHiLLix DAO (Decentralized Autonomous Organization) gives community members voting power proportional to their token holdings. Token holders can propose and vote on key decisions including treasury allocation, new features, partnerships, and marketing initiatives. To participate, simply hold SHiLLix tokens and connect your wallet to our governance portal."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen text-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -top-20 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-6000"></div>

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid-neutral-600/[0.03] bg-[length:25px_25px]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)' }}></div>


      <div className="relative max-w-4xl mx-auto z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-800 via-cyan-400 to-sky-700 inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {title}
          </motion.h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-5 rounded-full"></div>
          <motion.p 
            className="mt-6 text-zinc-900 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="space-y-5">
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="border border-sky-800 rounded-xl overflow-hidden backdrop-blur-lg bg-sky-900/40 hover:bg-sky-900/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(146,109,222,0.15)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full p-6 text-left"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="text-xl font-medium pr-8 text-gradient bg-gradient-to-r from-neutral-950 to-sky-800 bg-clip-text text-transparent">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl flex items-center justify-center w-8 h-8 rounded-full border border-sky-700/30 text-sky-800"
                >
                  +
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-neutral-900 border-t border-zinc-800/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div 
          className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-sky-900/30 via-cyan-900/30 to-sky-800/30 border border-neutral-800 backdrop-blur-xl shadow-[0_0_25px_rgba(146,109,222,0.1)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-sky-700 to-cyan-600 bg-clip-text text-transparent">{ctaTitle}</h3>
          <p className="mb-8 text-neutral-900 text-lg">{ctaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button       initial={{ scale: 1 }}
      animate={{ scale: [1, 1.2, 1] }} 
      transition={{
        duration: 1.5, 
        repeat: Infinity, 
        ease: "easeInOut", 
      }}
              onClick={onPrimaryButtonClick}
              className="flex flex-row items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-900 to-sky-800 rounded-full font-semibold text-black hover:shadow-[0_0_20px_rgba(30, 144, 255, 0.8)] transition duration-300"
            >
              <p id='footer-section'>{primaryButtonText} </p><FaArrowDown/>
            </motion.button>
            <button 
              onClick={onSecondaryButtonClick}
              className="px-8 py-4 bg-transparent border border-zinc-700 rounded-full font-medium hover:border-cyan-500 hover:text-sky-700 transition duration-300"
            >
             <a href="https://t.me/ShillVersePro1">{secondaryButtonText}</a> 
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ShillixFaqSection;