"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var colors_1 = require("./colors");
var color = colors_1.common.black;
var fontDefaultFallback = 'Helvetica Neue, Arial, sans-serif';
var fontFamilyWithFallback = function (prefix) { return ({
    fontFamily: prefix ? prefix + ", " + fontDefaultFallback : fontDefaultFallback
}); };
var fontFamily = fontFamilyWithFallback('Poppins').fontFamily;
exports.h1 = __assign({}, fontFamilyWithFallback('Roboto Slab'), { fontWeight: 700 || 'bold', lineHeight: 90 / 68, letterSpacing: -1.5, color: color, fontSize: '68px' });
exports.h2 = __assign({}, fontFamilyWithFallback('Roboto Slab'), { fontSize: '60px', fontWeight: 400 || 'normal', lineHeight: 79 / 60, letterSpacing: -0.5, color: color });
exports.h3 = __assign({}, fontFamilyWithFallback('Roboto Slab'), { fontSize: '48px', fontWeight: 400 || 'normal', lineHeight: 63 / 48, color: color });
exports.h4 = __assign({}, fontFamilyWithFallback('Roboto Slab'), { fontSize: '34px', fontWeight: 400 || 'normal', lineHeight: 45 / 34, letterSpacing: -0.25, color: color });
exports.h5 = __assign({}, fontFamilyWithFallback('Roboto Slab'), { fontSize: '24px', fontWeight: 400 || 'normal', lineHeight: 32 / 24, color: color });
exports.h6 = __assign({}, fontFamilyWithFallback('Roboto Slab'), { fontSize: '20px', fontWeight: 700 || 'bold', lineHeight: 26 / 20, letterSpacing: 0.15, color: color });
exports.subtitle1 = {
    fontFamily: fontFamily,
    fontSize: '16px',
    fontWeight: 400 || 'normal',
    lineHeight: 24 / 16,
    color: colors_1.primary[500],
    letterSpacing: 0.4
};
exports.subtitle2 = {
    fontFamily: fontFamily,
    fontSize: '14px',
    fontWeight: 400 || 'normal',
    lineHeight: 24 / 14,
    color: colors_1.primary[500],
    letterSpacing: 0.1
};
exports.body1 = {
    fontFamily: fontFamily,
    fontSize: '16px',
    fontWeight: 400 || 'normal',
    lineHeight: 28 / 16
};
exports.body2 = {
    fontFamily: fontFamily,
    fontSize: '14px',
    fontWeight: 400 || 'normal',
    lineHeight: 20 / 14
};
exports.button = {
    fontFamily: fontFamily,
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: 24 / 16,
    letterSpacing: 1.35,
    textTransform: 'uppercase'
};
exports.caption = {
    fontFamily: fontFamily,
    fontSize: '12px',
    fontWeight: 400 || 'normal',
    lineHeight: 16 / 12,
    letterSpacing: 0.4
};
exports.overline = {
    fontFamily: fontFamily,
    fontWeight: 700 || 'bold',
    fontSize: '10px',
    lineHeight: 16 / 10,
    letterSpacing: 1.5,
    textTransform: 'uppercase'
};
