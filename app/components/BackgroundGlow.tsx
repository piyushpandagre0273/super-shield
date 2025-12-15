"use client";

export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-40 left-1/4 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
    </div>
  );
}

