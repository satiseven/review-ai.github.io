/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/review-ai-website" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/review-ai-website/" : "",
};

module.exports = nextConfig;
