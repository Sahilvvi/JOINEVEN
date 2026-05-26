"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const floatingCards = [
  { title: "Startup Meetup", date: "Jun 15", location: "Mumbai", x: "10%", y: "20%", delay: 0 },
  { title: "Tech Conference", date: "Jul 8", location: "Bangalore", x: "75%", y: "15%", delay: 0.2 },
  { title: "Creator Workshop", date: "Jun 22", location: "Delhi", x: "5%", y: "65%", delay: 0.4 },
  { title: "Networking Night", date: "Aug 3", location: "Pune", x: "80%", y: "60%", delay: 0.6 },
];

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <motion.div style={{ y: videoY }} className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect fill='%23f5f5f7' width='100%25' height='100%25'/%3E%3C/svg%3E"
        >
          <source
            src="https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 video-overlay" />
      </motion.div>

      {/* Floating Event Cards */}
      <div className="absolute inset-0 z-10 hidden lg:block">
        {floatingCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: card.delay + 1, duration: 0.8 }}
            className="absolute glass rounded-2xl p-4 shadow-lg animate-float-slow"
            style={{
              left: card.x,
              top: card.y,
              animationDelay: `${card.delay * 2}s`,
            }}
          >
            <p className="text-xs font-semibold text-[#007aff]">{card.date}</p>
            <p className="text-sm font-bold mt-1">{card.title}</p>
            <p className="text-xs text-gray-500 mt-0.5">{card.location}</p>
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#007aff] mb-6">
            India&apos;s Premium Event Platform
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.95]"
        >
          <span className="block">Discover.</span>
          <span className="block gradient-text">Connect.</span>
          <span className="block">Experience.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          JoinEvents helps you discover amazing events, meet like-minded people,
          and become part of thriving communities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#featured"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-black rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <span className="relative z-10">Explore Events</span>
            <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#community"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black border-2 border-black/10 rounded-full hover:border-black/30 hover:bg-black/5 transition-all duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
            Join WhatsApp Community
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors"
          >
            <span className="text-xs tracking-wider uppercase mb-2">
              Scroll to explore
            </span>
            <motion.svg
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </motion.svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
