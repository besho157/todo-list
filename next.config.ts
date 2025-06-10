// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // هذه الإعدادات أشار إليها Next.js في سجلات البناء بأنها نُقلت من experimental
  outputFileTracingExcludes: {
    '*': ['node_modules/@swc/core-win32-x64-msvc', 'node_modules/webpack'],
  },
  serverExternalPackages: ['sharp', 'unrs-resolver'], // تم نقلها من experimental

  // إعدادات experimental الأخرى
  experimental: {
    esmExternals: 'loose', // هذا غالباً يبقى هنا
  },

  // هذا الخيار مهم جداً لـ Cloudflare Pages ويزيل تحذيرات الـ `<img>`
  // تأكد أن هذا السطر موجود في الـ next.config.ts
  // وانه ليس داخل experimental object
  images: {
    unoptimized: true,
  },
};

export default nextConfig; // قم بتغيير module.exports = nextConfig; إلى export default nextConfig;