import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel handles images natively, no need for static export
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
