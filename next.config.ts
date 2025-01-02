import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  // basePath: '/oyaraouf',
  // assetPrefix: '/oyaraouf',
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
