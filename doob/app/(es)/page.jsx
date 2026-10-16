import Home from "./(homes)/index-corporate-one-page/page";
import { homeMetadata } from "@/lib/seo";

export const metadata = homeMetadata("es");

export default function Page() {
  return <Home />;
}
