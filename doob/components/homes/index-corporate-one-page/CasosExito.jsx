import React from "react";

export default function CasosExito() {
  const casos = [
    {
      sector: "Empresa de Logística y Transporte",
      desafio:
        "Operaciones en corredores de alto riesgo con amenaza constante de robo, extorsión y secuestro de personal y mercancías.",
      solucion:
        "Monitoreo estratégico de rutas críticas, análisis de incidentes en tiempo real, evaluación prospectiva de riesgos por corredor y desarrollo de protocolos de respuesta inmediata.",
      resultados: [
        "Reducción del 40% en incidentes de seguridad",
        "Mejora significativa en tiempos de respuesta ante emergencias",
        "Optimización de rutas basada en análisis de riesgos",
        "Implementación de sistema de alertas tempranas",
      ],
      icon: "feather-truck",
    },
    {
      sector: "Institución Financiera",
      desafio:
        "Protección de múltiples sucursales, prevención de fraudes emergentes y salvaguarda de información sensible de clientes.",
      solucion:
        "Perfilamiento de amenazas externas e internas, monitoreo de patrones de fraude, diagnóstico de vulnerabilidades en procesos y gestión de crisis reputacionales.",
      resultados: [
        "Detección temprana de esquemas de fraude antes de materialización",
        "Fortalecimiento de cultura de seguridad en personal",
        "Protocolos mejorados de protección de información",
        "Reducción de incidentes de seguridad física",
      ],
      icon: "feather-briefcase",
    },
    {
      sector: "Organismo Gubernamental",
      desafio:
        "Protección de funcionarios de alto nivel, seguridad de información clasificada y gestión de manifestaciones públicas.",
      solucion:
        "Centro de inteligencia para monitoreo de amenazas, análisis de redes sociales, protocolos de información clasificada y planes de continuidad operativa.",
      resultados: [
        "Anticipación efectiva de eventos críticos y manifestaciones",
        "Mejora en coordinación interinstitucional",
        "Capacidades fortalecidas de análisis estratégico",
        "Protección efectiva de personal e instalaciones",
      ],
      icon: "feather-home",
    },
    {
      sector: "Industria Farmacéutica",
      desafio:
        "Protección de cadena de suministro, prevención de robo de producto terminado y monitoreo de amenazas emergentes en el sector.",
      solucion:
        "Análisis de vulnerabilidades en la cadena de suministro, inteligencia sobre grupos delictivos especializados, protocolos de seguridad en tránsito y almacenamiento.",
      resultados: [
        "Reducción sustancial de pérdidas por robo",
        "Mejora en seguridad de puntos críticos de la cadena",
        "Sistema de trazabilidad y alertas implementado",
        "Colaboración efectiva con autoridades",
      ],
      icon: "feather-package",
    },
  ];

  const sectores = [
    {
      categoria: "Sector Privado",
      items: [
        "Logística y transporte de carga",
        "Industria farmacéutica y biotecnología",
        "Sector energético y minería",
        "Instituciones financieras y bancarias",
        "Comercio exterior y aduanas",
        "Tecnologías de la información",
        "Retail y comercio organizado",
        "Manufactura y producción",
      ],
    },
    {
      categoria: "Sector Público",
      items: [
        "Gobierno federal, estatal y municipal",
        "Seguridad pública y procuración de justicia",
        "Salud pública y hospitales",
        "Protección civil y gestión de emergencias",
        "Educación superior e investigación",
        "Infraestructura crítica",
      ],
    },
    {
      categoria: "Organizaciones Especializadas",
      items: [
        "ONGs y organizaciones civiles",
        "Organismos internacionales",
        "Despachos jurídicos y consultoría",
        "Firmas de seguridad y protección",
        "Think tanks y centros de investigación",
        "Asociaciones empresariales",
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
                Experiencia comprobada en protección estratégica y gestión de
                riesgos
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
              <p className="description b1">
                Experiencia multisectorial para una comprensión integral de
                riesgos
              </p>
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
