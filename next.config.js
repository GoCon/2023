/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: '/2023',
  basePath: '/2023',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' }
    }
  }
}

module.exports = nextConfig
