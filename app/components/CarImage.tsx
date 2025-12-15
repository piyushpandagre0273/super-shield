"use client";

import Image from "next/image";
import { useState } from "react";

interface CarImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
}

export default function CarImage({
  src,
  alt,
  className = "",
  fill = false,
  priority = false,
  sizes,
}: CarImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-white/5 border border-white/10 ${className}`}
      >
        <div className="text-center p-4">
          <div className="text-4xl mb-2">🚗</div>
          <div className="text-sm text-white/50">Image loading...</div>
        </div>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes}
        loading={priority ? undefined : "lazy"}
        quality={85}
        onError={() => setError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      className={className}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      quality={85}
      onError={() => setError(true)}
    />
  );
}

