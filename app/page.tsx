'use client';

import AboutSection from "@/components/About";
import { HeroHighlightDemo } from "@/components/Hero";
import Navbar from "@/components/Navbar";





const Home = () => {
  
  
  return (
    <div className="max-w-[1440px] mx-auto  relative" style={{
      background: "linear-gradient(to bottom right, #b2e3ff, #cedfff)",
    }}>
      <Navbar/>
      <HeroHighlightDemo/>
      <AboutSection/> 

    </div>
  );
};

export default Home;