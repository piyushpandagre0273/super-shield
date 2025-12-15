"use client";

import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import BackgroundGlow from "../components/BackgroundGlow";
import SectionTitle from "../components/SectionTitle";
import { WARRANTY_INFO } from "../constants";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <BackgroundGlow />
      <Navigation />

      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <SectionTitle
            kicker="Warranty"
            title={`${WARRANTY_INFO.duration} warranty support`}
            desc="Warranty covers bubbles, adhesive failures, discoloration, and performance—ensuring less than 10% drop in UVR/IRR."
          />
          
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 text-white/80 backdrop-blur"
          >
            <h3 className="text-xl font-semibold text-white mb-4">What's Covered</h3>
            <ul className="grid gap-3 text-sm leading-relaxed">
              {WARRANTY_INFO.coverage.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <h3 className="text-xl font-semibold mb-4">Warranty Terms</h3>
            <div className="space-y-4 text-sm leading-relaxed text-white/70">
              <p>
                Our 60-month warranty ensures that your investment is protected. The warranty 
                covers manufacturing defects, installation issues, and performance degradation 
                beyond normal wear and tear.
              </p>
              <p>
                To maintain warranty coverage, please follow proper care instructions and avoid 
                using abrasive cleaners or tools that could damage the film surface.
              </p>
              <p>
                For warranty claims, please contact us with your installation details and photos 
                of the issue. Our team will review and process your claim promptly.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

