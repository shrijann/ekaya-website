import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ekaya-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;