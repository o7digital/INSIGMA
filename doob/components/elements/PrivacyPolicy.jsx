import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-6">Aviso de Privacidad</h1>

      <p className="mb-4">
        TRANSOCEAN S.A. de C.V., con domicilio en Monte Albán #64 interior 1,
        Colonia Narvarte Oriente, C.P. 03020, Alcaldía Benito Juárez, Ciudad de
        México, México, en cumplimiento con la Ley Federal de Protección de
        Datos Personales en Posesión de los Particulares (LFPDPPP), pone a su
        disposición el presente Aviso de Privacidad.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        1. Datos Personales que Recabamos
      </h2>
      <p className="mb-4">
        Podremos recabar datos como: nombre, correo electrónico, teléfono,
        empresa y cualquier otra información necesaria para la prestación de
        nuestros servicios de consultoría e inteligencia estratégica.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        2. Finalidades del Tratamiento
      </h2>
      <p className="mb-4">
        Los datos personales serán utilizados para: (i) proveer los servicios
        solicitados; (ii) dar cumplimiento a obligaciones legales; (iii)
        actividades de comunicación, mercadotecnia y promoción de nuestros
        servicios; (iv) fines estadísticos internos.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Uso de Cookies</h2>
      <p className="mb-4">
        Nuestro sitio web utiliza cookies para mejorar la experiencia del
        usuario, analizar patrones de navegación y ofrecer contenido
        personalizado. Usted puede desactivar las cookies desde la configuración
        de su navegador, aunque algunas funciones del sitio podrían verse
        limitadas.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Derechos ARCO</h2>
      <p className="mb-4">
        Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al
        tratamiento de sus datos personales (Derechos ARCO). Puede ejercer estos
        derechos enviando una solicitud al correo electrónico:{" "}
        <a href="mailto:contacto@transocean.com" className="text-blue-600">
          contacto@transocean.com
        </a>
        . Daremos respuesta en un plazo máximo de 20 días hábiles y, de ser
        procedente, haremos efectivo el derecho solicitado en un plazo de 15
        días hábiles adicionales.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        5. Transferencia de Datos
      </h2>
      <p className="mb-4">
        Sus datos no serán compartidos con terceros sin su consentimiento
        expreso, salvo cuando sea requerido por ley o por autoridades
        competentes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Modificaciones</h2>
      <p className="mb-4">
        Cualquier cambio al presente Aviso de Privacidad será publicado en
        nuestro sitio web{" "}
        <a href="https://transtek.vercel.app" className="text-blue-600">
          https://transtek.vercel.app
        </a>
        .
      </p>

      <p className="mt-8">Última actualización: Septiembre 2025.</p>
    </div>
  );
}
