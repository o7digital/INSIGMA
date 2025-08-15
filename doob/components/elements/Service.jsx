"use client";

import React from "react";
import { services12 } from "@/data/service"; // Import corregido

const Service = () => {
  const data = services12 || []; // Evitar undefined

  return (
    <div className="row">
      {data.length > 0 ? (
        data.map((service, index) => (
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
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
        ))
      ) : (
        <p>No hay servicios para mostrar.</p>
      )}
    </div>
  );
};

export default Service;
