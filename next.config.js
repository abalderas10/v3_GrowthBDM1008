/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com',
      'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      'www.anser.com.tr'
    ],
  },
}

module.exports = nextConfig;