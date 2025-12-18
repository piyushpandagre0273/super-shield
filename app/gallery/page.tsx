"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import Navigation from "../components/Navigation";
import CarImage from "../components/CarImage";
import BackgroundGlow from "../components/BackgroundGlow";
import SectionTitle from "../components/SectionTitle";

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
  show: { transition: { staggerChildren: 0.1 } },
};

export default function GalleryPage() {
  useEffect(() => {
    document.title = "Gallery - Our Work | Super Shield";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Browse our portfolio of window film installations, vinyl wraps, and paint protection film applications. Premium automotive customization in Nagpur.");
    }
  }, []);

  // Car images - add your images to public/images/cars/ folder
  const galleryItems = [
    { src: "/images/cars/desert-red-supercar.jpg", alt: "Red supercar drifting on desert sand" },
    { src: "/images/cars/car-2.jpg", alt: "Black Porsche Panamera with premium tint" },
    { src: "/images/cars/car-3.jpg", alt: "Lamborghini Aventador with Super Shield protection" },
    { src: "/images/cars/car-4.jpg", alt: "Red sports car on coastal road" },
    { src: "/images/cars/car-5.jpg", alt: "Premium vehicle with Super Shield window film" },
    { src: "/images/cars/car-6.jpg", alt: "Luxury car with paint protection film" },
  ];

  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <BackgroundGlow />
      <Navigation />

      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <SectionTitle
            kicker="Gallery"
            title="Our Work"
            desc="Browse our portfolio of window film installations, vinyl wraps, and paint protection film applications."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur cursor-pointer"
              >
                <CarImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm text-white font-medium">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur"
          >
            <p className="text-sm text-white/70">
              Want to see more? Visit our shop or contact us to view our complete portfolio.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

