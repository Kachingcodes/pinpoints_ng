"use client";
import { Award, Lock, Shield, User, Building } from "lucide-react";
import React from "react";
import Image from "next/image";
import { assets } from "@/public/assets";
import { motion } from 'framer-motion';
import { Merriweather } from "next/font/google";


const merry = Merriweather({
  subsets: ["latin"],
  weight: ["500"]
});


export default function About() {
    // const MotionImage = motion(Image);

  return (
    <section id="About Us"
        className="relative w-full py-10 px-2 bg-white flex items-center justify-center overflow-hidden">

        <div className="w-full flex flex-col justify-evenly md:gap-4">
            {/*About Us Text*/}
            <motion.div                
                initial={{ y: -60, opacity: 0}}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 1.2 }}
                className="flex flex-col items-center gap-3">
                <Building className="text-red-700" size={40}/>
                <h1
                className={` ${merry.className} text-2xl md:text-3xl`}>
                    ABOUT US
                </h1>

                <p className="max-w-xl md:max-w-3xl text-center text-gray-700 text-md mb-6">At Pinpoints Nigeria Ltd, 
                    we specialize in precision-driven debt recovery and client relationship management, built on trust, 
                    integrity, and measurable success.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-0 md:p-6">

                {/*About Us Section*/}
                <div className="flex flex-col justify-between px-2 mt-6">
                    <div className="relative max-w-3xl mx-auto">
                        <h1 className={` ${merry.className} text-xl md:text-2xl text-red-600 mb-4`}
                        >Get To Know Us</h1>

                        <p className="text-md mb-4"
                        >At Pinpoints Nigeria, we specialize in debt management, private commercial investigations, 
                            credit search and verification, and alternative dispute resolution (ADR). 
                            With over **25 years of combined expertise**, our team is dedicated to helping businesses 
                            and individuals regain financial stability with professionalism and discretion.</p>

                        <p className="text-md mb-4"
                        >We believe that trust is the foundation of every successful partnership. 
                            That’s why our clients choose us — not only for our proven results, but also for our 
                            commitment to confidentiality, fairness, and transparency in every case.  </p>
                        
                        <p className="text-md"
                        >Whether you’re facing overdue debts, require thorough financial background checks, 
                            or need a neutral partner in resolving disputes, Pinpoints Nigeria is your reliable ally for 
                            navigating complex financial matters.</p>
                    </div>

                    <div className="flex flex-col gap-1">
                        <h1 className={` ${merry.className} text-xl md:text-2xl text-red-600 mb-4`}
                        >Our Team</h1>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="border border-[#000000]/27 p-2 md:p-4 px-2 md:px-4 items-center justify-center rounded-lg">
                                <Image src={assets.ada} alt="ada" className="rounded-lg"/>
                                <h3 className={` ${merry.className} text-md text-red-600 text-center mt-2`}>Name: Mr. Alozie R. Nsirimobi</h3>
                                <p className="text-gray-600 text-sm font-light text-center">Role: CEO </p>
                            </div>

                            <div className="border border-[#000000]/27 p-2 md:p-4 px-2 md:px-4 items-center justify-center rounded-lg">
                                <Image src={assets.ebun} alt="ebun" className="rounded-lg"/> 
                                <h3 className={` ${merry.className} text-md text-red-600 text-center mt-2`}>Name: Mr. King</h3>
                                <p className="text-gray-600 text-sm font-light text-center">Role: All communications protected</p>
                            </div>

                            <div className="border border-[#000000]/27 p-2 md:p-4 px-2 md:px-4 items-center justify-center rounded-lg">
                                <Image src={assets.emeka} alt="emeka" className="rounded-lg"/>
                                <h3 className={` ${merry.className} text-md text-red-600 text-center mt-2`}>Name: Confidential</h3>
                                <p className="text-gray-600 text-sm font-light text-center">Role: All communications protected</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Why Choose Us Section*/}
                <div className="flex flex-col gap-4 md:gap-6">
                    <div className="relative bg-gradient-to-r from-[#8f1616] via-[#851313] to-[#ba1717] flex justify-center p-2 rounded-lg">
                        <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg p-4 md:p-8 space-y-6 max-w-xl w-full">
                            <h1 className={`${merry.className} text-xl md:text-2xl font-bold text-white`}>
                            WHY CHOOSE US?
                            </h1>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="text-white">
                                        <Shield size={20} className="mt-1"/>
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-lg md:text-xl font-semibold text-white">Trust & Integrity</h3>
                                        <span className="text-md text-gray-200">
                                            Fully licensed investigators and consultants with proper certifications 
                                            and insurance coverage.
                                        </span>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="text-white">
                                        <Award size={20} className="mt-1"/>
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-lg md:text-xl font-semibold text-white">Proven Track Record</h3>
                                        <span className="text-md text-gray-200">
                                            Fully licensed investigators and consultants with proper certifications 
                                            and insurance coverage.
                                        </span>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="text-white">
                                        <Lock size={20} className="mt-1"/>
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-lg md:text-xl font-semibold text-white">Confidential & Discreet Services</h3>
                                        <span className="text-md text-gray-200">
                                            Fully licensed investigators and consultants with proper certifications 
                                            and insurance coverage.
                                        </span>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="text-white">
                                        <User size={20} className="mt-1"/>
                                    </div>
                                        <div className="space-y-1">
                                            <h3 className="text-lg md:text-xl font-semibold text-white">Client-Centered Approach</h3>
                                            <span className="text-md text-gray-200">
                                                Fully licensed investigators and consultants with proper certifications 
                                                and insurance coverage.
                                            </span>
                                        </div>
                                </div>

                                <button className="text-red hover:bg-gray-200 py-3 rounded-lg bg-white w-full text-md transition">
                                    Discuss Your Case
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div 
                    initial={{x: -60, opacity: 0}}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }} 
                    className="flex items-center justify-between gap-2">
                        <div className="border border-[#000000]/27 p-4 md:p-8 px-6 md:px-12 items-center justify-center rounded-lg">
                            <h3 className={` ${merry.className} text-lg md:text-xl text-red-600 text-center` }>Confidential</h3>
                            <p className="text-gray-600 text-sm font-light text-center">All communications protected</p>
                        </div>

                        <div className="border border-[#000000]/27 p-4 md:p-8 px-6 md:px-12 items-center justify-center rounded-lg">
                            <h3 className={` ${merry.className} text-lg md:text-xl text-red-600 text-center` }>Results</h3>
                            <p className="text-gray-700 text-sm text-center">Success-driven approach</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  );
}

