/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // menambahkan metadata untuk logo
        source: "/favicon.ico",
        headers: [
          {
            key: "link",
            value: "/brand.png",
          },
        ],
      },
    ]
  },

  images: {
    domains: ["cdn.rareblocks.xyz"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
}

export default nextConfig