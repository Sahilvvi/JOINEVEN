"use client";

import { motion } from "framer-motion";

export default function QRSection() {
  return (
    <section className="py-24 lg:py-36 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#007aff] mb-4">
              Quick Access
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
              Scan & Join
            </h2>
            <p className="text-base lg:text-lg text-gray-500 max-w-lg mx-auto leading-relaxed mb-12">
              Scan the QR code to instantly access our community and stay
              updated.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative inline-block"
          >
            {/* Floating decoration */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-12 lg:-inset-16"
            >
              <div className="absolute top-0 left-1/2 w-3 h-3 rounded-full bg-[#007aff]/20" />
              <div className="absolute bottom-0 right-1/4 w-2 h-2 rounded-full bg-purple-300/30" />
              <div className="absolute top-1/3 right-0 w-4 h-4 rounded-full bg-blue-200/40" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-black/5 animate-pulse-glow">
                {/* QR Code Placeholder */}
                <div className="w-48 h-48 lg:w-64 lg:h-64 bg-[#f5f5f7] rounded-2xl flex items-center justify-center mx-auto border-2 border-dashed border-gray-200">
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 text-gray-300 mx-auto mb-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                      />
                    </svg>
                    <p className="text-xs text-gray-400 font-medium">
                      QR Code
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-6 font-medium">
                  Point your camera here
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
