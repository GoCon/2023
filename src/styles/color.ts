export const Colors = {
  text: {
    primary: '#2E353B',
    primary_hover: '#82919D',
    secondary: '#728393',
    secondary_hover: '#A3AEB9',
    white: '#FFFFFF',
    white_hover: '#CADFF8',
    link: '#0078F9',
    link_hover: '#6199DA',
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
    darken_1: 'rgba(0,0,0,0.125)',
    // NOTE(@maito1201): primary_blue is brand_color
    primary_pink: '#EF5DA8',
    primary_green: '#61B236',
    secondary_pink: '#F8D9E8',
    secondary_green: '#D9EBD4',
    secondary_blue: '#D5E5F7',
    footer: '#F5F5F5'
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
