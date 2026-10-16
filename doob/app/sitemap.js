import { siteUrl } from "@/lib/seo";

export default function sitemap() {
  return ["/", "/en", "/privacy-policy", "/en/privacy-policy"].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path.includes("privacy-policy") ? "yearly" : "monthly",
    priority: path.includes("privacy-policy") ? 0.3 : 1,
  }));
}
