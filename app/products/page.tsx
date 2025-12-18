"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navigation from "../components/Navigation";
import BackgroundGlow from "../components/BackgroundGlow";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import Pill from "../components/Pill";
import { PRODUCTS } from "../constants";
import { getProductImagePath } from "../lib/utils";

// Product Gallery Image Component with proper error handling
function ProductGalleryImage({
  num,
  imagePath,
  imageName,
  productName,
  delay,
}: {
  num: number;
  imagePath: string;
  imageName: string;
  productName: string;
  delay: number;
}) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="relative aspect-square rounded-xl overflow-hidden border border-white/15 bg-black/30 group cursor-pointer"
    >
      {!imageError ? (
        <>
          <Image
            src={imagePath}
            alt={`${productName} - Image ${num}`}
            fill
            className={`object-cover transition-all duration-500 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            sizes="(max-width: 768px) 50vw, 25vw"
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(false);
            }}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/10 to-black/20">
              <div className="text-center">
                <div className="text-3xl mb-1 animate-pulse">🚗</div>
                <div className="text-[10px] text-white/50">Loading...</div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/10 to-black/20">
          <div className="text-center">
            <div className="text-3xl mb-1">🚗</div>
            <div className="text-[10px] text-white/50">Image {num}</div>
            <div className="text-[8px] text-white/40 mt-0.5 px-2 break-all">
              {imageName}
            </div>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function ProductsPage() {
  const [activeProduct, setActiveProduct] = useState("Ultra Super 70");
  const [showDetails, setShowDetails] = useState(false);

  const current = PRODUCTS.find((p) => p.name === activeProduct) || PRODUCTS[0];

  useEffect(() => {
    document.title = "Premium Window Films & Products | Super Shield";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Explore our range of premium window films: Ultra Super 70 (US70), Super 70 (S70), Nano Ceramic (IR70), and Sunroof Series. Up to 98% IR rejection, 99% UV block.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <BackgroundGlow />
      <Navigation />

      <section className="relative overflow-hidden">
        {/* Enhanced Decorative Background */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 relative z-10">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <SectionTitle
              kicker="Products"
              title="Choose your protection level"
              desc="From precious metal sputtering to advanced nano-ceramic builds—pick the film that matches your comfort, clarity, and performance needs."
            />
          </motion.div>

          {/* Products Grid - Modern Card Layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12"
          >
            {PRODUCTS.map((p) => (
              <ProductCard
                key={p.name}
                p={p}
                selected={activeProduct === p.name}
                onClick={() => {
                  setActiveProduct(p.name);
                  setShowDetails(true);
                }}
              />
            ))}
          </motion.div>

          {/* Detailed View Panel - Compact and Well-Aligned */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl border border-white/20 bg-gradient-to-br from-white/12 via-white/8 to-white/5 p-6 backdrop-blur shadow-2xl max-w-5xl mx-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowDetails(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                >
                  <span className="text-lg leading-none">×</span>
                </button>

                {/* Compact Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between gap-4 pr-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 rounded-full bg-green-500"
                        />
                        <span className="text-xs text-white/60 uppercase tracking-wide">Selected Product</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 leading-tight">
                        {current.name}
                      </h3>
                      <p className="text-sm text-white/70">{current.tagline}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Pill>Install Ready</Pill>
                      <Pill>Quality Checked</Pill>
                    </div>
                  </div>
                </div>

                {/* Compact Layout - Image and Metrics Side by Side */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Product Image - Smaller */}
                  <motion.div
                    key={current.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="md:col-span-1 relative h-48 md:h-56 rounded-xl overflow-hidden border border-white/20 bg-black/30"
                  >
                    {current.image ? (
                      <Image
                        src={current.image}
                        alt={current.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-white/10 to-black/20">
                        <div className="text-center">
                          <div className="text-5xl mb-2">🚗</div>
                          <div className="text-xs text-white/50">Product Image</div>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </motion.div>

                  {/* Metrics and Details - Compact */}
                  <div className="md:col-span-2 space-y-4">
                    {/* Compact Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        ["VLT", current.vlt, "text-blue-400"],
                        ["IRR", current.irr, "text-orange-400"],
                        ["UVR", current.uvr, "text-purple-400"],
                        ["TSER", current.tser, "text-green-400"],
                      ].map(([label, value, colorClass]) => (
                        <motion.div
                          key={label}
                          className="rounded-xl border border-white/15 bg-gradient-to-br from-white/8 to-white/5 p-3 backdrop-blur"
                          whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.3)" }}
                        >
                          <div className="text-[10px] text-white/60 uppercase tracking-wide mb-1">{label}</div>
                          <div className={`text-xl font-bold ${colorClass}`}>{value}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Compact Description */}
                    <div className="rounded-xl border border-white/15 bg-black/20 p-4">
                      <div className="text-xs font-semibold text-white mb-2">What you get</div>
                      <p className="text-xs leading-relaxed text-white/80">
                        {current.description}
                      </p>
                    </div>

                    {/* Compact Highlights */}
                    <div className="flex flex-wrap gap-1.5">
                      {current.highlights.map((h, idx) => (
                        <motion.div
                          key={h}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <Pill>{h}</Pill>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sunroof Series Special Content - Compact */}
                {current.name === "Sunroof Series" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-6 rounded-xl border border-white/15 bg-black/20 p-4 overflow-hidden"
                  >
                    <div className="text-sm font-semibold text-white mb-3">
                      Sunroof Options
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 text-xs text-white/80">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                        <div className="font-semibold text-white mb-2 text-xs">Moonroof Heat Control</div>
                        <div className="grid grid-cols-2 gap-1.5">
                          <div>VLT: <b className="text-white">45%</b></div>
                          <div>IRR: <b className="text-white">95%</b></div>
                          <div>UVR: <b className="text-white">99%</b></div>
                          <div>TSER: <b className="text-white">71%</b></div>
                        </div>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                        <div className="font-semibold text-white mb-2 text-xs">Sunroof Protection</div>
                        <div className="grid grid-cols-2 gap-1.5">
                          <div>VLT: <b className="text-white">70%</b></div>
                          <div>IRR: <b className="text-white">92%</b></div>
                          <div>UVR: <b className="text-white">99%</b></div>
                          <div>TSER: <b className="text-white">60%</b></div>
                          <div className="col-span-2">Thickness: <b className="text-white">7.5 mil</b></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Product Image Gallery - Multiple Images */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="mt-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg">📸</span>
                    <div className="text-sm font-semibold text-white">Product Gallery</div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[1, 2, 3, 4].map((num) => {
                      const imagePath = getProductImagePath(current.name, num);
                      const imageName = imagePath.split('/').pop() || '';

                      return (
                        <ProductGalleryImage
                          key={num}
                          num={num}
                          imagePath={imagePath}
                          imageName={imageName}
                          productName={current.name}
                          delay={0.15 + num * 0.05}
                        />
                      );
                    })}
                  </div>
                  <p className="text-xs text-white/50 mt-3 text-center">
                    Add product images to <span className="text-white/70 font-mono text-[10px]">public/images/products/</span>
                  </p>
                </motion.div>

                {/* Additional Information Section - Fills Empty Space */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 grid md:grid-cols-3 gap-4"
                >
                  {/* Key Benefits */}
                  <div className="rounded-xl border border-white/15 bg-gradient-to-br from-white/8 to-white/5 p-4 backdrop-blur">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">✨</span>
                      <div className="text-xs font-semibold text-white uppercase tracking-wide">Key Benefits</div>
                    </div>
                    <ul className="space-y-2 text-xs text-white/80">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>Reduces cabin heat significantly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>Blocks harmful UV rays</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>Maintains clear visibility</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>Protects interior materials</span>
                      </li>
                    </ul>
                  </div>

                  {/* Warranty & Support */}
                  <div className="rounded-xl border border-white/15 bg-gradient-to-br from-white/8 to-white/5 p-4 backdrop-blur">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">🛡️</span>
                      <div className="text-xs font-semibold text-white uppercase tracking-wide">Warranty</div>
                    </div>
                    <div className="space-y-2 text-xs text-white/80">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-400 font-bold text-sm">60 Months</span>
                        <span>Coverage</span>
                      </div>
                      <p className="text-white/70 leading-relaxed">
                        Comprehensive warranty covering bubbles, adhesive failures, and performance degradation.
                      </p>
                    </div>
                  </div>

                  {/* Installation Info */}
                  <div className="rounded-xl border border-white/15 bg-gradient-to-br from-white/8 to-white/5 p-4 backdrop-blur">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">🔧</span>
                      <div className="text-xs font-semibold text-white uppercase tracking-wide">Installation</div>
                    </div>
                    <div className="space-y-2 text-xs text-white/80">
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400">⚡</span>
                        <span>Professional installation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400">⚡</span>
                        <span>Bubble-free guarantee</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400">⚡</span>
                        <span>Precision cutting</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400">⚡</span>
                        <span>Quality checked</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 flex flex-col sm:flex-row gap-3"
                >
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 rounded-xl bg-gradient-to-r from-white to-white/90 px-6 py-3 text-center text-sm font-bold text-black transition-all hover:shadow-lg hover:shadow-white/20"
                  >
                    Get Quote & Book Installation
                  </motion.a>
                  <motion.a
                    href="/warranty"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 rounded-xl border-2 border-white/30 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10 hover:border-white/50"
                  >
                    View Warranty Details
                  </motion.a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
