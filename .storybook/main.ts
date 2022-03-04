const { resolve } = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.(mdx|ts|tsx)',
    '../(atoms|molecules|organisms)/**/*.stories.(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-turbo-build',
    /** @see https://storybook.js.org/addons/@storybook/addon-storysource/ */
    '@storybook/addon-storysource',
    /** @see https://storybook.js.org/addons/@storybook/addon-a11y/ */
    '@storybook/addon-a11y',
    /** @see https://storybook.js.org/addons/storybook-mobile/ */
    'storybook-mobile',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  /** @see https://storybook.js.org/docs/react/configure/webpack#extending-storybooks-webpack-config */
  async webpackFinal(config) {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: resolve(__dirname, '../'),
      exclude: /node_modules/,
    });

    return config;
  },
};
