import React from "react";

export default function Beneficios() {
  const beneficiosEstrategicos = [
    {
      icon: "feather-trending-down",
      titulo: "Anticipación de crisis críticas",
      descripcion: "Anticipación de crisis críticas",
    },
    {
      icon: "feather-target",
      titulo: "Reducción de riesgo institucional, jurídico y operativo",
      descripcion: "Reducción de riesgo institucional, jurídico y operativo",
    },
    {
      icon: "feather-shield",
      titulo: "Protección de infraestructura y activos estratégicos",
      descripcion: "Protección de infraestructura y activos estratégicos",
    },
    {
      icon: "feather-lock",
      titulo: "Continuidad operativa en escenarios de alta presión",
      descripcion: "Continuidad operativa en escenarios de alta presión",
    },
    {
      icon: "feather-dollar-sign",
      titulo: "Criterio estratégico para decisores",
      descripcion: "Criterio estratégico para decisores",
    },
    {
      icon: "feather-trending-up",
      titulo: "Criterio estratégico para decisores",
      descripcion: "Criterio estratégico para decisores",
    },
  ];

  const ventajasCompetitivas = [
    "Anticipación de crisis críticas",
    "Reducción de riesgo institucional, jurídico y operativo",
    "Protección de infraestructura y activos estratégicos",
    "Continuidad operativa en escenarios de alta presión",
    "Criterio estratégico para decisores",
  ];

  return (
    <div className="rainbow-service-area rainbow-section-gap bg-color-light">
      <div className="container">
        {/* Beneficios Estratégicos */}
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h2 className="title w-600 mb--20">
                Beneficios Estratégicos
              </h2>
              <p className="description b1" />
            </div>
          </div>
        </div>

        <div className="row row--30 mt--40">
          {beneficiosEstrategicos.map((beneficio, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-12 mt--30"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100 + index * 50}
            >
              <div className="service service__style--1 icon-circle-style text-center h-100">
                <div className="icon">
                  <i className={beneficio.icon} />
                </div>
                <div className="content">
                  <h4 className="title w-600">{beneficio.titulo}</h4>
                  <p className="description b1 color-gray mb--0">
                    {beneficio.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ventajas Competitivas */}
        <div className="row mt--60">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb--40"
              data-sal="slide-up"
              data-sal-duration={700}
            >
              <h3 className="title w-600">¿Por Qué Elegir TRANSTECK?</h3>
              <p className="description b1" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="row">
              {ventajasCompetitivas.map((ventaja, index) => (
                <div
                  key={index}
                  className="col-lg-6 col-md-6 col-12 mt--20"
                  data-sal="slide-up"
                  data-sal-duration={700}
                  data-sal-delay={100 + index * 50}
                >
                  <div className="d-flex align-items-start">
                    <div
                      className="icon me-3"
                      style={{
                        color: "#4a90e2",
                        fontSize: "24px",
                        marginTop: "3px",
                      }}
                    >
                      <i className="feather-check-circle" />
                    </div>
                    <p className="description b1 mb--0">{ventaja}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="row mt--60">
          <div className="col-lg-12">
            <div className="rainbow-counterup-area">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="count-box counter-style-2 text-center">
                    <div>
                      <div className="count-number">100%</div>
                    </div>
                    <h5 className="counter-title">Fuentes Legales</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="count-box counter-style-2 text-center">
                    <div>
                      <div className="count-number">24/7</div>
                    </div>
                    <h5 className="counter-title">Monitoreo Continuo</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="count-box counter-style-2 text-center">
                    <div>
                      <div className="count-number">5+</div>
                    </div>
                    <h5 className="counter-title">Dimensiones de Análisis</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="count-box counter-style-2 text-center">
                    <div>
                      <div className="count-number">10+</div>
                    </div>
                    <h5 className="counter-title">Sectores Atendidos</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
