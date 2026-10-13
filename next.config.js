/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // static export for GitHub Pages: next/image has no server to optimize with
  images: { unoptimized: true },
}

module.exports = nextConfig
