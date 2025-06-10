// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingExcludes: {
      '*': ['node_modules/@swc/core-win32-x64-msvc', 'node_modules/webpack'],
    },
    esmExternals: 'loose', 
    serverComponentsExternalPackages: ['sharp', 'unrs-resolver'],
  },
};

module.exports = nextConfig;