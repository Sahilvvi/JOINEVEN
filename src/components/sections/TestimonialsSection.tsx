"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Vikram Singh",
    designation: "Founder, TechVentures",
    feedback:
      "JoinEvents completely changed how I network. I've met co-founders, investors, and mentors all through events I discovered here. The quality of events is unmatched.",
    color: "bg-blue-200",
  },
  {
    name: "Sneha Kapoor",
    designation: "Product Manager, ScaleUp",
    feedback:
      "The community around JoinEvents is incredible. Every event I attend is well-curated and full of passionate people. It's become my go-to platform for professional growth.",
    color: "bg-purple-200",
  },
  {
    name: "Arjun Mehta",
    designation: "CEO, InnovateLabs",
    feedback:
      "As a startup founder, finding the right events to attend is crucial. JoinEvents makes it effortless. The platform is beautifully designed and the event curation is top-notch.",
    color: "bg-emerald-200",
  },
  {
    name: "Priya Desai",
    designation: "Designer, CreativeStudio",
    feedback:
      "I love the creator meetups organized through JoinEvents. Met amazing collaborators and the community is so supportive. Highly recommend for anyone in the creative space.",
    color: "bg-amber-200",
  },
  {
    name: "Rohit Kumar",
    designation: "Developer, CloudFirst",
    feedback:
      "The hackathons and tech events on JoinEvents are world-class. I've participated in three events so far and each one exceeded my expectations. Great platform!",
    color: "bg-rose-200",
  },
  {
    name: "Ananya Sharma",
    designation: "Investor, VentureCapital",
    feedback:
      "JoinEvents gives me access to the best startup events in India. The quality of attendees and speakers is consistently impressive. It's become essential for deal flow.",
    color: "bg-cyan-200",
  },
];

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const startAnimation = async () => {
      if (isHovered) return;
      await controls.start({
        x: [0, -50 * testimonials.length * 5],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60,
            ease: "linear",
          },
        },
      });
    };
    startAnimation();
  }, [controls, isHovered]);

  const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 lg:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#007aff] mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            Loved by the Community
          </h2>
          <p className="mt-4 text-base lg:text-lg text-gray-500 max-w-xl mx-auto">
            Hear from people who have transformed their network through
            JoinEvents.
          </p>
        </motion.div>
      </div>

      <div
        ref={containerRef}
        className="relative no-scrollbar"
        onMouseEnter={() => {
          setIsHovered(true);
          controls.stop();
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={controls}
          className="flex gap-6 pl-6"
          style={{ width: "max-content" }}
        >
          {allTestimonials.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 lg:w-96 rounded-2xl bg-[#f5f5f7] p-8 border border-black/5 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full ${t.color} flex-shrink-0`} />
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.designation}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                &ldquo;{t.feedback}&rdquo;
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
