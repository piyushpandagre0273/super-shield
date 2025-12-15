"use client";

import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import BackgroundGlow from "../components/BackgroundGlow";
import SectionTitle from "../components/SectionTitle";
import Metric from "../components/Metric";
import { METRICS } from "../constants";

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

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <BackgroundGlow />
      <Navigation />

      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <SectionTitle
            kicker="Technology"
            title="Understand the numbers"
            desc="We use professional performance metrics to measure clarity, heat rejection, UV blocking, and total solar energy rejection."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-10 grid gap-4 md:grid-cols-2"
          >
            {METRICS.map((metric) => (
              <motion.div key={metric.name} variants={fadeUp}>
                <Metric name={metric.name} meaning={metric.meaning} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <h3 className="text-2xl font-semibold">How Our Technology Works</h3>
            <p className="mt-4 leading-relaxed text-white/70">
              Our window films use advanced nanotechnology and precious metal sputtering to create 
              multi-layer protection systems. These layers work together to selectively filter 
              different wavelengths of light, allowing visible light to pass through while 
              blocking harmful UV and infrared radiation. This results in a cooler, more comfortable 
              cabin environment while maintaining excellent visibility and clarity.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

