import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "noccvatccxpakfedhysz.supabase.co",
        pathname: "/storage/v1/object/public/pet-images/**",
      },
    ],
  },
};

export default nextConfig;
