import { homeMetadata } from "@/lib/seo";
import OrganizationSchema from "@/components/common/OrganizationSchema";
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

export const metadata = homeMetadata("en");

export default function Page() {
  return (
    <>
      <OrganizationSchema />
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
