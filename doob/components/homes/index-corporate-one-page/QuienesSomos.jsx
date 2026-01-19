import React from "react";

export default function QuienesSomos() {
  const valores = [
    {
      icon: "feather-award",
      titulo: "",
      descripcion: "",
    },
    {
      icon: "feather-lock",
      titulo: "",
      descripcion: "",
    },
    {
      icon: "feather-eye",
      titulo: "",
      descripcion: "",
    },
    {
      icon: "feather-zap",
      titulo: "",
      descripcion: "",
    },
    {
      icon: "feather-shield",
      titulo: "",
      descripcion: "",
    },
  ];

  return (
    <div className="rainbow-about-area rainbow-section-gap">
      <div className="container">
        {/* Introducción */}
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h2 className="title w-600 mb--20">Quiénes Somos</h2>
              <p className="description b1" style={{ maxWidth: "800px", margin: "0 auto", whiteSpace: "pre-line" }}>
                Transtek & M7 es una firma especializada en Inteligencia Estratégica, Gestión de Riesgos Sistémicos y Protección de Infraestructura Crítica para instituciones que operan en entornos de alta complejidad y alto impacto.

                No somos una empresa de seguridad privada.
                Somos un órgano de análisis, anticipación y protección estratégica para decisores e instituciones cuya falla tendría consecuencias nacionales, sanitarias, económicas o políticas.

                Principio rector:
                No ofrecemos seguridad.
                Ofrecemos inteligencia para que su institución no colapse cuando llegue la crisis.
              </p>
            </div>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="row row--30 mt--60">
          <div className="col-lg-6 col-md-6 col-12">
            <div
              className="rainbow-box-card card-style-default"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <div className="inner">
                <div className="icon mb--20">
                  <i className="feather-target" style={{ fontSize: "48px", color: "#4a90e2" }} />
                </div>
                <div className="content">
                  <h3 className="title mb--20">Nuestra Misión</h3>
                  <p className="description b1">
                    Transtek & M7 es una firma especializada en Inteligencia Estratégica, Gestión de Riesgos Sistémicos y Protección de Infraestructura Crítica para instituciones que operan en entornos de alta complejidad y alto impacto.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <div
              className="rainbow-box-card card-style-default"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={150}
            >
              <div className="inner">
                <div className="icon mb--20">
                  <i className="feather-compass" style={{ fontSize: "48px", color: "#4a90e2" }} />
                </div>
                <div className="content">
                  <h3 className="title mb--20">Nuestra Visión</h3>
                  <p className="description b1">
                    No somos una empresa de seguridad privada.
                    Somos un órgano de análisis, anticipación y protección estratégica para decisores e instituciones cuya falla tendría consecuencias nacionales, sanitarias, económicas o políticas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nuestros Valores */}
        <div className="row mt--60">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb--40"
              data-sal="slide-up"
              data-sal-duration={700}
            >
              <h3 className="title w-600">Nuestros Valores</h3>
              <p className="description b1">
                Principios que guían cada una de nuestras acciones
              </p>
            </div>
          </div>
        </div>

        <div className="row row--30">
          {valores.map((valor, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-12 mt--30"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100 + index * 50}
            >
              <div className="service service__style--1 icon-circle-style text-center h-100">
                <div className="icon">
                  <i className={valor.icon} />
                </div>
                <div className="content">
                  <h4 className="title w-600">{valor.titulo}</h4>
                  <p className="description b1 color-gray mb--0">
                    {valor.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nuestra Experiencia */}
        <div className="row mt--60">
          <div className="col-lg-12">
            <div
              className="rainbow-box-card card-style-default bg-color-blackest"
              data-sal="slide-up"
              data-sal-duration={700}
            >
              <div className="inner">
                <div className="content">
                  <h3 className="title mb--20">
                    <i className="feather-briefcase me-2" style={{ color: "#4a90e2" }} />
                    Nuestra Experiencia
                  </h3>
                  <p className="description b1"></p>
                  <p className="description b1 mt--20"></p>

                  <div className="row mt--30">
                    <div className="col-lg-3 col-md-6 col-12 text-center mt--20">
                      <i className="feather-check-circle" style={{ fontSize: "36px", color: "#27ae60" }} />
                      <h6 className="mt--10">Análisis Prospectivo</h6>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 text-center mt--20">
                      <i className="feather-check-circle" style={{ fontSize: "36px", color: "#27ae60" }} />
                      <h6 className="mt--10">Gestión de Crisis</h6>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 text-center mt--20">
                      <i className="feather-check-circle" style={{ fontSize: "36px", color: "#27ae60" }} />
                      <h6 className="mt--10">Protección de Activos</h6>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 text-center mt--20">
                      <i className="feather-check-circle" style={{ fontSize: "36px", color: "#27ae60" }} />
                      <h6 className="mt--10">Inteligencia Institucional</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Qué nos diferencia */}
        <div className="row mt--60">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb--40"
              data-sal="slide-up"
              data-sal-duration={700}
            >
              <h3 className="title w-600">¿Qué nos Diferencia?</h3>
            </div>
          </div>
        </div>

        <div className="row row--30">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="service service__style--2 text-start">
              <div className="content">
                <h5 className="title">
                  <i className="feather-database me-2" style={{ color: "#4a90e2" }} />
                  {/* Texto intencionalmente reducido */}
                </h5>
                <p className="description b1"></p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="service service__style--2 text-start">
              <div className="content">
                <h5 className="title">
                  <i className="feather-layers me-2" style={{ color: "#4a90e2" }} />
                  {/* Texto intencionalmente reducido */}
                </h5>
                <p className="description b1"></p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="service service__style--2 text-start">
              <div className="content">
                <h5 className="title">
                  <i className="feather-users me-2" style={{ color: "#4a90e2" }} />
                  {/* Texto intencionalmente reducido */}
                </h5>
                <p className="description b1"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
