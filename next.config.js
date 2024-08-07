/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: "@import 'styles/settings/index.scss';",
  },
  output: 'standalone',
  swcMinify: true,
  serverRuntimeConfig: {
    tokenCookieMaxAge: process.env.TOKEN_COOKIE_MAX_AGE
      ? parseInt(process.env.TOKEN_COOKIE_MAX_AGE, 10)
      : 60000,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /.*\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/assets', // the path access the assets via url
          outputPath: 'static/assets/', // where to store on disk
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
