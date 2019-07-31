import { createMuiTheme } from '@material-ui/core/styles'

import * as defaultTypography from './typography'

import * as defaultColors from './colors'

export const theme = createMuiTheme({
  typography: {
    ...defaultTypography
  },
  palette: {
    ...defaultColors
  },
})
