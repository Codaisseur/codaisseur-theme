import { px2pt } from '../../lib'
import { common } from './colors'

const color = common.black

const fontDefaultFallback = 'Helvetica Neue, Arial, sans-serif'
const fontFamilyWithFallback = (prefix?: string) => ({
  fontFamily: prefix ? `${prefix}, ${fontDefaultFallback}` : fontDefaultFallback,
})

export const h1 = {
  ...fontFamilyWithFallback('Roboto Slab'),
  fontSize: px2pt(60),
  fontWeight: 400,
  lineHeight: '100%',
  color,
}

export const h2 = {
  ...fontFamilyWithFallback('Roboto Slab'),
  fontSize: px2pt(30),
  fontWeight: 400,
  lineHeight: '100%',
  color,
}

export const h3 = {
  ...fontFamilyWithFallback('Roboto Mono'),
  fontSize: px2pt(22),
  fontWeight: 500,
  lineHeight: '100%',
  color,
}

export const h4 = {
  ...fontFamilyWithFallback('Roboto Mono'),
  fontSize: px2pt(14),
  fontWeight: 400,
  lineHeight: '100%',
  color,
}

export const h5 = {
  ...fontFamilyWithFallback('Popins'),
  fontSize: px2pt(18),
  fontWeight: 600,
  lineHeight: '100%',
}

export const h6 = {}

export const subtitle1 = {}
export const subtitle2 = {}

export const body1 = {
  ...fontFamilyWithFallback('Popins'),
  fontSize: px2pt(16),
  fontWeight: 400,
  lineHeight: '100%',
}
export const body2 = {
  ...fontFamilyWithFallback('Popins'),
  fontSize: px2pt(10),
  fontWeight: 400,
  lineHeight: '100%',
}

export const button = {
  ...fontFamilyWithFallback('Popins'),
  fontSize: px2pt(16),
  fontWeight: 700,
  lineHeight: '100%',
}
