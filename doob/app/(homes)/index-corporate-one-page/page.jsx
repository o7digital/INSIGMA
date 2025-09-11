import Copywrite from "@/components/footers/Copywrite";
import Header5 from "@/components/headers/Header5";
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
      {/* Quitamos el Topbar con el banner de Limited Time Offer */}
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

        {/* Bloque de Quiénes Somos */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-10">Quiénes Somos</h2>

            <div className="grid md:grid-cols-2 gap-10 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4">Nuestra Misión</h3>
                <p>
                  Proveer soluciones estratégicas basadas en inteligencia
                  multidimensional que permitan anticipar y gestionar riesgos
                  críticos, fortaleciendo la estabilidad, competitividad y
                  reputación de nuestros clientes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Nuestra Visión</h3>
                <p>
                  Ser la consultoría líder en inteligencia estratégica en México
                  y Latinoamérica, reconocida por su capacidad de generar
                  conocimiento oportuno, integral y accionable.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Nuestros Valores</h3>
                <p>
                  Integridad | Confidencialidad | Visión Estratégica | Innovación
                  | Confianza
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Nuestra Experiencia
                </h3>
                <p>
                  Nuestro equipo ha participado en proyectos estratégicos en
                  sectores como seguridad institucional, bioseguridad, industria
                  farmacéutica, logística y entorno gubernamental. Nos respalda
                  una trayectoria en análisis prospectivo, gestión de crisis y
                  protección de activos críticos.
                </p>
              </div>
            </div>
          </div>
        </section>
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
