const withPlugins = require('next-compose-plugins');
const images = require('next-images');
const path = require('path');
const bundleAnalyzer = require('@next/bundle-analyzer');

module.exports = withPlugins(
  [
    [images, {}],
    [
      bundleAnalyzer,
      {
        enabled: process.env.ANALYZE === 'true',
      },
    ],
  ],
  {
    reactStrictMode: false,
    // esModule: false,
    compress: true,
    typescript: {},
    experimental: {
      // esmExternals: false,
    },
    images: {
      disableStaticImages: true,
      loader: 'imgix',
      path: 'https://example.com/myaccount/',
    },
    env: {},
    pageExtensions: [
      'foundation.ts',
      'foundation.tsx',
      'api.ts',
      'page.ts',
      'page.tsx',
    ],
    webpack(config, { webpack }) {
      config.resolve.alias['~'] = path.resolve('src');
      return config;
    },
  }
);
