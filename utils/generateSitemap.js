import fs, { writeFile, writeFileSync } from "fs";
import { createClient } from "contentful";

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

  const getAllBlogPost = async () => {
    const client = createClient({
      space: `${process.env.CONTENTFUL_SPACE_ID}`,
      accessToken: `${process.env.CONTENTFUL_ACCESS_KEY}`,
    });

    const res = await client.getEntries({
      content_type: "blogV2",
    });
    return {
      props: {
        blogV2: res.items,
      },
      revalidate: 3600,
    };
  };

  const blogs = await getAllBlogPost();
  const blogsData = blogs.props.blogV2;
  const blogsDataUrl = blogsData.map(
    (item) => `${baseUrl}/blog/${item.fields.slug}`
  );

  const allPages = [...staticPages, ...blogsDataUrl];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allPages
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