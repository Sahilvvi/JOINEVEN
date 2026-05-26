"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "What is JoinEvents?",
    answer:
      "JoinEvents is India's premier event discovery and marketplace platform. We help you discover, attend, and engage with high-quality events across startups, technology, networking, education, creators, business, and more.",
  },
  {
    question: "How do I join an event?",
    answer:
      "Simply browse our events, find one that interests you, and click 'Register' or 'Reserve Your Spot'. You'll receive a confirmation with all the details you need to attend.",
  },
  {
    question: "Is joining free?",
    answer:
      "Joining the JoinEvents platform and community is completely free. Individual events may have their own pricing set by organizers, but we also feature many free events.",
  },
  {
    question: "How do I join the WhatsApp community?",
    answer:
      "You can join our WhatsApp community by clicking the 'Join WhatsApp Community' button on our website, or by scanning the QR code in the Scan & Join section. You'll get instant access to event updates and networking opportunities.",
  },
  {
    question: "Can I host events?",
    answer:
      "Yes! JoinEvents welcomes event organizers. You can create and host your own events on our platform, reaching our community of 50,000+ engaged members. Contact us to get started as an event host.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-36 bg-[#f5f5f7]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about JoinEvents."
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-black/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-black/[0.02] transition-colors"
              >
                <span className="font-semibold text-base pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f5f5f7] flex items-center justify-center"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
