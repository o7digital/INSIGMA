import Copywrite from "@/components/footers/Copywrite";
import Header5 from "@/components/headers/Header5";
import Contact from "@/components/othersPages/Contact";
import Hero from "@/components/homes/index-corporate-one-page/Hero";
import QuienesSomos from "@/components/homes/index-corporate-one-page/QuienesSomos";
import Service from "@/components/homes/index-corporate-one-page/Service";
import Metodologia from "@/components/homes/index-corporate-one-page/Metodologia";
import Beneficios from "@/components/homes/index-corporate-one-page/Beneficios";
import CasosExito from "@/components/homes/index-corporate-one-page/CasosExito";
import CallToAction from "@/components/homes/index-corporate-one-page/CallToAction";
import React from "react";

export const metadata = {
  title: "TRANSTEK | Inteligencia Estratégica Multidimensional",
  description:
    "Consultoría especializada en inteligencia multidimensional: prevenir riesgos, amenazas y vulnerabilidades en sectores corporativo, industrial y gubernamental.",
  keywords: "inteligencia estratégica, análisis de riesgos, consultoría seguridad, gestión crisis, protección activos, México",
  authors: [{ name: "TRANSTEK" }],
  creator: "TRANSTEK",
  publisher: "TRANSTEK",
  openGraph: {
    title: "TRANSTEK | Sistema Integral de Seguridad Corporativa",
    description: "Consultoría especializada en inteligencia estratégica multidimensional",
    url: "https://transtek.vercel.app",
    siteName: "TRANSTEK",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/transtek/hero1.webp",
        width: 1920,
        height: 1080,
        alt: "TRANSTEK - Sistema Integral de Seguridad Corporativa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRANSTEK | Inteligencia Estratégica",
    description: "Consultoría especializada en inteligencia multidimensional",
    images: ["/transtek/hero1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Page() {
  return (
    <>
      <Header5 />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>

      {/* HOME */}
      <section id="home">
        <Hero />
      </section>

      {/* QUIÉNES SOMOS (Misión, Visión, Valores, Experiencia) */}
      <section id="mision">
        <QuienesSomos />
      </section>

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* SERVICIOS */}
      <section id="servicios">
        <Service />
      </section>

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* METODOLOGÍA */}
      <section id="metodologia">
        <Metodologia />
      </section>

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* BENEFICIOS */}
      <section id="beneficios">
        <Beneficios />
      </section>

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* CASOS DE ÉXITO */}
      <section id="casos">
        <CasosExito />
      </section>

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* CALL TO ACTION */}
      <section id="cta">
        <CallToAction />
      </section>

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* CONTACTO */}
      <section id="contacto">
        <Contact />
      </section>

      <Copywrite />
    </>
  );
}
