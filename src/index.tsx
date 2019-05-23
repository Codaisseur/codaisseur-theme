import React from 'react'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import { CssBaseline, Theme } from '@material-ui/core'
import { ThemeProviderProps } from '@material-ui/styles/ThemeProvider'

// We only have 1 theme, KISS.
import theme, { Button as StyledButton } from './themes/codaisseur'

// This is the new theme provider.
export const ThemeProvider = (props: ThemeProviderProps<Theme>): JSX.Element => (
  <MuiThemeProvider {...props} theme={theme}>
    <CssBaseline />
    {props.children}
  </MuiThemeProvider>
)

export const Button = StyledButton
