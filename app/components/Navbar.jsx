"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronRight, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const pinSections = ['Home', 'About Us', 'Services', 'Industries', 'Join Us', 'FAQs'];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand */}
          <Link href="/" className="text-xl font-bold text-red-900">
            Pinpoints Nigeria Ltd
          </Link>

          {/* Desktop Menu */}
          <ul className="font-medium hidden md:flex space-x-6 items-center cursor-pointer">
            {pinSections.map((section) => (
              <li key={section}>
                <ScrollLink
                to={section}
                spy={true}
                smooth={true}
                offset={-60}
                duration={600}
                className="relative text-gray-700 hover:text-red-900 transition after:content-[''] after:absolute after:w-0 after:h-[1.2px] after:bg-red-900 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                >
                {section}
                </ScrollLink>
              </li>
            ))}
            <Link
              href="/contact"
              className="text-sm ml-4 px-4 py-2 flex gap-2 bg-red-700 hover:bg-[#f71818] text-white rounded-lg transition"
            >
             <Phone size={20}/> Speak to an Expert
            </Link>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
      {isOpen && (
        <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-lg min-h-screen">
          <div className="px-4 py-3 flex flex-col justify-between h-screen">
            <div className="space-y-4">
              {pinSections.map((section) => (
                  <ScrollLink
                  key={section}
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-red-900 text-sm cursor-pointer transition"
                >
                  <div className="flex w-full items-center justify-between px-2">
                  {section} 
                  <ChevronRight size={18}/>
                  </div>
                  </ScrollLink>
              ))}
              <Link
                href="/contact"
                className="px-4 py-3 text-sm gap-2 mt-6 flex items-center justify-center bg-red-900 text-white rounded-lg text-center hover:bg-red-700 transition"
                onClick={() => setIsOpen(false)}
              >
              <Phone size={20}/> Book Consultation
              </Link>
            </div>

            {/* Social */}
              <div className="fixed left-0 bottom-2 w-full">
                <div className="flex items-center justify-evenly gap-4 text-sm">
                  <a href="#" className="hover:text-gray-300 transition">Facebook</a>
                  <a href="#" className="hover:text-gray-300 transition">Twitter</a>
                  <a href="#" className="hover:text-gray-300 transition">Linkedin</a>
                </div>
              </div>

          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
}
