/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // static export for GitHub Pages: next/image has no server to optimize with
  images: { unoptimized: true },
  // set NEXT_PUBLIC_BASE_PATH=/repo-name only if served from a project page without a custom domain
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
}

module.exports = nextConfig
