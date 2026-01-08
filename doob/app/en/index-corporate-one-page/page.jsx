import Copywrite from "@/components/footers/Copywrite";
import Header5EN from "@/components/headers-en/Header5EN";
import ContactEN from "@/components/othersPages-en/ContactEN";
import HeroEN from "@/components/homes/index-corporate-one-page-en/HeroEN";
import AboutUsEN from "@/components/homes/index-corporate-one-page-en/AboutUsEN";
import ServiceEN from "@/components/homes/index-corporate-one-page-en/ServiceEN";
import M7TechnologiesEN from "@/components/homes/index-corporate-one-page-en/M7TechnologiesEN";
import MethodologyEN from "@/components/homes/index-corporate-one-page-en/MethodologyEN";
import BenefitsEN from "@/components/homes/index-corporate-one-page-en/BenefitsEN";
import SuccessStoriesEN from "@/components/homes/index-corporate-one-page-en/SuccessStoriesEN";
import CallToActionEN from "@/components/homes/index-corporate-one-page-en/CallToActionEN";
import React from "react";

export const metadata = {
  title: "TRANSTECK | Multidimensional Strategic Intelligence",
  description:
    "Specialized consulting in multidimensional intelligence: preventing risks, threats and vulnerabilities in corporate, industrial and governmental sectors.",
  keywords: "strategic intelligence, risk analysis, security consulting, crisis management, asset protection, Mexico",
  authors: [{ name: "TRANSTECK" }],
  creator: "TRANSTECK",
  publisher: "TRANSTECK",
  openGraph: {
    title: "TRANSTECK | Comprehensive Corporate Security System",
    description: "Specialized consulting in multidimensional strategic intelligence",
    url: "https://transteck.vercel.app/en",
    siteName: "TRANSTECK",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/transteck/hero1.webp",
        width: 1920,
        height: 1080,
        alt: "TRANSTECK - Comprehensive Corporate Security System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRANSTECK | Strategic Intelligence",
    description: "Specialized consulting in multidimensional intelligence",
    images: ["/transteck/hero1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://transteck.vercel.app/en/index-corporate-one-page",
    languages: {
      "es-MX": "https://transteck.vercel.app/index-corporate-one-page",
      "en-US": "https://transteck.vercel.app/en/index-corporate-one-page",
    },
  },
};

export default function Page() {
  return (
    <>
      <Header5EN />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>

      {/* HOME */}
      <section id="home">
        <HeroEN />
      </section>

      {/* ABOUT US (Mission, Vision, Values, Experience) */}
      <section id="about">
        <AboutUsEN />
      </section>

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* SERVICES */}
      <section id="services">
        <ServiceEN />
      </section>

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* M7 TECHNOLOGIES */}
      <section id="m7technologies">
        <M7TechnologiesEN />
      </section>

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* METHODOLOGY */}
      <section id="methodology">
        <MethodologyEN />
      </section>

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* BENEFITS */}
      <section id="benefits">
        <BenefitsEN />
      </section>

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* SUCCESS STORIES */}
      <section id="success">
        <SuccessStoriesEN />
      </section>

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* CALL TO ACTION */}
      <section id="cta">
        <CallToActionEN />
      </section>

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* CONTACT */}
      <section id="contact">
        <ContactEN />
      </section>

      <Copywrite />
    </>
  );
}
