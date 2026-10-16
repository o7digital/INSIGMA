"use client";
import React from "react";

export default function Contact() {
  return (
    <section className="contact-area py-16 bg-white" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Contáctanos</h2>
          <p className="mt-2 text-gray-600">
            La dirección de la empresa es:
            <br />
            Monte Albán #64 Interior 1,
            <br />
            Col. Narvarte Oriente, CP 03020,
            <br />
            Alcaldía Benito Juárez, CDMX, México
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulario de contacto (ejemplo, puedes personalizarlo) */}
          <div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full border rounded p-2"
              />
              <input
                type="email"
                placeholder="Correo"
                className="w-full border rounded p-2"
              />
              <textarea
                placeholder="Mensaje"
                rows="5"
                className="w-full border rounded p-2"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Enviar
              </button>
            </form>
          </div>

          {/* Mapa de Google con la dirección CDMX */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.446877272227!2d-99.15300082501037!3d19.390200381899175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff279ed59f7f%3A0x91c5c82c51f5e648!2sMonte%20Alb%C3%A1n%2064%2C%20Narvarte%20Oriente%2C%20Benito%20Ju%C3%A1rez%2C%2003020%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1694460512345!5m2!1ses-419!2smx"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
