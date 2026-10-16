import { homeMetadata } from "@/lib/seo";
import OrganizationSchema from "@/components/common/OrganizationSchema";
import Copywrite from "@/components/footers/Copywrite";
import Header5 from "@/components/headers/Header5";
import Contact from "@/components/othersPages/Contact";
import Hero from "@/components/homes/index-corporate-one-page/Hero";
import QuienesSomos from "@/components/homes/index-corporate-one-page/QuienesSomos";
import Service from "@/components/homes/index-corporate-one-page/Service";
import M7Technologies from "@/components/homes/index-corporate-one-page/M7Technologies";
import Metodologia from "@/components/homes/index-corporate-one-page/Metodologia";
import Beneficios from "@/components/homes/index-corporate-one-page/Beneficios";
import CasosExito from "@/components/homes/index-corporate-one-page/CasosExito";
import CallToAction from "@/components/homes/index-corporate-one-page/CallToAction";
import React from "react";

export const metadata = homeMetadata("es");

export default function Page() {
  return (
    <>
      <OrganizationSchema />
      <Header5 />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>

      {/* HOME */}
      <section id="home">
        <Hero />
      </section>

      {/* QUIENES SOMOS (Mision, Vision, Valores, Experiencia) */}
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

      {/* M7 TECHNOLOGIES */}
      <section id="m7technologies">
        <M7Technologies />
      </section>

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* METODOLOGIA */}
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

      {/* CASOS DE EXITO */}
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
