import Copywrite from "@/components/footers/Copywrite";
import Header5 from "@/components/headers/Header5";
import Topbar from "@/components/headers/Topbar";
import Brands from "@/components/homes/index-corporate-one-page/Brands";
import Contact from "@/components/homes/index-corporate-one-page/Contact";
import Hero from "@/components/homes/index-corporate-one-page/Hero";
import Service from "@/components/homes/index-corporate-one-page/Service";
import React from "react";

export const metadata = {
  title: "INSIGMA | Inteligencia Estratégica Multidimensional",
  description:
    "Consultoría especializada en inteligencia multidimensional: prevenir riesgos, amenazas y vulnerabilidades en sectores corporativo, industrial y gubernamental.",
};

export default function Page() {
  return (
    <>
      <Topbar />
      <Header5 />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>

      {/* Sección HOME */}
      <section id="home">
        <Hero />
      </section>

      {/* Separador */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* Sección MISIÓN */}
      <section id="mision">
        <Service />
      </section>

      {/* Separador */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* Sección MARCAS */}
      <Brands />

      {/* Separador */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* Sección CONTACTO */}
      <section id="contacto">
        <Contact />
      </section>

      <Copywrite />
    </>
  );
}
