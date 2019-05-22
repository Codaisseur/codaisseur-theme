import React from 'react'

import { ThemeProvider as MuiThemeProiver } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'

// We only have 1 theme, KISS.
import theme, { Button as StyledButton } from './themes/codaisseur'

// This is the new theme provider.
export const ThemeProvider = (props: any) => (
  <MuiThemeProiver {...props} theme={theme}>
    <CssBaseline />
    {props.children}
  </MuiThemeProiver>
)

export const Button = StyledButton
