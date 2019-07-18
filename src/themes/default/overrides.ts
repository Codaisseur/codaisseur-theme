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
    padding: '14px 22px',
  },
  contained: {
    boxShadow: '4px 0px 2px rgba(0, 0, 0, 0.05)',
  },
  outlined: {
    padding: '14px 22px',
  },
  text: {
    padding: '14px 22px',
  },
}

export const MuiCard = {
  root: {},
}

export const MuiPaper = {
  root: {},
}

export const MuiTouchRipple = {
  root: {
    display: 'none',
  },
}
