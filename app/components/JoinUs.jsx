"use client";
import React from "react";
import { Merriweather } from "next/font/google";
import { FileCheck2, Users, Handshake, GraduationCap } from "lucide-react";
import { motion } from 'framer-motion';

const merry = Merriweather({
  subsets: ["latin"],
  weight: ["500"]
});


export default function JoinUs() {
  return (
    <section className="relative bg-gradient-to-br from-red-900/80 via-red-700/80 to-red-500/70 text-white py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Intro */}
        <div className="space-y-6">
          <motion.h2 
          initial={{y: -100, opacity: 0}}
          whileInView={{ y: 0, opacity: 1}}
          transition={{ duration: 1.0 }}
          className={` ${merry.className} text-3xl md:text-4xl font-bold `}>
            Become a Certified Debt Recovery Specialist
          </motion.h2>
          <p className="md:text-lg text-md text-gray-100">
            Unlock a rewarding career in debt recovery. Our program is open to 
            everyone - no special background required, only the ability to read 
            and write with ease. With certificates endorsed by the{" "}
            <span className="font-semibold">Ministry of Education</span> and the{" "}
            <span className="font-semibold">Ministry of Justice</span>, you gain
            the credibility to succeed.
          </p>

          {/* CTA */}
          <button className="mt-4 bg-white text-red-800 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition">
            Register Today →
          </button>
        </div>

        {/* Right: Benefits Grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex flex-col items-start gap-3 hover:shadow-md">
            <FileCheck2 size={28} className="text-white"/>
            <h3 className="font-semibold">Gov’t-Endorsed</h3>
            <p className="text-sm text-gray-200">
              Certificates backed by Education & Justice ministries.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex flex-col items-start gap-3">
            <Users size={28} className="text-white"/>
            <h3 className="font-semibold">Open to All</h3>
            <p className="text-sm text-gray-200">
              Anyone who can read and write can apply.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex flex-col items-start gap-3">
            <Handshake size={28} className="text-white"/>
            <h3 className="font-semibold">Work With Us</h3>
            <p className="text-sm text-gray-200">
              Join our trusted team after certification.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex flex-col items-start gap-3">
            <GraduationCap size={28} className="text-white"/>
            <h3 className="font-semibold">Practical Training</h3>
            <p className="text-sm text-gray-200">
              Hands-on, career-focused debt recovery skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
