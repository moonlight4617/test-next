/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/blog/',
        destination: 'https://umayadia-apisample.azurewebsites.net/api/persons/Shakespeare',
        // destination: 'https://blog.hatena.ne.jp/fluid_27/fluid-27.hatenablog.com/atom/entry',
      },
    ]
  },
}

module.exports = nextConfig
