/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withPlugins = require("next-compose-plugins");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPlugins(
  [withMDX({ pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"] })],
  [withBundleAnalyzer],
  nextConfig
);
