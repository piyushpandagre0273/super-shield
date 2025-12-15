"use client";

import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import BackgroundGlow from "../components/BackgroundGlow";
import SectionTitle from "../components/SectionTitle";
import Pill from "../components/Pill";
import { CONTACT_INFO, PRODUCTS } from "../constants";
import { getCurrentYear, formatPhoneNumber } from "../lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <BackgroundGlow />
      <Navigation />

      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <SectionTitle
            kicker="Contact"
            title="Get a quote or book an installation"
            desc="Send your vehicle details, preferred film, and city—our team will respond with the best option."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
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
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
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
                  type="tel"
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
                <button
                  type="submit"
                  className="mt-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] active:scale-[0.98]"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mt-12 text-center text-xs text-white/40"
          >
            © {getCurrentYear()} Super Shield / SUPER SHIELD. All rights reserved.
          </motion.div>
        </div>
      </section>
    </div>
  );
}

