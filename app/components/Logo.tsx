"use client";

import Image from "next/image";
import { useState } from "react";

export default function Logo() {
  const [error, setError] = useState(false);

  if (error) {
    // Fallback to text logo if image fails to load
    return (
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
          <span className="text-lg font-semibold">S</span>
        </div>
        <div>
          <div className="text-sm font-semibold tracking-wide">SUPER SHIELD</div>
          <div className="text-xs text-white/60">heat free sun</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 flex-shrink-0">
        <Image
          src="/logo/logo.png"
          alt="Super Shield Logo"
          fill
          className="object-contain"
          priority
          sizes="40px"
          quality={90}
          onError={() => setError(true)}
        />
      </div>
      <div>
        <div className="text-sm font-semibold tracking-wide">SUPER SHIELD</div>
        <div className="text-xs text-white/60">heat free sun</div>
      </div>
    </div>
  );
}

