"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import CarImage from "./components/CarImage";
import BackgroundGlow from "./components/BackgroundGlow";
import Pill from "./components/Pill";
import SectionTitle from "./components/SectionTitle";
import Stat from "./components/Stat";
import ProductCard from "./components/ProductCard";
import Metric from "./components/Metric";
import Link from "next/link";
import { PRODUCTS, METRICS, CONTACT_INFO } from "./constants";
import { getCurrentYear } from "./lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

export default function Home() {
  const [activeProduct, setActiveProduct] = useState("Ultra Super 70");

  const current = PRODUCTS.find((p) => p.name === activeProduct) || PRODUCTS[0];

  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <BackgroundGlow />
      <Navigation />

      {/* HERO */}
      <section id="home" className="relative">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="relative"
          >
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              <Pill>Automotive Window Film</Pill>
              <Pill>Vinyl Wrap</Pill>
              <Pill>Paint Protection Film</Pill>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
            >
              SUPER SHIELD Window Films
              <span className="block text-white/70">
                Cool cabin. Clear vision. Premium protection.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-base leading-relaxed text-white/70 md:text-lg"
            >
              Built from cutting-edge film technologies to reduce heat, block UV,
              and elevate your vehicle's look—installed with precision and care.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex gap-3">
              <Link
                href="/products"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Products
              </Link>
              <Link
                href="/technology"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See Technology
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3"
            >
              <Stat label="Experience" value="20+ Years" />
              <Stat label="UV Rejection" value="Up to 99%" />
              <Stat label="Warranty" value="60 Months" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="relative aspect-[4/3] w-full">
                <CarImage
                  src="/images/cars/hero-car-1.jpg"
                  alt="Premium car with Super Shield window film"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Pill>Heat Free Sun</Pill>
                    <Pill>Crystal Clear</Pill>
                  </div>
                  <div className="text-sm text-white/60 mb-2">
                    Recommended Highlight
                  </div>
                  <div className="text-2xl font-semibold text-white">
                    {current.name}
                  </div>
                  <div className="mt-1 text-white/70 text-sm">{current.tagline}</div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-3">
                      <div className="text-xs text-white/80">IR Rejection</div>
                      <div className="mt-1 text-lg font-semibold text-white">
                        {current.irr}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-3">
                      <div className="text-xs text-white/80">UV Rejection</div>
                      <div className="mt-1 text-lg font-semibold text-white">
                        {current.uvr}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 text-center text-xs text-white/50">
              *Values may vary batch-to-batch (±5%).
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative border-t border-white/10">
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
            viewport={{ once: true, amount: 0.1 }}
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
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology" className="relative border-t border-white/10">
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
            viewport={{ once: true, amount: 0.1 }}
            className="mt-10 grid gap-4 md:grid-cols-2"
          >
            {METRICS.map((metric, idx) => (
              <motion.div key={metric.name} variants={fadeUp}>
                <Metric name={metric.name} meaning={metric.meaning} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WARRANTY */}
      <section id="warranty" className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <SectionTitle
            kicker="Warranty"
            title="60 months warranty support"
            desc="Warranty covers bubbles, adhesive failures, discoloration, and performance—ensuring less than 10% drop in UVR/IRR."
          />
          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80 backdrop-blur">
            <ul className="grid gap-3 text-sm leading-relaxed">
              <li>• Coverage: bubbles, adhesive failures, discoloration.</li>
              <li>• Performance assurance: less than 10% drop in UVR/IRR.</li>
              <li>• Apply and usage conditions may apply (confirm during consultation).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <SectionTitle
            kicker="Contact"
            title="Get a quote or book an installation"
            desc="Send your vehicle details, preferred film, and city—our team will respond with the best option."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-lg font-semibold">Visit Us</div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {CONTACT_INFO.address}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {CONTACT_INFO.tags.map((tag) => (
                  <Pill key={tag}>{tag}</Pill>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5 text-sm text-white/75">
                <p className="mb-2 font-semibold">Contact Information</p>
                <p className="text-white/60">
                  Phone: <a href={`tel:${CONTACT_INFO.phone?.replace(/\s/g, '')}`} className="text-white/80 hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
                </p>
                <p className="mt-2 text-white/60">
                  WhatsApp: <a href={`https://wa.me/${CONTACT_INFO.phone?.replace(/\s/g, '').replace(/^0/, '91')}`} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-lg font-semibold">Quick Inquiry</div>
              <form
                className="mt-4 grid gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Form submitted (demo). Connect to Email/WhatsApp API in production.");
                }}
              >
                <input
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                  placeholder="Name"
                  required
                />
                <input
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                  placeholder="Phone / WhatsApp"
                  required
                />
                <input
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                  placeholder="Vehicle (e.g., Creta 2024)"
                  required
                />
                <select className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-white/25">
                  {PRODUCTS.map((product) => (
                    <option key={product.name}>{product.name}</option>
                  ))}
                  <option>Vinyl Wrap</option>
                  <option>Paint Protection Film</option>
                </select>
                <textarea
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                  placeholder="Message (shade preference, budget, city, etc.)"
                />
                <button className="mt-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] active:scale-[0.98]">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 text-center text-xs text-white/40">
            © {getCurrentYear()} Super Shield / SUPER SHIELD. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
