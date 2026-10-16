"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  "/transteck/hero1.webp",
  "/transteck/hero2.webp",
  "/transteck/hero3.webp",
  "/transteck/transocean-network-monitoring.webp",
];

export default function HeroEN() {
  const [i, setI] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setI((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer.current);
  }, []);

  return (
    <section className="hero-area">
      <h1 className="visually-hidden">Transocean Systems — Strategic intelligence and risk management in Mexico</h1>
      <div className="hero-slide" style={{ position: "relative", width: "100%", height: "80vh" }}>
        <Image
          src={images[i]}
          alt={`Transocean Systems - Comprehensive Corporate Security System ${i + 1}`}
          fill
          priority={i === 0}
          quality={90}
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
}
