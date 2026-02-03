import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",

  // Disable image optimization (not supported in static export)
  images: {
    unoptimized: true,
  },

  // Base path for GitHub Pages (only in production)
  basePath: isProduction ? "/portfolio" : "",

  // Trailing slashes help with GitHub Pages routing
  trailingSlash: true,
};

export default nextConfig;
