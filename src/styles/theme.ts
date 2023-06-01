import { createTheme, ThemeOptions } from '@mui/material/styles'
import { Colors } from './color'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  fallback: ['Helvetica Neue', 'Arial', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Meiryo', 'sans-serif']
})

const { breakpoints } = createTheme()
const defaultTheme = createTheme({
  typography: {
    h1: {
      fontSize: '50px',
      fontWeight: 500,
      [breakpoints.down('sm')]: {
        fontSize: '24px'
      }
    },
    h2: {
      fontSize: '50px',
      fontWeight: 500,
      marginBottom: '40px',
      [breakpoints.down('sm')]: {
        fontSize: '24px',
        marginBottom: '16px'
      }
    },
    h3: {
      fontSize: '34px',
      fontWeight: 600,
      marginBottom: '24px',
      [breakpoints.down('sm')]: {
        fontSize: '20px',
        marginBottom: '16px'
      }
    },
    h4: {
      fontSize: '20px',
      fontWeight: 700,
      [breakpoints.down('sm')]: {
        fontSize: '16px'
      }
    },
    h5: {
      fontSize: '24px',
      lineHeight: '120%',
      [breakpoints.down('sm')]: {
        fontSize: '17px'
      }
    },
    h6: {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '120%',
      [breakpoints.down('sm')]: {
        fontSize: '12px'
      }
    },
    subtitle1: {
      fontSize: '12px',
      lineHeight: '120%',
      [breakpoints.down('sm')]: {
        fontSize: '11px'
      }
    },
    body1: {
      fontSize: '24px',
      [breakpoints.down('sm')]: {
        fontSize: '16px'
      }
    },
    body2: {
      fontSize: '18px',
      lineHeight: '150%',
      [breakpoints.down('sm')]: {
        fontSize: '14px'
      }
    },
    caption: {
      fontSize: '12px',
      [breakpoints.down('sm')]: {
        fontSize: '10px'
      }
    }
  }
})

export const theme: ThemeOptions = {
  ...defaultTheme,
  components: {
    MuiTypography: {
      defaultProps: {
        color: Colors.text.primary,
        fontFamily: poppins.style.fontFamily
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingLeft: '0',
          paddingRight: '0'
        }
      }
    }
  }
}
