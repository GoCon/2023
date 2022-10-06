import 'src/styles/globals.css'
import 'src/i18n/configs'
import { theme } from 'src/styles/theme'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
