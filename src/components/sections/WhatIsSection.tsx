"use client";

import { motion } from "framer-motion";

const features = [
  "Discover events near you",
  "Connect with communities",
  "Network with professionals",
  "Attend curated experiences",
  "Learn from industry leaders",
];

export default function WhatIsSection() {
  return (
    <section id="about" className="py-24 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Abstract animated shapes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 opacity-60" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute bottom-10 right-10 w-36 h-36 rounded-full bg-gradient-to-br from-purple-100 to-pink-50 opacity-50" />
              </motion.div>

              {/* Center card */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="glass rounded-3xl p-8 shadow-2xl max-w-xs"
                >
                  <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">50K+</h3>
                  <p className="text-gray-500 text-sm">Community Members</p>
                  <div className="mt-4 flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white"
                        style={{
                          background: `hsl(${210 + i * 30}, 70%, ${75 - i * 5}%)`,
                        }}
                      />
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-black flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">
                        +
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating mini cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 glass rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-400" />
                  <span className="text-xs font-medium">Live Event</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 left-4 glass rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#007aff]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-xs font-medium">4.9 Rating</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#007aff] mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              What is{" "}
              <span className="gradient-text">JoinEvents?</span>
            </h2>
            <p className="text-base lg:text-lg text-gray-500 leading-relaxed mb-10">
              JoinEvents is an event marketplace designed to help people
              discover, attend, and engage with meaningful events across
              startups, technology, networking, education, creators, business,
              and more.
            </p>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#f5f5f7] flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <svg
                      className="w-4 h-4 text-[#007aff] group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-base lg:text-lg font-medium text-gray-700">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
