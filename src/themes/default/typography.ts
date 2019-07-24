import { common, primary } from './colors'
import { TypographyStyleOptions } from '@material-ui/core/styles/createTypography'
import breakpoints from './breakpoints'

const color = common.black

const fontDefaultFallback = 'Helvetica Neue, Arial, sans-serif'
const fontFamilyWithFallback = (prefix?: string) => ({
  fontFamily: prefix ? `${prefix}, ${fontDefaultFallback}` : fontDefaultFallback,
})

const fontFamily = fontFamilyWithFallback('Poppins').fontFamily
export const h1: TypographyStyleOptions = {
  ...fontFamilyWithFallback('Roboto Slab'),
  fontWeight: 700 || 'bold',
  lineHeight: 90 / 68,
  letterSpacing: -1.5,
  color,
  fontSize: '68px',
  [breakpoints.down(920)]: {
    fontSize: '48px',
  },
}

export const h2: TypographyStyleOptions = {
  ...fontFamilyWithFallback('Roboto Slab'),
  fontSize: '60px',
  fontWeight: 400 || 'normal',
  lineHeight: 79 / 60,
  letterSpacing: -0.5,
  color,
  [breakpoints.down(920)]: {
    fontSize: '36px',
  },
  [breakpoints.down(600)]: {
    fontSize: '34px',
  },
}

export const h3: TypographyStyleOptions = {
  ...fontFamilyWithFallback('Roboto Slab'),
  fontSize: '48px',
  fontWeight: 400 || 'normal',
  lineHeight: 63 / 48,
  color,
  [breakpoints.down(920)]: {
    fontSize: '30px',
  },
}

export const h4: TypographyStyleOptions = {
  ...fontFamilyWithFallback('Roboto Slab'),
  fontSize: '34px',
  fontWeight: 400 || 'normal',
  lineHeight: 45 / 34,
  letterSpacing: -0.25,
  color,
  [breakpoints.down(920)]: {
    fontSize: '28px',
  },
}
export const h5: TypographyStyleOptions = {
  ...fontFamilyWithFallback('Roboto Slab'),
  fontSize: '24px',
  fontWeight: 400 || 'normal',
  lineHeight: 32 / 24,
  color,
}
export const h6: TypographyStyleOptions = {
  ...fontFamilyWithFallback('Roboto Slab'),
  fontSize: '20px',
  fontWeight: 700 || 'bold',
  lineHeight: 26 / 20,
  letterSpacing: 0.15,
  color,
}

export const subtitle1: TypographyStyleOptions = {
  fontFamily,
  fontSize: '16px',
  fontWeight: 400 || 'normal',
  lineHeight: 24 / 16,
  color: primary[500],
  letterSpacing: 0.4,
}

export const subtitle2: TypographyStyleOptions = {
  fontFamily,
  fontSize: '14px',
  fontWeight: 400 || 'normal',
  lineHeight: 24 / 14,
  color: primary[500],
  letterSpacing: 0.1,
}

export const body1: TypographyStyleOptions = {
  fontFamily,
  fontSize: '16px',
  fontWeight: 400 || 'normal',
  lineHeight: 28 / 16,
}
export const body2: TypographyStyleOptions = {
  fontFamily,
  fontSize: '14px',
  fontWeight: 400 || 'normal',
  lineHeight: 20 / 14,
}

export const button: TypographyStyleOptions = {
  fontFamily,
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: 24 / 16,
  letterSpacing: 1.35,
  textTransform: 'uppercase',
}

export const caption: TypographyStyleOptions = {
  fontFamily,
  fontSize: '12px',
  fontWeight: 400 || 'normal',
  lineHeight: 16 / 12,
  letterSpacing: 0.4,
}

export const overline: TypographyStyleOptions = {
  fontFamily,
  fontWeight: 700 || 'bold',
  fontSize: '10px',
  lineHeight: 16 / 10,
  letterSpacing: 1.5,
  textTransform: 'uppercase',
}
