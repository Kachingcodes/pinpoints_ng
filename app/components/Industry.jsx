"use client";
import React from "react";
import { Merriweather } from "next/font/google";
import { sectors } from '@/public/assets';
import { motion } from 'framer-motion';

const merry = Merriweather({
  subsets: ["latin"],
  weight: ["500"]
});


export default function Industry() {
  return (
    <section id="Industries"
      className="bg-white relative w-full py-10 flex items-center justify-center">
    
        <div className="max-w-7xl mx-auto p-6 gap-8 items-center">
        
            {/* Left: Hero Text */}
            <div className="space-y-6">
                <h1 className={` ${merry.className} text-3xl font-bold text-black tracking-wide text-center`}>
                    Doesn't Matter The Industry
                </h1>
      
                <div className="flex flex-wrap justify-center text-center gap-6 text-sm text-gray-700 py-12 md:px-6">
                  {sectors.map((item, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: -80, opacity: 0 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.1, delay: i * 0.2, ease: "easeInOut" }} 
                      className="bg-red-100 px-4 py-2 rounded-full shadow flex items-center"
                    >
                      {item.icon}
                      {item.name}
                    </motion.span>
                  ))}
                </div>   
            </div>
        </div>
    </section>
  );
}
