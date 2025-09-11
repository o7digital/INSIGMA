import React from "react";
import Link from "next/link";
export default function Copywrite() {
  return (
    <div className="copyright-area copyright-style-one">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-8 col-sm-12 col-12">
            <div className="copyright-left">
              <ul className="ft-menu link-hover">
                <li>
                  <Link href={`/privacy-policy`}>Aviso de Privacidad</Link>
                </li>
                <li>
                  <a href="#">Terminos y condiciones</a>
                </li>
                <li>
                  <Link href={`/contact`}>Contactarnos</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-12 col-12">
            <div className="copyright-right text-center text-lg-end">
              <p className="copyright-text">
                © Derechos Insigma 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
