import Home from "./index-corporate-one-page/page";
import { homeMetadata } from "@/lib/seo";

export const metadata = homeMetadata("en");

export default function Page() {
  return <Home />;
}
