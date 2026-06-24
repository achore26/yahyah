/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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

module.exports = nextConfig;
