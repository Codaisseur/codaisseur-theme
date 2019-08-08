import { common } from './palette'
import { Typography, TypographyStyle } from '@material-ui/core/styles/createTypography'
import { breakpoints } from './breakpoints'

const color = common.font

const fontDefaultFallback = 'Helvetica Neue, Arial, sans-serif'
const fontFamilyWithFallback = (prefix?: string) => ({
  fontFamily: prefix ? `${prefix}, ${fontDefaultFallback}` : fontDefaultFallback,
})

const fontFamily = fontFamilyWithFallback('Poppins').fontFamily
export const h1: TypographyStyle = {
  ...fontFamilyWithFallback('Roboto Slab'),
  fontWeight: 700 || 'bold',
  lineHeight: 90 / 68,
  letterSpacing: -1.5,
  fontStyle: 'normal',
  color,
  fontSize: '68px',
  [breakpoints.down('sm')]: {
    fontSize: '48px',
  },
}

export const h2: TypographyStyle = {
  ...fontFamilyWithFallback('Roboto Slab'),
  fontSize: '60px',
  fontWeight: 400 || 'normal',
  lineHeight: 79 / 60,
  letterSpacing: -0.5,
  fontStyle: 'normal',
  color,
  [breakpoints.down('sm')]: {
    fontSize: '36px',
  },
  [breakpoints.down('xs')]: {
    fontSize: '34px',
  },
}

export const h3: TypographyStyle = {
  ...fontFamilyWithFallback('Roboto Slab'),
  fontSize: '48px',
  fontWeight: 400 || 'normal',
  lineHeight: 63 / 48,
  fontStyle: 'normal',
  color,
  [breakpoints.down('sm')]: {
    fontSize: '30px',
  },
}

export const h4: TypographyStyle = {
  ...fontFamilyWithFallback('Roboto Slab'),
  fontSize: '34px',
  fontWeight: 400 || 'normal',
  lineHeight: 45 / 34,
  letterSpacing: -0.25,
  fontStyle: 'normal',
  color,
  [breakpoints.down('sm')]: {
    fontSize: '28px',
  },
}
export const h5: TypographyStyle = {
  ...fontFamilyWithFallback('Roboto Slab'),
  fontSize: '24px',
  fontWeight: 400 || 'normal',
  lineHeight: 32 / 24,
  fontStyle: 'normal',
  color,
}
export const h6: TypographyStyle = {
  ...fontFamilyWithFallback('Roboto Slab'),
  fontSize: '20px',
  fontWeight: 700 || 'bold',
  lineHeight: 26 / 20,
  letterSpacing: 0.15,
  fontStyle: 'normal',
  color,
}

export const subtitle1: TypographyStyle = {
  fontFamily,
  fontSize: '16px',
  fontWeight: 400 || 'normal',
  lineHeight: 24 / 16,
  fontStyle: 'normal',
  color,
  letterSpacing: 0.4,
}

export const subtitle2: TypographyStyle = {
  fontFamily,
  fontSize: '14px',
  fontWeight: 400 || 'normal',
  lineHeight: 24 / 14,
  fontStyle: 'normal',
  color,
  letterSpacing: 0.1,
}

export const body1: TypographyStyle = {
  fontFamily,
  fontSize: '16px',
  fontWeight: 400 || 'normal',
  lineHeight: 28 / 16,
  fontStyle: 'normal',
  color,
}
export const body2: TypographyStyle = {
  fontFamily,
  fontSize: '14px',
  fontWeight: 400 || 'normal',
  lineHeight: 20 / 14,
  fontStyle: 'normal',
  color,
}

export const button: TypographyStyle = {
  fontFamily,
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: 24 / 16,
  letterSpacing: 1.35,
  textTransform: 'uppercase',
  fontStyle: 'normal',
  color,
}

export const caption: TypographyStyle = {
  fontFamily,
  fontSize: '12px',
  fontWeight: 400 || 'normal',
  lineHeight: 16 / 12,
  letterSpacing: 0.4,
  fontStyle: 'normal',
  color,
}

export const overline: TypographyStyle = {
  fontFamily,
  fontWeight: 500 || 'normal',
  fontSize: '10px',
  lineHeight: 16 / 10,
  letterSpacing: 1.5,
  textTransform: 'uppercase',
  fontStyle: 'normal',
  color,
}

export interface ITypography extends Typography {}
