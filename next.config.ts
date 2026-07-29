import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // Next's image optimizer refuses to fetch from hosts that resolve to a
    // private/loopback IP (e.g. localhost) as an SSRF guard, which blocks the
    // local Strapi dev server regardless of remotePatterns. Skip the proxy.
    unoptimized: process.env.NEXT_PUBLIC_STRAPI_URL?.includes("localhost") ?? false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "cms.primecapitalsc.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
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
