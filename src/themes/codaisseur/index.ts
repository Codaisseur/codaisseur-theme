import { createMuiTheme, responsiveFontSizes, withStyles } from '@material-ui/core/styles'
import { Button as MuiButton } from '@material-ui/core'

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

// Create custom component
export const Button = withStyles({
  root: {
    borderRadius: 40,
  },
  label: {
    textTransform: 'capitalize',
  },
})(MuiButton)
