import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Rasmlar uchun sozlamalar
  // trailingSlash: true,  
  images: {
    // Statik eksportda barcha rasmlar optimizatsiyasiz ishlatilsin
    unoptimized: true,
  },
  // skipTrailingSlashRedirect: true,
  distDir: 'dist',
};

export default nextConfig;