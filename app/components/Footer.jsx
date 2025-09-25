"use client";

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#7A0C0C] via-[#8B1111] to-[#7A0C0C] text-white py-10 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Company Info */}
    <div>
      <h2 className="text-lg font-semibold mb-3">Pinpoints Nigeria</h2>
      <p className="text-sm text-gray-200">
        Trusted experts in Debt Recovery, Commercial Investigation, 
        Credit Search & Verification, and Alternative Dispute Resolution.
      </p>
    </div>

    {/* Contact */}
    <div>
      <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
      <ul className="space-y-2 text-sm text-gray-200">
        <li className="flex items-center gap-2">📧 info@pinpointsnigeria.com</li>
        <li className="flex items-center gap-2">📞 +234 800 123 4567</li>
        <li className="flex items-center gap-2">📍 12 Business Avenue, Lagos</li>
      </ul>
    </div>

    {/* Social */}
    <div>
      <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
      <div className="flex gap-4">
        <a href="#" className="hover:text-gray-300 transition"><Facebook size={20}/></a>
        <a href="#" className="hover:text-gray-300 transition"><Twitter size={20}/></a>
        <a href="#" className="hover:text-gray-300 transition"><Linkedin size={20}/></a>
      </div>
    </div>
  </div>

  <div className="mt-8 border-t border-red-700 pt-4 text-center text-sm text-gray-300">
    © {new Date().getFullYear()} Pinpoints Nigeria. All rights reserved.
  </div>
</footer>

  );
}
