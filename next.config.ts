import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", 
      },
      // {
      //   protocol: "http",
      //   hostname: "**",
      // },
      {
        protocol: "https",
        hostname: "yehulu.weytech.et", 
        pathname: "/uploads/**",      
      },
      {
        protocol: "https",
        hostname: "yehulusaccos.et", 
        pathname: "/uploads/**",      
      },
    ],
  },
};

export default nextConfig;
