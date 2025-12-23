"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import ModeSwitcher from "../common/ModeSwitcher";
import LanguageSwitcher from "../common/LanguageSwitcher";
import { openMenu, closeMenu } from "@/utlis/toggleMenu";

const Header5EN = () => {
  // Smooth scroll to sections
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }, []);

  // Close mobile menu after link click
  useEffect(() => {
    const menuLinks = document.querySelectorAll(".popup-mobile-menu a[href^='#']");
    const handleLinkClick = () => {
      closeMenu();
    };

    menuLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      menuLinks.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <header className="rainbow-header header-default header-not-transparent header-sticky" style={{ backgroundColor: "var(--color-bg-body)", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      <div className="container position-relative">
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-lg-3 col-md-6 col-6">
            <div className="logo">
              <Link href="/en/index-corporate-one-page">
                <img 
                  src="/logo/transtek-logo.png" 
                  alt="TRANSTEK - Multidimensional Strategic Intelligence" 
                  width="260"
                  height="auto"
                  style={{ maxHeight: "91px", width: "auto" }}
                />
              </Link>
            </div>
          </div>

          {/* Desktop menu and switcher */}
          <div className="col-lg-9 col-md-6 col-6">
            <div className="header-right">
              <nav className="mainmenu-nav d-none d-lg-block">
                <ul className="mainmenu">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#methodology">Methodology</a></li>
                  <li><a href="#benefits">Benefits</a></li>
                  <li><a href="#success-stories">Success Stories</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </nav>
              
              {/* Hamburger on mobile */}
              <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                <div className="hamberger">
                  <button onClick={openMenu} className="hamberger-button" aria-label="Open menu">
                    <i className="feather-menu"></i>
                  </button>
                </div>
              </div>

              {/* Mode Switcher */}
              <ModeSwitcher />
              
              {/* Language Switcher */}
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="popup-mobile-menu">
        <div className="inner">
          <div className="header-top">
            <div className="menu-header">
              <h6 className="title">Menu</h6>
              <button onClick={closeMenu} className="close-button close-mobile-menu" aria-label="Close menu">
                <i className="feather-x"></i>
              </button>
            </div>
          </div>
          <ul className="mainmenu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#methodology">Methodology</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#success-stories">Success Stories</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header5EN;
