import {
  common,
  primary,
  secondary,
  grey,
  error,
  status,
  gradient,
  background,
} from './palette'

import * as defaultTypography from './typography'
import * as defaultOverrides from './overrides'

export const palette = {
  common,
  background,
  gradient,
  primary: {
    ...primary,
  },
  secondary: {
    ...secondary,
  },
  error: {
    ...error,
  },
  grey,
  status,
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
