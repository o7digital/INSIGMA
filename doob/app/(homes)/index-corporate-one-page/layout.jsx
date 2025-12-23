"use client";
import { useEffect } from "react";
import BackToTop from "@/components/common/BackToTop";

export default function OnPageLayout({ children }) {
  return (
    <>
      {children}
      <BackToTop />
    </>
  );
}
