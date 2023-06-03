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
      },
      {
        hostname: "fi1-ph.ypncdn.com"
      },
      {
        hostname: "di1-ph.ypncdn.com"
      },
      {
        hostname: "img-cf.xvideos-cdn.com"
      },
      {
        hostname: "cdn77-pic.xvideos-cdn.com"
      },
      {
        hostname: "img-l3.xvideos-cdn.com"
      }
    ]
  }
}

module.exports = nextConfig
