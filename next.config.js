/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "**", // or specific domains
    },
  ],
}

}

module.exports = nextConfig