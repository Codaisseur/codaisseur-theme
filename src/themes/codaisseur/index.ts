import { createMuiTheme, withStyles } from '@material-ui/core/styles'
import { Button as MuiButton } from '@material-ui/core'
// import { Card as MuiCard } from '@material-ui/core'
// import { CardContent as MuiCardContent } from '@material-ui/core'
// import { CardActions as MuiCardActions } from '@material-ui/core'

import { palette, typography, overrides } from '../default'
import { breakpoints } from '../default/typography'

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
  breakpoints: {
    ...breakpoints,
  },
  // mixins: {},
  // spacing: {},
  // transitions: {},
}
export default createMuiTheme(theme)

// Create custom component
export const Button = withStyles({
  label: {
    textTransform: 'capitalize',
  },
})(MuiButton)

// export const Card = withStyles({})(MuiCard)
// export const CardContent = withStyles({})(MuiCardContent)
// export const CardActions = withStyles({})(MuiCardActions)
