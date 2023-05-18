import { createTheme, ThemeOptions } from '@mui/material/styles'
import { Colors } from './color'

const { breakpoints } = createTheme()
const defaultTheme = createTheme({
  typography: {
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
        fontFamily: [
          'Poppins',
          'Montserrat',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif'
        ].join(',')
      }
    }
  }
}
