import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  devIndicators: false,
  experimental: {
    optimizePackageImports: ["shiki", "motion"],
  },
};

export default nextConfig;
