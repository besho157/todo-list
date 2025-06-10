// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: 'loose', 
  },
  outputFileTracingExcludes: {
    '*': ['node_modules/@swc/core-win32-x64-msvc', 'node_modules/webpack'],
  },
  serverExternalPackages: ['sharp', 'unrs-resolver'], 
};

export default nextConfig; 