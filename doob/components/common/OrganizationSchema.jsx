import { siteUrl } from "@/lib/seo";

export default function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Transocean Systems",
        url: `${siteUrl}/`,
        description: "Inteligencia estratégica, gestión de riesgos sistémicos y protección de infraestructura crítica.",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Transocean Systems",
        url: `${siteUrl}/`,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: ["es-MX", "en"],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
