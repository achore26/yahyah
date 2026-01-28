import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  reactCompiler: true,
  images: {
    unoptimized: true, // Required for cPanel deployment
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true
};

export default nextConfig;
