"use client";
import React from "react";
import { Merriweather } from "next/font/google";
import { sectors } from '@/public/assets';
import { motion } from 'framer-motion';
import Image from "next/image";
import { assets } from '@/public/assets';

const merry = Merriweather({
  subsets: ["latin"],
  weight: ["500"]
});


export default function Industry() {
   const MotionImage = motion.create(Image);

  return (
    <section id="Industries"
      className="bg-white relative w-full py-4 flex items-center justify-center">
        
        <div className="space-y-6">
          <div className="flex items-center justify-evenly">
            <h1 className={` ${merry.className} text-4xl font-bold text-black tracking-wide`}>
              Doesn't Matter The Industry
            </h1>

            <div className="relative w-90 p-6 hidden md:flex items-center justify-center bg-red-100 rounded-2xl">
              <MotionImage
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
                src={assets.industry}
                alt="industry"
                className="object-cover"
              />
            </div>
          </div>
          
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
    </section>
  );
}
