import { common, primary } from './colors'
import { TypographyStyleOptions } from '@material-ui/core/styles/createTypography'

const color = common.black

const fontDefaultFallback = 'Helvetica Neue, Arial, sans-serif'
const fontFamilyWithFallback = (prefix?: string) => ({
  fontFamily: prefix ? `${prefix}, ${fontDefaultFallback}` : fontDefaultFallback,
})

const fontFamily = fontFamilyWithFallback('Poppins').fontFamily

export const h1: TypographyStyleOptions = {
  ...fontFamilyWithFallback('Roboto Slab'),
  fontSize: '5.9vw',
  fontWeight: 500,
  lineHeight: 90 / 68,
  color,
}

export const h2: TypographyStyleOptions = {
  ...fontFamilyWithFallback('Roboto Slab'),
  fontSize: '4.2vw',
  fontWeight: 500,
  lineHeight: 63 / 60,
  color,
}

export const h3: TypographyStyleOptions = {
  ...fontFamilyWithFallback('Roboto Slab'),
  fontSize: '2.8vw',
  fontWeight: 400,
  lineHeight: 45 / 34,
  color,
}

export const h4: TypographyStyleOptions = {
  ...fontFamilyWithFallback('Roboto Slab'),
  fontSize: '2.4vw',
  fontWeight: 400,
  lineHeight: 45 / 34,
  color,
}
export const h5 = { ...h4 }
export const h6 = { ...h5 }

export const subtitle1: TypographyStyleOptions = {
  ...fontFamilyWithFallback('Poppins'),
  fontSize: '2.2vw',
  fontWeight: 400,
  lineHeight: 24 / 16,
  color: primary[500],
}

export const subtitle2: TypographyStyleOptions = {
  ...subtitle1,
  color,
}

export const body1: TypographyStyleOptions = {
  fontFamily,
  fontSize: '2vmin',
  fontWeight: 400,
  lineHeight: 28 / 16,
}
export const body2: TypographyStyleOptions = {
  fontFamily,
  fontSize: '2.2vmin',
  fontWeight: 400,
  lineHeight: 32 / 18,
}

export const button: TypographyStyleOptions = {
  fontFamily,
  fontSize: '2vmin',
  fontWeight: 600,
  lineHeight: 21 / 16,
  letterSpacing: 1.25,
}

export const caption = {
  ...body2,
  fontWeight: 800,
}

export const overline = {
  ...body2,
  // textTransform: 'uppercase',
}
