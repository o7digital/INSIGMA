export const siteUrl = "https://www.transoceansystems.com";

export const baseMetadata = {
  metadataBase: new URL(siteUrl),
  robots: { index: false, follow: true },
};

export function homeMetadata(language) {
  const english = language === "en";
  const url = `${siteUrl}${english ? "/en" : "/"}`;
  const title = english
    ? "Strategic Intelligence & Risk Management | Transocean Systems"
    : "Inteligencia estratégica y gestión de riesgos | Transocean Systems";
  const description = english
    ? "Strategic intelligence, systemic risk management and critical infrastructure protection for corporate, industrial and government organizations in Mexico."
    : "Inteligencia estratégica, gestión de riesgos sistémicos y protección de infraestructura crítica para empresas, industria e instituciones en México.";
  const images = [{
    url: "/transteck/hero1.webp",
    alt: "Transocean Systems",
  }];

  return {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: url,
      languages: { "es-MX": `${siteUrl}/`, "en": `${siteUrl}/en`, "x-default": `${siteUrl}/` },
    },
    openGraph: {
      title, description, url, siteName: "Transocean Systems",
      locale: english ? "en_US" : "es_MX",
      alternateLocale: english ? "es_MX" : "en_US",
      type: "website", images,
    },
    twitter: { card: "summary_large_image", title, description, images },
  };
}
