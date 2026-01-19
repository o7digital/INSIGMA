import React from "react";

export default function Metodologia() {
  const pilares = [
    {
      numero: "1",
      titulo: "Inteligencia Estratégica",
      descripcion:
        "Generación continua de inteligencia para identificar amenazas emergentes, tendencias del entorno y oportunidades de mejora mediante análisis prospectivo.",
      icon: "feather-eye",
    },
    {
      numero: "2",
      titulo: "Evaluación de Riesgos",
      descripcion:
        "Análisis sistemático de vulnerabilidades con matrices de riesgo, escenarios prospectivos y planes de mitigación adaptados a cada contexto.",
      icon: "feather-shield",
    },
    {
      numero: "3",
      titulo: "Análisis Multidimensional",
      descripcion:
        "Integración de dimensiones políticas, sociales, económicas, tecnológicas y de seguridad para una visión holística de los riesgos.",
      icon: "feather-layers",
    },
    {
      numero: "4",
      titulo: "Gestión de Crisis",
      descripcion:
        "Protocolos de respuesta, continuidad operativa y comunicación estratégica para el manejo efectivo de situaciones críticas.",
      icon: "feather-activity",
    },
  ];

  return (
    <div className="rainbow-service-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h2 className="title w-600 mb--20">Nuestra Metodología</h2>
              <p className="description b1">
                Diagnóstico Integral de Riesgo Estratégico e Inteligencia Aplicada.
                Evaluación estructural de amenazas, lectura prospectiva de escenarios de crisis, análisis jurídico-normativo y diseño de respuestas estratégicas orientadas a la continuidad institucional.
              </p>
            </div>
          </div>
        </div>

        <div className="row row--30 mt--40">
          {pilares.map((pilar, index) => (
            <div
              key={index}
              className="col-lg-6 col-md-6 col-12 mt--30"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100 + index * 100}
            >
              <div className="service service__style--2 text-start">
                <div className="content">
                  <div className="d-flex align-items-center mb--20">
                    <div
                      className="icon icon-circle-style me-3"
                      style={{
                        backgroundColor: "#4a90e2",
                        color: "white",
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "28px",
                        fontWeight: "bold",
                      }}
                    >
                      {pilar.numero}
                    </div>
                    <h4 className="title w-600 mb--0">{pilar.titulo}</h4>
                  </div>
                  <p className="description b1 color-gray">
                    {pilar.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proceso de Implementación */}
        <div className="row mt--60">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb--40"
              data-sal="slide-up"
              data-sal-duration={700}
            >
              <h3 className="title w-600">Proceso de Implementación</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="timeline-style-two bg-color-blackest">
              <div className="row row--0">
                {[
                  {
                    fase: "Fase 1",
                    titulo: "Diagnóstico Integral",
                    desc: "Evaluación exhaustiva de vulnerabilidades, cultura de seguridad y mapeo de amenazas específicas de su organización.",
                  },
                  {
                    fase: "Fase 2",
                    titulo: "Diseño Estratégico",
                    desc: "Desarrollo del modelo de inteligencia adaptado con arquitectura personalizada y definición de indicadores clave.",
                  },
                  {
                    fase: "Fase 3",
                    titulo: "Implementación",
                    desc: "Despliegue gradual con capacitación de equipos, instalación de sistemas y pruebas de protocolos.",
                  },
                  {
                    fase: "Fase 4",
                    titulo: "Monitoreo Continuo",
                    desc: "Operación regular con análisis 24/7, generación de reportes y gestión proactiva de riesgos emergentes.",
                  },
                  {
                    fase: "Fase 5",
                    titulo: "Mejora Continua",
                    desc: "Auditorías periódicas, análisis de desempeño y actualización según lecciones aprendidas y nuevas amenazas.",
                  },
                ].map((item, index) => (
                  <div key={index} className="col-lg-4 col-md-6 col-12">
                    <div className="timeline-single">
                      <div className="timeline-dot">
                        <div className="time-line-circle"></div>
                      </div>
                      <div className="single-content">
                        <span className="badge bg-primary mb--10">
                          {item.fase}
                        </span>
                        <h4 className="title">{item.titulo}</h4>
                        <p className="description">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
