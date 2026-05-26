"use client";

import { motion } from "framer-motion";

export default function FinalCTASection() {
  return (
    <section className="py-24 lg:py-36 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-purple-50 blur-3xl opacity-50" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Your Next Great
            <br />
            <span className="gradient-text">Connection Starts Here.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-base lg:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed"
          >
            Discover events, build relationships, and grow with the community.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#featured"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-colors duration-300 shadow-xl"
            >
              Explore Events
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#community"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold border-2 border-black/10 rounded-full hover:border-black/30 hover:bg-black/5 transition-all duration-300"
            >
              Join Community
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
