"use client";
import React from "react";
import { services12 } from "@/data/service";

const Service = () => {
  return (
    <div className="service-wrapper">
      {services12 && services12.length > 0 ? (
        services12.map((service, index) => (
          <div key={index} className="service-card">
            <i className={`icon ${service.icon}`} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))
      ) : (
        <p>No hay servicios disponibles.</p>
      )}
    </div>
  );
};

export default Service;
