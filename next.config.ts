import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",

  // Disable image optimization (not supported in static export)
  images: {
    unoptimized: true,
  },

  // Base path for GitHub Pages project site
  basePath: "/portfolio",

  // Trailing slashes help with GitHub Pages routing
  trailingSlash: true,
};

export default nextConfig;
