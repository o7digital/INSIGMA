import React from "react";

export default function MethodologyEN() {
  const pillars = [
    {
      numero: "1",
      titulo: "Strategic Intelligence",
      descripcion:
        "Continuous intelligence generation to identify emerging threats, environmental trends and improvement opportunities through prospective analysis.",
      icon: "feather-eye",
    },
    {
      numero: "2",
      titulo: "Risk Assessment",
      descripcion:
        "Systematic vulnerability analysis with risk matrices, prospective scenarios and mitigation plans adapted to each context.",
      icon: "feather-shield",
    },
    {
      numero: "3",
      titulo: "Multidimensional Analysis",
      descripcion:
        "Integration of political, social, economic, technological and security dimensions for a holistic view of risks.",
      icon: "feather-layers",
    },
    {
      numero: "4",
      titulo: "Crisis Management",
      descripcion:
        "Response protocols, operational continuity and strategic communication for effective management of critical situations.",
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
              <h2 className="title w-600 mb--20">Our Methodology</h2>
              <p className="description b1">
                Four strategic pillars that underpin our multidimensional
                intelligence approach
              </p>
            </div>
          </div>
        </div>

        <div className="row row--30 mt--40">
          {pillars.map((pillar, index) => (
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
                      {pillar.numero}
                    </div>
                    <h4 className="title w-600 mb--0">{pillar.titulo}</h4>
                  </div>
                  <p className="description b1 color-gray">
                    {pillar.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Implementation Process */}
        <div className="row mt--60">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb--40"
              data-sal="slide-up"
              data-sal-duration={700}
            >
              <h3 className="title w-600">Implementation Process</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="timeline-style-two bg-color-blackest">
              <div className="row row--0">
                {[
                  {
                    fase: "Phase 1",
                    titulo: "Comprehensive Diagnostic",
                    desc: "Thorough assessment of vulnerabilities, security culture and mapping of specific threats to your organization.",
                  },
                  {
                    fase: "Phase 2",
                    titulo: "Strategic Design",
                    desc: "Development of adapted intelligence model with customized architecture and definition of key indicators.",
                  },
                  {
                    fase: "Phase 3",
                    titulo: "Implementation",
                    desc: "Gradual deployment with team training, system installation and protocol testing.",
                  },
                  {
                    fase: "Phase 4",
                    titulo: "Continuous Monitoring",
                    desc: "Regular operation with 24/7 analysis, report generation and proactive management of emerging risks.",
                  },
                  {
                    fase: "Phase 5",
                    titulo: "Continuous Improvement",
                    desc: "Periodic audits, performance analysis and updates based on lessons learned and new threats.",
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
