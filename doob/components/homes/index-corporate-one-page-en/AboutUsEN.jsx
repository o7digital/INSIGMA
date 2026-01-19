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
              <p className="description b1" style={{ maxWidth: "800px", margin: "0 auto", whiteSpace: "pre-line" }}>
                Transtek & M7 is a firm specialized in strategic intelligence, systemic risk management, and critical infrastructure protection for institutions operating in highly complex, high-impact environments.

                We are not a private security company.
                We are an analysis, anticipation, and strategic protection body for decision makers and institutions whose failure would have national, health, economic, or political consequences.

                Guiding principle:
                We do not offer security.
                We offer intelligence so your institution does not collapse when the crisis arrives.

                The problem we solve:
                Critical organizations make decisions without comprehensive intelligence, without early-warning models, without real threat reading, and without prospective legal assessment, leading to operational collapses, sanctions, reputational damage, human risk, and loss of institutional continuity.
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
                  <p className="description b1">Transtek &amp; M7 is a firm specialized in strategic intelligence, systemic risk management, and critical infrastructure protection for institutions operating in highly complex, high-impact environments.</p>
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
                  <p className="description b1">We are not a private security company. We are an analysis, anticipation, and strategic protection body for decision makers and institutions whose failure would have national, health, economic, or political consequences.</p>
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
              <div className="description b1" style={{ maxWidth: "900px", margin: "10px auto 0", textAlign: "left" }}>
                <p className="mb--10">Guiding principle: we do not offer security. We offer intelligence so your institution does not collapse when the crisis arrives.</p>
                <p className="mb--10">The problem we solve: critical organizations make decisions without comprehensive intelligence, without early-warning models, without real threat reading, and without prospective legal assessment, leading to operational collapses, sanctions, reputational damage, human risk, and loss of institutional continuity.</p>
                <p className="mb--10">Our central solution: Comprehensive Strategic Risk Diagnosis and Applied Intelligence.</p>
                <ul style={{ paddingLeft: "18px", marginBottom: "16px" }}>
                  <li>Threat intelligence: mapping risk actors and structural, human, technological, and regulatory vulnerabilities, with construction of prospective scenarios.</li>
                  <li>Legal and regulatory risk: assessment of criminal, administrative, civil, and regulatory exposure, as well as gaps against national and international standards.</li>
                  <li>Continuity, crisis, and critical infrastructure protection: design of protocols, chains of command, contingency plans, and protection of strategic assets.</li>
                </ul>
                <p className="mb--10">Proprietary systems: SIPI – Intelligence System for Institutional Protection; MATE – Strategic Early Warning Model; Institutional Strategic Protection Program.</p>
                <p className="mb--0">Entry product: Executive Critical Risk Assessment (ECRA). Duration: 30 days. Deliverables: Classified report; threat map; vulnerability traffic light; crisis scenarios; legal assessment; strategic recommendations; institutional protection roadmap.</p>
              </div>
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
