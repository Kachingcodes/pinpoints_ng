"use client";
import React from "react";
import { Shield, Users, FileText, Phone, Book } from "lucide-react";
import { Merriweather } from "next/font/google";
import { motion } from 'framer-motion';
import { stats } from '@/public/assets';


const merry = Merriweather({
  subsets: ["latin"],
  weight: ["500"]
});

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen py-20 bg-no-repeat bg-cover flex items-center justify-center overflow-hidden"
    style={{ backgroundImage: "url('/office.jpg')" }}>

      {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">
        
        {/* Left: Hero Text */}
        <div className="space-y-6">
          <h1 className={` ${merry.className} text-4xl md:text-6xl font-bold text-red-600 leading-tight `}>
            Trusted Experts in Debt Management & Commercial Investigations
          </h1>
          <p className="text-[0.9rem] md:text-md text-gray-100">
            Providing reliable solutions in Debt Management, Private Investigations, 
            Credit Verification, and Alternative Dispute Resolution.
          </p>

          <div className="flex gap-4 md:flex-row flex-col">
            <button className="bg-red-900 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-sm flex items-center justify-center gap-2">
             <Phone size={20}/> Book Consultation
            </button>
            <button variant="outline" className="border border-red-400 text-white px-6 py-3 rounded-lg text-sm flex items-center justify-center gap-2">
             <Book size={20}/> Learn More
            </button>
          </div>

          <motion.div 
          initial={{y: 60, opacity: 0}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} 
          className="flex gap-4 md:gap-10 text-white text-sm">
            <span className="flex gap-2"><Shield size={20}/>Licensed & Insured</span>
            <span className="flex gap-2"><Users size={20}/>Expert Team</span>
            <span className="flex gap-2"><FileText size={20}/>Confidential</span>
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="md:grid grid-cols-1 md:grid-cols-2 gap-6 py-6 hidden">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: i * 0.2, 
              ease: "easeInOut" 
            }}
            className={`bg-white text-black flex flex-col p-6 rounded-md shadow-lg
              ${i % 2 === 1 ? "md:translate-y-7" : ""} // shift 2nd & 4th down
            `}
          >
            <span className="text-3xl font-bold">{item.number}</span>
            <span className="font-semibold text-md">{item.label}</span>
            <span className="text-sm">{item.sub}</span>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
