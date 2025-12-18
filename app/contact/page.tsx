"use client";

import React from "react";
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
  const [formLoading, setFormLoading] = React.useState(false);
  const [formMessage, setFormMessage] = React.useState<{ type: string; text: string }>({ type: '', text: '' });

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
                  setFormLoading(true);
                  setFormMessage({ type: '', text: '' });

                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name') as string;
                  const phone = formData.get('phone') as string;
                  const vehicle = formData.get('vehicle') as string;
                  const product = formData.get('product') as string;
                  const message = formData.get('message') as string;

                  // Validate required fields
                  if (!name?.trim() || !phone?.trim() || !vehicle?.trim() || !product?.trim()) {
                    setFormMessage({ type: 'error', text: 'Please fill all required fields' });
                    setFormLoading(false);
                    return;
                  }

                  // Format WhatsApp message
                  const whatsappMessage = `*New Inquiry - Super Shield*

👤 *Name:* ${name}
📱 *Phone:* ${phone}
🚗 *Vehicle:* ${vehicle}
🎬 *Product:* ${product}${message ? `\n💬 *Message:* ${message}` : ''}

_Sent from Super Shield Contact Page_`;

                  // Get business WhatsApp number from CONTACT_INFO
                  const businessPhone = CONTACT_INFO.phone.replace(/\s/g, '').replace(/^0/, '91');
                  
                  // Create WhatsApp URL
                  const whatsappUrl = `https://wa.me/${businessPhone}?text=${encodeURIComponent(whatsappMessage)}`;

                  // Open WhatsApp
                  window.open(whatsappUrl, '_blank');

                  // Store form reference before setTimeout
                  const form = e.currentTarget;

                  // Show success message and reset form
                  setFormMessage({ type: 'success', text: 'Opening WhatsApp... Please send the message!' });
                  setTimeout(() => {
                    form.reset();
                    setFormMessage({ type: '', text: '' });
                  }, 3000);
                  
                  setFormLoading(false);
                }}
              >
                <input
                  name="name"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                  placeholder="Name"
                  required
                  disabled={formLoading}
                />
                <input
                  name="phone"
                  type="tel"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                  placeholder="Phone / WhatsApp"
                  required
                  disabled={formLoading}
                />
                <input
                  name="vehicle"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                  placeholder="Vehicle (e.g., Creta 2024)"
                  required
                  disabled={formLoading}
                />
                <select
                  name="product"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-white/25"
                  required
                  disabled={formLoading}
                >
                  <option value="">Select a product...</option>
                  {PRODUCTS.map((product) => (
                    <option key={product.name} value={product.name}>{product.name}</option>
                  ))}
                  <option value="Vinyl Wrap">Vinyl Wrap</option>
                  <option value="Paint Protection Film">Paint Protection Film</option>
                </select>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                  placeholder="Message (shade preference, budget, city, etc.)"
                  disabled={formLoading}
                />
                {formMessage.text && (
                  <div className={`rounded-2xl px-4 py-3 text-sm ${
                    formMessage.type === 'success'
                      ? 'bg-green-500/20 text-green-200 border border-green-500/30'
                      : 'bg-red-500/20 text-red-200 border border-red-500/30'
                  }`}>
                    {formMessage.text}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={formLoading}
                  className="mt-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formLoading ? 'Submitting...' : 'Submit'}
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

