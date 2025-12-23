import React from "react";

export default function SuccessStoriesEN() {
  const cases = [
    {
      sector: "Logistics and Transportation Company",
      desafio:
        "Operations in high-risk corridors with constant threat of theft, extortion and kidnapping of personnel and merchandise.",
      solucion:
        "Strategic monitoring of critical routes, real-time incident analysis, prospective risk assessment by corridor and development of immediate response protocols.",
      resultados: [
        "40% reduction in security incidents",
        "Significant improvement in emergency response times",
        "Route optimization based on risk analysis",
        "Implementation of early warning system",
      ],
      icon: "feather-truck",
    },
    {
      sector: "Financial Institution",
      desafio:
        "Protection of multiple branches, prevention of emerging fraud and safeguarding of sensitive customer information.",
      solucion:
        "Profiling of external and internal threats, fraud pattern monitoring, process vulnerability diagnosis and reputational crisis management.",
      resultados: [
        "Early detection of fraud schemes before materialization",
        "Strengthening of security culture among personnel",
        "Improved information protection protocols",
        "Reduction of physical security incidents",
      ],
      icon: "feather-briefcase",
    },
    {
      sector: "Government Agency",
      desafio:
        "Protection of high-level officials, classified information security and management of public demonstrations.",
      solucion:
        "Intelligence center for threat monitoring, social media analysis, classified information protocols and operational continuity plans.",
      resultados: [
        "Effective anticipation of critical events and demonstrations",
        "Improvement in inter-institutional coordination",
        "Strengthened strategic analysis capabilities",
        "Effective protection of personnel and facilities",
      ],
      icon: "feather-home",
    },
    {
      sector: "Pharmaceutical Industry",
      desafio:
        "Supply chain protection, prevention of finished product theft and monitoring of emerging threats in the sector.",
      solucion:
        "Supply chain vulnerability analysis, intelligence on specialized criminal groups, security protocols for transit and storage.",
      resultados: [
        "Substantial reduction of losses due to theft",
        "Improvement in security of critical chain points",
        "Implemented traceability and alert system",
        "Effective collaboration with authorities",
      ],
      icon: "feather-package",
    },
  ];

  const sectors = [
    {
      categoria: "Private Sector",
      items: [
        "Logistics and freight transportation",
        "Pharmaceutical and biotechnology industry",
        "Energy and mining sector",
        "Financial and banking institutions",
        "Foreign trade and customs",
        "Information technologies",
        "Retail and organized commerce",
        "Manufacturing and production",
      ],
    },
    {
      categoria: "Public Sector",
      items: [
        "Federal, state and municipal government",
        "Public security and law enforcement",
        "Public health and hospitals",
        "Civil protection and emergency management",
        "Higher education and research",
        "Critical infrastructure",
      ],
    },
    {
      categoria: "Specialized Organizations",
      items: [
        "NGOs and civil organizations",
        "International organizations",
        "Law firms and consultancies",
        "Security and protection firms",
        "Think tanks and research centers",
        "Business associations",
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
                Proven experience in strategic protection and risk management
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
