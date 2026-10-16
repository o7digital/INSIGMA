import BackToTop from "@/components/common/BackToTop";

export const metadata = {
  title: "Transocean Systems | Multidimensional Strategic Intelligence",
  description: "Specialized consulting in multidimensional intelligence",
  alternates: {
    canonical: "https://www.transoceansystems.com/en",
    languages: {
      "es-MX": "https://www.transoceansystems.com",
      "en-US": "https://www.transoceansystems.com/en",
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
