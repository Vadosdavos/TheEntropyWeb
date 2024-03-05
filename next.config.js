/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: "@import 'styles/settings/index.scss';",
  },
  output: "standalone",
  swcMinify: true,
  serverRuntimeConfig: {
    tokenCookieMaxAge: process.env.TOKEN_COOKIE_MAX_AGE
      ? parseInt(process.env.TOKEN_COOKIE_MAX_AGE, 10)
      : 60000,
  },
}

module.exports = nextConfig
