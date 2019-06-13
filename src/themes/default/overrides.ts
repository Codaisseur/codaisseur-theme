// Override of base components of MUI.
// Using this instead of making our own custom components, we don't even need to modify our existing code base (except for using this theme provider)
// Using root: {} you override every variant, outside of root you only modify the 'default' variant.

export const MuiButtonBase = {
  // node_modules/@material-ui/core/ButtonBase/ButtonBase.js
  root: {},
}

export const MuiButton = {
  // node_modules/@material-ui/core/Button/Button.js
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 25,
    paddingRight: 25,
  },
}

export const MuiCard = {
  root: {},
}

export const MuiPaper = {
  root: {},
}
