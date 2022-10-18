/** @type {import('next').NextConfig} */
const environment = process.env.NODE_ENV;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BACKEND_URL: environment === "production" ? "" : "http://localhost:8000",
    BACKEND_API_URL: `${process.env.BACKEND_URL}/api`,
  },
  images: {
    domains: [process.env.BACKEND_URL],
  },
};
module.exports = nextConfig;
