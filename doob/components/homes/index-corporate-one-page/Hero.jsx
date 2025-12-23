"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  "/transtek/hero1.webp",
  "/transtek/hero2.webp",
  "/transtek/hero3.webp",
];

export default function Hero() {
  const [i, setI] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setI((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer.current);
  }, []);

  return (
    <section id="home" className="hero-area">
      <div className="hero-slide" style={{ position: "relative", width: "100%", height: "80vh" }}>
        <Image
          src={images[i]}
          alt={`TRANSTEK - Sistema Integral de Seguridad Corporativa ${i + 1}`}
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
