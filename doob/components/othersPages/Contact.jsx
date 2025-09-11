"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p className="success-message">
      Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.
    </p>
  );
};

export default function Contact() {
  const [result, showresult] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_cyobi0y", "template_4nbexqj", formRef.current, {
        publicKey: "D79JdTqxXVCcQBXL4",
      })
      .then(
        () => {
          showresult(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  setTimeout(() => {
    showresult(false);
  }, 5000);

  return (
    <div className="main-content">
      <div className="rainbow-contact-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb--40">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Formulario de Contacto</span>
                </h4>
                <h2 className="title w-600 mb--20">
                  Contáctanos
                </h2>
              </div>
            </div>
          </div>

          <div className="row row--15">
            <div className="col-lg-12">
              <div className="rainbow-contact-address mt_dec--30">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="rainbow-address">
                      <div className="icon">
                        <i className="feather-headphones" />
                      </div>
                      <div className="inner">
                        <h4 className="title">Teléfono</h4>
                        <p>
                          <a href="tel:+525512345678">+52 (55) 1234 5678</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="rainbow-address">
                      <div className="icon">
                        <i className="feather-mail" />
                      </div>
                      <div className="inner">
                        <h4 className="title">Correo</h4>
                        <p>
                          <a href="mailto:contacto@insigma.com">
                            contacto@insigma.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="rainbow-address">
                      <div className="icon">
                        <i className="feather-map-pin" />
                      </div>
                      <div className="inner">
                        <h4 className="title">Ubicación</h4>
                        <p>
                          Monte Albán #64 Interior 1<br />
                          Col. Narvarte Oriente, CP 03020<br />
                          Alcaldía Benito Juárez, CDMX, México
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt--40 row--15">
            <div className="col-lg-7">
              <form
                ref={formRef}
                className="contact-form-1 rainbow-dynamic-form"
                onSubmit={sendEmail}
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="contact-name"
                    id="contact-name"
                    placeholder="Nombre"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="contact-phone"
                    id="contact-phone"
                    placeholder="Teléfono"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="contact-email"
                    name="contact-email"
                    placeholder="Correo electrónico"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Asunto"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="contact-message"
                    id="contact-message"
                    placeholder="Mensaje"
                    required
                  />
                </div>
                <div className="form-group">
                  <button
                    name="submit"
                    type="submit"
                    id="submit"
                    className="btn-default btn-large rainbow-btn"
                  >
                    <span>Enviar</span>
                  </button>
                </div>
                <div className="form-group">{result ? <Result /> : null}</div>
              </form>
            </div>

            <div className="col-lg-5 mt_md--30 mt_sm--30">
              <div className="google-map-style-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.446877272227!2d-99.15300082501037!3d19.390200381899175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff279ed59f7f%3A0x91c5c82c51f5e648!2sMonte%20Alb%C3%A1n%2064%2C%20Narvarte%20Oriente%2C%20Benito%20Ju%C3%A1rez%2C%2003020%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1694460512345!5m2!1ses-419!2smx"
                  width={600}
                  height={550}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
