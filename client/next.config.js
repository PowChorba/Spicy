/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "di.phncdn.com"
      },
      {
        hostname: "ei.phncdn.com"
      },
      {
        hostname: "fi1.ypncdn.com"
      }
    ]
  }
}

module.exports = nextConfig
