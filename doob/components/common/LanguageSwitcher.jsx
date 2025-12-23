"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  
  // Déterminer si on est sur la version EN ou ES
  const isEnglish = pathname?.startsWith("/en");
  
  // Construire l'URL de la version alternative
  const alternateUrl = isEnglish 
    ? pathname.replace("/en/", "/")
    : `/en${pathname}`;

  return (
    <div className="language-switcher ms-3">
      <Link 
        href={alternateUrl}
        className="btn-default btn-small btn-border"
        style={{
          padding: "8px 16px",
          borderRadius: "6px",
          fontSize: "14px",
          fontWeight: "600",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          transition: "all 0.3s ease"
        }}
      >
        <i className="feather-globe" style={{ fontSize: "16px" }} />
        {isEnglish ? "ES" : "EN"}
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
