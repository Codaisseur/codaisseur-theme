import {
  common,
  primary,
  secondary,
  grey,
  error,
  status,
  gradient,
  background,

import * as defaultTypography from './typography'
import * as defaultOverrides from './overrides'

export const palette = {
  common,
  background,
  gradient,

  // extended palettes
  primary: {
    ...primary,
  },
  secondary: {
    ...secondary,
  },
  // text: {
  //   ...text,
  // },
  error: {
    ...error,
  },
  // normal palette
  grey,

  // custom
  status, // crystal error codes colors

  // Perhaps useful later
  // divider: '',
  // tonalOffset: 0,
  // type: 'light',
  // contrastThreshold: 0,
  // action: {
  //   active: '',
  //   hover: 'string',
  //   hoverOpacity: 0,
  //   selected: 'string',
  //   disabled: 'string',
  //   disabledBackground: 'string',
  // },
}

export const typography = {
  ...defaultTypography,
}

export const overrides = {
  ...defaultOverrides,
}
