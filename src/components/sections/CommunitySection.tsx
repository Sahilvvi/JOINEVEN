"use client";

import { motion } from "framer-motion";

const communityFeatures = [
  "Event updates",
  "Exclusive invites",
  "Early access",
  "Community networking",
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-24 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl lg:rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,122,255,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.1),transparent_50%)]" />

          {/* Floating dots */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/20"
              style={{
                left: `${10 + (i * 4.2) % 80}%`,
                top: `${10 + ((i * 3.7 + 15) % 80)}%`,
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}

          <div className="relative px-8 py-16 lg:px-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#007aff] mb-4">
                    Community
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                    Join Our Growing
                    <br />
                    Community
                  </h2>
                  <p className="text-gray-400 text-base lg:text-lg leading-relaxed mb-10 max-w-md">
                    Get updates on upcoming events, networking opportunities,
                    special invitations, and community discussions.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {communityFeatures.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#007aff]/20 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-[#007aff]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-300 font-medium">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://chat.whatsapp.com/YOUR_INVITE_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold text-base hover:bg-[#20BD5A] transition-colors duration-300 shadow-lg shadow-[#25D366]/20"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                    Join WhatsApp Community
                  </motion.a>
                </motion.div>
              </div>

              {/* Stats / Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
                      <p className="text-3xl lg:text-4xl font-bold text-white">50K+</p>
                      <p className="text-sm text-gray-400 mt-1">Members</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
                      <p className="text-3xl lg:text-4xl font-bold text-white">500+</p>
                      <p className="text-sm text-gray-400 mt-1">Events</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
                      <p className="text-3xl lg:text-4xl font-bold text-white">100+</p>
                      <p className="text-sm text-gray-400 mt-1">Cities</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
                      <p className="text-3xl lg:text-4xl font-bold text-white">4.9</p>
                      <p className="text-sm text-gray-400 mt-1">Rating</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
