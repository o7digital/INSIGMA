import Home from "./(homes)/index-corporate-one-page/page";

export const metadata = {
  title: "Transocean Systems | Inteligencia Estratégica Multidimensional",
  description: "Consultoría especializada en inteligencia multidimensional",
  alternates: {
    canonical: "https://www.transoceansystems.com",
    languages: {
      "es-MX": "https://www.transoceansystems.com",
      "en-US": "https://www.transoceansystems.com/en",
    },
  },
};

export default function MainPage() {
  return <Home />;
}
