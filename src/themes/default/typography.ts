import { px2pt } from '../../lib'
import { common } from './colors'

const color = common.black

const fontFamilyPopins = [
  'Popins',
  'Helvetica Neue',
  'Arial',
  'sans-serif',
].join(',');

export const fontFamily = [
  'Roboto Mono',
  'Helvetica Neue',
  'Arial',
  'sans-serif',
].join(',');

export const h1 = {
  fontStyle: 'normal',
  fontSize: px2pt(60),
  fontWeight: 500,
  lineHeight: px2pt(60/8),
  color
};

export const h2 = {
  fontStyle: 'normal',
  fontSize: px2pt(30),
  fontWeight: 500,
  lineHeight: px2pt(35),
  color
};

export const h3 = {
  fontStyle: 'normal',
  fontSize: px2pt(22),
  fontWeight: 500,
  lineHeight: px2pt(26),
  color
};

export const h4 = {
  fontStyle: 'normal',
  fontSize: px2pt(14),
  fontWeight: 400,
  lineHeight: px2pt(16),
  color
};

export const h5 = {
  fontFamily: fontFamilyPopins,
  fontSize: px2pt(18),
  fontWeight: 600,
  lineHeight: px2pt(27),
};

export const h6 = {};

export const subtitle1 = {
  fontSize: px2pt(12),
  fontWeight: 300,
};
export const subtitle2 = {};

export const body1 = {};
export const body2 = {
  fontFamily: fontFamilyPopins,
  fontSize: px2pt(14),
  fontWeight: 400,
};

export const button = {
  fontFamily: fontFamilyPopins,
};