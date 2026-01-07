import React from "react";

export default function AboutUsEN() {
  const valores = [
    {
      icon: "feather-award",
      titulo: "Integrity",
      descripcion: "Absolute commitment to professional ethics and legal compliance",
    },
    {
      icon: "feather-lock",
      titulo: "Confidentiality",
      descripcion: "Rigorous protection of information and our clients' interests",
    },
    {
      icon: "feather-eye",
      titulo: "Strategic Vision",
      descripcion: "Prospective analysis to anticipate risks and opportunities",
    },
    {
      icon: "feather-zap",
      titulo: "Innovation",
      descripcion: "Advanced methodologies and cutting-edge analysis technology",
    },
    {
      icon: "feather-shield",
      titulo: "Trust",
      descripcion: "Lasting relationships based on verifiable results",
    },
  ];

  return (
    <div className="rainbow-about-area rainbow-section-gap">
      <div className="container">
        {/* Introduction */}
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h2 className="title w-600 mb--20">About Us</h2>
              <p className="description b1" style={{ maxWidth: "800px", margin: "0 auto" }}>
                TRANSTECK is a consulting firm specialized in multidimensional strategic
                intelligence, dedicated to transforming information into protection and
                actionable knowledge for organizations facing complex and dynamic
                environments.
              </p>
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
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
                  <h3 className="title mb--20">Our Mission</h3>
                  <p className="description b1">
                    To provide strategic solutions based on multidimensional
                    intelligence that enable anticipation and management of critical
                    risks, strengthening the stability, competitiveness and
                    reputation of our clients in corporate, industrial and
                    governmental sectors.
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
                  <h3 className="title mb--20">Our Vision</h3>
                  <p className="description b1">
                    To be the leading strategic intelligence consultancy in Mexico and
                    Latin America, recognized for its ability to generate timely,
                    comprehensive and actionable knowledge that transforms the way
                    organizations manage their risks and opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="row mt--60">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb--40"
              data-sal="slide-up"
              data-sal-duration={700}
            >
              <h3 className="title w-600">Our Values</h3>
              <p className="description b1">
                Principles that guide each of our actions
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

        {/* Our Experience */}
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
                    Our Experience
                  </h3>
                  <p className="description b1">
                    Our multidisciplinary team has participated in high-impact
                    strategic projects in sectors such as institutional security,
                    biosecurity, pharmaceutical industry, high-risk logistics and
                    governmental environment.
                  </p>
                  <p className="description b1 mt--20">
                    We are backed by a proven track record in prospective analysis,
                    crisis management, critical asset protection and institutional
                    intelligence capability development. We work with internationally
                    recognized professional methodologies and an ethical approach
                    based exclusively on open sources.
                  </p>

                  <div className="row mt--30">
                    <div className="col-lg-3 col-md-6 col-12 text-center mt--20">
                      <i className="feather-check-circle" style={{ fontSize: "36px", color: "#27ae60" }} />
                      <h6 className="mt--10">Prospective Analysis</h6>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 text-center mt--20">
                      <i className="feather-check-circle" style={{ fontSize: "36px", color: "#27ae60" }} />
                      <h6 className="mt--10">Crisis Management</h6>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 text-center mt--20">
                      <i className="feather-check-circle" style={{ fontSize: "36px", color: "#27ae60" }} />
                      <h6 className="mt--10">Asset Protection</h6>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 text-center mt--20">
                      <i className="feather-check-circle" style={{ fontSize: "36px", color: "#27ae60" }} />
                      <h6 className="mt--10">Institutional Intelligence</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="row mt--60">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb--40"
              data-sal="slide-up"
              data-sal-duration={700}
            >
              <h3 className="title w-600">What Sets Us Apart?</h3>
            </div>
          </div>
        </div>

        <div className="row row--30">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="service service__style--2 text-start">
              <div className="content">
                <h5 className="title">
                  <i className="feather-database me-2" style={{ color: "#4a90e2" }} />
                  Open Sources
                </h5>
                <p className="description b1">
                  We work exclusively with information from legal and verifiable
                  sources, guaranteeing the ethics and legality of our processes.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="service service__style--2 text-start">
              <div className="content">
                <h5 className="title">
                  <i className="feather-layers me-2" style={{ color: "#4a90e2" }} />
                  Multidimensional Approach
                </h5>
                <p className="description b1">
                  We integrate political, social, economic, technological and
                  security analysis for a holistic view of risks.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="service service__style--2 text-start">
              <div className="content">
                <h5 className="title">
                  <i className="feather-users me-2" style={{ color: "#4a90e2" }} />
                  Specialized Team
                </h5>
                <p className="description b1">
                  Professionals with experience in intelligence, security,
                  geopolitical analysis and corporate risk management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
