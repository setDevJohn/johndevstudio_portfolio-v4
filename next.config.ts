/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = {
  allowedDevOrigins: ['https://johndevstudio.com'],
};

export default nextConfig;
