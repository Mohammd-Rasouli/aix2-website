import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // three.js ships modern ESM; transpiling keeps older Safari happy.
  transpilePackages: ['three'],
};

export default nextConfig;
