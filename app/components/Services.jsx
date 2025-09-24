"use client";
import { Users, CheckCircle, FileSearch, Briefcase } from "lucide-react";
import React from "react";
import Image from "next/image";
import { assets } from '@/public/assets';
import { motion } from 'framer-motion';
import ListServices from './ListServices';
import { Merriweather } from "next/font/google";


const merry = Merriweather({
  subsets: ["latin"],
  weight: ["400"]
});


export default function Services() {
    const MotionImage = motion.create(Image);

  return (
    <section id="Services"
    className="relative w-full py-10 md:py-16 bg-white flex items-center justify-center overflow-hidden">

        <div className="w-full flex flex-col p-2 gap-4">
            {/*Our Services Text*/}
            <motion.div                 
            initial={{y: -50, opacity: 0}}
            whileInView={{ y: 0, opacity: 1}}
            transition={{ duration: 1.0 }}
            className="flex flex-col items-center gap-3">
                <Briefcase className="text-red-700" size={40}/>
                <h1 
                className={` ${merry.className} text-2xl md:text-3xl`}>
                    OUR SERVICES
                </h1>
                <p className="max-w-xl text-gray-700 text-sm text-center">We provide specialized services across debt recovery, business consultancy, 
                    and private investigation with unmatched expertise and discretion.</p>
            </motion.div>

            <div className="flex flex-col md:flex-row w-full p-2 items-center justify-between gap-6">
                {/* Service */}
                <div className="p-2 md:p-8 w-full md:w-1/2">
                <ListServices/>
                </div>

                <div className="relative w-72 h-72 md:w-100 md:h-120 hidden md:flex items-center justify-center">
                <MotionImage
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                    src={assets.handshake}
                    alt="handshake"
        fill
                    className="object-contain z-10"
                />
                </div> 
            </div>

            <div className="relative bg-gradient-to-br from-red-900/80 via-red-700/80 to-red-500/70 flex justify-center rounded-lg">
                <motion.div 
                initial={{ y: 90, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }} 
                className="grid grid-cols-1 md:grid-cols-3 gap-12 p-4">
                    <div
                    className="flex flex-col p-4 items-center justify-center gap-2 bg-white/10 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg hover:shadow-md hover:shadow-black/40 transition duration-300 ease-in-out">
                        <Users className="text-white" size={30}/>
                        <h2 className="font-bold text-md md:text-lg text-white">
                            Expert Team
                        </h2>
                        <span className="text-center text-gray-300 text-sm">Licensed professionals with decades of combined experience</span>
                    </div>

                    <div
                    className="flex flex-col p-4 items-center justify-center gap-2 bg-white/10 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg hover:shadow-md hover:shadow-black/40 transition duration-300 ease-in-out">
                        <FileSearch className="text-white" size={30}/>
                        <h2 className="font-bold text-lg text-white">
                            Thorough Search
                        </h2>
                        <span className="text-center text-gray-300 text-sm">Comprehensive investigation and analysis for optimal results</span>
                    </div>

                    <div
                    className="flex flex-col p-4 items-center justify-center gap-2 bg-white/10 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg hover:shadow-md hover:shadow-black/40 transition duration-300 ease-in-out">
                        <CheckCircle className="text-white" size={30}/>
                        <h2 className="font-bold text-lg text-white">
                            Proven Results
                        </h2>
                        <span className="text-center text-gray-300 text-sm">Track record of successful outcomes and satisfied clients</span>
                    </div>
                </motion.div> 
            </div>
        </div>
    </section>
  );
}

