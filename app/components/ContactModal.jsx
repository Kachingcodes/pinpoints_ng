"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";

export default function ContactModal({ open, onOpenChange }) {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    inquiry: "",
  });

  const [loading,  setLoading] = useState(false);
  const [status, setStatus] = useState("");

useEffect(() => {
    if (open) {
      document.body.style.overflow 
      = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try{
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          business: "",
          email: "",
          phone: "",
          inquiry: "",
        });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Could not send message. Please check your connection");
    }

    setLoading(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => onOpenChange(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-4 md:p-6 w-[90%] max-w-md text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-3 right-3 text-white hover:text-red-500"
            >
              <X size={20} />
            </button>

            {/* Title */}
            <h2 className="text-xl font-semibold mb-4 text-center text-white/90">
              Send us an inquiry
            </h2>

            {/* Form */}
            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm mb-1 text-white/80">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-md bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your name"
                />
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-sm mb-1 text-white/80">
                  Business Name
                </label>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your business name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-1 text-white/80">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm mb-1 text-white/80">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-md bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Inquiry */}
              <div>
                <label className="block text-sm mb-1 text-white/80">
                  Inquiry <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-2 rounded-md bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                  placeholder="Write your inquiry..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 bg-red-600 hover:bg-red-700 transition text-white font-medium py-2 rounded-md"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={16}/> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {
                status && (
                  <p
                  className={`text-center text-sm mt-3 ${
                    status.startsWith("✅")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}>
                    {status}
                  </p>
                )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
