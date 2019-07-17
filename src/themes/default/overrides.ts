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
    borderRadius: '2rem',
    paddingTop: '0.5vw',
    paddingBottom: '0.5vw',
    paddingLeft: '0.8vw',
    paddingRight: '0.8vw',
    disableRipple: true,
    boxShadow: 'none',
  },
  contained: {
    boxShadow: '4px 0px 2px rgba(0, 0, 0, 0.05)',
    disableRipple: true,
  },
}

export const MuiCard = {
  root: {},
}

export const MuiPaper = {
  root: {},
}
