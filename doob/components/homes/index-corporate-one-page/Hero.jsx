"use client";
import React, { useEffect, useRef, useState } from "react";

const images = [
  "/transtek/hero1.jpg",
  "/transtek/hero2.jpg",
  "/transtek/hero3.jpg",
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
      <div className="hero-slide">
        <img
          src={images[i]}
          alt={`TRANSTEK slide ${i + 1}`}
          style={{
            width: "100%",
            height: "80vh",
            objectFit: "cover",
            display: "block"
          }}
        />
      </div>
    </section>
  );
}
