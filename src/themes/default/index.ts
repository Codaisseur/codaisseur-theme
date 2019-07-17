import {
  common,
  primary,
  secondary,
  grey,
  error,
  status,
  background,
  IPaletteOptions,
  ICommonColors,
  ITypeBackground,
} from './colors'

import * as defaultTypography from './typography'
import * as defaultOverrides from './overrides'

export { theme } from '../codaisseur/index'

// Typescript MUI does not like custom keys in their palette
// We do, so with declare module we overwrite the interface in that file
// We're extending the original interface keeping compatibility
declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions extends IPaletteOptions {}
  interface TypeBackground extends ITypeBackground {}
}

declare module '@material-ui/core/colors' {
  interface CommonColors extends ICommonColors {}
}

export const palette = {
  common,
  background,

  // extended palettes
  primary: {
    light: primary[200],
    main: primary[500],
    dark: primary[800],
    contrastText: common.white,
    ...primary,
  },
  secondary: {
    light: secondary[200],
    main: secondary[500],
    dark: secondary[800],
    contrastText: common.white,
    ...secondary,
  },
  text: {},
  error: {
    light: error[200],
    main: error[500],
    dark: error[800],
    contrastText: common.white,
    ...error,
  },
  action: {},
  // normal palette
  grey,

  // custom
  status, // crystal error codes colors

  // Perhaps useful later
  // divider: undefined,
  // tonalOffset: undefined,
  // type: undefined,
  // contrastThreshold: undefined,
}

export const typography = {
  ...defaultTypography,
}

export const overrides = {
  ...defaultOverrides,
}
