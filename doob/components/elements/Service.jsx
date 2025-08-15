import React from "react";
import { services12 } from "@/data/service";

const Service = () => {
  // Fallback seguro para evitar undefined.map en producción
  const safeServices = services12 || [];

  return (
    <div className="row row--15 service-wrapper">
      {safeServices.map((service, index) => (
        <div
          className="col-lg-4 col-md-6 col-sm-6 col-12"
          key={index}
          data-aos="fade-up"
          data-aos-delay={service.delay}
        >
          <div className="service service__style--1">
            <div className="icon">
              <i className={service.icon}></i>
            </div>
            <div className="content">
              <h4 className="title">{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
