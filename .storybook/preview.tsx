import React from 'react'
import { Preview } from '@storybook/react'
import { theme } from '../src/styles/theme'
import { ThemeProvider } from '@mui/material/styles'
import '../src/styles/globals.css'
import { Colors } from '../src/styles/color'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: {
      default: 'primary',
      values: [
        { name: 'primary', value: Colors.background.primary },
        { name: 'secondary', value: Colors.background.secondary },
        { name: 'brand color', value: Colors.background.brand_color }
      ]
    }
  },
  decorators: [
    Story => {
      return (
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      )
    }
  ]
}

export default preview
