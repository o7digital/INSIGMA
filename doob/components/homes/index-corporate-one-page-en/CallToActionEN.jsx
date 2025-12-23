"use client";
import React from "react";

export default function CallToActionEN() {
  return (
    <div className="rainbow-callto-action rainbow-call-to-action style-8 content-wrapper">
      <div className="container">
        <div className="row row--0 align-items-center">
          <div className="col-lg-12">
            <div className="inner">
              <div className="content text-center">
                <h2
                  className="title"
                  data-sal="slide-up"
                  data-sal-duration={700}
                  data-sal-delay={100}
                >
                  Ready to Strengthen Your Strategic Security?
                </h2>
                <p
                  className="description"
                  data-sal="slide-up"
                  data-sal-duration={700}
                  data-sal-delay={150}
                >
                  Contact us for an initial assessment and discover how TRANSTEK can
                  transform information into strategic protection for your organization.
                </p>
                <div
                  className="call-to-btn"
                  data-sal="slide-up"
                  data-sal-duration={700}
                  data-sal-delay={200}
                >
                  <a
                    className="btn-default btn-icon"
                    href="#contacto"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#contacto")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    Request Consultation
                    <i className="feather-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="row mt--60">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="text-center mb--30">
              <div className="icon mb--20" style={{ fontSize: "48px", color: "#4a90e2" }}>
                <i className="feather-shield" />
              </div>
              <h5 className="title">Absolute Confidentiality</h5>
              <p className="description">
                All information is handled with complete confidentiality and
                professional ethics
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="text-center mb--30">
              <div className="icon mb--20" style={{ fontSize: "48px", color: "#4a90e2" }}>
                <i className="feather-users" />
              </div>
              <h5 className="title">Specialized Team</h5>
              <p className="description">
                Professionals with experience in intelligence, security and strategic
                analysis
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="text-center mb--30">
              <div className="icon mb--20" style={{ fontSize: "48px", color: "#4a90e2" }}>
                <i className="feather-clock" />
              </div>
              <h5 className="title">Immediate Response</h5>
              <p className="description">
                Rapid response capability to critical events and emerging situations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
