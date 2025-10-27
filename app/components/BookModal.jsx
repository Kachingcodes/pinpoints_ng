"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";

export default function BookModal({ open, onOpenChange }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     business: "",
//     email: "",
//     phone: "",
//     inquiry: "",
//   });

//   const [loading,  setLoading] = useState(false);
//   const [status, setStatus] = useState("");

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

//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value });
//   };
  

//   //SUBMIT SECTION
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus("");

//     try{
//       const res = await fetch("/api/sendEmail", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (data.success) {
//         setStatus("Message sent successfully!");
//         setFormData({
//           name: "",
//           business: "",
//           email: "",
//           phone: "",
//           inquiry: "",
//         });
//       } else {
//         setStatus("Something went wrong. Please try again.");
//       }
//     } catch (err) {
//       console.error(err);
//       setStatus("Could not send message. Please check your connection");
//     }

//     setLoading(false);
//   };

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
              Book A Consultation
            </h2>

          
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
