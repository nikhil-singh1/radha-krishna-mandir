// src/pages/ComingSoon.jsx
import React from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200 overflow-hidden">
      {/* Background Om animation */}
      <motion.div
        initial={{ scale: 0, opacity: 0.1 }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] flex items-center justify-center text-orange-300 font-bold text-[10rem] opacity-20"
      >
        ॐ
      </motion.div>

      {/* Foreground text */}
      <div className="z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-orange-900 drop-shadow-lg">
          Coming Soon
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-700">
          Radha Krishna Mandir – A sacred place of devotion, seva & spirituality.
        </p>
      </div>

    </div>
  );
};

export default ComingSoon;
