/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  serverRuntimeConfig: {
    tokenCookieMaxAge: process.env.TOKEN_COOKIE_MAX_AGE
      ? parseInt(process.env.TOKEN_COOKIE_MAX_AGE, 10)
      : 60000,
  },
}

module.exports = nextConfig
