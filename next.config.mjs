/** @type {import('next').NextConfig} */
const nextConfig = {
  // 在App Router中，我们不需要在这里配置i18n，
  // 而是通过目录结构实现国际化
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig; 