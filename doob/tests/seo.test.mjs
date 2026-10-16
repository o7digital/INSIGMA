import { test } from "node:test";
import assert from "node:assert/strict";

const base = process.env.SEO_TEST_URL || "http://localhost:3100";
const domain = "https://www.transoceansystems.com";

for (const [path, lang] of [["/", "es"], ["/en", "en"]]) {
  test(`${path} serves indexable HTML in the correct language`, async () => {
    const response = await fetch(`${base}${path}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(`<html lang="${lang}">`));
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
    assert.match(html, /name="robots" content="index, follow"/);
    const canonical = html.match(/rel="canonical" href="([^"]+)"/)[1];
    assert.equal(new URL(canonical).href, new URL(domain + path).href);
    assert.match(html, /hrefLang="en"/i);
    assert.match(html, /hrefLang="es-MX"/i);
    assert.match(html, /hrefLang="x-default"/i);
    assert.match(html, /property="og:image" content="https:\/\/www\.transoceansystems\.com\//);
    assert.doesNotMatch(html, /localhost:3000|transteck-logo\.png/);
    const data = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
    assert.equal(data["@graph"][0]["@type"], "Organization");
    assert.equal(data["@graph"][0].name, "Transocean Systems");
    assert.match(html, /id="home"/);
    assert.match(html, /hero1\.webp/);
  });
}

test("legacy and placeholder routes permanently redirect to real content", async () => {
  for (const [source, destination] of [
    ["/index-corporate-one-page", "/"],
    ["/en/index-corporate-one-page", "/en"],
    ["/about", "/#mision"], ["/services", "/#servicios"], ["/contact", "/#contacto"],
  ]) {
    const response = await fetch(`${base}${source}`, { redirect: "manual" });
    assert.equal(response.status, 308, source);
    const target = new URL(response.headers.get("location"), base);
    assert.equal(target.pathname + target.hash, destination, source);
  }
});

test("template pages are excluded from indexing", async () => {
  for (const path of ["/button", "/index-corporate", "/blog-grid", "/portfolio"]) {
    const response = await fetch(`${base}${path}`);
    assert.equal(response.status, 200);
    assert.match(await response.text(), /name="robots" content="noindex, follow"/, path);
  }
});

test("sitemap includes only canonical indexable pages", async () => {
  const response = await fetch(`${base}/sitemap.xml`);
  assert.equal(response.status, 200);
  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(urls, ["/", "/en", "/privacy-policy", "/en/privacy-policy"].map((path) => domain + path));
  for (const url of urls) {
    const path = new URL(url).pathname;
    const page = await fetch(`${base}${path}`, { redirect: "manual" });
    assert.equal(page.status, 200, path);
    assert.doesNotMatch(await page.text(), /name="robots" content="noindex/, path);
  }
});

test("robots allows rendering resources and advertises the new sitemap", async () => {
  const response = await fetch(`${base}/robots.txt`);
  assert.equal(response.status, 200);
  const text = await response.text();
  assert.ok(text.includes(`Sitemap: ${domain}/sitemap.xml`));
  assert.doesNotMatch(text, /Disallow: \/_next\//);
});
