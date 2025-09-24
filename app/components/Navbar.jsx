"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const pinSections = ['Home', 'About Us', 'Services', 'Industries', 'Join Us', 'FAQs'];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand */}
          <Link href="/" className="text-xl font-bold text-red-900">
            Pinpoints Nigeria Ltd
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center cursor-pointer">
            {pinSections.map((section) => (
              <li key={section}>
                <ScrollLink
                to={section}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="relative text-gray-700 hover:text-red-900 transition after:content-[''] after:absolute after:w-0 after:h-[1.2px] after:bg-red-900 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                >
                {section}
                </ScrollLink>
              </li>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-4 py-2 flex gap-2 bg-red-900 text-white rounded-lg hover:bg-red-700 transition"
            >
             <Phone size={20}/> Book Consultation
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
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-3 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-red-900 transition"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-2 bg-red-900 text-white rounded-lg text-center hover:bg-red-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
