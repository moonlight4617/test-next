/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: ['localhost'],
    // domains: ['strapi-production-da65.up.railway.app'],
  },
  publicRuntimeConfig: {
    hatenaApi: process.env.HATENA_API,
    blogUrl: 'https://fluid-27.hatenablog.com/',
    strapi: process.env.STRAPI,
    strapiApi: process.env.STRAPI_API
  }
}

module.exports = nextConfig
