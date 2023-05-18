import { StorybookConfig } from '@storybook/nextjs'
const path = require('path')

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  framework: { name: '@storybook/nextjs', options: {} },
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  staticDirs: ['../public'],
  webpackFinal(config) {
    if (config.resolve && config.resolve.alias) {
      config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '..')]

      delete config.resolve.alias['emotion-theming']
      delete config.resolve.alias['@emotion/styled']
      delete config.resolve.alias['@emotion/core']
    }
    return config
  }
}

export default config
