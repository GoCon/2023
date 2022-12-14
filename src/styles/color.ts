export const Colors = {
  text: {
    primary: '#2E353B',
    primary_hover: '#82919D',
    secondary: '#636363',
    secondary_default: '#666666',
    white: '#FFFFFF',
    white_hover: '#CADFF8',
    default: '#333333',
    link: '#0078F9',
    tertiary: '#BDC6D0',
    error: '#FB5151',
    icon: '#7989A2'
  },
  button: {
    primary: {
      enabled: '#4D94E6', // Brand color
      text: '#FFFFFF'
    }
  },
  background: {
    brand_color: '#4D94E6',
    primary: '#FFFFFF',
    secondary: '#F7F9FB',
    gopher_blue: '#00ADD8',
    gradation_blue: 'linear-gradient(180deg, #4E96E9 19.27%, rgba(77, 148, 230, 0) 88.54%)',
    darken_1: 'rgba(0,0,0,0.125)'
  },
  border: {
    primary: {
      highlight: '#E5E5E5'
    }
  },
  header: {
    // background-color when a header item is clicked
    active: {
      default: 'rgba(46, 53, 59, 0.1)',
      white: 'rgba(255, 255, 255, 0.1)'
    }
  }
} as const

export const confettiColors = ['#DC5A3E', '#DBCB48', '#4EC76D']
