/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["images.ctfassets.net"],
  },
};

module.exports = (phase, nextConfig) => {
  return withBundleAnalyzer(nextConfig);
};
