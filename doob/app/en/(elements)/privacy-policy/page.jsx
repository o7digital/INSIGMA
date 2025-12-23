import React from "react";

export const metadata = {
  title: "Privacy Policy | TRANSTEK",
  description: "Privacy policy and personal data protection",
  alternates: {
    canonical: "https://transtek.vercel.app/en/privacy-policy",
    languages: {
      "es-MX": "https://transtek.vercel.app/privacy-policy",
      "en-US": "https://transtek.vercel.app/en/privacy-policy",
    },
  },
};

export default function PrivacyPolicyEN() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-6">Privacy Notice</h1>

      <p className="mb-4">
        TRANSOCEAN S.A. de C.V., located at Monte Albán #64 interior 1,
        Colonia Narvarte Oriente, C.P. 03020, Alcaldía Benito Juárez, Mexico City,
        Mexico, in compliance with the Federal Law on Protection of Personal Data
        Held by Private Parties (LFPDPPP), provides this Privacy Notice.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        1. Personal Data We Collect
      </h2>
      <p className="mb-4">
        We may collect data such as: name, email, phone number, company, and any
        other information necessary for the provision of our strategic intelligence
        and consulting services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        2. Purpose of Data Processing
      </h2>
      <p className="mb-4">
        Personal data will be used to: (i) provide requested services; (ii) comply
        with legal obligations; (iii) communication, marketing and promotion
        activities of our services; (iv) internal statistical purposes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Use of Cookies</h2>
      <p className="mb-4">
        Our website uses cookies to enhance user experience, analyze browsing
        patterns, and offer personalized content. You can disable cookies through
        your browser settings, although some site features may be limited.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. ARCO Rights</h2>
      <p className="mb-4">
        You have the right to Access, Rectify, Cancel or Oppose the processing of
        your personal data (ARCO Rights). You can exercise these rights by sending
        a request to:{" "}
        <a href="mailto:contacto@transocean.com" className="text-blue-600">
          contacto@transocean.com
        </a>
        . We will respond within a maximum period of 20 business days and, if
        applicable, will make the requested right effective within an additional
        15 business days.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        5. Data Transfer
      </h2>
      <p className="mb-4">
        Your data will not be shared with third parties without your express
        consent, except when required by law or by competent authorities.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Modifications</h2>
      <p className="mb-4">
        Any changes to this Privacy Notice will be published on our website{" "}
        <a href="https://transtek.vercel.app" className="text-blue-600">
          https://transtek.vercel.app
        </a>
        .
      </p>

      <p className="mt-8">Last updated: September 2025.</p>
    </div>
  );
}
