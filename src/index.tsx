import React from 'react'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'

// We only have 1 theme, KISS.
import theme, { Button as StyledButton } from './themes/codaisseur'

// This is the new theme provider.
export const ThemeProvider = (props: any) => (
  <MuiThemeProvider {...props} theme={theme}>
    <CssBaseline />
    {props.children}
  </MuiThemeProvider>
)

export const Button = StyledButton
