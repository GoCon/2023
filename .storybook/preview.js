import { theme } from '../src/styles/theme'
import { ThemeProvider } from '@mui/material/styles'
import '../src/styles/globals.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
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
