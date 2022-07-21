import fs, { writeFileSync, readdirSync } from "fs";

const generate = async () => {
  const baseUrl = "https://www.aroyanbakti.com";

  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "_app.js", //
        "_document.js",
        "_error.js",
        "experimental.js",
        "about.js",
        "posts.js",
        "sitemap.xml.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      if (staticPagePath === "index.js") {
        return baseUrl;
      }
      return `${baseUrl}/${staticPagePath}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticPages
          .map((url) => {
            return `
                <url>
                    <loc>${url}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>1.0</priority>
                </url>
            `;
          })
          .join("")}
      </urlset>
    `;
  writeFileSync("public/sitemap.xml", sitemap);
};

generate();
