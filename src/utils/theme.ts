import { createTheme } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

const headerFonts = ['Montserrat'].join(',')

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: '#FFCB05',
    },

    background: {
      default: '#FFFFFF',
    },
    grey: {},
  },

  typography: {
    h1: {
      fontFamily: headerFonts,
    },
    h2: {
      fontFamily: headerFonts,
    },
    h3: {
      fontFamily: headerFonts,
    },
    h4: {
      fontFamily: headerFonts,
    },
    h5: {
      fontFamily: headerFonts,
    },
    h6: {
      fontFamily: headerFonts,
    },
    button: {
      fontFamily: headerFonts,
    },
    body1: {
      fontFamily: headerFonts,
    },
  },

  // Here you can override Material-ui default components styles
  overrides: {},

  props: {
    MuiButton: {
      disableRipple: true,
    },
  },
})

export default theme
