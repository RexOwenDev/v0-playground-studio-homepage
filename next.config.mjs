/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'playgroundstudio.com.au',
      },
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
      },
    ],
  },
}

export default nextConfig
