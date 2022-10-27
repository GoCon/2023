import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    allVariants: { fontFamily: 'Poppins' },
    h1: { fontSize: 50 },
    // TODO: Fix fontSize as follow Figma's one.
    h2: { fontSize: 24 },
    h3: { fontSize: 34 },
    caption: { fontSize: 14 }
  }
})
