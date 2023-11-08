/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverComponentsExternalPackages: [
        "@medusajs/product",
      ],
    },
  }
  
  module.exports = nextConfig