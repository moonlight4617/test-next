/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/blog/',
  //       // destination: 'https://blog.hatena.ne.jp/fluid_27/fluid-27.hatenablog.com/atom/entry',
  //     },
  //   ]
  // },
  publicRuntimeConfig: {
    hatenaApi: 'https://blog.hatena.ne.jp/fluid_27/fluid-27.hatenablog.com/atom/entry',
    blogUrl: 'https://fluid-27.hatenablog.com/',
  }
}

module.exports = nextConfig
