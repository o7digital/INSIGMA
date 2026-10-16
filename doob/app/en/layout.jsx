import "@/public/assets/scss/main.scss";
import "react-modal-video/scss/modal-video.scss";
import "photoswipe/dist/photoswipe.css";
import SiteEffects from "@/components/layouts/SiteEffects";
import { baseMetadata } from "@/lib/seo";

export const metadata = baseMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1A4D7C" />
      </head>
      <body className="active-dark-mode">
        <SiteEffects>{children}</SiteEffects>
      </body>
    </html>
  );
}
