import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2seqvvyy3b8p2.cloudfront.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "bs.plantnet.org",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;