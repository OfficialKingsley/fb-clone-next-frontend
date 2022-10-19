/** @type {import('next').NextConfig} */
const environment = process.env.NODE_ENV;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BACKEND_URL:
      environment === "production"
        ? "https://facebook-clone-django-backend.onrender.com"
        : "http://localhost:8000",
    BACKEND_API_URL: `${process.env.BACKEND_URL}/api`,
  },
  images: {
    domains: ["onrender.com", "", ".onrender.com"],
  },
};
module.exports = nextConfig;
