const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal(config) {
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '..')]

    delete config.resolve.alias['emotion-theming']
    delete config.resolve.alias['@emotion/styled']
    delete config.resolve.alias['@emotion/core']
    return config
  },
  staticDirs: ['../public']
}
