import React from 'react'
import { createMuiTheme, withStyles } from '@material-ui/core/styles'
import { Button as MuiButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Arrow, ArrowDisabled } from '../../images/icons/Arrow'

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

const useStyled = makeStyles({
  rotate: (props: any) => ({
    transform: `rotate(${props.rotate}turn)`,
  }),
})

const translateDirection = (direction: any, disabled: any) => {
  switch (direction) {
    case "left": 
      return disabled ? 0.5 : 0
    case "right": 
    case "top": 
    case "bottom": 
    default: 
    return disabled ? 0.5 : 0
  }
}

export const ArrowButton = (props: any) => {
  console.log(props.direction)
  const classes = useStyled({ rotate: translateDirection })
  const Svg = props.disabled === true ? ArrowDisabled : Arrow
  return <Svg className={classes.rotate} />
}
