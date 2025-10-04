import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const SuccessMessage = ({ show, text = "✅ Login Successful!" }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 300, scale: 0.8 }}    // Right side se slide + pop
          animate={{ opacity: 1, x: 0, scale: 1.05 }}
          exit={{ opacity: 0, x: 300, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-10 right-5 
                     bg-gradient-to-r from-green-900 via-emerald-500 to-green-400
                     text-white px-6 py-3 rounded-2xl shadow-2xl text-lg font-bold
                     z-50 flex items-center gap-2 border border-white/30"
          style={{
            boxShadow: "0 0 25px rgba(34, 197, 94, 0.9)" // strong neon glow
          }}
        >
          {/* Pulsing circle for highlight effect */}
          <span className="absolute inline-flex h-5 w-5 rounded-full bg-green-300 opacity-75 -left-3 animate-ping"></span>
          <span className="relative">{text}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessMessage;