import { theme } from '../src/styles/theme'
import { ThemeProvider } from '@mui/material/styles'
import '../src/styles/globals.css'
import { Colors } from '../src/styles/color'

export const parameters = {
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
}

export const decorators = [
  Story => {
    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  }
]
