import React from "react";

export default function BenefitsEN() {
  const strategicBenefits = [
    {
      icon: "feather-trending-down",
      titulo: "Risk Exposure Reduction",
      descripcion:
        "Early identification of threats and vulnerabilities through prospective analysis and continuous monitoring.",
    },
    {
      icon: "feather-target",
      titulo: "Improved Decision-Making",
      descripcion:
        "Verifiable information and professional analysis for well-founded strategic decisions.",
    },
    {
      icon: "feather-shield",
      titulo: "Resilience Strengthening",
      descripcion:
        "Structured crisis response protocols and guaranteed operational continuity.",
    },
    {
      icon: "feather-lock",
      titulo: "Critical Asset Protection",
      descripcion:
        "Effective safeguarding of information, personnel, infrastructure and strategic resources.",
    },
    {
      icon: "feather-dollar-sign",
      titulo: "Resource Optimization",
      descripcion:
        "Prioritization based on real risks and prevention of significant economic losses.",
    },
    {
      icon: "feather-trending-up",
      titulo: "Competitive Advantage",
      descripcion:
        "Anticipation of environmental trends and ability to adapt to market changes.",
    },
  ];

  const competitiveAdvantages = [
    "Specialization in open sources ensuring absolute legality and ethics",
    "Comprehensive methodology combining political, social, economic and security analysis",
    "Multidisciplinary team with experience in public, private and government sectors",
    "Preventive and proactive approach to threat anticipation",
    "Customized executive deliverables tailored to each client",
    "Immediate response to critical events with real-time analysis",
    "Proven experience in crisis management and strategic asset protection",
    "Absolute confidentiality and ethical commitment in all our operations",
  ];

  return (
    <div className="rainbow-service-area rainbow-section-gap bg-color-light">
      <div className="container">
        {/* Strategic Benefits */}
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h2 className="title w-600 mb--20">
                Strategic Benefits
              </h2>
              <p className="description b1">
                Tangible value for your organization through our
                multidimensional intelligence
              </p>
            </div>
          </div>
        </div>

        <div className="row row--30 mt--40">
          {strategicBenefits.map((benefit, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-12 mt--30"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100 + index * 50}
            >
              <div className="service service__style--1 icon-circle-style text-center h-100">
                <div className="icon">
                  <i className={benefit.icon} />
                </div>
                <div className="content">
                  <h4 className="title w-600">{benefit.titulo}</h4>
                  <p className="description b1 color-gray mb--0">
                    {benefit.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Advantages */}
        <div className="row mt--60">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb--40"
              data-sal="slide-up"
              data-sal-duration={700}
            >
              <h3 className="title w-600">Why Choose TRANSTECK?</h3>
              <p className="description b1">
                Our competitive advantages that set us apart
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="row">
              {competitiveAdvantages.map((advantage, index) => (
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
                    <p className="description b1 mb--0">{advantage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="row mt--60">
          <div className="col-lg-12">
            <div className="rainbow-counterup-area">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="count-box counter-style-2 text-center">
                    <div>
                      <div className="count-number">100%</div>
                    </div>
                    <h5 className="counter-title">Legal Sources</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="count-box counter-style-2 text-center">
                    <div>
                      <div className="count-number">24/7</div>
                    </div>
                    <h5 className="counter-title">Continuous Monitoring</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="count-box counter-style-2 text-center">
                    <div>
                      <div className="count-number">5+</div>
                    </div>
                    <h5 className="counter-title">Analysis Dimensions</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="count-box counter-style-2 text-center">
                    <div>
                      <div className="count-number">10+</div>
                    </div>
                    <h5 className="counter-title">Sectors Served</h5>
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
