import { createMuiTheme, withStyles } from '@material-ui/core/styles'
import { Button as MuiButton } from '@material-ui/core'

import { palette, typography, overrides } from '../default'

export const theme = {
  palette: {
    ...palette,
  },
  typography: {
    ...typography,
  },
  overrides: {
    ...overrides,
  },

  shape: {
    // The button component in MUI, it is taking its default radius from this object
    borderRadius: 24,
  },

  // Perhaps useful later.
  // breakpoints: {},
  // mixins: {},
  // spacing: 0,
  // transitions: {},
}

export default createMuiTheme(theme)

// Create custom component
export const Button = withStyles({
  label: {
    textTransform: 'capitalize',
  },
})(MuiButton)
