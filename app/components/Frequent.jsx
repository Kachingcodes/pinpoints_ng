"use client";
import React, { useState } from "react";
import { Merriweather } from "next/font/google";
import { faqs } from '@/public/assets';
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion } from 'framer-motion';


const merry = Merriweather({
  subsets: ["latin"],
  weight: ["500"]
});


export default function Frequent() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="FAQs"
      className="bg-white relative w-full min-h-screen flex items-center justify-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-10 w-full max-w-6xl">
        {/* Left */}
        <div className="space-y-8 max-w-xl flex flex-col justify-between">
          <motion.h1 
          initial={{ y: -100, opacity: 0}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 1.2 }}
          className={` ${merry.className} text2xl md:text-3xl font-bold text-black tracking-wide`}>
          <HelpCircle size={30}/>  Frequently Asked Questions 
          </motion.h1>

          <div className="bg-gray-100 space-y-4 p-4 rounded-lg">
            <h3 className="font-semibold">Still have questions?</h3>
            <span className="text-gray-700 text-sm block">
              Can't find the answer to your question? Send us an email and we
              will get back to you as soon as possible.
            </span>

            <button className="px-4 py-2 text-white bg-red-700 rounded-md">
              Send email
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="max-h-[400px] overflow-y-auto pr-2 space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="cursor-pointer bg-gray-200 rounded-lg p-4"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="flex justify-between items-center">
              <h2 className="font-medium text-gray-800">{faq.q}</h2>
              {openIndex === i ? (
                <ChevronUp size={20} className="text-gray-600" />
              ) : (
                <ChevronDown size={20} className="text-gray-600" />
              )}
            </div>

            {openIndex === i && (
              <p className="mt-2 text-sm text-gray-700">{faq.a}</p>
            )}
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}