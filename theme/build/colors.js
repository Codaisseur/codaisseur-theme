"use strict";
exports.__esModule = true;
exports.common = {
    black: '#212121',
    white: '#FFFFFF',
    darkOrange: '#D7461A',
    lightOrange: '#FF9800',
    yellow: '#FFBE31',
    lightBlue: '#0088FA'
};
exports.background = {
    "default": exports.common.white,
    paper: exports.common.white
};
exports.primary = {
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
    A700: '#FF4D50'
};
exports.secondary = {
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
    A700: '#5F75FF'
};
exports.error = {
    300: '#A00000',
    500: '#AA0000',
    800: '#FF0000'
};
exports.grey = {
    100: '#FAFAFA',
    200: '#E9E9E9',
    300: '#9E9E9E',
    400: '#424242'
};
exports.status = {
    warning: exports.common.yellow,
    error: 'red',
    info: exports.common.lightBlue,
    success: 'green'
};
var gradientList = ['#D7461A', '#C1272D', '#733782', '#084DD2', '#0088FA'];
exports.gradient = {
    raw: gradientList,
    l2r: "linear-gradient(\n      " + gradientList[0] + " 0%',\n      " + gradientList[1] + " 20%,\n      " + gradientList[2] + " 50%,\n      " + gradientList[3] + " 80%,\n      " + gradientList[4] + " 100%\n    )",
    r2l: "",
    t2b: "",
    b2t: ""
};
