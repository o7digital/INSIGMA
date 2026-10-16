/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/index-corporate-one-page', destination: '/', permanent: true },
      { source: '/en/index-corporate-one-page', destination: '/en', permanent: true },
      { source: '/about', destination: '/#mision', permanent: true },
      { source: '/services', destination: '/#servicios', permanent: true },
      { source: '/contact', destination: '/#contacto', permanent: true },
    ];
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
