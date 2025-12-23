import BackToTop from "@/components/common/BackToTop";

export const metadata = {
  title: "TRANSTEK | Multidimensional Strategic Intelligence",
  description: "Specialized consulting in multidimensional intelligence",
  alternates: {
    canonical: "https://transtek.vercel.app/en",
    languages: {
      "es-MX": "https://transtek.vercel.app",
      "en-US": "https://transtek.vercel.app/en",
    },
  },
};

export default function EnglishLayout({ children }) {
  return (
    <>
      {children}
      <BackToTop />
    </>
  );
}
