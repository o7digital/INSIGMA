"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import ModeSwitcher from "../common/ModeSwitcher";

const Header5 = () => {
  // Scroll suave a secciones
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

  // Toggle menú móvil
  useEffect(() => {
    const body = document.body;
    const openBtn = document.querySelector(".hamberger-button");
    const closeBtn = document.querySelector(".close-mobile-menu");

    const open = () => body.classList.add("popup-mobile-menu-active");
    const close = () => body.classList.remove("popup-mobile-menu-active");

    openBtn?.addEventListener("click", open);
    closeBtn?.addEventListener("click", close);

    document.querySelectorAll(".popup-mobile-menu a[href^='#']").forEach(a => {
      a.addEventListener("click", close);
    });

    return () => {
      openBtn?.removeEventListener("click", open);
      closeBtn?.removeEventListener("click", close);
      document.querySelectorAll(".popup-mobile-menu a[href^='#']").forEach(a => {
        a.removeEventListener("click", close);
      });
    };
  }, []);

  return (
    <header className="rainbow-header header-default header-transparent header-sticky">
      <div className="container position-relative">
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-lg-3 col-md-6 col-6">
            <div className="logo">
              <Link href="/">
                <img src="/images/logo/logo.png" alt="TRANSTEK" />
              </Link>
            </div>
          </div>

          {/* Menú desktop et switcher */}
          <div className="col-lg-9 col-md-6 col-6">
            <div className="header-right">
              <nav className="mainmenu-nav d-none d-lg-block">
                <ul className="mainmenu">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#mision">Quiénes Somos</a></li>
                  <li><a href="#servicios">Servicios</a></li>
                  <li><a href="#metodologia">Metodología</a></li>
                  <li><a href="#beneficios">Beneficios</a></li>
                  <li><a href="#casos">Casos de Éxito</a></li>
                  <li><a href="#contacto">Contacto</a></li>
                </ul>
              </nav>
              
              {/* Hamburger en móvil */}
              <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                <div className="hamberger">
                  <button className="hamberger-button" aria-label="Abrir menú">
                    <i className="feather-menu"></i>
                  </button>
                </div>
              </div>

              {/* Mode Switcher */}
              <ModeSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div className="popup-mobile-menu d-lg-none">
        <div className="inner">
          <div className="menu-top">
            <div className="menu-header">
              <h6 className="title">Menú</h6>
              <button className="close-button close-mobile-menu" aria-label="Cerrar menú">
                <i className="feather-x"></i>
              </button>
            </div>
          </div>
          <ul className="mainmenu">
            <li><a href="#home">Home</a></li>
            <li><a href="#mision">Quiénes Somos</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#metodologia">Metodología</a></li>
            <li><a href="#beneficios">Beneficios</a></li>
            <li><a href="#casos">Casos de Éxito</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header5;
