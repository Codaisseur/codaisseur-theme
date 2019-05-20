import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

import { palette, typography, overrides } from '../default'

const theme = createMuiTheme({
  palette: {
    ...palette,
  },
  typography: {
    ...typography,
  },
  overrides: {
    ...overrides,
  },

  // Perhaps useful later.
  // shape: {},
  // breakpoints: {},
  // mixins: {},
  // spacing: 0,
  // transitions: {},
})

export default responsiveFontSizes(theme, {
  breakpoints: ['sm', 'md', 'lg'],
  disableAlign: true, // Going unitless!
  factor: 2,
})
