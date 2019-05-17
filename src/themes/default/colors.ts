import {
  PaletteOptions,
  ColorPartial,
  TypeBackground,
} from '@material-ui/core/styles/createPalette'

import { CommonColors } from '@material-ui/core/colors/common'

import { rgb } from '../../lib'

// Extending CommonColors from MUI
export interface ICommonColors extends CommonColors {
  darkOrange: string
  lightOrange: string
  yellow: string
  lightBlue: string
}

export interface ITypeBackground extends Partial<TypeBackground> {
  // Nothing in here yet, not sure how and when this is useful but its baked into Mui!
}

// Crystal Responses
interface IStatusColors {
  warning: string
  error: string
  info: string
  success: string
}

// Extending main PalleteOptions 
export interface IPaletteOptions extends Partial<PaletteOptions> {
  status: IStatusColors
}

export const common: ICommonColors = {
  black: '#212121',
  white: '#FFFFFF',
  darkOrange: '#D7461A',
  lightOrange: '#FF9800',
  yellow: '#FFBE31',
  lightBlue: '#0088FA',
}

export const background: ITypeBackground = {
  default: common.white,
  paper: common.white,
}

export const primary: ColorPartial = {
  // http://mcg.mbitson.com/#!?mcgpalette0=%23c1272d
  50: '#F8E5E6',
  100: '#ECBEC0',
  200: '#E09396',
  300: '#D4686C',
  400: '#CA474D',
  500: '#C1272D',
  600: '#BB2328',
  700: '#B31D22',
  800: '#AB171C',
  900: '#9E0E11',
  A100: '#FFCDCE',
  A200: '#FF9A9B',
  A400: '#FF6769',
  A700: '#FF4D50',
};

export const secondary: ColorPartial = {
  // http://mcg.mbitson.com/#!?mcgpalette0=%23084dd2
  50: '#E1EAFA',
  100: '#B5CAF2',
  200: '#84A6E9',
  300: '#5282E0',
  400: '#2D68D9',
  500: '#084DD2',
  600: '#0746CD',
  700: '#063DC7',
  800: '#0434C1',
  900: '#0225B6',
  A100: '#DFE3FF',
  A200: '#ACB7FF',
  A400: '#798BFF',
  A700: '#5F75FF',
}

export const error: ColorPartial = {
  300: '#A00000',
  500: '#AA0000',
  800: '#FF0000',
}

export const grey: ColorPartial = {
  100: '#FAFAFA',
  200: '#E9E9E9',
  300: '#9E9E9E',
  400: '#424242',
}

export const status: IStatusColors = {
  warning: common.yellow,
  error: 'red',
  info: common.lightBlue,
  success: 'green',
}

export const gradient = {
  l2r: `linear-gradient(
    ${rgb(215, 70, 26)} 0%',
    ${rgb(193, 39, 45)} 20%,
    ${rgb(115, 55, 130)} 50%,
    ${rgb(8, 77, 210)} 80%,
    ${rgb(0, 136, 250)} 100%`,
  r2l: ``,
  t2b: ``,
  b2t: ``,
}
