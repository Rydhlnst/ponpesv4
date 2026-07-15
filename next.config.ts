import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-62aa62501f804850bb483af87f80c9fa.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
