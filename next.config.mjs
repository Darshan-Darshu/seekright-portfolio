/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "seekright.com",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
