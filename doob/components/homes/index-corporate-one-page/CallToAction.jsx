"use client";
import React from "react";

export default function CallToAction() {
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
                  Si su institución opera en un entorno crítico, la anticipación estratégica no es opcional.
                </h2>
                <p className="description" data-sal="slide-up" data-sal-duration={700} data-sal-delay={150}></p>
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
                    Solicitar Consulta
                    <i className="feather-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="row mt--60">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="text-center mb--30">
              <div className="icon mb--20" style={{ fontSize: "48px", color: "#4a90e2" }}>
                <i className="feather-shield" />
              </div>
              <h5 className="title">Confidencialidad Absoluta</h5>
              <p className="description">
                Toda la información se maneja con total confidencialidad y ética
                profesional
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="text-center mb--30">
              <div className="icon mb--20" style={{ fontSize: "48px", color: "#4a90e2" }}>
                <i className="feather-users" />
              </div>
              <h5 className="title">Equipo Especializado</h5>
              <p className="description">
                Profesionales con experiencia en inteligencia, seguridad y análisis
                estratégico
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="text-center mb--30">
              <div className="icon mb--20" style={{ fontSize: "48px", color: "#4a90e2" }}>
                <i className="feather-clock" />
              </div>
              <h5 className="title">Respuesta Inmediata</h5>
              <p className="description">
                Capacidad de respuesta rápida ante eventos críticos y situaciones
                emergentes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
