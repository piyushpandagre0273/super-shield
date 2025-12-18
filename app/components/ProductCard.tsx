"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Pill from "./Pill";
import { Product } from "../types";
import { useState } from "react";

export default function ProductCard({
  p,
  selected,
  onClick,
}: {
  p: Product;
  selected: boolean;
  onClick: () => void;
}) {
  const [imgSrc, setImgSrc] = useState<string>(p.image || "/images/cars/car-4.jpg");
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <motion.button
        onClick={onClick}
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={[
          "relative w-full text-left rounded-3xl border overflow-hidden backdrop-blur transition-all duration-500 h-full flex flex-col",
          selected
            ? "border-white/50 bg-gradient-to-br from-white/25 via-white/15 to-white/10 shadow-2xl shadow-white/30 ring-4 ring-white/20"
            : "border-white/15 bg-gradient-to-br from-white/10 via-white/8 to-white/5 hover:border-white/30 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/10 hover:to-white/8 hover:shadow-2xl",
        ].join(" ")}
      >
        {/* Animated background glow */}
        {selected && (
          <>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          </>
        )}

        {/* Product Image - Large and Prominent */}
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={imgSrc}
            alt={p.name}
            fill
            priority
            loading="eager"
            className="object-cover transition-transform duration-700 group-hover:scale-125"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => {
              // Fallback to a known car image if product image is missing
              if (imgSrc !== "/images/cars/car-4.jpg") {
                setImgSrc("/images/cars/car-4.jpg");
              }
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          {/* Selected Badge */}
          {selected && (
            <motion.div
              className="absolute top-4 right-4"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="rounded-full bg-white px-4 py-2 shadow-xl flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-green-500"
                />
                <span className="text-xs font-bold text-black">Selected</span>
              </div>
            </motion.div>
          )}

          {/* Color Badge */}
          <div className="absolute top-4 left-4">
            <motion.span
              className="rounded-full border-2 border-white/30 bg-white/20 backdrop-blur px-3 py-1.5 text-xs font-semibold text-white shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              {p.color}
            </motion.span>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative p-6 flex-1 flex flex-col">
          {/* Title and Tagline */}
          <div className="mb-4">
            <motion.h3
              className="text-2xl font-bold text-white mb-2 leading-tight"
              whileHover={{ x: 4 }}
            >
              {p.name}
            </motion.h3>
            <p className="text-sm text-white/70 leading-relaxed">
              {p.tagline}
            </p>
          </div>

          {/* Metrics Grid - Enhanced */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              ["VLT", p.vlt, "from-blue-500/30 to-blue-600/20", "text-blue-300", "💎"],
              ["IRR", p.irr, "from-orange-500/30 to-orange-600/20", "text-orange-300", "🔥"],
              ["UVR", p.uvr, "from-purple-500/30 to-purple-600/20", "text-purple-300", "☀️"],
              ["TSER", p.tser, "from-green-500/30 to-green-600/20", "text-green-300", "✨"],
            ].map(([label, value, gradientClass, textClass, icon], idx) => (
              <motion.div
                key={label}
                className={`rounded-xl border border-white/20 bg-gradient-to-br ${gradientClass} p-3 backdrop-blur`}
                whileHover={{ scale: 1.05, y: -2, borderColor: "rgba(255,255,255,0.4)" }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="text-xs text-white/60 font-medium uppercase tracking-wide">
                    {label}
                  </div>
                  <span className="text-sm">{icon}</span>
                </div>
                <div className={`text-xl font-bold ${textClass}`}>{value}</div>
              </motion.div>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-white/80 mb-4 line-clamp-2 leading-relaxed flex-1">
            {p.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2">
            {p.highlights.map((h, idx) => (
              <motion.div
                key={h}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Pill>{h}</Pill>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Accent for Selected */}
        {selected && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}

        {/* Hover Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none -translate-x-full group-hover:translate-x-full" />
      </motion.button>
    </motion.div>
  );
}
