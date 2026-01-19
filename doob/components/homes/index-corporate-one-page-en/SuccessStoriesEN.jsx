import React from "react";

export default function SuccessStoriesEN() {
  const cases = [
    {
      sector: "",
      desafio:
        "Due to the strategic, institutional, and sensitive nature of our interventions, success stories are not disclosed publicly.",
      solucion:
        "Our clients operate in environments where discretion, confidentiality, and institutional stability are priorities.",
      resultados: [],
      icon: "feather-truck",
    },
    {
      sector: "",
      desafio:
        "Due to the strategic, institutional, and sensitive nature of our interventions, success stories are not disclosed publicly.",
      solucion:
        "Our clients operate in environments where discretion, confidentiality, and institutional stability are priorities.",
      resultados: [],
      icon: "feather-briefcase",
    },
    {
      sector: "",
      desafio:
        "Due to the strategic, institutional, and sensitive nature of our interventions, success stories are not disclosed publicly.",
      solucion:
        "Our clients operate in environments where discretion, confidentiality, and institutional stability are priorities.",
      resultados: [],
      icon: "feather-home",
    },
    {
      sector: "",
      desafio:
        "Due to the strategic, institutional, and sensitive nature of our interventions, success stories are not disclosed publicly.",
      solucion:
        "Our clients operate in environments where discretion, confidentiality, and institutional stability are priorities.",
      resultados: [],
      icon: "feather-package",
    },
  ];

  const sectors = [
    {
      categoria: "",
      items: [
        "Hospitals and health networks",
        "Laboratories, pharmaceuticals, and biotechnology",
      ],
    },
    {
      categoria: "",
      items: [
        "State and municipal governments",
        "Companies with critical infrastructure",
      ],
    },
    {
      categoria: "",
      items: [
        "Law firms",
      ],
    },
  ];

  return (
    <div className="rainbow-testimonial-area rainbow-section-gap">
      <div className="container">
        {/* Success Stories */}
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h2 className="title w-600 mb--20">Success Stories</h2>
              <p className="description b1">
                Due to the strategic, institutional, and sensitive nature of our interventions, success stories are not disclosed publicly.
              </p>
            </div>
          </div>
        </div>

        <div className="row row--30 mt--40">
          {cases.map((caso, index) => (
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
                      <h6 className="subtitle" style={{ color: "#e74c3c" }}>Challenge:</h6>
                      <p className="description b1">{caso.desafio}</p>
                    </div>

                    <div className="mb--20">
                      <h6 className="subtitle" style={{ color: "#3498db" }}>Solution:</h6>
                      <p className="description b1">{caso.solucion}</p>
                    </div>

                    {caso.resultados.length > 0 && (
                      <div>
                        <h6 className="subtitle" style={{ color: "#27ae60" }}>Results:</h6>
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

        {/* Sectors We Serve */}
        <div className="row mt--60">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb--40"
              data-sal="slide-up"
              data-sal-duration={700}
            >
              <h3 className="title w-600">Sectors We Serve</h3>
              <p className="description b1">
                Multi-sector experience for comprehensive risk understanding
              </p>
            </div>
          </div>
        </div>

        <div className="row row--30">
          {sectors.map((sector, index) => (
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
