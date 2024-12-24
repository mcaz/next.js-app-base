const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/': path.resolve(__dirname, '../src'),
      '@/frontend': path.resolve(__dirname, '../src/env/frontend'),
      '@/components': path.resolve(__dirname, '../src/env/frontend/components'),
      '@/libs': path.resolve(__dirname, '../src/libs'),
      types: path.resolve(__dirname, '../src/types'),
    };

    return config;
  },
};
