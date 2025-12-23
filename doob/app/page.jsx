import Home from "./(homes)/index-corporate-one-page/page";

export const metadata = {
  title: "TRANSTEK | Inteligencia Estratégica Multidimensional",
  description: "Consultoría especializada en inteligencia multidimensional",
  alternates: {
    canonical: "https://transtek.vercel.app",
    languages: {
      "es-MX": "https://transtek.vercel.app",
      "en-US": "https://transtek.vercel.app/en",
    },
  },
};

export default function MainPage() {
  return <Home />;
}
