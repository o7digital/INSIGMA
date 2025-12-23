import React from "react";
import {
  mainServicesEN,
  complementaryServicesEN,
} from "@/data/serviceEN";

export default function ServiceEN() {
  return (
    <div
      className="rainbow-service-area rainbow-section-gap scrollSpySection"
      id="service"
    >
      <div className="container">
        {/* ====== Main Services ====== */}
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h2 className="title w-600 mb--20">Main Services</h2>
              <p className="description b1">
                Our key services for the protection and strengthening of your organization.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-5 service-wrapper">
          {mainServicesEN.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={service.delay}
            >
              <div className="service service__style--1 icon-circle-style text-center">
                <div className="icon">
                  <i className={service.icon} />
                </div>
                <div className="content">
                  <h4 className="title w-600">{service.title}</h4>
                  <p className="description b1 color-gray mb--0">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ====== Complementary Services ====== */}
        <div className="row mt--60">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h2 className="title w-600 mb--20">Complementary Services</h2>
              <p className="description b1">
                Additional solutions for a comprehensive strategy.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-5 service-wrapper">
          {complementaryServicesEN.map((service, index) => (
            <div
              key={index}
              className="col-lg-6 col-md-6 col-sm-12 col-12"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={service.delay}
            >
              <div className="service service__style--1 icon-circle-style text-center">
                <div className="icon">
                  <i className={service.icon} />
                </div>
                <div className="content">
                  <h4 className="title w-600">{service.title}</h4>
                  <p className="description b1 color-gray mb--0">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
