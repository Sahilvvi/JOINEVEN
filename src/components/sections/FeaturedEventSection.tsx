"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

const speakers = [
  { name: "Arjun Patel", role: "Founder, TechStartup", color: "bg-blue-200" },
  { name: "Priya Sharma", role: "CEO, GrowthLabs", color: "bg-purple-200" },
  { name: "Rahul Verma", role: "CTO, InnovateCo", color: "bg-emerald-200" },
  { name: "Ananya Das", role: "VP, ProductHQ", color: "bg-amber-200" },
];

const agenda = [
  { time: "9:00 AM", title: "Registration & Networking", description: "Check-in and connect with fellow attendees" },
  { time: "10:00 AM", title: "Opening Keynote", description: "The Future of India's Startup Ecosystem" },
  { time: "11:30 AM", title: "Panel Discussion", description: "Building Products that Scale" },
  { time: "1:00 PM", title: "Lunch & Networking", description: "Premium networking lunch with speakers" },
  { time: "2:30 PM", title: "Workshops", description: "Hands-on sessions with industry leaders" },
  { time: "5:00 PM", title: "Closing & After-Party", description: "Celebrate with the community" },
];

const partners = ["Google", "Microsoft", "AWS", "Razorpay", "Zerodha"];

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance < 0) return;
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

export default function FeaturedEventSection() {
  const eventDate = useMemo(() => new Date("2025-06-28T09:00:00+05:30"), []);
  const { days, hours, minutes, seconds } = useCountdown(eventDate);

  return (
    <section id="featured" className="py-24 lg:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#007aff] mb-4">
            Don&apos;t Miss Out
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]">
            Featured Event
          </h2>
          <p className="mt-4 text-base lg:text-lg text-gray-500 max-w-xl mx-auto">
            Our biggest event is happening this June.
          </p>
        </motion.div>

        {/* Event Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden mb-16 bg-gradient-to-br from-black via-gray-900 to-black"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#007aff]/20 to-purple-600/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,122,255,0.15),transparent_50%)]" />

          <div className="relative px-8 py-16 lg:px-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white text-xs font-medium mb-6">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Registrations Open
                  </span>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-4"
                >
                  India Startup
                  <br />
                  Connect 2025
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-300 text-base lg:text-lg leading-relaxed mb-8 max-w-md"
                >
                  India&apos;s largest startup networking event bringing together
                  founders, investors, and innovators under one roof.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-4 text-sm text-gray-300 mb-10"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    June 28, 2025
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Bangalore, India
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    500+ Attendees
                  </span>
                </motion.div>

                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  Reserve Your Spot
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>

              {/* Countdown Timer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex justify-center"
              >
                <div className="grid grid-cols-4 gap-3 sm:gap-4">
                  {[
                    { value: days, label: "Days" },
                    { value: hours, label: "Hours" },
                    { value: minutes, label: "Minutes" },
                    { value: seconds, label: "Seconds" },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="countdown-digit w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl font-bold shadow-xl">
                        {String(item.value).padStart(2, "0")}
                      </div>
                      <span className="text-gray-400 text-[10px] sm:text-xs mt-2 block font-medium uppercase tracking-wider">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Speakers */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-8">Featured Speakers</h3>
            <div className="grid grid-cols-2 gap-4">
              {speakers.map((speaker, i) => (
                <motion.div
                  key={speaker.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl bg-[#f5f5f7] p-5 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 rounded-full ${speaker.color} mb-3`} />
                  <p className="font-semibold text-sm">{speaker.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{speaker.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Agenda */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8">Agenda Highlights</h3>
            <div className="space-y-3">
              {agenda.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-[#f5f5f7] transition-colors duration-200"
                >
                  <span className="text-xs font-mono text-[#007aff] font-semibold whitespace-nowrap mt-0.5">
                    {item.time}
                  </span>
                  <div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-8">
            Trusted Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-xl lg:text-2xl font-bold text-gray-300 hover:text-gray-500 transition-colors duration-300"
              >
                {partner}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
