import {
  TypeBackground,
  PaletteColor,
  Palette,
} from '@material-ui/core/styles/createPalette'

import { CommonColors } from '@material-ui/core/colors/common'
import { Color } from '@material-ui/core'

// Extending CommonColors from MUI
export interface ICommonColors extends CommonColors {
  darkOrange: string
  lightOrange: string
  yellow: string
  lightBlue: string
}

// Crystal Responses
export interface IStatusColors {
  warning: string
  error: string
  info: string
  success: string
}

// Extending main PalleteOptions
export const common: ICommonColors = {
  black: '#000',
  white: '#FFF',
  darkOrange: '#D7461A',
  lightOrange: '#FF9800',
  yellow: '#FFBE31',
  lightBlue: '#0088FA',
}

export const background: TypeBackground = {
  default: common.white,
  paper: common.white,
}

export const primary: PaletteColor = {
  main: '#C1272D',
  light: '#D4686C',
  dark: '#B31D22',
  contrastText: common.white,
}

export const secondary: PaletteColor = {
  main: '#084DD2',
  light: '#5282E0',
  dark: '#063DC7',
  contrastText: common.white,
}

export const error: PaletteColor = {
  main: '#AA0000',
  light: '#A00000',
  dark: '#FF0000',
  contrastText: common.white,
}

export const grey: Color = {
  50: 'string',
  100: '#FAFAFA',
  200: '#E9E9E9',
  300: '#9E9E9E',
  400: '#424242',
  500: 'string',
  600: 'string',
  700: 'string',
  800: 'string',
  900: 'string',
  A100: 'string',
  A200: 'string',
  A400: 'string',
  A700: 'string',
}

export const status: IStatusColors = {
  warning: common.yellow,
  error: 'red',
  info: common.lightBlue,
  success: 'green',
}

const gradientList = ['#D7461A', '#C1272D', '#733782', '#084DD2', '#0088FA']

interface IGradients {
  l2r: string // Left to right
  r2l: string
  t2b: string
  b2t: string
  raw: string[]
}

export const gradient: IGradients = {
  raw: gradientList,
  l2r: `linear-gradient(
    ${gradientList[0]} 0%',
    ${gradientList[1]} 20%,
    ${gradientList[2]} 50%,
    ${gradientList[3]} 80%,
    ${gradientList[4]} 100%
  )`,
  r2l: ``,
  t2b: ``,
  b2t: ``,
}

export interface IPalette extends Palette {
  primary: PaletteColor
  secondary: PaletteColor
  common: ICommonColors
  background: TypeBackground
  error: PaletteColor
  grey: Color
  status: IStatusColors
  gradient: IGradients
}
