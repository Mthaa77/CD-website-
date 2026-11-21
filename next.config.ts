import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Sites serves the pre-compressed local WebP assets directly. This avoids
    // a runtime optimisation request before an important project visual paints.
    unoptimized: true,
  },
};

export default nextConfig;
