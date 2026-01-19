import React from "react";

export default function CasosExito() {
  const casos = [
    {
      sector: "",
      desafio:
        "Por la naturaleza estratégica, institucional y sensible de nuestras intervenciones, los casos de éxito no se exponen públicamente.",
      solucion:
        "Nuestros clientes operan en entornos donde la discreción, la confidencialidad y la estabilidad institucional son prioritarias.",
      resultados: [],
      icon: "feather-truck",
    },
    {
      sector: "",
      desafio:
        "Por la naturaleza estratégica, institucional y sensible de nuestras intervenciones, los casos de éxito no se exponen públicamente.",
      solucion:
        "Nuestros clientes operan en entornos donde la discreción, la confidencialidad y la estabilidad institucional son prioritarias.",
      resultados: [],
      icon: "feather-briefcase",
    },
    {
      sector: "",
      desafio:
        "Por la naturaleza estratégica, institucional y sensible de nuestras intervenciones, los casos de éxito no se exponen públicamente.",
      solucion:
        "Nuestros clientes operan en entornos donde la discreción, la confidencialidad y la estabilidad institucional son prioritarias.",
      resultados: [],
      icon: "feather-home",
    },
    {
      sector: "",
      desafio:
        "Por la naturaleza estratégica, institucional y sensible de nuestras intervenciones, los casos de éxito no se exponen públicamente.",
      solucion:
        "Nuestros clientes operan en entornos donde la discreción, la confidencialidad y la estabilidad institucional son prioritarias.",
      resultados: [],
      icon: "feather-package",
    },
  ];

  const sectores = [
    {
      categoria: "",
      items: [
        "Hospitales y redes de salud",
        "Laboratorios, farmacéuticas y biotecnología",
      ],
    },
    {
      categoria: "",
      items: [
        "Gobiernos estatales y municipales",
        "Empresas con infraestructura crítica",
      ],
    },
    {
      categoria: "",
      items: [
        "Despachos jurídicos",
      ],
    },
  ];

  return (
    <div className="rainbow-testimonial-area rainbow-section-gap">
      <div className="container">
        {/* Casos de Éxito */}
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h2 className="title w-600 mb--20">Casos de Éxito</h2>
              <p className="description b1">
                Por la naturaleza estratégica, institucional y sensible de nuestras intervenciones, los casos de éxito no se exponen públicamente.
              </p>
            </div>
          </div>
        </div>

        <div className="row row--30 mt--40">
          {casos.map((caso, index) => (
            <div
              key={index}
              className="col-lg-6 col-md-6 col-12 mt--30"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100 + index * 50}
            >
              <div className="rainbow-box-card card-style-default testimonial-style-defalt has-bg-shaped">
                <div className="inner">
                  <div className="rating mb--20">
                    <i className={`${caso.icon} icon-large`} style={{ fontSize: "36px", color: "#4a90e2" }} />
                  </div>
                  <div className="content">
                    <h4 className="title mb--20">{caso.sector}</h4>

                    <div className="mb--20">
                      <h6 className="subtitle" style={{ color: "#e74c3c" }}>Desafío:</h6>
                      <p className="description b1">{caso.desafio}</p>
                    </div>

                    <div className="mb--20">
                      <h6 className="subtitle" style={{ color: "#3498db" }}>Solución:</h6>
                      <p className="description b1">{caso.solucion}</p>
                    </div>

                    {caso.resultados.length > 0 && (
                      <div>
                        <h6 className="subtitle" style={{ color: "#27ae60" }}>Resultados:</h6>
                        <ul className="list-style--1">
                          {caso.resultados.map((resultado, idx) => (
                            <li key={idx}>
                              <i className="feather-check-circle me-2" style={{ color: "#27ae60" }} />
                              {resultado}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sectores que Atendemos */}
        <div className="row mt--60">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb--40"
              data-sal="slide-up"
              data-sal-duration={700}
            >
              <h3 className="title w-600">Sectores que Atendemos</h3>
              <p className="description b1"></p>
            </div>
          </div>
        </div>

        <div className="row row--30">
          {sectores.map((sector, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-12 mt--30"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100 + index * 100}
            >
              <div className="service service__style--1 bg-color-blackest radius text-center h-100">
                <div className="content">
                  <h4 className="title w-600 mb--20">{sector.categoria}</h4>
                  <ul className="list-style--1 text-start">
                    {sector.items.map((item, idx) => (
                      <li key={idx} className="mb--10">
                        <i className="feather-arrow-right me-2" style={{ color: "#4a90e2" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
