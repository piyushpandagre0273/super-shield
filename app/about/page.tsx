"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import BackgroundGlow from "../components/BackgroundGlow";
import SectionTitle from "../components/SectionTitle";
import Pill from "../components/Pill";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us - 20+ Years Excellence | Super Shield";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Learn about Super Shield's 20+ years of expertise in automotive window films, vinyl wrap, and paint protection film. Premium craft, comfort, and personalized guidance in Nagpur.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <BackgroundGlow />
      <Navigation />

      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <SectionTitle
            kicker="About SUPER SHIELD"
            title="20+ years of automotive customization expertise"
            desc="We specialize in high-quality vinyl wrap, window film, and paint protection film—delivering precise workmanship, premium materials, and a customer-first experience."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-10 grid gap-4 md:grid-cols-3"
          >
            <motion.div variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-lg font-semibold">Premium Craft</div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                State-of-the-art techniques, careful finishing, and consistent results for every vehicle.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-lg font-semibold">Comfort + Style</div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Our films are engineered for clarity, heat rejection, glare reduction, privacy, and UV protection.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-lg font-semibold">Personalized Guidance</div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                We help you choose the right film for your look, comfort goals, and driving conditions.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="mt-4 leading-relaxed text-white/70">
              At SUPER SHIELD, we believe every vehicle deserves premium protection and comfort. 
              With over two decades of experience, we've perfected the art of automotive film installation, 
              combining cutting-edge technology with meticulous craftsmanship. Our team is dedicated to 
              delivering solutions that not only protect your investment but also enhance your driving experience.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <h3 className="text-2xl font-semibold">Why Choose Us</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Pill>✓</Pill>
                </div>
                <div>
                  <div className="font-semibold">Expert Installation</div>
                  <p className="mt-1 text-sm text-white/70">
                    Trained professionals ensure bubble-free, precision-cut installations every time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Pill>✓</Pill>
                </div>
                <div>
                  <div className="font-semibold">Premium Materials</div>
                  <p className="mt-1 text-sm text-white/70">
                    Only the finest films with proven performance metrics and durability.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Pill>✓</Pill>
                </div>
                <div>
                  <div className="font-semibold">Comprehensive Warranty</div>
                  <p className="mt-1 text-sm text-white/70">
                    60 months of coverage for peace of mind and long-term protection.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Pill>✓</Pill>
                </div>
                <div>
                  <div className="font-semibold">Customer Satisfaction</div>
                  <p className="mt-1 text-sm text-white/70">
                    Your satisfaction is our priority—we stand behind every installation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

