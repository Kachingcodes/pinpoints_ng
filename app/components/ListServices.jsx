"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/public/assets"; 
import { services } from "@/public/assets";
import { TicketCheck } from "lucide-react";

export default function ListServices() {
  return (
    <section className="flex flex-col gap-6 md:gap-9">
      {services.map((service, index) => (
        <motion.div 
        key={service.header}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.3 }} 
        className="bg-red-600 rounded-lg">
          <div className="bg-white rounded-lg flex items-center gap-2 py-4 md:py-6 px-4 ml-1">
            <div className="flex flex-col">
              <div className="flex items-center justify-evenly gap-6">
                <span className="bg-red-200 p-4 rounded-2xl text-red-600">{service.icon}</span>
                <div className="gap-4">
                  <h2 className="text-md md:text-xl">{service.header}</h2>
                  <p className="text-gray-800 text-sm">{service.text}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 px-2 mt-4">
                {service.list.map((item, i) => (
                  <div
                    key={i} className="flex items-center gap-2">
                      {item.icon}
                        <span className="text-sm md:text-base text-gray-700">
                          {item.label}
                        </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}